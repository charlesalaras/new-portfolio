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
const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    percent: z.number(),
    yoe: z.number()
  }),
});
const jobCollection = defineCollection({
  type: 'data',
  schema: z.object({
    position: z.string(),
    company: z.string(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)).optional(),
    notes: z.array(z.string())
  }),
});
const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    degree: z.string(),
    school: z.string(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)),
    gpa: z.number(),
    description: z.string()
  }),
});
export const collections = {
  'blog':  blogCollection,
  'projects': projectsCollection,
  'skills': skillsCollection,
  'jobs': jobCollection,
  'education': educationCollection
};
