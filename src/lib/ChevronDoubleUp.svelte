<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M4.5 12.75L12 5.25L19.5 12.75M4.5 18.75L12 11.25L19.5 18.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L20.0303 12.2197C20.3232 12.5126 20.3232 12.9874 20.0303 13.2803C19.7374 13.5732 19.2626 13.5732 18.9697 13.2803L12 6.31066L5.03033 13.2803C4.73744 13.5732 4.26256 13.5732 3.96967 13.2803C3.67678 12.9874 3.67678 12.5126 3.96967 12.2197L11.4697 4.71967ZM12 12.3107L5.03033 19.2803C4.73744 19.5732 4.26256 19.5732 3.96967 19.2803C3.67678 18.9874 3.67678 18.5126 3.96967 18.2197L11.4697 10.7197C11.7626 10.4268 12.2374 10.4268 12.5303 10.7197L20.0303 18.2197C20.3232 18.5126 20.3232 18.9874 20.0303 19.2803C19.7374 19.5732 19.2626 19.5732 18.9697 19.2803L12 12.3107Z" fill="${color}"/> `;
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
	export let ariaLabel = 'chevron double up';
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
