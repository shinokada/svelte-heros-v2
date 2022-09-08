<script lang="ts">
	// https://github.com/shinokada/svelte-heros-v2
	// heroicons v2.0.4
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M21.75 17.25V17.0223C21.75 16.6753 21.7099 16.3294 21.6304 15.9916L19.3622 6.35199C19.0035 4.82745 17.6431 3.75 16.077 3.75H7.92305C6.35688 3.75 4.99648 4.82745 4.63777 6.35199L2.36962 15.9916C2.29014 16.3294 2.25 16.6753 2.25 17.0223V17.25M21.75 17.25C21.75 18.9069 20.4069 20.25 18.75 20.25H5.25C3.59315 20.25 2.25 18.9069 2.25 17.25M21.75 17.25C21.75 15.5931 20.4069 14.25 18.75 14.25H5.25C3.59315 14.25 2.25 15.5931 2.25 17.25M18.75 17.25H18.7575V17.2575H18.75V17.25ZM15.75 17.25H15.7575V17.2575H15.75V17.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M4.07993 5.22701C4.43013 3.91375 5.61948 3 6.97863 3H17.0214C18.3805 3 19.5699 3.91375 19.9201 5.22701L22.0338 13.1535C21.1346 12.4318 19.9927 12 18.75 12H5.25C4.00727 12 2.86538 12.4318 1.96619 13.1535L4.07993 5.22701Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 13.5C3.17893 13.5 1.5 15.1789 1.5 17.25C1.5 19.3211 3.17893 21 5.25 21H18.75C20.8211 21 22.5 19.3211 22.5 17.25C22.5 15.1789 20.8211 13.5 18.75 13.5H5.25ZM15.75 18C16.1642 18 16.5 17.6642 16.5 17.25C16.5 16.8358 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.8358 15 17.25C15 17.6642 15.3358 18 15.75 18ZM19.5 17.25C19.5 17.6642 19.1642 18 18.75 18C18.3358 18 18 17.6642 18 17.25C18 16.8358 18.3358 16.5 18.75 16.5C19.1642 16.5 19.5 16.8358 19.5 17.25Z" fill="${color}"/> `;
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
	export let ariaLabel = 'server';
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
