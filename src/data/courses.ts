export type Course = {
  slug: string;
  messageKey: "grammarPpp" | "readingScience" | "clt";
  tone: "navy" | "gold" | "coral";
  imagePosition: string;
};

export const courses: Course[] = [
  {
    slug: "grammar-through-ppp",
    messageKey: "grammarPpp",
    tone: "navy",
    imagePosition: "47% 71%",
  },
  {
    slug: "reading-through-science-of-reading",
    messageKey: "readingScience",
    tone: "gold",
    imagePosition: "61% 71%",
  },
  {
    slug: "communicative-language-teaching",
    messageKey: "clt",
    tone: "coral",
    imagePosition: "77% 71%",
  },
];
