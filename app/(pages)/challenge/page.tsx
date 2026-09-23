import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { challengeFactors, instructionalStrands, solutionFeatures } from "@/data/challenge";
import { metrics } from "@/data/home";

export const metadata: Metadata = {
  title: "The Challenge & The Solution",
  description:
    "Latin America needs an English education that goes beyond content and develops the ability to understand, interact and communicate in real situations.",
  alternates: {
    canonical: "/challenge",
  },
};

export default function ChallengePage() {
  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">The Challenge</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            English cannot stop at grammar.
          </h1>
          <p className="mt-5 leading-7 text-ink/80">
            Latin America needs an English education that goes beyond content
            and develops the ability to understand, interact and communicate
            in real situations.
          </p>
          <p className="mt-5 leading-7 text-ink/80">
            The 2025 EF English Proficiency Index (EF EPI) signals an
            important concern. Among Latin American participants aged 18–20,
            the Index reports a 57-point decline from 2015 to 2025, while
            older age groups improved during that period. This trend requires
            us to examine not only how much English is taught, but how it is
            taught.{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [1]
              </a>
            </sup>
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                className="rounded-md border border-navy/10 bg-paper px-6 py-6 shadow-lg shadow-navy/5"
                key={metric.value}
              >
                <p className="font-noto text-5xl text-gold-dark">{metric.value}</p>
                <p className="mt-3 text-sm leading-5 text-navy">{metric.label}</p>
                {metric.source && (
                  <p className="mt-1 text-xs text-ink/60">({metric.source})</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-5 text-ink/60">
            EF EPI uses results from adults who took the EF SET online. Its
            sample is self-selected and is not necessarily representative of
            all students or the full population. Present it as a relevant
            comparative indicator, not as a census of the school system.{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [3]
              </a>
            </sup>
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Why the Gap Exists</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            The problem is not motivation. It is the teaching approach.
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">
            In classroom practice, the curriculum may devote time to
            vocabulary, written exercises, and grammar rules while leaving too
            little space for students to produce English in guided and
            meaningful ways. Without frequent opportunities to listen, speak,
            formulate ideas, and receive feedback, English learning can become
            passive knowledge rather than communicative ability.
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-ink/80">
            The Inter-American Dialogue has documented regional challenges
            related to teachers&apos; language proficiency, pedagogical
            preparation, and the systems that support and monitor classroom
            practice.{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [2]
              </a>
            </sup>
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {challengeFactors.map((factor) => (
              <div className="rounded-md border border-navy/10 bg-cream p-6" key={factor.title}>
                <p className="text-3xl text-gold-dark">{factor.number}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-navy">
                  {factor.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            A Lesson from the Evolution of Language Teaching
          </p>
          <p className="mt-6 leading-7 text-white/80">
            Language teaching evolved from the Grammar Translation Method,
            focused on translation and rules, to approaches that strengthened
            exposure and practice. Communicative Language Teaching (CLT)
            ultimately placed interaction, meaning, and functional language
            use at the centre of learning.
          </p>
          <blockquote className="mt-8 rounded-md border border-gold/30 bg-white/5 p-6 text-lg italic leading-8 text-white">
            The goal is not to choose between grammar and communication. The
            goal is to teach grammar so students can communicate more
            effectively.
          </blockquote>
        </div>
      </section>

      <section className="bg-cream" id="solution">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">The Solution</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            The CLEAR Pathway
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">
            The CLEAR Pathway is a teacher-training system. It helps teachers
            and institutions determine what to teach, how to organise each
            class, and how to protect the time students need to speak.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionFeatures.map((feature) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={feature.title}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Six Instructional Strands</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            Every class draws on a complete, research-informed foundation
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructionalStrands.map((strand) => (
              <div className="rounded-md border border-navy/10 bg-cream p-6" key={strand.title}>
                <p className="text-2xl text-navy">{strand.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{strand.description}</p>
              </div>
            ))}
          </div>

          <Button className="mt-12" href="/courses">
            Explore the Training Programs
          </Button>
        </div>
      </section>

      <section className="bg-cream px-4 py-10 sm:px-6" id="sources">
        <div className="mx-auto max-w-4xl text-xs leading-6 text-ink/60">
          <p className="font-bold uppercase tracking-[0.2em] text-navy">Sources</p>
          <p className="mt-3">
            [1] EF Education First. EF English Proficiency Index 2025.{" "}
            <a
              className="text-gold-dark underline"
              href="https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/reports/2025/ef-epi-2025-english.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              ef.com
            </a>
          </p>
          <p className="mt-2">
            [2] Inter-American Dialogue. Work in Progress: English Teaching
            and Teachers in Latin America (2019).{" "}
            <a
              className="text-gold-dark underline"
              href="https://thedialogue.org/analysis/work-in-progress-english-teaching-and-teachers-in-latin-america"
              rel="noopener noreferrer"
              target="_blank"
            >
              thedialogue.org
            </a>
          </p>
          <p className="mt-2">
            [3] EF Education First. About EF EPI: Methodology and Sampling
            Biases.{" "}
            <a
              className="text-gold-dark underline"
              href="https://www.ef.edu/epi/about-epi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              ef.edu
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
