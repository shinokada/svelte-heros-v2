import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Outline Icons - Svelte Heros v2',
    description: 'Outline Icons',
    og: {
      title: 'Outline Icons - Svelte Heros v2',
      description: 'Outline Icons'
    },
    twitter: {
      title: 'Outline Icons - Svelte Heros v2',
      description: 'Outline Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
