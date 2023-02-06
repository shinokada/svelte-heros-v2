<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '2';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M3 7.5L7.5 3M7.5 3L12 7.5M7.5 3V16.5M21 16.5L16.5 21M16.5 21L12 16.5M16.5 21L16.5 7.5" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.96967 2.46967C7.26256 2.17678 7.73744 2.17678 8.03033 2.46967L12.5303 6.96967C12.8232 7.26256 12.8232 7.73744 12.5303 8.03033C12.2374 8.32322 11.7626 8.32322 11.4697 8.03033L8.25 4.81066V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25C7.08579 17.25 6.75 16.9142 6.75 16.5V4.81066L3.53033 8.03033C3.23744 8.32322 2.76256 8.32322 2.46967 8.03033C2.17678 7.73744 2.17678 7.26256 2.46967 6.96967L6.96967 2.46967ZM16.5 6.75C16.9142 6.75 17.25 7.08579 17.25 7.5L17.25 19.1893L20.4697 15.9697C20.7626 15.6768 21.2374 15.6768 21.5303 15.9697C21.8232 16.2626 21.8232 16.7374 21.5303 17.0303L17.0303 21.5303C16.8897 21.671 16.6989 21.75 16.5 21.75C16.3011 21.75 16.1103 21.671 15.9697 21.5303L11.4697 17.0303C11.1768 16.7374 11.1768 16.2626 11.4697 15.9697C11.7626 15.6768 12.2374 15.6768 12.5303 15.9697L15.75 19.1893L15.75 7.5C15.75 7.08579 16.0858 6.75 16.5 6.75Z" fill="${color}"/> `;
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
  export let ariaLabel = 'arrows up down';
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
