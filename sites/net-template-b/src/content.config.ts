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

// Career roles — one entry per company/role for SEO indexing.
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    role: z.string(),
    years: z.string(),
    order: z.number(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Travel — one entry per country lived/worked in.
const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    country: z.string(),
    years: z.string().optional(),
    order: z.number(),
    image: z.string().optional(),
    /** Caption / credit displayed under the hero image. May contain HTML for links. */
    imageCredit: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Community — one entry per organization Alaa serves.
const community = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    location: z.string(),
    order: z.number(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Media — speaking engagements, podcasts, op-eds.
const media = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventName: z.string(),
    eventDate: z.coerce.date(),
    mediaType: z.enum(['keynote', 'podcast', 'feature', 'op-ed', 'talk']),
    externalUrl: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, experience, travel, community, media };
