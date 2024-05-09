import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Mini Icons - Svelte Heros v2',
    description: 'Mini Icons',
    og: {
      title: 'Mini Icons - Svelte Heros v2',
      description: 'Mini Icons',
    },
    twitter: {
      title: 'Mini Icons - Svelte Heros v2',
      description: 'Mini Icons',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
