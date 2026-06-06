"use client";

import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const selectors = [
      ".reveal-up",
      ".reveal-down",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
    ];
    const targets = el.querySelectorAll(selectors.join(", "));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const openHours = [
  { day: "Monday", time: "4:00 PM - 9:00 PM" },
  { day: "Tuesday", time: "4:00 PM - 9:00 PM" },
  { day: "Wednesday", time: "4:00 PM - 9:00 PM" },
  { day: "Thursday", time: "4:00 PM - 9:00 PM" },
  { day: "Friday", time: "4:00 PM - 9:00 PM" },
  { day: "Saturday", time: "5:00 PM - 8:30 PM" },
  { day: "Sunday", time: "By Appointment Only" },
];

const todayLabel = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  new Date(),
);
const mapEmbedUrl =
  "https://maps.google.com/maps?q=12.8602554,80.0647907&z=14&output=embed";
const mapOpenUrl = "https://maps.app.goo.gl/ZjgqSZQsv4dVx3eh8";
const mapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=12.8602554,80.0647907";

export default function ContactPage() {
  const scrollRef = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const todayHours =
    openHours.find((item) => item.day === todayLabel)?.time ?? "By Appointment";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const emailAddress = String(formData.get("emailAddress") ?? "").trim();
    const subject =
      String(formData.get("subject") ?? "").trim() || "Contact Form Submission";
    const message = String(formData.get("message") ?? "").trim();

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      if (!contactEmail) {
        throw new Error("Email sending is not configured yet.");
      }

      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `IIMS Contact: ${subject}`,
            _captcha: "false",
            _template: "table",
            fullName,
            emailAddress,
            message,
          }),
        },
      );

      const result = (await response.json().catch(() => null)) as {
        message?: string;
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          result?.error ??
            result?.message ??
            "Unable to send message right now.",
        );
      }

      form.reset();
      setStatusMessage({
        kind: "success",
        message: "Message sent successfully.",
      });
    } catch (error) {
      setStatusMessage({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      ref={scrollRef}
      className="min-h-screen bg-transparent pt-24 pb-14 sm:pt-32 sm:pb-20"
    >
      <section className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pointer-events-none absolute right-0 top-0 h-150 w-150 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-100/40 blur-[100px]" />
        <div className="relative">
          <div className="reveal-up text-center">
            <span className="inline-block rounded-full bg-emerald-50 px-5 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              Get in Touch
            </span>
            <h2 className="mt-6 text-3xl font-black text-emerald-950 sm:text-4xl md:text-5xl">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Have questions? Reach out and our team will get back to you
              shortly.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 sm:mt-16 md:flex-row md:gap-12">
            <div className="reveal-right flex-1 rounded-2xl bg-white p-5 text-slate-800 shadow-premium border border-emerald-100 sm:rounded-3xl sm:p-10">
              <h3 className="text-xl font-bold sm:text-2xl">
                Contact Information
              </h3>
              <p className="mt-3 text-sm text-slate-500 sm:mt-4 sm:text-base">
                Fill up the form to reach our Institute directly
              </p>
              <div className="mt-6 flex flex-col gap-6 sm:mt-10 sm:gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-semibold">+91 7401518196</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold">
                      {contactEmail ?? "Contact email not configured"}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4 sm:p-6">
                  <p className="text-xl font-light tracking-wide text-slate-800 sm:text-2xl">
                    Open Hours
                  </p>

                  <div className="mt-3 overflow-hidden rounded-xl border border-emerald-100 bg-white">
                    <div className="px-3 py-3 sm:px-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Today
                      </p>
                      <p className="mt-1 text-sm font-medium leading-tight text-amber-700 sm:text-base">
                        {todayHours}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-emerald-100 bg-emerald-50/30 p-2 sm:p-3">
                      {openHours.map((item) => {
                        const isToday = item.day === todayLabel;

                        return (
                          <div
                            key={item.day}
                            className={`flex items-center rounded-lg px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
                              isToday
                                ? "bg-amber-50 text-amber-900"
                                : "bg-white text-slate-700"
                            }`}
                          >
                            <span className="w-24 shrink-0 font-semibold sm:w-28">
                              {item.day}
                            </span>
                            <span>{item.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="reveal-left flex-[1.5] rounded-2xl border border-emerald-100 bg-white p-6 shadow-premium sm:rounded-3xl sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    name="emailAddress"
                    type="email"
                    required
                    className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                />
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-emerald-200 bg-emerald-50/40 px-5 py-4 text-sm text-slate-800 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/20"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1 hover:bg-emerald-500 hover:shadow-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {statusMessage ? (
                <p
                  className={`mt-4 text-sm font-medium ${statusMessage.kind === "success" ? "text-emerald-700" : "text-red-600"}`}
                  aria-live="polite"
                >
                  {statusMessage.message}
                </p>
              ) : null}

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-white p-4 shadow-premium">
                <div className="flex items-center justify-between gap-3 px-2 pb-3">
                  <p className="text-lg font-bold text-slate-800">Find Us</p>
                </div>
                <div className="overflow-hidden rounded-xl border border-emerald-100">
                  <iframe
                    title="Invent IMS location map"
                    src={mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3 px-2">
                  <a
                    href={mapOpenUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-colors hover:bg-emerald-50"
                  >
                    Open in Maps
                  </a>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-emerald-500"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
