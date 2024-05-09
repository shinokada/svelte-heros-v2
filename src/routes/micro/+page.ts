import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Micro Icons - Svelte Heros v2',
    description: 'Micro Icons',
    og: {
      title: 'Micro Icons - Svelte Heros v2',
      description: 'Micro Icons',
    },
    twitter: {
      title: 'Micro Icons - Svelte Heros v2',
      description: 'Micro Icons',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
