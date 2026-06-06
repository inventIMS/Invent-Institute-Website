import Image from "next/image";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

export default function AboutPage() {
  return (
    <ScrollRevealWrapper>
      <main className="relative min-h-screen overflow-hidden bg-transparent pt-24 pb-16 text-slate-800 sm:pt-32 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob-complex absolute -top-32 -left-32 h-125 w-125 rounded-full bg-emerald-300/25 blur-[100px]" />
          <div className="blob-complex blob-d2 absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-200/25 blur-[80px]" />
          <div className="blob-complex blob-d3 absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-emerald-100/25 blur-[90px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Page Header */}
          <div className="reveal-up mb-8 text-center sm:mb-16">
            <h1 className="mt-6 text-3xl font-black text-emerald-950 sm:text-4xl md:text-5xl">
              Our Story &amp; Vision
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Discover the origins, the passion, and the core values that drive
              Invent Institute of Mathematics &amp; Science.
            </p>
          </div>

          <div className="flex flex-col gap-16 sm:gap-24">
            {/* Section 1: Origin */}
            <section className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
              <div className="reveal-right relative w-full lg:w-1/2">
                <div className="absolute -inset-4 rounded-3xl bg-emerald-100/35 blur-xl"></div>
                {/* Using local institute image if available, else fallback to a nice building */}
                <div className="relative h-64 w-full sm:h-80 lg:h-100">
                  <Image
                    src="/institute.jpg"
                    alt="IIMS Institute Building"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative z-10 rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
              <div className="reveal-left w-full lg:w-1/2 text-center lg:text-right">
                <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-emerald-800 sm:mb-6 sm:text-2xl sm:tracking-widest">
                  Origin of IIMS
                </h2>
                <div className="flex flex-col gap-4 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
                  <p>
                    Invent Institute of Mathematics &amp; Science was founded
                    with one purpose: to build a space for all students to grow,
                    learn and create with each passing day. Through a unique
                    teaching approach and a truly passionate staff, we help
                    students develop academically and personally to the highest
                    level.
                  </p>
                  <p>
                    We invite you to explore our site and discover the academics
                    and community Invent Institute of Mathematics &amp; Science
                    provides to each and every student. Get in touch with us
                    today to schedule a tour, learn more about enrollment, or
                    ask any other questions.
                  </p>
                  <p>
                    Since 2012, we have been conducting intensive &amp;
                    structured coaching programs for 10th, +1, +2, and
                    Engineering students. Our classes are designed to provide a
                    deep insight into the subjects and the much-needed practice
                    to extract the best performance out of our students. Our
                    results in the past reflect our successful performance. Many
                    of our students have done exceptionally well in the board
                    and engineering exams and have joined professional streams
                    in prestigious institutions like Bits Pilani, IITs, Anna
                    University, NITs, and Top MNC&apos;s like Infosys, TCS, CTS,
                    etc., and esteemed Engineering Colleges.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Founder & CEO
          <section className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
            <div className="reveal-right relative w-full lg:w-1/2">
              <div className="absolute -inset-4 rounded-3xl bg-emerald-100/35 blur-xl"></div>
              <Image
                src="/founder.jpg"
                alt="Founder and Head Professor of IIMS"
                width={1200}
                height={350}
                className="relative z-10 h-87.5 w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div className="reveal-left w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="mb-6 text-2xl font-black uppercase tracking-widest text-emerald-800">About Our Founder &amp; Head Professor</h2>
              <div className="flex flex-col gap-4 text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Our Founder &amp; Head Professor, Mr. K Gowrishankar, envisioned Invent Institute of Mathematics &amp; Science as a place where every learner receives personal guidance, strong fundamentals, and confidence to achieve excellence.
                </p>
                <p>
                  With a student-first philosophy and years of academic mentoring experience, the leadership continues to shape our programs with discipline, care, and innovation.
                </p>
                <p>
                  Under this vision, IIMS has grown into a trusted learning community that supports students in board exams, competitive preparation, and long-term career success.
                </p>
              </div>
            </div>
          </section> */}

            {/* Section 2: What We Offer */}
            <section className="flex flex-col-reverse items-center gap-8 sm:gap-12 lg:flex-row">
              <div className="reveal-right w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-emerald-800 sm:mb-6 sm:text-2xl sm:tracking-widest">
                  What We Offer Our Students?
                </h2>
                <p className="text-justify text-base leading-relaxed text-slate-600">
                  Students are our children, our kids. We invent faculties who
                  even care about their psychological or mental health. We often
                  make our students feel stress-free by conducting small,
                  meaningful programs within the institution.
                </p>
              </div>
              <div className="reveal-left relative w-full lg:w-1/2">
                <div className="absolute -inset-4 rounded-3xl bg-emerald-100/35 blur-xl"></div>
                <div className="relative h-56 w-full sm:h-72 lg:h-87.5">
                  <Image
                    src="/classroom.png"
                    alt="Students in a classroom"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative z-10 rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </section>

            {/* Section 3: Friendly Conversations */}
            <section className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
              <div className="reveal-right relative w-full lg:w-1/2">
                <div className="absolute -inset-4 rounded-3xl bg-emerald-100/35 blur-xl"></div>
                <div className="relative h-56 w-full sm:h-72 lg:h-87.5">
                  <Image
                    src="/graduation.png"
                    alt="Students throwing graduation caps"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative z-10 rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
              <div className="reveal-left w-full lg:w-1/2 text-center lg:text-right">
                <h2 className="mb-4 text-xl font-black uppercase tracking-wide text-emerald-800 sm:mb-6 sm:text-2xl sm:tracking-widest">
                  Friendly Conversations
                </h2>
                <p className="text-justify text-base leading-relaxed text-slate-600">
                  We make students have healthy conversations among themselves
                  about their subjects, creating a way to keep themselves
                  updated. And sometimes, quizzes and hackathons will be
                  conducted to test their critical thinking skills. This makes
                  students overcome their inferiority and gives them more
                  confidence in interactions with others.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </ScrollRevealWrapper>
  );
}
