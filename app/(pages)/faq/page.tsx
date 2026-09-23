import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Ana Cristina Volante, The CLEAR Pathway, and its courses.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What is The CLEAR Pathway?",
    answer:
      "The CLEAR Pathway is a teacher-training system created by Ana Cristina Volante. It helps teachers and institutions determine what to teach, how to organise each class, and how to protect the time students need to speak.",
  },
  {
    question: "Who are the courses designed for?",
    answer:
      "The courses are designed for primary English teachers, academic coordinators, instructors seeking more communicative classes, and educational entrepreneurs who want a practical foundation for high-quality English instruction.",
  },
  {
    question: "How many courses are there, and what do they cover?",
    answer:
      "There are three courses: Grammar through PPP Model, Reading through the Science of Reading, and Communicative Language Teaching. Each develops an essential dimension of an ESL class, from grammar to reading to authentic communication.",
  },
  {
    question: "Are there supporting materials besides the courses?",
    answer:
      "Yes. The Theoretical & Methodological Guide, the Grammar Guide, and the Class Structure Guide are supporting pedagogical materials that organise the content and resources underpinning the training.",
  },
  {
    question: "When will pricing, schedules, and enrollment details be available?",
    answer:
      "Delivery format, duration, start dates, pricing, and enrollment details are being finalized. Please check back soon or reach out directly for the latest information.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-paper">
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Support</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            Frequently Asked Questions
          </h1>

          <div className="mt-10 flex flex-col gap-8">
            {faqs.map((faq) => (
              <div className="border-b border-navy/10 pb-8" key={faq.question}>
                <h2 className="text-lg font-bold text-navy">{faq.question}</h2>
                <p className="mt-3 leading-7 text-ink/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
