import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    link: z.string().url().optional(),
    image: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
