import { z } from "astro:content";

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  author: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  heroImage: z.string().optional(),
  collections: z.array(articleSchema),
});

const authorSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  avatar: z.string().optional(),
});

export { articleSchema, categorySchema, authorSchema };
