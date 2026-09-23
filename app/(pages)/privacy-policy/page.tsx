import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The CLEAR Pathway.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-paper">
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 leading-7 text-ink/80">
            Our Privacy Policy is currently being finalized and will be
            published here before the site is publicly launched. It will
            explain what information we collect, how it is used, and the
            choices available to you.
          </p>
          <p className="mt-4 leading-7 text-ink/80">
            If you have questions in the meantime, please reach out to us
            directly.
          </p>
        </div>
      </section>
    </div>
  );
}
