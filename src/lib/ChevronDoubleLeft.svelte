<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M18.75 19.5L11.25 12L18.75 4.5M12.75 19.5L5.25 12L12.75 4.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2803 3.96967C13.5732 4.26256 13.5732 4.73744 13.2803 5.03033L6.31066 12L13.2803 18.9697C13.5732 19.2626 13.5732 19.7374 13.2803 20.0303C12.9874 20.3232 12.5126 20.3232 12.2197 20.0303L4.71967 12.5303C4.42678 12.2374 4.42678 11.7626 4.71967 11.4697L12.2197 3.96967C12.5126 3.67678 12.9874 3.67678 13.2803 3.96967ZM19.2803 3.96967C19.5732 4.26256 19.5732 4.73744 19.2803 5.03033L12.3107 12L19.2803 18.9697C19.5732 19.2626 19.5732 19.7374 19.2803 20.0303C18.9874 20.3232 18.5126 20.3232 18.2197 20.0303L10.7197 12.5303C10.4268 12.2374 10.4268 11.7626 10.7197 11.4697L18.2197 3.96967C18.5126 3.67678 18.9874 3.67678 19.2803 3.96967Z" fill="${color}"/> `;
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
  export let ariaLabel = 'chevron double left';
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
