import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		byline: z.string(),
		date: z.date(),
		tags: z.array(z.object({ icon: z.string(), content: z.string() })),
		image: z.string().optional(),
		relatedPosts: z.array(reference('blog')),
	}),
});

const project = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		header: z.string(),
		type: z.string()
	}),
});

export const collections = { blog, project };
