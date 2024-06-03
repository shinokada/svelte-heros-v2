import type { MetaProps } from 'runes-meta-tags';

const title = 'Setting Global Icon - Svelte Heros v2'
const description = 'How to create a global icon using setContext with Svelte Heros v2'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros-v2'
export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};