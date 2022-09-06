<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.4
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M4.5 12.75L10.5 18.75L19.5 5.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M19.916 4.62604C20.2607 4.85581 20.3538 5.32146 20.124 5.6661L11.124 19.1661C10.9994 19.3531 10.7975 19.4743 10.5739 19.4964C10.3503 19.5186 10.1286 19.4393 9.96967 19.2804L3.96967 13.2804C3.67678 12.9875 3.67678 12.5126 3.96967 12.2197C4.26256 11.9269 4.73744 11.9269 5.03033 12.2197L10.3834 17.5729L18.876 4.83405C19.1057 4.48941 19.5714 4.39628 19.916 4.62604Z" fill="${color}"/> `;
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
	export let ariaLabel = 'check';
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
