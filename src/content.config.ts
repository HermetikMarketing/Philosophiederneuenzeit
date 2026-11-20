import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog-Beiträge: eine Markdown-Datei pro Beitrag in src/content/blog/.
// Der Dateiname ist die Adresse: tragoedie-von-mayerling.md → /blog/tragoedie-von-mayerling/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    teaser: z.string(),
    stichworte: z.array(z.string()).default([]),
    entwurf: z.boolean().default(false),
  }),
});

export const collections = { blog };
