import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Heros v2',
    description: 'Setting Global Icon using setContext with Svelte Heros v2',
    og: {
      title: 'Setting Global Icon - Svelte Heros v2',
      description: 'Setting Global Icon using setContext with Svelte Heros v2'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Heros v2',
      description: 'Setting Global Icon using setContext with Svelte Heros v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
