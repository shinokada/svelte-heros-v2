<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5M13.5 4.5L10.5 1.5M10.5 1.5L7.5 4.5M10.5 1.5L10.5 12.75M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967L14.0303 3.96967C14.3232 4.26256 14.3232 4.73744 14.0303 5.03033C13.7374 5.32322 13.2626 5.32322 12.9697 5.03033L11.25 3.31066V6.75H9.75V3.31066L8.03033 5.03033C7.73744 5.32322 7.26256 5.32322 6.96967 5.03033C6.67678 4.73744 6.67678 4.26256 6.96967 3.96967L9.96967 0.96967Z" fill="${color}"/> <path d="M9.75 6.75V12.75C9.75 13.1642 10.0858 13.5 10.5 13.5C10.9142 13.5 11.25 13.1642 11.25 12.75V6.75H14.25C15.9069 6.75 17.25 8.09315 17.25 9.75V17.25C17.25 18.9069 15.9069 20.25 14.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V9.75C3.75 8.09315 5.09315 6.75 6.75 6.75H9.75Z" fill="${color}"/> <path d="M7.15137 21.75C7.67008 22.6467 8.6396 23.25 9.75002 23.25H17.25C18.9069 23.25 20.25 21.9069 20.25 20.25V12.75C20.25 11.6396 19.6467 10.6701 18.75 10.1514V17.25C18.75 19.7353 16.7353 21.75 14.25 21.75H7.15137Z" fill="${color}"/> `;
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
	export let ariaLabel = 'arrow up on square stack';
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
