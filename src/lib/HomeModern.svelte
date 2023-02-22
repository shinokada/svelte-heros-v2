<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M8.25 21V16.125C8.25 15.5037 8.75368 15 9.375 15H11.625C12.2463 15 12.75 15.5037 12.75 16.125V21M12.75 21H17.25V3.54545M12.75 21H20.25V10.75M2.25 21H3.75M21.75 21H3.75M2.25 9L6.75 7.36364M18.75 3L17.25 3.54545M17.25 9.75L20.25 10.75M21.75 11.25L20.25 10.75M6.75 7.36364V3H3.75V21M6.75 7.36364L17.25 3.54545" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M19.0061 3.70505C19.3954 3.56349 19.5962 3.13317 19.4547 2.7439C19.3131 2.35462 18.8828 2.1538 18.4935 2.29536L6 6.83846V3.00021C6 2.58599 5.66421 2.25021 5.25 2.25021H3.75C3.33579 2.25021 3 2.58599 3 3.00021V7.92937L1.99353 8.29536C1.60426 8.43691 1.40344 8.86724 1.54499 9.25651C1.68655 9.64579 2.11687 9.8466 2.50615 9.70505L19.0061 3.70505Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.01896 11.1147L18 5.66708V9.08858L22.0061 10.5454C22.3954 10.6869 22.5962 11.1172 22.4547 11.5065C22.3131 11.8958 21.8828 12.0966 21.4935 11.955L20.9998 11.7755V20.2502H21.75C22.1642 20.2502 22.5 20.586 22.5 21.0002C22.5 21.4144 22.1642 21.7502 21.75 21.7502H2.25C1.83579 21.7502 1.5 21.4144 1.5 21.0002C1.5 20.586 1.83579 20.2502 2.25 20.2502H3V11.1215L3.01896 11.1147ZM18 20.2502V10.6847L19.4998 11.2301V20.2502H18ZM9 14.2502C8.58579 14.2502 8.25 14.586 8.25 15.0002V19.5002C8.25 19.9144 8.58579 20.2502 9 20.2502H12C12.4142 20.2502 12.75 19.9144 12.75 19.5002V15.0002C12.75 14.586 12.4142 14.2502 12 14.2502H9Z" fill="${color}"/> `;
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
  export let ariaLabel = 'home modern';
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
