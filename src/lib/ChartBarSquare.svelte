<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M7.5 14.25V16.5M10.5 12V16.5M13.5 9.75V16.5M16.5 7.5V16.5M6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM7.5 13.5C7.91421 13.5 8.25 13.8358 8.25 14.25V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25C7.08579 17.25 6.75 16.9142 6.75 16.5V14.25C6.75 13.8358 7.08579 13.5 7.5 13.5ZM11.25 12C11.25 11.5858 10.9142 11.25 10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12V16.5C9.75 16.9142 10.0858 17.25 10.5 17.25C10.9142 17.25 11.25 16.9142 11.25 16.5V12ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V16.5C14.25 16.9142 13.9142 17.25 13.5 17.25C13.0858 17.25 12.75 16.9142 12.75 16.5V9.75C12.75 9.33579 13.0858 9 13.5 9ZM17.25 7.5C17.25 7.08579 16.9142 6.75 16.5 6.75C16.0858 6.75 15.75 7.08579 15.75 7.5V16.5C15.75 16.9142 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5V7.5Z" fill="${color}"/> `;
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
export let ariaLabel="chart bar square" </script>

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
