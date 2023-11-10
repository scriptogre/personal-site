import { defineCollection, z } from "astro:content";

const clientCollection = defineCollection({
  schema: ({ image }) => 
  z.object({
    cover: image(),
    coverAlt: z.string(),
  }),
});

export const collections = {
  clients: clientCollection,
};