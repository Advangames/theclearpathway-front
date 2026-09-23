import type { Metadata } from "next";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] items-center justify-center bg-cream px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-noto text-5xl text-navy">Page not found</h1>
        <p className="mt-4 text-ink/75">
          The page you are looking for is not available yet.
        </p>
        <Button className="mt-8" href="/">
          Back Home
        </Button>
      </div>
    </div>
  );
}
