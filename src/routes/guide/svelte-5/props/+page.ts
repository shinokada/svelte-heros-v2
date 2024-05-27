import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Heros v2 v2',
    description: 'How to use props with Svelte Heros v2 v2',
    og: {
      title: 'Props - Svelte Heros v2 v2',
      description: 'How to use props with Svelte Heros v2 v2'
    },
    twitter: {
      title: 'Props - Svelte Heros v2 v2',
      description: 'How to use props with Svelte Heros v2 v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
