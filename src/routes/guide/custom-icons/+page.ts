import type { MetaProps } from 'runes-meta-tags';

const title = 'Custom icons - Svelte Heros v2'
const description = 'How to create a custom icons with Svelte Heros v2'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros-v2'
export const load = () => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};