<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M18 7.5V10.5M18 10.5V13.5M18 10.5H21M18 10.5H15M12.75 6.375C12.75 8.23896 11.239 9.75 9.375 9.75C7.51104 9.75 6 8.23896 6 6.375C6 4.51104 7.51104 3 9.375 3C11.239 3 12.75 4.51104 12.75 6.375ZM3.00092 19.2343C3.00031 19.198 3 19.1615 3 19.125C3 15.6042 5.85418 12.75 9.375 12.75C12.8958 12.75 15.75 15.6042 15.75 19.125V19.1276C15.75 19.1632 15.7497 19.1988 15.7491 19.2343C13.8874 20.3552 11.7065 21 9.375 21C7.04353 21 4.86264 20.3552 3.00092 19.2343Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M5.25 6.375C5.25 4.09683 7.09683 2.25 9.375 2.25C11.6532 2.25 13.5 4.09683 13.5 6.375C13.5 8.65317 11.6532 10.5 9.375 10.5C7.09683 10.5 5.25 8.65317 5.25 6.375Z" fill="${color}"/> <path d="M2.25 19.125C2.25 15.19 5.43997 12 9.375 12C13.31 12 16.5 15.19 16.5 19.125V19.1276C16.5 19.1674 16.4996 19.2074 16.499 19.2469C16.4946 19.5054 16.3574 19.7435 16.1359 19.8768C14.1607 21.0661 11.8466 21.75 9.375 21.75C6.90343 21.75 4.5893 21.0661 2.61406 19.8768C2.39256 19.7435 2.25537 19.5054 2.25103 19.2469C2.25034 19.2064 2.25 19.1657 2.25 19.125Z" fill="${color}"/> <path d="M18.75 7.5C18.75 7.08579 18.4142 6.75 18 6.75C17.5858 6.75 17.25 7.08579 17.25 7.5V9.75H15C14.5858 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 14.5858 11.25 15 11.25H17.25V13.5C17.25 13.9142 17.5858 14.25 18 14.25C18.4142 14.25 18.75 13.9142 18.75 13.5V11.25H21C21.4142 11.25 21.75 10.9142 21.75 10.5C21.75 10.0858 21.4142 9.75 21 9.75H18.75V7.5Z" fill="${color}"/> `;
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
	export let ariaLabel = 'user plus';
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
