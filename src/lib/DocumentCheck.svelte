<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M14.5625 12C13.011 13.3694 11.8163 15.1338 11.1358 17.1358L9 15M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.5H9C11.0711 1.5 12.75 3.17893 12.75 5.25V7.125C12.75 8.16053 13.5895 9 14.625 9H16.5C18.5711 9 20.25 10.6789 20.25 12.75V20.625C20.25 21.6605 19.4105 22.5 18.375 22.5H5.625C4.58947 22.5 3.75 21.6605 3.75 20.625V3.375C3.75 2.33947 4.58947 1.5 5.625 1.5ZM15.0588 13.3123C15.3694 13.0382 15.3989 12.5643 15.1248 12.2537C14.8507 11.9431 14.3768 11.9136 14.0662 12.1877C12.7083 13.3862 11.6072 14.8701 10.857 16.5463L9.53033 15.2197C9.23744 14.9268 8.76256 14.9268 8.46967 15.2197C8.17678 15.5126 8.17678 15.9874 8.46967 16.2803L10.6054 18.4161C10.7887 18.5993 11.0535 18.675 11.3059 18.6162C11.5583 18.5574 11.7624 18.3725 11.8459 18.1271C12.4835 16.2513 13.6034 14.5969 15.0588 13.3123Z" fill="${color}"/> <path d="M14.25 5.25C14.25 3.93695 13.768 2.73648 12.9712 1.8159C16.3701 2.70377 19.0462 5.37988 19.9341 8.77881C19.0135 7.98204 17.8131 7.5 16.5 7.5H14.625C14.4179 7.5 14.25 7.33211 14.25 7.125V5.25Z" fill="${color}"/> `;
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
	export let ariaLabel = 'document check';
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
