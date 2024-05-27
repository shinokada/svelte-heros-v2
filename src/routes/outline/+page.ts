import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Outline Icons - Svelte Heros v2',
    description: 'Outline Icons and icon names you can copy',
    og: {
      title: 'Outline Icons - Svelte Heros v2',
      description: 'Outline Icons and icon names you can copy'
    },
    twitter: {
      title: 'Outline Icons - Svelte Heros v2',
      description: 'Outline Icons and icon names you can copy'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
