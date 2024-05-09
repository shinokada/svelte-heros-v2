import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Solid Icons - Svelte Heros v2',
    description: 'Solid Icons',
    og: {
      title: 'Solid Icons - Svelte Heros v2',
      description: 'Solid Icons',
    },
    twitter: {
      title: 'Solid Icons - Svelte Heros v2',
      description: 'Solid Icons',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
