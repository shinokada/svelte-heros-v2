<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.875C1.5 3.83947 2.33947 3 3.375 3H20.625C21.6605 3 22.5 3.83947 22.5 4.875V14.625C22.5 15.6605 21.6605 16.5 20.625 16.5H3.375C2.33947 16.5 1.5 15.6605 1.5 14.625V4.875ZM8.25 9.75C8.25 7.67893 9.92893 6 12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75ZM18.75 9C18.3358 9 18 9.33579 18 9.75V9.7575C18 10.1717 18.3358 10.5075 18.75 10.5075H18.7575C19.1717 10.5075 19.5075 10.1717 19.5075 9.7575V9.75C19.5075 9.33579 19.1717 9 18.7575 9H18.75ZM4.5 9.75C4.5 9.33579 4.83579 9 5.25 9H5.2575C5.67171 9 6.0075 9.33579 6.0075 9.75V9.7575C6.0075 10.1717 5.67171 10.5075 5.2575 10.5075H5.25C4.83579 10.5075 4.5 10.1717 4.5 9.7575V9.75Z" fill="${color}"/> <path d="M2.25 18C1.83579 18 1.5 18.3358 1.5 18.75C1.5 19.1642 1.83579 19.5 2.25 19.5C7.65005 19.5 12.8802 20.2222 17.8498 21.5749C19.0404 21.899 20.25 21.0168 20.25 19.7551V18.75C20.25 18.3358 19.9142 18 19.5 18H2.25Z" fill="${color}"/> `;
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
	export let ariaLabel = 'banknotes';
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
	on:blur
	on:focus
>
	{@html svgpath}
</svg>
