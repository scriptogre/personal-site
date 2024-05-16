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
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    imageAlt: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    isNew: z.boolean().default(false),
  })
})

const announcementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    href: z.string(),
    text: z.string(),
    pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
  })
})


export const collections = {
  projects: projectsCollection,
  clients: clientsCollection,
  links: linksCollection,
  blogs: blogsCollection,
  announcements: announcementsCollection,
};
