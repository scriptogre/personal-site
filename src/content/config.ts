import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      href: z.string(),
      img: image(),
    }),
});

const clientsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      href: z.string(),
      img: image(),
    }),
});

const linksCollection = defineCollection({
  schema: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("contact"),
      label: z.string(),
      value: z.string(),
      href: z.string(),
      icon: z.string(),
    }),
    z.object({
      type: z.literal("social"),
      label: z.string(),
      value: z.string(),
      href: z.string(),
      icon: z.string(),
    }),
  ]),
});

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  })
})

export const collections = {
  projects: projectsCollection,
  clients: clientsCollection,
  links: linksCollection,
  blogs: blogsCollection,
};
