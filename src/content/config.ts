// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string(),
    authorTitle: z.string().optional(),
    image: z.string(),
    categories: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

// Product collection schema
const productsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    specifications: z.array(
      z.object({
        title: z.string(),
        features: z.array(z.string()),
      })
    ),
    images: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

// Case Studies collection schema
const caseStudiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
  }),
});

// Industries collection schema
const industriesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

// Services collection schema
const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'blog': blogCollection,
  'products': productsCollection,
  'case-studies': caseStudiesCollection,
  'industries': industriesCollection,
  'services': servicesCollection,
  // Define additional collections as needed
};
