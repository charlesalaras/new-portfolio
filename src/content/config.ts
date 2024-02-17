import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    byline: z.string().optional(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    editDate: z.date().optional(),
    header: image().optional(),
    headerAlt: z.string().optional()
  }), 
});
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    type: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    header: image().optional(),
    headerAlt: z.string().optional()
  }),
});

export const collections = {
  'blog':  blogCollection,
  'projects': projectsCollection,
};
