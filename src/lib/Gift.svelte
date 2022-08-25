<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M21 11.25V19.5C21 20.3284 20.3284 21 19.5 21H5.25C4.42157 21 3.75 20.3284 3.75 19.5V11.25M12 4.875C12 3.42525 10.8247 2.25 9.375 2.25C7.92525 2.25 6.75 3.42525 6.75 4.875C6.75 6.32475 7.92525 7.5 9.375 7.5C10.1095 7.5 12 7.5 12 7.5M12 4.875C12 5.59024 12 7.5 12 7.5M12 4.875C12 3.42525 13.1753 2.25 14.625 2.25C16.0747 2.25 17.25 3.42525 17.25 4.875C17.25 6.32475 16.0747 7.5 14.625 7.5C13.8905 7.5 12 7.5 12 7.5M12 7.5V21M3.375 11.25H21.375C21.9963 11.25 22.5 10.7463 22.5 10.125V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H3.375C2.75368 7.5 2.25 8.00368 2.25 8.625V10.125C2.25 10.7463 2.75368 11.25 3.375 11.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M9.375 3C8.33947 3 7.5 3.83947 7.5 4.875C7.5 5.91053 8.33947 6.75 9.375 6.75H11.25V11.25H3.375C2.33947 11.25 1.5 10.4105 1.5 9.375V8.625C1.5 7.58947 2.33947 6.75 3.375 6.75H6.56833C6.20935 6.21371 6 5.5688 6 4.875C6 3.01104 7.51104 1.5 9.375 1.5C10.4352 1.5 11.3813 1.98888 12 2.7535C12.6187 1.98888 13.5648 1.5 14.625 1.5C16.489 1.5 18 3.01104 18 4.875C18 5.5688 17.7906 6.21371 17.4317 6.75H21.375C22.4105 6.75 23.25 7.58947 23.25 8.625V9.375C23.25 10.4105 22.4105 11.25 21.375 11.25H12.75V6.75H14.625C15.6605 6.75 16.5 5.91053 16.5 4.875C16.5 3.83947 15.6605 3 14.625 3C13.5895 3 12.75 3.83947 12.75 4.875V6.75H11.25V4.875C11.25 3.83947 10.4105 3 9.375 3Z" fill="${color}"/> <path d="M11.25 12.75H3V19.5C3 20.7426 4.00736 21.75 5.25 21.75H11.25V12.75Z" fill="${color}"/> <path d="M12.75 12.75V21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V12.75H12.75Z" fill="${color}"/> `;
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
	export let ariaLabel = 'gift';
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
