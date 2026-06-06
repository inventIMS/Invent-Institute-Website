import Image from "next/image";
import Link from "next/link";
import ScrollRevealWrapper from "./components/ScrollRevealWrapper";
import instituteImg from "../public/institute.jpg";

const stats = [
  {
    num: "800+",
    label: "Students Passed out",
    icon: "🎓",
    href: "/",
  },
  { num: "20", label: "Courses Available", icon: "📚", href: "/academics" },
  { num: "25+", label: "Expert Faculty", icon: "👨‍🏫", href: "/about" },
  {
    num: `${new Date().getFullYear() - 2012}` + "+",
    label: "Years of Excellence",
    icon: "⏳",
    href: "/about",
  },
];

const features = [
  {
    title: "Test for Excellence",
    desc: 'We conduct regular daily based and weekend tests to ensure the progress of the students. The weekend test will be based on the lessons taught in that week. Once a month, students are asked to write "TEST SERIES" — a monthly test in all subjects to check their level of understanding.',
    accent: "emerald",
    num: "01",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Commitment to Excellence",
    desc: "Our mission is to embrace the pursuit of excellence both inside and outside the classroom. We encourage critical thinking and emphasize the learning process over rote memorization to build lifelong learners.",
    accent: "emerald",
    num: "02",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0"
        />
      </svg>
    ),
  },
  {
    title: "Students Life",
    desc: "Our student culture plays a key role in the experience at Invent Institute of Mathematics & Science. We've created a safe and accessible environment where students are encouraged to collaborate, share their work and receive feedback with pride.",
    accent: "emerald",
    num: "03",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719"
        />
      </svg>
    ),
  },
  {
    title: "Courses Offered",
    desc: "We offer regular and weekend classes to students for all various boards of education. We train students for competitive exams, building a solid foundation for academic success and future excellence.",
    accent: "emerald",
    num: "04",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <ScrollRevealWrapper className="bg-transparent">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-complex absolute -top-32 -left-32 h-125 w-125 rounded-full bg-emerald-300/35 blur-[100px]" />
          <div className="blob-complex blob-d2 absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-200/35 blur-[80px]" />
          <div className="blob-complex blob-d3 absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-emerald-100/35 blur-[90px]" />
        </div>
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 pt-24 pb-16 sm:gap-12 sm:px-6 sm:pt-32 sm:pb-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="anim-right inline-block">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-5 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                Join Our Family
              </span>
            </div>
            <h1
              className="anim-up text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.2s" }}
            >
              Invent Institute of <br className="hidden lg:block" />
              <span className="shimmer bg-linear-to-r from-emerald-700 via-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                Mathematics &amp; Science
              </span>
            </h1>
            <p
              className="anim-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
              style={{ animationDelay: "0.4s" }}
            >
              Creating Innovations — Empowering students with academic
              excellence, critical thinking, and the confidence to excel in
              every field.
            </p>
            <div
              className="anim-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/academics"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-premium transition-all hover:scale-105 hover:bg-emerald-500 hover:shadow-premium-hover active:scale-95 sm:w-auto"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span>Explore Academics</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white/70 px-8 py-4 text-sm font-bold text-slate-700 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-emerald-500 hover:bg-white hover:text-emerald-700 hover:shadow-premium sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Institute Image Card */}
          <div
            className="anim-fade relative w-full max-w-lg lg:ml-auto"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute inset-0 scale-105 rounded-3xl bg-linear-to-tr from-emerald-500 via-emerald-300 to-emerald-100 opacity-30 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-3xl shadow-premium border border-white/60">
              <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
                <Image
                  src={instituteImg}
                  alt="Invent Institute of Mathematics & Science building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 512px"
                  priority
                  placeholder="blur"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Our Institute
                    </p>
                    <p className="mt-0.5 text-base font-bold text-white">
                      Invent Institute of Mathematics &amp; Science
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Est. 2012
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-200/50 bg-white/70 backdrop-blur-md sm:grid-cols-4">
                {stats.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={`Go to ${s.label}`}
                  >
                    <div className="group flex flex-col items-center py-4 transition-all duration-300 hover:bg-emerald-50/70">
                      <span className="text-xl transition-transform duration-300 group-hover:scale-125">
                        {s.icon}
                      </span>
                      <span className="mt-1 text-base font-black text-slate-900">
                        {s.num}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 text-center leading-tight px-1">
                        {s.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce flex-col items-center gap-2 sm:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Scroll Down
          </span>
          <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-emerald-300">
            <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden bg-white py-6 shadow-inner border-y border-emerald-100 sm:py-10">
        <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-white via-transparent to-white" />
        <div className="marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 px-8">
              {[
                "Academic Excellence",
                "Critical Thinking",
                "Innovation",
                "Collaboration",
                "Leadership",
                "Integrity",
                "Creativity",
              ].map((word) => (
                <span
                  key={word + i}
                  className="flex items-center gap-6 text-2xl font-bold uppercase tracking-widest text-emerald-900/35 transition-all hover:text-emerald-900"
                >
                  {word}
                  <span className="text-emerald-500/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Academics / Features — 2×2 Editorial Grid ── */}
      <section
        id="academics"
        className="relative bg-transparent py-14 overflow-hidden sm:py-28"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%,rgba(34,197,94,0.06) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(34,197,94,0.04) 0%,transparent 40%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Section header */}
          <div className="reveal-up mb-8 text-center sm:mb-16">
            <span className="inline-block rounded-full border border-emerald-200 bg-white px-5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-700 shadow-sm">
              Academic Span
            </span>
            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
              What Sets Us <span className="text-emerald-700">Apart</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-slate-500">
              A holistic approach to education that nurtures curiosity and
              drives academic excellence.
            </p>
          </div>

          {/* 2×2 card grid */}
          <div
            className="grid sm:grid-cols-2 overflow-hidden rounded-2xl"
            style={{
              boxShadow:
                "0 0 0 1px rgba(34,197,94,0.1), 0 25px 60px -20px rgba(34,197,94,0.12), 0 8px 20px -8px rgba(0,0,0,0.06)",
            }}
          >
            {/* Card 1 — Test for Excellence */}
            <div className="reveal-left group relative overflow-hidden border-b border-r border-emerald-100 bg-white p-5 transition-all duration-500 hover:bg-emerald-50/30 sm:p-10">
              {/* animated left-border accent */}
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-linear-to-b from-emerald-500 to-emerald-300 transition-transform duration-500 group-hover:scale-y-100" />
              {/* subtle glow */}
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(34,197,94,0.15)" }}
                >
                  {features[0].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400 transition-colors group-hover:text-emerald-600">
                  {features[0].num}
                </p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">
                  {features[0].title}
                </h3>
                <div className="my-4 h-px w-8 bg-emerald-200 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-500" />
                <p className="text-sm leading-relaxed text-slate-500">
                  {features[0].desc}
                </p>
              </div>
            </div>

            {/* Card 2 — Commitment to Excellence */}
            <div
              className="reveal-right group relative overflow-hidden border-b border-emerald-100 bg-white p-5 transition-all duration-500 hover:bg-emerald-50/30 sm:p-10"
              style={{ transitionDelay: "80ms" }}
            >
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-linear-to-b from-emerald-500 to-emerald-300 transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(34,197,94,0.15)" }}
                >
                  {features[1].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400 transition-colors group-hover:text-emerald-600">
                  {features[1].num}
                </p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">
                  {features[1].title}
                </h3>
                <div className="my-4 h-px w-8 bg-emerald-200 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-500" />
                <p className="text-sm leading-relaxed text-slate-500">
                  {features[1].desc}
                </p>
              </div>
            </div>

            {/* Card 3 — Students Life */}
            <div
              className="reveal-left group relative overflow-hidden border-r border-emerald-100 bg-white p-5 transition-all duration-500 hover:bg-emerald-50/30 sm:p-10"
              style={{ transitionDelay: "160ms" }}
            >
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r bg-linear-to-b from-emerald-500 to-emerald-300 transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-400 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white"
                  style={{ boxShadow: "0 4px 14px rgba(34,197,94,0.15)" }}
                >
                  {features[2].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-400 transition-colors group-hover:text-emerald-600">
                  {features[2].num}
                </p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-slate-900">
                  {features[2].title}
                </h3>
                <div className="my-4 h-px w-8 bg-emerald-200 transition-all duration-500 group-hover:w-16 group-hover:bg-emerald-500" />
                <p className="text-sm leading-relaxed text-slate-500">
                  {features[2].desc}
                </p>
              </div>
            </div>

            {/* Card 4 — Courses Offered (dark accent) */}
            <div
              className="reveal-right group relative overflow-hidden bg-linear-to-br from-emerald-700 via-emerald-800 to-emerald-950 p-5 sm:p-10"
              style={{ transitionDelay: "240ms" }}
            >
              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-125" />
              <div className="pointer-events-none absolute right-10 bottom-10 h-10 w-10 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-all duration-400 group-hover:scale-110 group-hover:bg-white/25"
                  style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
                >
                  {features[3].icon}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-200">
                  {features[3].num}
                </p>
                <h3 className="mt-1 text-lg font-black uppercase tracking-wide text-white">
                  {features[3].title}
                </h3>
                <div className="my-4 h-px w-8 bg-white/25 transition-all duration-500 group-hover:w-16 group-hover:bg-white/60" />
                <p className="text-sm leading-relaxed text-emerald-100">
                  {features[3].desc}
                </p>
                <Link
                  href="/academics"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-emerald-700"
                  style={{ boxShadow: "0 0 0 0 rgba(255,255,255,0)" }}
                >
                  Course Details
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section
        id="admissions"
        className="relative overflow-hidden bg-white py-16 lg:py-20"
      >
        <div className="animate-bg-pan absolute inset-0 bg-linear-to-r from-white via-emerald-50 to-white opacity-100" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="spin-slow h-100 w-100 rounded-full border border-emerald-100/80" />
          <div
            className="spin-slow h-150 w-150 rounded-full border border-emerald-200/80"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          />
          <div
            className="spin-slow h-200 w-200 rounded-full border border-emerald-100/80"
            style={{ animationDirection: "reverse", animationDuration: "20s" }}
          />
        </div>
        <div className="reveal-up relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="glass-panel mx-auto max-w-2xl rounded-2xl p-5 shadow-[0_0_50px_rgba(34,197,94,0.12)] sm:rounded-3xl sm:p-8 md:p-12">
            <span className="inline-block rounded-full border border-emerald-200 bg-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 backdrop-blur-md">
              Admissions Open {new Date().getFullYear()}
            </span>
            <h2 className="mt-5 text-2xl font-black text-emerald-950 sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-md">
              Begin Your Journey
              <br />
              <span className="bg-linear-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                With IIMS
              </span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-slate-600">
              Applications are now open for all programs for current academic
              year {new Date().getFullYear() + 1}. Join our community of
              passionate learners and start your journey towards academic
              excellence and innovation.
            </p>
            <Link
              href="/admissions"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(34,197,94,0.18)] transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.25)]"
            >
              Apply Now
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer is rendered globally via layout.tsx */}
    </ScrollRevealWrapper>
  );
}
