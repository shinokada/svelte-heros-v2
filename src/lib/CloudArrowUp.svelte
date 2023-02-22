<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M12 16.5L12 9.75M12 9.75L15 12.75M12 9.75L9 12.75M6.75 19.5C4.26472 19.5 2.25 17.4853 2.25 15C2.25 13.0071 3.54555 11.3167 5.3404 10.7252C5.28105 10.4092 5.25 10.0832 5.25 9.75C5.25 6.85051 7.60051 4.5 10.5 4.5C12.9312 4.5 14.9765 6.1526 15.5737 8.39575C15.8654 8.30113 16.1767 8.25 16.5 8.25C18.1569 8.25 19.5 9.59315 19.5 11.25C19.5 11.5981 19.4407 11.9324 19.3316 12.2433C20.7453 12.7805 21.75 14.1479 21.75 15.75C21.75 17.8211 20.0711 19.5 18 19.5H6.75Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.75C7.18629 3.75 4.5 6.43629 4.5 9.75C4.5 9.91685 4.50683 10.0822 4.52024 10.2459C2.73627 11.084 1.5 12.8968 1.5 15C1.5 17.8995 3.85051 20.25 6.75 20.25H18C20.4853 20.25 22.5 18.2353 22.5 15.75C22.5 14.0653 21.5744 12.5981 20.2058 11.827C20.2349 11.6386 20.25 11.4459 20.25 11.25C20.25 9.17893 18.5711 7.5 16.5 7.5C16.3559 7.5 16.2135 7.50816 16.0733 7.52408C15.1893 5.31282 13.028 3.75 10.5 3.75ZM12.5303 9.21967C12.2374 8.92678 11.7626 8.92678 11.4697 9.21967L8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803C8.76256 13.5732 9.23744 13.5732 9.53033 13.2803L11.25 11.5607L11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V11.5607L14.4697 13.2803C14.7626 13.5732 15.2374 13.5732 15.5303 13.2803C15.8232 12.9874 15.8232 12.5126 15.5303 12.2197L12.5303 9.21967Z" fill="${color}"/> `;
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
  export let ariaLabel = 'cloud arrow up';
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
