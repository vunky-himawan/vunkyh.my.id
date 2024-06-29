import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    demo: z.string().nullable().default(null),
    source: z.string(),
    images: z.array(z.string()),
    type: z.enum(["personal", "campus assignment"]),
    stack: z.array(z.tuple([z.string(), z.string(), z.string()])),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectCollection,
};
