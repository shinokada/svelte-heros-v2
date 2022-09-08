<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.10
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M4.09835 19.9017C5.56282 21.3661 7.93719 21.3661 9.40165 19.9017L15.8033 13.5M6.75 21C4.67893 21 3 19.3211 3 17.25V4.125C3 3.50368 3.50368 3 4.125 3H9.375C9.99632 3 10.5 3.50368 10.5 4.125V8.1967M6.75 21C8.82107 21 10.5 19.3211 10.5 17.25V8.1967M6.75 21H19.875C20.4963 21 21 20.4963 21 19.875V14.625C21 14.0037 20.4963 13.5 19.875 13.5H15.8033M10.5 8.1967L13.3791 5.31757C13.8185 4.87823 14.5308 4.87823 14.9701 5.31757L18.6824 9.02988C19.1218 9.46922 19.1218 10.1815 18.6824 10.6209L15.8033 13.5M6.75 17.25H6.7575V17.2575H6.75V17.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.125C2.25 3.08947 3.08947 2.25 4.125 2.25H9.375C10.4105 2.25 11.25 3.08947 11.25 4.125V17.25C11.25 19.7353 9.23528 21.75 6.75 21.75C4.26472 21.75 2.25 19.7353 2.25 17.25V4.125ZM6.75 18.375C7.37132 18.375 7.875 17.8713 7.875 17.25C7.875 16.6287 7.37132 16.125 6.75 16.125C6.12868 16.125 5.625 16.6287 5.625 17.25C5.625 17.8713 6.12868 18.375 6.75 18.375Z" fill="${color}"/> <path d="M10.719 21.75H19.8751C20.9106 21.75 21.7501 20.9105 21.7501 19.875V14.625C21.7501 13.5895 20.9106 12.75 19.8751 12.75H19.7353L10.9927 21.4926C10.9035 21.5818 10.8122 21.6676 10.719 21.75Z" fill="${color}"/> <path d="M12.7383 17.6255L19.2125 11.1512C19.9448 10.419 19.9448 9.23179 19.2125 8.49955L15.5002 4.78724C14.768 4.05501 13.5808 4.05501 12.8486 4.78724L12.7498 4.88598V17.25C12.7498 17.3761 12.7459 17.5013 12.7383 17.6255Z" fill="${color}"/> `;
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
	export let ariaLabel = 'swatch';
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
