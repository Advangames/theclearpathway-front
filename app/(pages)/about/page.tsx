import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Ana Cristina Volante",
  description:
    "I am Ana Cristina Volante, an ESL Academic Director, Certified English–Spanish Translator, and the founder of An Education Center (AEC).",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-paper">
        <div className="absolute inset-y-0 right-0 hidden w-[54%] bg-cream lg:block">
          <Image
            alt="Ana Cristina Volante, ESL Academic Director"
            className="object-cover object-[72%_0%]"
            fill
            priority
            sizes="54vw"
            src="/assets/Ana_Photo.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper from-0% via-transparent via-40% to-transparent to-100%" />
        </div>

        <div className="mx-auto grid min-h-[32rem] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow">About Ana Cristina Volante</p>
            <h1 className="mt-6 font-noto text-5xl leading-[0.95] text-navy sm:text-6xl">
              Raising the standard of English education begins with a clear
              teaching framework.
            </h1>
            <p className="mt-7 text-lg leading-7 text-ink">
              I am Ana Cristina Volante, an ESL Academic Director, Certified
              English–Spanish Translator, and the founder of An Education
              Center (AEC). My work brings together classroom experience,
              academic leadership, and teacher training so English can be
              taught with purpose, structure, and real communicative
              outcomes.
            </p>
          </div>

          <div className="relative z-10 lg:hidden">
            <div className="relative min-h-[28rem] overflow-hidden rounded-md border border-gold/20 shadow-xl">
              <Image
                alt="Ana Cristina Volante, ESL Academic Director"
                className="object-cover object-[72%_0%]"
                fill
                sizes="100vw"
                src="/assets/Ana_Photo.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper" id="journey">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="max-w-xl py-4">
            <p className="eyebrow">My Story</p>
            <h2 className="mt-5 font-noto text-5xl leading-[0.95] text-navy sm:text-6xl">
              A professional journey built in the classroom
            </h2>
            <p className="mt-6 text-base leading-7 text-ink">
              For more than ten years, I have worked with children from
              different schools through extracurricular English classes at An
              Education Center (AEC).
            </p>
            <p className="mt-2 text-base leading-7 text-ink">
              This experience revealed a recurring reality: many students
              study English for years but do not always develop the tools,
              confidence, or opportunities they need to communicate orally.
            </p>
            <p className="mt-2 text-base leading-7 text-ink">
              With more than eight years of professional experience in
              language education, academic leadership, and institutional
              management, I have worked in ESL program design, teacher
              training, curriculum development, academic coordination, and
              quality assurance.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div className="relative min-h-[33rem] overflow-hidden rounded-md bg-paper shadow-xl">
              <Image
                alt="Portrait of Ana Cristina Volante"
                className="object-cover object-[57%_31%]"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src="/assets/Ana_Photo.png"
              />
            </div>
            <blockquote className="relative border-l-2 border-gold pl-6 text-ink">
              <span className="font-noto text-7xl leading-none text-gold/80">
                &quot;
              </span>
              <p className="-mt-6 text-lg italic leading-8">
                I believe in educators, and in the transformative power of a
                clear and practical approach to teaching English.
              </p>
              <footer className="mt-8">
                <p className="text-3xl text-navy">Ana Cristina Volante</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                  Founder, AEC
                </p>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="rounded-md bg-navy/10 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-navy">
              Certified Translation Experience
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">
              I am also a Certified English–Spanish Translator with legal,
              academic, and corporate experience. This strengthens my view of
              language as a tool for understanding, self-expression, and
              connection in real, multicultural contexts.
            </p>
          </div>
          <div className="rounded-md bg-gold/15 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">
              English as a Tool for Communication
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">
              Teaching English should not be limited to memorising grammar
              rules. It should prepare students to use the language with
              clarity, confidence, and purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            The Reason Behind The CLEAR Pathway
          </p>
          <p className="mt-6 text-lg leading-8 text-white/85">
            My experience at AEC showed a gap between the time students spend
            studying English and their ability to communicate. That is why I
            created The CLEAR Pathway: a proposal to raise the standard of
            ESL education in Venezuela and Latin America through clear,
            practical tools for teachers, institutions, and educational
            entrepreneurs.
          </p>
          <Button className="mt-8" href="/challenge">
            Explore the Problem We Are Solving
          </Button>
        </div>
      </section>
    </div>
  );
}
