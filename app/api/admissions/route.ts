import { NextResponse } from "next/server";

const formId = "1FAIpQLSfRSOndGuwLQXTc49LsJDjAZRPSkGA8YLeOJrukS-YhDHGRLA";
const viewFormUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=send_form`;
const formResponseUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const categoryFieldId = "entry.1661148286";
const boardFieldId = "entry.1356957893";
const groupFieldId = "entry.287319514";

async function loadGoogleFormTokens() {
  const response = await fetch(viewFormUrl, {
    cache: "no-store",
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "text/html",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to load admissions form metadata.");
  }

  const html = await response.text();
  const fbzxMatch = html.match(/name="fbzx" value="([^"]+)"/);
  const partialResponseMatch = html.match(/name="partialResponse" value="([^"]+)"/);
  const pageHistoryMatch = html.match(/name="pageHistory" value="([^"]+)"/);
  const fvvMatch = html.match(/name="fvv" value="([^"]+)"/);

  if (!fbzxMatch || !partialResponseMatch || !pageHistoryMatch || !fvvMatch) {
    throw new Error("Unable to resolve Google Forms submission tokens.");
  }

  return {
    fbzx: fbzxMatch[1],
    partialResponse: partialResponseMatch[1],
    pageHistory: pageHistoryMatch[1],
    fvv: fvvMatch[1],
  };
}

function appendSelectedValues(params: URLSearchParams, fieldId: string, values: string[]) {
  values.forEach((value) => {
    params.append(fieldId, value);
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      studentName?: string;
      dob?: string;
      gender?: string;
      board?: string;
      boardOther?: string;
      category?: string;
      groupSelection?: string;
      class7To10Selected?: string[];
      group1Selected?: string[];
      group2Selected?: string[];
      group3Selected?: string[];
      ugSelected?: string[];
      weekendBatch?: string;
      introducer?: string;
      introducerOther?: string;
    };

    const studentName = String(body.studentName ?? "").trim();
    const dob = String(body.dob ?? "").trim();
    const gender = String(body.gender ?? "").trim();
    const board = String(body.board ?? "").trim();
    const boardOther = String(body.boardOther ?? "").trim();
    const category = String(body.category ?? "").trim();
    const groupSelection = String(body.groupSelection ?? "").trim();
    const weekendBatch = String(body.weekendBatch ?? "").trim();
    const introducer = String(body.introducer ?? "").trim();
    const introducerOther = String(body.introducerOther ?? "").trim();

    if (!studentName || !dob || !gender || !board || !category || !weekendBatch || !introducer) {
      return NextResponse.json(
        { ok: false, message: "Missing required admissions fields." },
        { status: 400 },
      );
    }

    const [year, month, day] = dob.split("-");
    if (!year || !month || !day) {
      return NextResponse.json(
        { ok: false, message: "Invalid date of birth." },
        { status: 400 },
      );
    }

    const tokens = await loadGoogleFormTokens();
    const params = new URLSearchParams();

    params.set("entry.1259260593", studentName);
    params.set("entry.346797212_day", day);
    params.set("entry.346797212_month", month);
    params.set("entry.346797212_year", year);
    params.set("entry.735558623", gender);

    if (board === "Other") {
      params.set(boardFieldId, "__other_option__");
      params.set(`${boardFieldId}.other_option_response`, boardOther || "Other");
    } else {
      params.set(boardFieldId, board);
    }

    if (category === "Other") {
      params.set(categoryFieldId, "__other_option__");
      params.set(`${categoryFieldId}.other_option_response`, "Other");
    } else {
      params.set(categoryFieldId, category);
    }

    const class7To10Selected = body.class7To10Selected ?? [];
    const group1Selected = body.group1Selected ?? [];
    const group2Selected = body.group2Selected ?? [];
    const group3Selected = body.group3Selected ?? [];
    const ugSelected = body.ugSelected ?? [];

    if (category === "Class 7–10") {
      appendSelectedValues(params, "entry.1601482778", class7To10Selected);
    }

    if (category === "Class 11–12") {
      params.set(groupFieldId, groupSelection);
      if (groupSelection === "Maths, Physics, Chemistry, Computer Science") {
        appendSelectedValues(params, "entry.876436499", group1Selected);
      } else if (groupSelection === "Maths, Physics, Chemistry, Biology") {
        appendSelectedValues(params, "entry.783523486", group2Selected);
      } else if (groupSelection === "Commerce, Business Maths, Economics, Accountancy") {
        appendSelectedValues(params, "entry.1129892643", group3Selected);
      }
    }

    if (category === "UG Courses") {
      appendSelectedValues(params, "entry.269560499", ugSelected);
    }

    params.set("entry.1844833698", weekendBatch);
    params.set("entry.252468226", introducer === "Other" ? "Others" : introducer);

    params.set("fvv", tokens.fvv);
    params.set("pageHistory", "0,1,2,3,4,5,6,7");
    params.set("fbzx", tokens.fbzx);
    params.set("partialResponse", tokens.partialResponse);
    params.set("submissionTimestamp", "-1");

    const submitResponse = await fetch(formResponseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      body: params.toString(),
      redirect: "follow",
    });

    if (!submitResponse.ok) {
      throw new Error("Google Forms rejected the submission.");
    }

    return NextResponse.json({ ok: true, message: "Submitted successfully." });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit application right now.",
      },
      { status: 500 },
    );
  }
}
