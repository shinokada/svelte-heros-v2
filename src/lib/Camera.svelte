<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="camera" </script>

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
{#if variation === 'outline'}
  <path d="M6.82689 6.1749C6.46581 6.75354 5.86127 7.13398 5.186 7.22994C4.80655 7.28386 4.42853 7.34223 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9.57403C21.75 8.50664 21.0009 7.58043 19.948 7.40498C19.5715 7.34223 19.1934 7.28387 18.814 7.22995C18.1387 7.13398 17.5342 6.75354 17.1731 6.17491L16.3519 4.85889C15.9734 4.25237 15.3294 3.85838 14.6155 3.82005C13.7496 3.77355 12.8775 3.75 12 3.75C11.1225 3.75 10.2504 3.77355 9.3845 3.82005C8.6706 3.85838 8.02658 4.25237 7.64809 4.85889L6.82689 6.1749Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.5 12.75C16.5 15.2353 14.4853 17.25 12 17.25C9.51472 17.25 7.5 15.2353 7.5 12.75C7.5 10.2647 9.51472 8.25 12 8.25C14.4853 8.25 16.5 10.2647 16.5 12.75Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18.75 10.5H18.7575V10.5075H18.75V10.5Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path d="M12 9C9.92893 9 8.25 10.6789 8.25 12.75C8.25 14.8211 9.92893 16.5 12 16.5C14.0711 16.5 15.75 14.8211 15.75 12.75C15.75 10.6789 14.0711 9 12 9Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.34429 3.07113C10.2236 3.02391 11.109 3 12 3C12.891 3 13.7764 3.02391 14.6557 3.07113C15.6233 3.12309 16.4854 3.65612 16.9882 4.46184L17.8094 5.77786C18.0485 6.16099 18.4544 6.42131 18.9195 6.48741C19.3049 6.54218 19.6888 6.60145 20.0713 6.66518C21.5031 6.90378 22.5 8.15785 22.5 9.57403V18C22.5 19.6569 21.1569 21 19.5 21H4.5C2.84315 21 1.5 19.6569 1.5 18V9.57402C1.5 8.15784 2.49686 6.90377 3.92872 6.66517C4.31116 6.60144 4.6951 6.54217 5.08048 6.4874C5.54556 6.42131 5.95152 6.16099 6.19061 5.77785L7.01181 4.46184C7.5146 3.65612 8.37667 3.12309 9.34429 3.07113ZM6.75 12.75C6.75 9.8505 9.1005 7.5 12 7.5C14.8995 7.5 17.25 9.8505 17.25 12.75C17.25 15.6495 14.8995 18 12 18C9.1005 18 6.75 15.6495 6.75 12.75ZM18.75 11.25C19.1642 11.25 19.5 10.9142 19.5 10.5C19.5 10.0858 19.1642 9.75 18.75 9.75C18.3358 9.75 18 10.0858 18 10.5C18 10.9142 18.3358 11.25 18.75 11.25Z" fill="{color}"/> 
{/if}
</svg>


<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop variation: "solid" | "outline" = "outline";
  @prop viewBox: string = '0 0 24 24';
-->