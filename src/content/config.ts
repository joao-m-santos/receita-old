import { defineCollection, z } from 'astro:content';

const recipeCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
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
