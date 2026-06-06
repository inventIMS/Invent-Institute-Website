import Image from "next/image";
import Link from "next/link";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

export default function AcademicsPage() {
  const courseCategories = [
    // {
    //   id: "school",
    //   label: "School Subjects",
    //   level: "Foundation Track",
    //   board: "SCERT, NCERT, IGCSE",
    //   accent: "bg-emerald-500",
    //   courses: ["General Mathematics", "Physics", "Chemistry", "Biology", "Business Mathematics", "Accountancy"],
    // },
    {
      id: "middle",
      label: "Class 7 to 10",
      level: "Secondary Focus",
      board: "SCERT, NCERT, IGCSE",
      accent: "bg-lime-500",
      courses: ["Mathematics", "Science", "Computer Science", "Social Studies"],
    },
    {
      id: "higher",
      label: "Class 11 & 12",
      level: "Higher Secondary Focus",
      board: "SCERT, NCERT, IGCSE",
      accent: "bg-amber-500",
      courses: [
        "General Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Business Mathematics",
        "Accountancy",
      ],
    },
    {
      id: "ug",
      label: "UG Courses",
      level: "College Support",
      board: "Engineering and allied streams",
      accent: "bg-teal-500",
      courses: [
        "Engineering Mathematics - M1",
        "Engineering Mathematics - M2",
        "Engineering Mathematics - M3",
        "Probability and Statistics",
        "Other allied UG papers",
      ],
    },
    {
      id: "computer",
      label: "Computer Courses",
      level: "Career Skills",
      board: "Programming and web stack",
      accent: "bg-yellow-500",
      courses: [
        "Python",
        "Web Development",
        "MERN",
        "Java",
        "JavaScript",
        "C++",
        "C",
        "PHP",
      ],
    },
  ];

  const features = [
    {
      title: "Worth of this platform",
      image: "/worth_platform.png",
      desc: "This platform enhances the progress of students. Students can able to self-analyze their academics.",
    },
    {
      title: "Experienced staffs",
      image: "/experienced_staff.png",
      desc: "Our experienced and well-trained faculties from reputed institutions who enlights the students from their ignorance and inferiority complex.",
    },
    {
      title: "Orientation For Students Success",
      image: "/orientation_success.png",
      desc: "We toil students to face their shortcomings and helps to crack their competitive exams like NEET and JEE in their respective fields. Skills like LSRW, communication skills, and other skills are developed for all our inventories.",
    },
    {
      title: "Our results",
      image: "/our_results.png",
      desc: "We have prompt and centum results every year and we also provide them a motivation to choose the right path of their success via the Career guidance program.",
    },
  ];

  return (
    <ScrollRevealWrapper>
      <main className="min-h-screen bg-transparent pt-20 pb-14 sm:pt-24 sm:pb-20">
        {/* ── Hero Section ── */}
        <section className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6">
          <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-premium sm:h-62.5 sm:rounded-3xl md:h-87.5">
            {/* Abstract blobs matching theme */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute -top-32 -left-32 h-100 w-100 rounded-full bg-emerald-300 blur-[80px]" />
              <div className="absolute top-1/4 right-0 h-75 w-75 rounded-full bg-emerald-200 blur-[80px]" />
            </div>
            {/* Overlay pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(34,197,94,0.15) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
            {/* Title */}
            <div className="relative z-10 text-center anim-up">
              <h1 className="text-2xl font-extrabold uppercase tracking-[0.15em] text-emerald-950 sm:text-4xl sm:tracking-[0.2em] lg:text-5xl xl:text-6xl drop-shadow-lg">
                Our Academics
              </h1>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-emerald-500 opacity-80" />
            </div>
          </div>
        </section>

        {/* ── Offered Courses Section ── */}
        <section className="relative mx-auto mt-14 max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="lg:w-1/3 reveal-up">
              <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-700">
                Curriculum Map
              </h2>
              <h3 className="mt-3 text-2xl font-black text-slate-900 uppercase sm:text-3xl">
                Course Categories
              </h3>
              <p className="mt-4 text-justify text-sm leading-relaxed text-slate-500">
                We organize our courses by learning stage so students and
                parents can quickly find the right track. Each category below
                highlights its focus area and covered subjects.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-center">
                  <p className="text-2xl font-black text-emerald-700">
                    {courseCategories.length}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-900">
                    Main Categories
                  </p>
                </div>
                <div className="rounded-2xl border border-yellow-200 bg-yellow-50/80 p-4 text-center">
                  <p className="text-2xl font-black text-amber-700">
                    {courseCategories.reduce(
                      (total, category) => total + category.courses.length,
                      0,
                    )}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">
                    Course Modules
                  </p>
                </div>
              </div>
              <Link
                href="/admissions"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-emerald-500 sm:w-auto"
              >
                Apply for Admission
              </Link>
            </div>
            <div className="lg:w-2/3">
              <div className="grid gap-6 md:grid-cols-2">
                {courseCategories.map((category, idx) => (
                  <div
                    key={category.id}
                    className="reveal-left rounded-3xl border border-emerald-100 bg-white p-6 shadow-premium transition-transform duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-3 w-3 shrink-0 rounded-full ${category.accent}`}
                          />
                          <h4 className="text-lg font-black uppercase tracking-wide text-slate-900 sm:text-xl">
                            {category.label}
                          </h4>
                        </div>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
                          {category.level}
                        </p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                        {category.board}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-2 sm:mt-5 sm:gap-3 sm:grid-cols-2">
                      {category.courses.map((courseName) => (
                        <div
                          key={courseName}
                          className="rounded-xl border border-emerald-100 bg-emerald-50/50 px-3 py-2.5 sm:px-4 sm:py-3"
                        >
                          <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                            {courseName}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto my-20 h-px max-w-5xl bg-linear-to-r from-transparent via-slate-200 to-transparent" />

        {/* ── Features Section ── */}
        <section className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="reveal-up mb-12 text-center lg:text-left">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-emerald-700">
              Why Choose Us
            </h2>
            <h3 className="mt-3 text-3xl font-black text-slate-900 uppercase">
              Features
            </h3>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="reveal-up group flex flex-col overflow-hidden rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow:
                    "0 8px 30px -4px rgba(34,197,94,0.16), 0 4px 12px -2px rgba(0,0,0,0.08)",
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Header Title */}
                <div className="bg-emerald-50 border-b border-emerald-100 flex items-center justify-center py-5 px-6">
                  <h4 className="text-center text-lg font-bold text-slate-800 transition-colors group-hover:text-emerald-700">
                    {feature.title}
                  </h4>
                </div>

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden sm:h-64">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Description Body */}
                <div className="flex grow flex-col bg-white px-5 py-4 items-center justify-center border-t border-emerald-50 sm:px-8 sm:py-6">
                  <p className="text-justify text-sm leading-relaxed text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer is rendered globally via layout.tsx */}
      </main>
    </ScrollRevealWrapper>
  );
}
