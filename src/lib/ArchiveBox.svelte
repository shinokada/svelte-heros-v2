<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.99976 11.25H13.9998M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.24976 12.75C9.24976 12.3358 9.58554 12 9.99976 12H13.9998C14.414 12 14.7498 12.3358 14.7498 12.75C14.7498 13.1642 14.414 13.5 13.9998 13.5H9.99976C9.58554 13.5 9.24976 13.1642 9.24976 12.75Z" fill="${color}"/> `;
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
	export let ariaLabel = 'archive box';
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
