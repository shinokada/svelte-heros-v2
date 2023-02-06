<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '2';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM16.5 12C16.5 13.6569 17.5074 15 18.75 15C19.9926 15 21 13.6569 21 12C21 9.69671 20.1213 7.3934 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364M16.5 12V8.25" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8336 6.16637C14.6118 2.94454 9.38819 2.94454 6.16637 6.16637C2.94454 9.38819 2.94454 14.6118 6.16637 17.8336C9.38819 21.0555 14.6118 21.0555 17.8336 17.8336C18.1265 17.5407 18.6014 17.5407 18.8943 17.8336C19.1872 18.1265 19.1872 18.6014 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C20.798 7.00937 21.75 9.50593 21.75 12C21.75 12.975 21.4545 13.8866 20.941 14.5713C20.4273 15.2563 19.6603 15.75 18.75 15.75C17.8462 15.75 17.0837 15.2633 16.57 14.5859C15.668 16.1767 13.9593 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C13.469 6.75 14.7971 7.35335 15.75 8.32576V8.25C15.75 7.83579 16.0858 7.5 16.5 7.5C16.9142 7.5 17.25 7.83579 17.25 8.25V12C17.25 12.6818 17.4582 13.2703 17.759 13.6713C18.0596 14.0721 18.4177 14.25 18.75 14.25C19.0823 14.25 19.4404 14.0721 19.741 13.6713C20.0418 13.2703 20.25 12.6819 20.25 12C20.25 9.88749 19.4447 7.77743 17.8336 6.16637ZM15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12Z" fill="${color}"/> `;
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
  export let ariaLabel = 'at symbol';
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
