<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3.79154 2.93825C6.46066 2.48562 9.20314 2.25 12.0001 2.25C14.7969 2.25 17.5394 2.48561 20.2085 2.93822C21.1108 3.09125 21.75 3.87676 21.75 4.77402V5.81802C21.75 6.61367 21.4339 7.37673 20.8713 7.93934L14.6893 14.1213C14.408 14.4026 14.25 14.7842 14.25 15.182V18.1094C14.25 19.2457 13.608 20.2845 12.5916 20.7927L10.8354 21.6708C10.6029 21.7871 10.3268 21.7746 10.1057 21.638C9.88459 21.5013 9.75 21.2599 9.75 21V15.182C9.75 14.7842 9.59196 14.4026 9.31066 14.1213L3.12868 7.93934C2.56607 7.37673 2.25 6.61367 2.25 5.81802V4.77404C2.25 3.87678 2.88917 3.09127 3.79154 2.93825Z" fill="${color}"/> `;
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
  export let ariaLabel = 'funnel';
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
