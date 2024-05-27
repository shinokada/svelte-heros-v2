import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Solid Icons - Svelte Heros v2',
    description: 'Solid Icons and icon names you can copy',
    og: {
      title: 'Solid Icons - Svelte Heros v2',
      description: 'Solid Icons and icon names you can copy'
    },
    twitter: {
      title: 'Solid Icons - Svelte Heros v2',
      description: 'Solid Icons and icon names you can copy'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
