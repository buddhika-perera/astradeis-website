// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Astradeis | Blog',
    description: 'Latest industry insights, technical guides, and case studies',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}