import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		byline: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
		image: z.string().optional(),
		relatedPosts: z.array(reference('blog')).optional(),
	}),
});

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		header: z.string(),
		type: z.array(z.string())
	}),
});

export const collections = { blog, project };
