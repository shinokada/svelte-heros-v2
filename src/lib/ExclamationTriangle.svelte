<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M11.9998 10.5004V14.2504M2.69653 17.6261C1.83114 19.1261 2.91371 21.0004 4.64544 21.0004H19.3541C21.0858 21.0004 22.1684 19.1261 21.303 17.6261L13.9487 4.87855C13.0828 3.37772 10.9167 3.37772 10.0509 4.87855L2.69653 17.6261ZM11.9998 17.2504H12.0073V17.2579H11.9998V17.2504Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.40123 4.50376C10.5557 2.50265 13.4439 2.50265 14.5983 4.50376L21.9527 17.2513C23.1065 19.2513 21.6631 21.7504 19.3541 21.7504H4.64546C2.33649 21.7504 0.893061 19.2513 2.04691 17.2513L9.40123 4.50376ZM12 9.75037C12.4142 9.75037 12.75 10.0862 12.75 10.5004V14.2504C12.75 14.6646 12.4142 15.0004 12 15.0004C11.5858 15.0004 11.25 14.6646 11.25 14.2504V10.5004C11.25 10.0862 11.5858 9.75037 12 9.75037ZM12 18.0004C12.4142 18.0004 12.75 17.6646 12.75 17.2504C12.75 16.8362 12.4142 16.5004 12 16.5004C11.5858 16.5004 11.25 16.8362 11.25 17.2504C11.25 17.6646 11.5858 18.0004 12 18.0004Z" fill="${color}"/> `;
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
	export let ariaLabel = 'exclamation triangle';
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
