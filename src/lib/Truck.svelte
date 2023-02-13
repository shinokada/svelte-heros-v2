<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M8.25 18.75C8.25 19.5784 7.57843 20.25 6.75 20.25C5.92157 20.25 5.25 19.5784 5.25 18.75M8.25 18.75C8.25 17.9216 7.57843 17.25 6.75 17.25C5.92157 17.25 5.25 17.9216 5.25 18.75M8.25 18.75H14.25M5.25 18.75H3.375C2.75368 18.75 2.25 18.2463 2.25 17.625V14.2504M19.5 18.75C19.5 19.5784 18.8284 20.25 18 20.25C17.1716 20.25 16.5 19.5784 16.5 18.75M19.5 18.75C19.5 17.9216 18.8284 17.25 18 17.25C17.1716 17.25 16.5 17.9216 16.5 18.75M19.5 18.75L20.625 18.75C21.2463 18.75 21.7537 18.2457 21.7154 17.6256C21.5054 14.218 20.3473 11.0669 18.5016 8.43284C18.1394 7.91592 17.5529 7.60774 16.9227 7.57315H14.25M16.5 18.75H14.25M14.25 7.57315V6.61479C14.25 6.0473 13.8275 5.56721 13.263 5.50863C11.6153 5.33764 9.94291 5.25 8.25 5.25C6.55709 5.25 4.88466 5.33764 3.23698 5.50863C2.67252 5.56721 2.25 6.0473 2.25 6.61479V14.2504M14.25 7.57315V14.2504M14.25 18.75V14.2504M14.25 14.2504H2.25" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M3.375 4.5C2.33947 4.5 1.5 5.33947 1.5 6.375V13.5H13.5V6.375C13.5 5.33947 12.6605 4.5 11.625 4.5H3.375Z" fill="${color}"/> <path d="M13.5 15H1.5V17.625C1.5 18.6605 2.33947 19.5 3.375 19.5H3.75C3.75 17.8431 5.09315 16.5 6.75 16.5C8.40685 16.5 9.75 17.8431 9.75 19.5H12.75C13.1642 19.5 13.5 19.1642 13.5 18.75V15Z" fill="${color}"/> <path d="M8.25 19.5C8.25 18.6716 7.57843 18 6.75 18C5.92157 18 5.25 18.6716 5.25 19.5C5.25 20.3284 5.92157 21 6.75 21C7.57843 21 8.25 20.3284 8.25 19.5Z" fill="${color}"/> <path d="M15.75 6.75C15.3358 6.75 15 7.08579 15 7.5V18.75C15 18.8368 15.0147 18.9202 15.0419 18.9977C15.2809 17.58 16.5143 16.5 18 16.5C19.6442 16.5 20.9794 17.8226 20.9998 19.462C21.8531 19.2869 22.5224 18.5266 22.464 17.5794C22.231 13.799 20.8775 10.321 18.7324 7.4749C18.378 7.00463 17.8265 6.75 17.2621 6.75H15.75Z" fill="${color}"/> <path d="M19.5 19.5C19.5 18.6716 18.8284 18 18 18C17.1716 18 16.5 18.6716 16.5 19.5C16.5 20.3284 17.1716 21 18 21C18.8284 21 19.5 20.3284 19.5 19.5Z" fill="${color}"/> `;
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
export let ariaLabel="truck" </script>

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
