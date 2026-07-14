import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
	loader: glob({
		base: './src/content/case-studies',
		pattern: '**/*.md',
	}),
	schema: z.object({
		title: z.string(),
		shortTitle: z.string(),
		description: z.string(),
		company: z.string(),
		role: z.string(),
		timeframe: z.string(),
		group: z.enum(['selected-work', 'systems-frameworks']),
		order: z.number(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		heroImage: z.string().optional(),
		heroAlt: z.string().optional(),
	}),
});

const philosophy = defineCollection({
	loader: glob({
		base: './src/content/philosophy',
		pattern: '**/*.md',
	}),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string(),
		heroAlt: z.string(),
		tags: z.array(z.string()).default([]),
		sourceUrl: z.string().url(),
	}),
});

export const collections = { caseStudies, philosophy };
