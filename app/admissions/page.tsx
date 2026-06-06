"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

const admissionsSubmitUrl = "/api/admissions";
const genderOptions = ["Male", "Female", "Prefer not to say"] as const;
const boardOptions = [
  "Tamilnadu StateBoard",
  "CBSE",
  "IGCSE",
  "Other",
] as const;
const categoryOptions = [
  "Class 7–10",
  "Class 11–12",
  "UG Courses",
  "Computer Courses",
  "Other",
] as const;
const groupOptions = [
  "Maths, Physics, Chemistry, Biology",
  "Maths, Physics, Chemistry, Computer Science",
  "Commerce, Business Maths, Economics, Accountancy",
  "Other",
] as const;
const weekendOptions = ["Yes", "No", "Maybe"] as const;
const introducerOptions = [
  "Website",
  "Friend",
  "Advertisement",
  "Other",
] as const;

const class7To10Subjects = ["Maths", "Science", "Social Science"] as const;
const group1Subjects = ["Maths", "Physics", "Chemistry", "Biology"] as const;
const group2Subjects = [
  "General Maths",
  "Physics",
  "Chemistry",
  "Computer Science",
] as const;
const group3Subjects = [
  "Accountancy",
  "Business Maths",
  "Commerce",
  "Economics",
  "Computer Applications",
] as const;
const ugSubjects = ["M1", "M2", "M3"] as const;

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-sm font-bold text-slate-700">
      {children} <span className="text-red-600">*</span>
    </label>
  );
}

export default function AdmissionsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0);
  const [toastMessage, setToastMessage] = useState<{
    kind: "success";
    message: string;
  } | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);

  const [studentName, setStudentName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState<(typeof genderOptions)[number] | "">("")
  const [board, setBoard] = useState<(typeof boardOptions)[number] | "">("")
  const [boardOther, setBoardOther] = useState("");
  const [category, setCategory] =
    useState<(typeof categoryOptions)[number] | "">("")
  const [groupSelection, setGroupSelection] = useState<
    (typeof groupOptions)[number] | ""
  >("");
  const [class7To10Selected, setClass7To10Selected] = useState<string[]>([]);
  const [group1Selected, setGroup1Selected] = useState<string[]>([]);
  const [group2Selected, setGroup2Selected] = useState<string[]>([]);
  const [group3Selected, setGroup3Selected] = useState<string[]>([]);
  const [ugSelected, setUgSelected] = useState<string[]>([]);
  const [weekendBatch, setWeekendBatch] =
    useState<(typeof weekendOptions)[number] | "">("")
  const [introducer, setIntroducer] =
    useState<(typeof introducerOptions)[number] | "">("")
  const [introducerOther, setIntroducerOther] = useState("");

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const resetBranchState = (nextCategory: (typeof categoryOptions)[number]) => {
    if (nextCategory !== "Class 11–12") {
      setGroupSelection(groupOptions[0]);
      setGroup1Selected([]);
      setGroup2Selected([]);
      setGroup3Selected([]);
    }
    if (nextCategory !== "Class 7–10") {
      setClass7To10Selected([]);
    }
    if (nextCategory !== "UG Courses") {
      setUgSelected([]);
    }
  };

  const resetForm = (options?: { clearMessage?: boolean }) => {
    setStudentName("");
    setDob("");
    setGender("");
    setBoard("");
    setBoardOther("");
    setCategory("");
    setGroupSelection("");
    setClass7To10Selected([]);
    setGroup1Selected([]);
    setGroup2Selected([]);
    setGroup3Selected([]);
    setUgSelected([]);
    setWeekendBatch("");
    setIntroducer("");
    setIntroducerOther("");
    if (options?.clearMessage ?? true) {
      setStatusMessage(null);
      setToastMessage(null);
    }
    setFormResetKey((current) => current + 1);
  };

  useEffect(() => {
    if (!toastMessage) return;

    const timeoutId = window.setTimeout(() => {
      setToastMessage(null);
    }, 3200);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!gender) {
      setStatusMessage({
        kind: "error",
        message: "Please select a gender.",
      });
      return;
    }

    if (!board) {
      setStatusMessage({
        kind: "error",
        message: "Please select a board of education.",
      });
      return;
    }

    if (!category) {
      setStatusMessage({
        kind: "error",
        message: "Please select a course category.",
      });
      return;
    }

    if (!weekendBatch) {
      setStatusMessage({
        kind: "error",
        message: "Please select whether you are looking for a weekend batch.",
      });
      return;
    }

    if (!introducer) {
      setStatusMessage({
        kind: "error",
        message: "Please select your introducer.",
      });
      return;
    }

    if (category === "Class 7–10" && class7To10Selected.length === 0) {
      setStatusMessage({
        kind: "error",
        message: "Please select at least one subject for Class 7–10.",
      });
      return;
    }

    if (category === "Class 11–12") {
      if (!groupSelection) {
        setStatusMessage({
          kind: "error",
          message: "Please select a group.",
        });
        return;
      }

      const activeGroupSelections =
        groupSelection === groupOptions[0]
          ? group1Selected
          : groupSelection === groupOptions[1]
            ? group2Selected
            : groupSelection === groupOptions[2]
              ? group3Selected
              : [];

      if (activeGroupSelections.length === 0) {
        setStatusMessage({
          kind: "error",
          message: "Please select at least one subject for the chosen group.",
        });
        return;
      }
    }

    if (category === "UG Courses" && ugSelected.length === 0) {
      setStatusMessage({
        kind: "error",
        message: "Please select at least one UG course.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch(admissionsSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentName,
          dob,
          gender,
          board,
          boardOther,
          category,
          groupSelection,
          class7To10Selected,
          group1Selected,
          group2Selected,
          group3Selected,
          ugSelected,
          weekendBatch,
          introducer,
          introducerOther,
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        throw new Error(
          result?.message ?? "Unable to submit application right now.",
        );
      }

      setStatusMessage({
        kind: "success",
        message: "Form submitted successfully and sent to Institute Admin.",
      });
      setToastMessage({
        kind: "success",
        message: "Form submitted successfully & sent to Institute Admin.",
      });
      resetForm({ clearMessage: false });
    } catch (error) {
      setStatusMessage({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit application right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleValue = (current: string[], value: string) =>
    current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

  return (
    <main
      ref={scrollRef}
      className="min-h-screen bg-transparent pt-20 pb-14 sm:pt-28 sm:pb-20"
    >
      <section className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="pointer-events-none absolute left-0 top-0 h-160 w-160 -translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-100/40 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-140 w-140 translate-x-1/4 -translate-y-1/2 rounded-full bg-emerald-50/70 blur-[120px]" />

        <div className="relative rounded-3xl border border-emerald-100 bg-white p-4 shadow-premium backdrop-blur-md sm:rounded-4xl sm:p-6 md:p-10">
          {statusMessage ? (
            <div
              className={`mb-6 rounded-2xl border px-4 py-3 text-sm font-medium ${statusMessage.kind === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"}`}
              aria-live="polite"
            >
              {statusMessage.message}
            </div>
          ) : null}

          <form
            key={formResetKey}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <RequiredLabel>Name of the Student</RequiredLabel>
              <input
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                type="text"
                required
                className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <RequiredLabel>Date of birth</RequiredLabel>
              <input
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                type="date"
                required
                className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <RequiredLabel>Gender</RequiredLabel>
              <div className="grid gap-3 sm:grid-cols-3">
                {genderOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700"
                  >
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === option}
                      onChange={() => setGender(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <RequiredLabel>Board of Education</RequiredLabel>
              <select
                value={board}
                onChange={(event) => {
                  const nextBoard = event.target
                    .value as (typeof boardOptions)[number] | "";
                  setBoard(nextBoard);
                  if (nextBoard !== "Other") {
                    setBoardOther("");
                  }
                }}
                className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {boardOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {board === "Other" ? (
                <input
                  value={boardOther}
                  onChange={(event) => setBoardOther(event.target.value)}
                  placeholder="Please specify"
                  className="mt-3 w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                />
              ) : null}
            </div>

            <div>
              <RequiredLabel>Select Course Category</RequiredLabel>
              <select
                value={category}
                onChange={(event) => {
                  const nextCategory = event.target
                    .value as (typeof categoryOptions)[number] | "";
                  setCategory(nextCategory);
                  if (nextCategory) {
                    resetBranchState(nextCategory as (typeof categoryOptions)[number]);
                  }
                }}
                className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {category === "Class 7–10" ? (
              <div>
                <RequiredLabel>Select Subjects for Enrolment</RequiredLabel>
                <div className="grid gap-3 sm:grid-cols-3">
                  {class7To10Subjects.map((subject) => (
                    <label
                      key={subject}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        checked={class7To10Selected.includes(subject)}
                        onChange={() =>
                          setClass7To10Selected((current) =>
                            toggleValue(current, subject),
                          )
                        }
                      />
                      <span>{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}

            {category === "Class 11–12" ? (
              <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 p-4">
                <div>
                  <RequiredLabel>Select Groups</RequiredLabel>
                  <div className="grid gap-3">
                    {groupOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        <input
                          type="radio"
                          name="groupSelection"
                          checked={groupSelection === option}
                          onChange={() => setGroupSelection(option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {groupSelection === groupOptions[0] ? (
                  <div>
                    <RequiredLabel>Select Subjects for Group 1</RequiredLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group1Subjects.map((subject) => (
                        <label
                          key={subject}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"
                        >
                          <input
                            type="checkbox"
                            checked={group1Selected.includes(subject)}
                            onChange={() =>
                              setGroup1Selected((current) =>
                                toggleValue(current, subject),
                              )
                            }
                          />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : null}

                {groupSelection === groupOptions[1] ? (
                  <div>
                    <RequiredLabel>Select Subjects for Group 2</RequiredLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group2Subjects.map((subject) => (
                        <label
                          key={subject}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"
                        >
                          <input
                            type="checkbox"
                            checked={group2Selected.includes(subject)}
                            onChange={() =>
                              setGroup2Selected((current) =>
                                toggleValue(current, subject),
                              )
                            }
                          />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : null}

                {groupSelection === groupOptions[2] ? (
                  <div>
                    <RequiredLabel>Select Subjects for Group 3</RequiredLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {group3Subjects.map((subject) => (
                        <label
                          key={subject}
                          className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 text-sm text-slate-700"
                        >
                          <input
                            type="checkbox"
                            checked={group3Selected.includes(subject)}
                            onChange={() =>
                              setGroup3Selected((current) =>
                                toggleValue(current, subject),
                              )
                            }
                          />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

            {category === "UG Courses" ? (
              <div>
                <RequiredLabel>
                  Select College courses for coaching
                </RequiredLabel>
                <div className="grid gap-3 sm:grid-cols-3">
                  {ugSubjects.map((subject) => (
                    <label
                      key={subject}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700"
                    >
                      <input
                        type="checkbox"
                        checked={ugSelected.includes(subject)}
                        onChange={() =>
                          setUgSelected((current) =>
                            toggleValue(current, subject),
                          )
                        }
                      />
                      <span>{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <RequiredLabel>Are you Looking for a Weekend batch</RequiredLabel>
              <div className="grid gap-3 sm:grid-cols-3">
                {weekendOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700"
                  >
                    <input
                      type="radio"
                      name="weekendBatch"
                      checked={weekendBatch === option}
                      onChange={() => setWeekendBatch(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <RequiredLabel>Your introducer</RequiredLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {introducerOptions.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm text-slate-700"
                  >
                    <input
                      type="radio"
                      name="introducer"
                      checked={introducer === option}
                      onChange={() => {
                        setIntroducer(option);
                        if (option !== "Other") {
                          setIntroducerOther("");
                        }
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {introducer === "Other" ? (
                <input
                  value={introducerOther}
                  onChange={(event) => setIntroducerOther(event.target.value)}
                  placeholder="Please specify"
                  className="mt-3 w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                />
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending..." : "Submit Admissions Details"}
            </button>

            <button
              type="button"
              onClick={() => resetForm()}
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-white px-8 py-4 text-sm font-bold text-emerald-700 transition-all hover:-translate-y-0.5 hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              Clear Form
            </button>
          </form>
        </div>
      </section>

      {toastMessage ? (
        <div className="fixed bottom-6 left-6 z-50 flex max-w-sm items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/20">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-3.5 w-3.5"
            >
              <path
                d="M4.5 10.5L8.1 14.1L15.5 6.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{toastMessage.message}</span>
        </div>
      ) : null}
    </main>
  );
}
