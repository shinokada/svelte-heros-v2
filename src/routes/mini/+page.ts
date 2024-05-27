import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Mini Icons - Svelte Heros v2',
    description: 'Mini Icons and icon names you can copy',
    og: {
      title: 'Mini Icons - Svelte Heros v2',
      description: 'Mini Icons and icon names you can copy'
    },
    twitter: {
      title: 'Mini Icons - Svelte Heros v2',
      description: 'Mini Icons and icon names you can copy'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
