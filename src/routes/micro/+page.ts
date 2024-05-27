import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Micro Icons - Svelte Heros v2',
    description: 'Micro Icons and icon names you can copy',
    og: {
      title: 'Micro Icons - Svelte Heros v2',
      description: 'Micro Icons and icon names you can copy'
    },
    twitter: {
      title: 'Micro Icons - Svelte Heros v2',
      description: 'Micro Icons and icon names you can copy'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
