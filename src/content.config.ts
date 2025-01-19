import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { articleSchema, categorySchema } from "./schema";

const article = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/article", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: articleSchema,
});

// const category = defineCollection({
//   // Load Markdown and JSON files in the `src/content/category/` directory.
//   loader: glob({ base: "./src/content/category", pattern: "**/*.{md,mdx}" }),
//   // Type-check frontmatter using a schema
//   schema: categorySchema,
// });

// const authors = defineCollection({

// })

export const collections = { article };
