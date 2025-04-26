export type Project = {
  title: string;
  date: Date;
  description: string;
  demo: string | null;
  source: string;
  images: string[];
  type: "personal" | "campus assignment" | "other";
  stack: [string, string, string][];
  featured: boolean;
};
