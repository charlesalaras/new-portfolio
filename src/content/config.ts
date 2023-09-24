import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		byline: z.string().optional(),
		publishDate: z.date(),
		editDate: z.date().optional(),
		tags: z.array(z.string()),
		image: z.string().optional(),
	}),
});

export const collections = { 'blog': blogCollection };
