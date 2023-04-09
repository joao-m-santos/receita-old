import { z, defineCollection } from 'astro:content';

const recipeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Anonymous'),
    lastUpdate: z.date(),
  }),
});

export const collections = {
  recipes: recipeCollection,
};
