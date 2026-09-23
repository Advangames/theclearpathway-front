export type Course = {
  slug: string;
  eyebrow: string;
  title: string;
  corePromise: string;
  summary: string;
  tone: "navy" | "gold" | "coral";
  imagePosition: string;
  includes: string;
  byTheEnd?: string;
  goldenRule?: string;
  largeClassActivities?: string;
  idealFor: string;
  ctaLabel: string;
};

export const courses: Course[] = [
  {
    slug: "grammar-through-ppp",
    eyebrow: "Course 1",
    title: "Grammar through PPP Model",
    corePromise:
      "Teach grammar through a sequence that leads from understanding to communicative use.",
    summary:
      "This course turns grammar into a communication tool. Through the PPP \u2014 Presentation, Practice, Production model, teachers learn how to introduce a structure clearly, guide practice, and create a real opportunity for students to use it while speaking.",
    tone: "navy",
    imagePosition: "47% 71%",
    includes:
      "The PPP model; oral production before writing; visual support; gestures; realia; guided repetition; games; flashcards; and respectful correction.",
    byTheEnd:
      "Teachers can explain structures clearly, move from understanding to production, and design visual, accessible, communicative oral practice.",
    idealFor:
      "Primary English teachers, instructors seeking more communicative classes, and entrepreneurs who need a practical foundation for high-quality English instruction.",
    ctaLabel: "I Want to Teach Grammar through PPP",
  },
  {
    slug: "reading-through-science-of-reading",
    eyebrow: "Course 2",
    title: "Reading through the Science of Reading",
    corePromise:
      "Develop reading through explicit, structured instruction adapted for ESL learners.",
    summary:
      "This course brings Science of Reading principles into the ESL classroom. It helps teachers organise a progression that connects sounds, letters, decoding, fluency, vocabulary, and comprehension so reading is taught intentionally and accessibly.",
    tone: "gold",
    imagePosition: "61% 71%",
    includes:
      "Phonemic awareness; phonics; decoding; decodable reading; fluency; vocabulary; comprehension; and connections with writing.",
    byTheEnd:
      "Teachers can plan structured reading experiences, adapt support for multilingual learners, and connect reading with oral and written language.",
    idealFor:
      "Primary English teachers, academic coordinators, and institutions that want to strengthen a solid reading foundation within an ESL program.",
    ctaLabel: "I Want to Teach Reading through Science of Reading",
  },
  {
    slug: "communicative-language-teaching",
    eyebrow: "Course 3",
    title: "Communicative Language Teaching",
    corePromise:
      "Design classes where students use English to interact and express themselves.",
    summary:
      "This course places communication at the centre of the class. Teachers learn to design themes, tasks, and routines where students use English for a purpose: to converse, describe, interview, solve problems, role-play, and present ideas.",
    tone: "coral",
    imagePosition: "77% 71%",
    includes:
      "Listening and speaking routines; pair work; information-gap games; interviews; role-plays; presentations; and activities for large classes.",
    goldenRule:
      "Reserve 18\u201320 minutes of oral production in every 60-minute class through conversations, interviews, descriptions, role-plays, information-gap games, and short presentations.",
    largeClassActivities:
      "The course includes large-class activities such as Find Someone Who, Guess Who, Hot Seat, Two Truths and a Lie, Story Chain, and Think-Pair-Share. Their purpose is to let many students speak simultaneously instead of waiting for isolated turns.",
    idealFor:
      "Teachers who want to increase oral participation, coordinators seeking more dynamic classes, and educational entrepreneurs who want to offer communication-centred ESL experiences.",
    ctaLabel: "I Want to Teach through Communicative Language Teaching",
  },
];

export const guides = [
  {
    title: "Theoretical & Methodological Guide",
    description:
      "Explains the evolution of language teaching and the pedagogical foundations that support The CLEAR Pathway.",
  },
  {
    title: "Grammar Guide",
    description:
      "Organises grammar structures and resources for teaching them visually, orally, and communicatively.",
  },
  {
    title: "Class Structure Guide",
    description:
      "Presents practical sequences and routines for structuring classes and encouraging oral participation.",
  },
];

export const courseRecommendations = [
  {
    need: "Teach and practise grammar through a clear, visual, and oral sequence.",
    recommendation: "Grammar through PPP Model",
  },
  {
    need: "Develop reading through explicit, structured instruction.",
    recommendation: "Reading through the Science of Reading",
  },
  {
    need: "Create activities where students interact and use English for a real purpose.",
    recommendation: "Communicative Language Teaching",
  },
  {
    need: "Build a complete, consistent program for an institution or educational venture.",
    recommendation: "Full three-course pathway",
  },
];
