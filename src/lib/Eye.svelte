<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '2';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M2.03556 12.3224C1.96648 12.1151 1.96642 11.8907 2.03538 11.6834C3.42374 7.50972 7.3608 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5762 16.4903 16.6391 19.5 11.9991 19.5C7.36121 19.5 3.42565 16.4931 2.03556 12.3224Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00001 13.6569 9.00001 12C9.00001 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.32341 11.4467C2.81066 6.97571 7.02791 3.75 12.0005 3.75C16.9708 3.75 21.1864 6.97271 22.6755 11.4405C22.7959 11.8015 22.796 12.1922 22.6759 12.5533C21.1886 17.0243 16.9714 20.25 11.9988 20.25C7.02847 20.25 2.81284 17.0273 1.32374 12.5595C1.2034 12.1985 1.20328 11.8078 1.32341 11.4467ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12Z" fill="${color}"/> `;
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
  export let ariaLabel = 'eye';
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
