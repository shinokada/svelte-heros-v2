<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5C4.58947 1.5 3.75 2.33947 3.75 3.375V20.625C3.75 21.6605 4.58947 22.5 5.625 22.5H18.375C19.4105 22.5 20.25 21.6605 20.25 20.625V12.75C20.25 10.6789 18.5711 9 16.5 9H14.625C13.5895 9 12.75 8.16053 12.75 7.125V5.25C12.75 3.17893 11.0711 1.5 9 1.5H5.625ZM7.5 15C7.5 14.5858 7.83579 14.25 8.25 14.25H15.75C16.1642 14.25 16.5 14.5858 16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75H8.25C7.83579 15.75 7.5 15.4142 7.5 15ZM8.25 17.25C7.83579 17.25 7.5 17.5858 7.5 18C7.5 18.4142 7.83579 18.75 8.25 18.75H12C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25H8.25Z" fill="${color}"/> <path d="M12.9712 1.8159C13.768 2.73648 14.25 3.93695 14.25 5.25V7.125C14.25 7.33211 14.4179 7.5 14.625 7.5H16.5C17.8131 7.5 19.0135 7.98204 19.9341 8.77881C19.0462 5.37988 16.3701 2.70377 12.9712 1.8159Z" fill="${color}"/> `;
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
	export let ariaLabel = 'document text';
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
