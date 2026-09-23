import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Raising the Standard of ESL Education",
  description:
    "The CLEAR Pathway helps educators teach English with purpose, structure and real communicative results.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
