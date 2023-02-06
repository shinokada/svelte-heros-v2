<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '2';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M5.25 14.25H18.75M5.25 14.25C3.59315 14.25 2.25 12.9069 2.25 11.25M5.25 14.25C3.59315 14.25 2.25 15.5931 2.25 17.25C2.25 18.9069 3.59315 20.25 5.25 20.25H18.75C20.4069 20.25 21.75 18.9069 21.75 17.25C21.75 15.5931 20.4069 14.25 18.75 14.25M2.25 11.25C2.25 9.59315 3.59315 8.25 5.25 8.25H18.75C20.4069 8.25 21.75 9.59315 21.75 11.25M2.25 11.25C2.25 10.2763 2.5658 9.32893 3.15 8.55L5.7375 5.1C6.37488 4.25016 7.37519 3.75 8.4375 3.75H15.5625C16.6248 3.75 17.6251 4.25016 18.2625 5.1L20.85 8.55C21.4342 9.32893 21.75 10.2763 21.75 11.25M21.75 11.25C21.75 12.9069 20.4069 14.25 18.75 14.25M18.75 17.25H18.7575V17.2575H18.75V17.25ZM18.75 11.25H18.7575V11.2575H18.75V11.25ZM15.75 17.25H15.7575V17.2575H15.75V17.25ZM15.75 11.25H15.7575V11.2575H15.75V11.25Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M5.50701 4.04763C6.07695 3.38269 6.909 3 7.78478 3H16.2151C17.0908 3 17.9229 3.38269 18.4928 4.04763L20.2147 6.05645C19.9819 6.0193 19.7432 6 19.4999 6H4.49992C4.25668 6 4.01794 6.0193 3.78516 6.05645L5.50701 4.04763Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10.5C1.5 8.84315 2.84315 7.5 4.5 7.5H19.5C21.1569 7.5 22.5 8.84315 22.5 10.5C22.5 12.1569 21.1569 13.5 19.5 13.5H4.5C2.84315 13.5 1.5 12.1569 1.5 10.5ZM16.5 10.5C16.5 10.9142 16.1642 11.25 15.75 11.25C15.3358 11.25 15 10.9142 15 10.5C15 10.0858 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 10.0858 16.5 10.5ZM18.75 11.25C19.1642 11.25 19.5 10.9142 19.5 10.5C19.5 10.0858 19.1642 9.75 18.75 9.75C18.3358 9.75 18 10.0858 18 10.5C18 10.9142 18.3358 11.25 18.75 11.25Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C2.84315 15 1.5 16.3431 1.5 18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18C22.5 16.3431 21.1569 15 19.5 15H4.5ZM15.75 18.75C16.1642 18.75 16.5 18.4142 16.5 18C16.5 17.5858 16.1642 17.25 15.75 17.25C15.3358 17.25 15 17.5858 15 18C15 18.4142 15.3358 18.75 15.75 18.75ZM19.5 18C19.5 18.4142 19.1642 18.75 18.75 18.75C18.3358 18.75 18 18.4142 18 18C18 17.5858 18.3358 17.25 18.75 17.25C19.1642 17.25 19.5 17.5858 19.5 18Z" fill="${color}"/> `;
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
  export let ariaLabel = 'server stack';
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
