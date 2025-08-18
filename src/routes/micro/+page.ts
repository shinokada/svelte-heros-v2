import type { MetaProps } from 'runes-meta-tags';

const title = 'Micro Icons - Svelte Heros v2';
const description = 'Easily Find & Copy SVG Icon name for Your Project';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros-v2';
const ogUrl = 'http://localhost:4173/icons';

export const load = () => {
	const pageMetaTags: MetaProps = {
		title,
		description,
		og: {
			title,
			description,
			image: imgUrl,
			url: ogUrl
		},
		twitter: {
			title,
			description,
			image: imgUrl
		}
	};
	return { pageMetaTags };
};
