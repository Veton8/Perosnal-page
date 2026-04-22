import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Writing archive — essays and journal entries.
// Content Layer API (glob loader) is the 2026 Astro pattern.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.enum(['essay', 'journal', 'dive-log', 'travel', 'kitchen']).default('essay'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { writing };
