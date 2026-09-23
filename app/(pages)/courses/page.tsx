import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { courseRecommendations, courses, guides } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "The CLEAR Pathway brings together three courses for teachers and educational entrepreneurs who want to teach English with greater clarity, structure, and communicative purpose.",
  alternates: {
    canonical: "/courses",
  },
};

function CourseIcon({ tone }: { tone: string }) {
  const color = tone === "coral" ? "bg-coral" : tone === "gold" ? "bg-gold" : "bg-navy";

  return (
    <span
      className={`${color} grid size-14 place-items-center rounded-full border-4 border-white text-white shadow-lg`}
    >
      <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 32 32">
        <path
          d="M8 23V8h11a5 5 0 0 1 5 5v10H13a5 5 0 0 0-5 5Zm0 0h16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

export default function CoursesPage() {
  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Courses and Resources</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            Turn a strong teaching framework into English classes that truly
            work.
          </h1>
          <p className="mt-5 leading-7 text-ink/80">
            The CLEAR Pathway brings together three courses for teachers and
            educational entrepreneurs who want to teach English with greater
            clarity, structure, and communicative purpose. Each course
            develops an essential dimension of an ESL class: grammar through
            a clear sequence → reading through explicit instruction →
            authentic communication in the classroom.
          </p>
        </div>
      </section>

      <section className="bg-cream" id="courses">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={course.slug}
              >
                <CourseIcon tone={course.tone} />
                <p
                  className={`mt-5 text-xs font-bold uppercase tracking-[0.25em] ${
                    course.tone === "coral" ? "text-coral" : "text-gold-dark"
                  }`}
                >
                  {course.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl leading-8 text-navy">{course.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/80">{course.corePromise}</p>
                <a
                  className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-gold-dark transition hover:text-navy"
                  href={`/courses/${course.slug}`}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper" id="guides">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Courses and Guides</p>
          <h2 className="mt-5 text-3xl text-navy sm:text-4xl">
            Two distinct elements
          </h2>
          <p className="mt-5 leading-7 text-ink/80">
            The three courses above are the courses that will be presented in
            the offer. The following guides are supporting pedagogical
            materials: they organise the content and resources that underpin
            the training, but they do not replace or rename the courses.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {guides.map((guide) => (
              <div className="rounded-md bg-cream p-6" key={guide.title}>
                <p className="text-sm font-bold text-navy">{guide.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            Complementary Resource
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            Make what you need to teach visible.
          </h2>
          <p className="mt-5 leading-7 text-white/80">
            The Infographic Guide gathers grammar topics in visual formats
            that are ready to project, explain, or consult in class. It is a
            complementary resource that supports Grammar through PPP Model in
            particular.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Which Course Is Right for You?</p>
          <h2 className="mt-5 text-3xl text-navy sm:text-4xl">Find your path</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {courseRecommendations.map((item) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={item.recommendation}
              >
                <p className="text-sm leading-6 text-ink/80">{item.need}</p>
                <p className="mt-3 text-xl text-navy">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6" id="resources">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-navy sm:text-4xl">
            You do not need to choose between structure and communication.
            You can teach with both.
          </h2>
          <p className="mt-5 leading-7 text-ink/80">
            The CLEAR Pathway provides a practical route for understanding the
            framework, transforming grammar instruction, and structuring
            classes where students use English with greater confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#courses" variant="primary">
              Explore the Complete Pathway
            </Button>
            <Button href="/#resources" variant="outline">
              Request Information for Your Institution
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
