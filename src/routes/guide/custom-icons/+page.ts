import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Heros v2',
    description: 'How to create a custom icons with Svelte Heros v2',
    og: {
      title: 'Custom icons example - Svelte Heros v2',
      description: 'How to create a custom icons with Svelte Heros v2'
    },
    twitter: {
      title: 'Custom icons example - Svelte Heros v2',
      description: 'How to create a custom icons with Svelte Heros v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
