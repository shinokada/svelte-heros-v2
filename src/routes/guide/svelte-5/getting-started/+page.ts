import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Getting started example - Svelte Heros v2',
    description: 'Svelte 5 Getting started example',
    og: {
      title: 'Svelte 5 Getting started example - Svelte Heros v2',
      description: 'Svelte 5 Getting started example'
    },
    twitter: {
      title: 'Svelte 5 Getting started example - Svelte Heros v2',
      description: 'Svelte 5 Getting started example'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
