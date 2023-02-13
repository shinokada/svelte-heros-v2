<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M6 3C4.34315 3 3 4.34315 3 6V7.5C3 7.91421 3.33579 8.25 3.75 8.25C4.16421 8.25 4.5 7.91421 4.5 7.5V6C4.5 5.17157 5.17157 4.5 6 4.5H7.5C7.91421 4.5 8.25 4.16421 8.25 3.75C8.25 3.33579 7.91421 3 7.5 3H6Z" fill="${color}"/> <path d="M16.5 3C16.0858 3 15.75 3.33579 15.75 3.75C15.75 4.16421 16.0858 4.5 16.5 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V7.5C19.5 7.91421 19.8358 8.25 20.25 8.25C20.6642 8.25 21 7.91421 21 7.5V6C21 4.34315 19.6569 3 18 3H16.5Z" fill="${color}"/> <path d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="${color}"/> <path d="M4.5 16.5C4.5 16.0858 4.16421 15.75 3.75 15.75C3.33579 15.75 3 16.0858 3 16.5V18C3 19.6569 4.34315 21 6 21H7.5C7.91421 21 8.25 20.6642 8.25 20.25C8.25 19.8358 7.91421 19.5 7.5 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V16.5Z" fill="${color}"/> <path d="M21 16.5C21 16.0858 20.6642 15.75 20.25 15.75C19.8358 15.75 19.5 16.0858 19.5 16.5V18C19.5 18.8284 18.8284 19.5 18 19.5H16.5C16.0858 19.5 15.75 19.8358 15.75 20.25C15.75 20.6642 16.0858 21 16.5 21H18C19.6569 21 21 19.6569 21 18V16.5Z" fill="${color}"/> `;
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
export let ariaLabel="viewfinder circle" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none" 
 {viewBox}
  stroke-width={strokeWidth}
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
