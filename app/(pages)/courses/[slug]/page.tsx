import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    return {};
  }

  return {
    title: course.title,
    description: course.corePromise,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            className="text-sm font-bold text-gold-dark transition hover:text-navy"
            href="/courses"
          >
            ← Back to All Courses
          </Link>

          <p
            className={`mt-6 text-xs font-bold uppercase tracking-[0.25em] ${
              course.tone === "coral" ? "text-coral" : "text-gold-dark"
            }`}
          >
            {course.eyebrow} — {course.title}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] text-navy sm:text-5xl">
            {course.corePromise}
          </h1>
          <p className="mt-5 leading-7 text-ink/80">{course.summary}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy">Includes</p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{course.includes}</p>
            </div>
            {course.byTheEnd && (
              <div className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy">
                  By the End
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{course.byTheEnd}</p>
              </div>
            )}
          </div>

          {course.goldenRule && (
            <div className="mt-8 rounded-md border border-gold/40 bg-gold/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
                The Golden Rule
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{course.goldenRule}</p>
            </div>
          )}

          {course.largeClassActivities && (
            <p className="mt-5 text-sm leading-6 text-ink/70">{course.largeClassActivities}</p>
          )}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm leading-6 text-ink/80">
            <span className="font-bold text-navy">Ideal for: </span>
            {course.idealFor}
          </p>

          <Button className="mt-8" href="/courses#resources">
            {course.ctaLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}
