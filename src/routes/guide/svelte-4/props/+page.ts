import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Heros v2 v1',
    description: 'How to use props with Svelte Heros v2 v1',
    og: {
      title: 'Props - Svelte Heros v2 v1',
      description: 'How to use props with Svelte Heros v2 v1'
    },
    twitter: {
      title: 'Props - Svelte Heros v2 v1',
      description: 'How to use props with Svelte Heros v2 v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
