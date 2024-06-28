export type Project = {
  title: string;
  date: Date;
  description: string;
  demo: string | null;
  source: string;
  cover: string;
  gif: string | null;
  type: "personal" | "campus assignment";
  stack: [string, string, string][];
  featured: boolean;
  role: string;
};
