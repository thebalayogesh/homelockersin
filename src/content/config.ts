import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Keystatic saves as 'content' by default, but Astro looks for 
  // Markdown/Markdoc files in the folder.
  type: 'content', 
  schema: z.object({
    title: z.string(),
    // Add other fields from your Keystatic config here
    // date: z.date().optional(),
  }),
});

export const collections = { posts };