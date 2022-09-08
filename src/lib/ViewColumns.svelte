<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.4
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M9 4.5V19.5M15 4.5V19.5M4.125 19.5H19.875C20.4963 19.5 21 18.9963 21 18.375V5.625C21 5.00368 20.4963 4.5 19.875 4.5H4.125C3.50368 4.5 3 5.00368 3 5.625V18.375C3 18.9963 3.50368 19.5 4.125 19.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M15 3.75H9V20.25H15V3.75Z" fill="${color}"/> <path d="M16.5 20.25H19.875C20.9105 20.25 21.75 19.4105 21.75 18.375V5.625C21.75 4.58947 20.9105 3.75 19.875 3.75H16.5V20.25Z" fill="${color}"/> <path d="M4.125 3.75H7.5V20.25H4.125C3.08947 20.25 2.25 19.4105 2.25 18.375V5.625C2.25 4.58947 3.08947 3.75 4.125 3.75Z" fill="${color}"/> `;
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
export let ariaLabel="view columns" </script>

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
