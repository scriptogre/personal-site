import { defineCollection, z } from "astro:content";

const clientLogoCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      url: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

const clientPortfolioCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      video: z.string(),
      coverPhoto: image(),
    }),
});

export const collections = {
  clientsLogos: clientLogoCollection,
  clientsPortfolio: clientPortfolioCollection,
};
