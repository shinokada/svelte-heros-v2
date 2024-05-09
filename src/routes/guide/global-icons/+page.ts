import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Global icons example - Svelte Heros v2',
    description: 'Global icons example',
    og: {
      title: 'Global icons example - Svelte Heros v2',
      description: 'Global icons example',
    },
    twitter: {
      title: 'Global icons example - Svelte Heros v2',
      description: 'Global icons example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
