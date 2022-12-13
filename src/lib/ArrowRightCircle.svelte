<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12C16.5 11.8011 16.421 11.6103 16.2803 11.4697L13.2803 8.46967C12.9874 8.17678 12.5126 8.17678 12.2197 8.46967C11.9268 8.76256 11.9268 9.23744 12.2197 9.53033L13.9393 11.25L8.25 11.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75L13.9393 12.75L12.2197 14.4697C11.9268 14.7626 11.9268 15.2374 12.2197 15.5303C12.5126 15.8232 12.9874 15.8232 13.2803 15.5303L16.2803 12.5303Z" fill="${color}"/> `;
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
	export let ariaLabel = 'arrow right circle';
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
