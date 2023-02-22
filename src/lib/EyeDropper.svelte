<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M15 11.25L16.5 12.75L17.25 12V8.75798L19.5264 8.14802C20.019 8.01652 20.4847 7.75778 20.8712 7.37132C22.0428 6.19975 22.0428 4.30025 20.8712 3.12868C19.6996 1.95711 17.8001 1.95711 16.6286 3.12868C16.2421 3.51509 15.9832 3.98069 15.8517 4.47324L15.2416 6.74998H12L11.25 7.49998L12.75 8.99999M15 11.25L6.53033 19.7197C6.19077 20.0592 5.73022 20.25 5.25 20.25C4.76978 20.25 4.30924 20.4408 3.96967 20.7803L3 21.75L2.25 21L3.21967 20.0303C3.55923 19.6908 3.75 19.2302 3.75 18.75C3.75 18.2698 3.94077 17.8092 4.28033 17.4697L12.75 8.99999M15 11.25L12.75 8.99999" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0982 2.59835C17.5627 1.13388 19.9371 1.13388 21.4015 2.59835C22.866 4.06282 22.866 6.43718 21.4015 7.90165C20.9192 8.38401 20.3362 8.7081 19.7198 8.87264L18 9.33348V12C18 12.1989 17.921 12.3897 17.7803 12.5303L17.0303 13.2803C16.7374 13.5732 16.2626 13.5732 15.9697 13.2803L15 12.3107L7.06066 20.25C6.58044 20.7302 5.92913 21 5.25 21C4.9687 21 4.69891 21.1117 4.5 21.3107L3.53033 22.2803C3.23744 22.5732 2.76256 22.5732 2.46967 22.2803L1.71967 21.5303C1.42678 21.2374 1.42678 20.7626 1.71967 20.4697L2.68934 19.5C2.88825 19.3011 3 19.0313 3 18.75C3 18.0709 3.26978 17.4196 3.75 16.9393L11.6893 8.99999L10.7197 8.03031C10.4268 7.73742 10.4268 7.26255 10.7197 6.96966L11.4697 6.21966C11.6103 6.079 11.8011 5.99998 12 5.99998H14.6661L15.127 4.27976C15.2917 3.66322 15.6161 3.08048 16.0982 2.59835ZM12.75 10.0607L4.81066 18C4.61175 18.1989 4.5 18.4687 4.5 18.75C4.5 19.0682 4.44077 19.3803 4.32841 19.6716C4.61967 19.5592 4.93178 19.5 5.25 19.5C5.5313 19.5 5.80109 19.3883 6 19.1893L13.9393 11.25L12.75 10.0607Z" fill="${color}"/> `;
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
  export let ariaLabel = 'eye dropper';
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
