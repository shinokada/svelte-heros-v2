<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.4
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M7.21721 10.9071C6.83295 10.2169 6.096 9.75 5.25 9.75C4.00736 9.75 3 10.7574 3 12C3 13.2426 4.00736 14.25 5.25 14.25C6.096 14.25 6.83295 13.7831 7.21721 13.0929M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071M16.7828 18.4071C16.6026 18.7307 16.5 19.1034 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.904 17.25 17.1671 17.7169 16.7828 18.4071ZM16.7828 5.5929C17.1671 6.28309 17.904 6.75 18.75 6.75C19.9926 6.75 21 5.74264 21 4.5C21 3.25736 19.9926 2.25 18.75 2.25C17.5074 2.25 16.5 3.25736 16.5 4.5C16.5 4.89664 16.6026 5.26931 16.7828 5.5929Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 4.5C15.75 2.84315 17.0931 1.5 18.75 1.5C20.4069 1.5 21.75 2.84315 21.75 4.5C21.75 6.15685 20.4069 7.5 18.75 7.5C17.8933 7.5 17.1212 7.14074 16.5751 6.56624L8.15392 11.2447C8.21665 11.4863 8.25 11.7395 8.25 12C8.25 12.2605 8.21665 12.5137 8.15392 12.7553L16.5751 17.4338C17.1212 16.8593 17.8933 16.5 18.75 16.5C20.4069 16.5 21.75 17.8431 21.75 19.5C21.75 21.1569 20.4069 22.5 18.75 22.5C17.0931 22.5 15.75 21.1569 15.75 19.5C15.75 19.2395 15.7833 18.9863 15.8461 18.7447L7.42488 14.0662C6.87885 14.6407 6.10667 15 5.25 15C3.59315 15 2.25 13.6569 2.25 12C2.25 10.3431 3.59315 9 5.25 9C6.10667 9 6.87885 9.35926 7.42488 9.93377L15.8461 5.25532C15.7833 5.01367 15.75 4.76045 15.75 4.5Z" fill="${color}"/> `;
	$: switch (variation) {
		case 'outline':
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
			break;
		case 'solid':
			svgpath = svgsolid;
			viewBox = '0 0 24 24';
			break;
		default:
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
	}
	export let ariaLabel = 'share';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	fill="none"
	{viewBox}
	stroke-width="2"
	on:click
>
	{@html svgpath}
</svg>
