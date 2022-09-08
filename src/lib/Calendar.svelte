<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z" fill="${color}"/> `;
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
	export let ariaLabel = 'calendar';
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
