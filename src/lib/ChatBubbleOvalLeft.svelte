<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="chat bubble oval left" </script>

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
  <path d="M12 20.25C16.9706 20.25 21 16.5563 21 12C21 7.44365 16.9706 3.75 12 3.75C7.02944 3.75 3 7.44365 3 12C3 14.1036 3.85891 16.0234 5.2728 17.4806C5.70538 17.9265 6.01357 18.5192 5.85933 19.121C5.68829 19.7883 5.368 20.3959 4.93579 20.906C5.0918 20.9339 5.25 20.9558 5.40967 20.9713C5.60376 20.9903 5.80078 21 6 21C7.28201 21 8.47016 20.5979 9.44517 19.9129C10.2551 20.1323 11.1125 20.25 12 20.25Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33691 21.7178C5.15732 21.7003 4.9793 21.6757 4.80365 21.6442C4.5396 21.597 4.3209 21.4123 4.23008 21.1599C4.13927 20.9075 4.19016 20.6258 4.36357 20.4211C4.76687 19.9451 5.05254 19.3685 5.17822 18.7349C5.20107 18.6196 5.15571 18.4182 4.92371 18.1923C3.2746 16.5871 2.25 14.4086 2.25 12C2.25 6.96934 6.67799 3 12 3C17.322 3 21.75 6.96934 21.75 12C21.75 17.0307 17.322 21 12 21C11.1668 21 10.3569 20.9034 9.58317 20.7213C8.54447 21.3731 7.3153 21.75 6 21.75C5.77647 21.75 5.55516 21.7391 5.33691 21.7178Z" fill="{color}"/> 
{/if}
</svg>
