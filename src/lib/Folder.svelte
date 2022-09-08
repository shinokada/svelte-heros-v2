<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M2.25 12.75V12C2.25 10.7574 3.25736 9.75 4.5 9.75H19.5C20.7426 9.75 21.75 10.7574 21.75 12V12.75M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V13.5C22.5 11.8431 21.1569 10.5 19.5 10.5H4.5C2.84315 10.5 1.5 11.8431 1.5 13.5V18C1.5 19.6569 2.84315 21 4.5 21H19.5Z" fill="${color}"/> <path d="M1.5 10.1458V6C1.5 4.34315 2.84315 3 4.5 3H9.87868C10.4754 3 11.0477 3.23705 11.4697 3.65901L13.591 5.78033C13.7316 5.92098 13.9224 6 14.1213 6H19.5C21.1569 6 22.5 7.34315 22.5 9V10.1458C21.7039 9.43328 20.6525 9 19.5 9H4.5C3.34747 9 2.29613 9.43328 1.5 10.1458Z" fill="${color}"/> `;
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
	export let ariaLabel = 'folder';
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
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:mouseout
>
	{@html svgpath}
</svg>
