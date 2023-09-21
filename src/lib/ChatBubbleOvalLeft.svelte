<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline' | 'mini';
    viewBox?: string;
    strokeWidth?: string;
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' = ctx.variation || 'outline';
  export let viewBox: string = ctx.viewBox || '0 0 24 24';
  export let strokeWidth: string = ctx.strokeWidth || '1.5';

  if (variation === 'mini') {
    size = size || '20';
    viewBox = viewBox || '0 0 20 20';
  } else {
    size = size || '24';
    viewBox = viewBox || '0 0 24 24';
  }

  export let ariaLabel = 'chat bubble oval left';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  stroke-width={strokeWidth}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outline'}
    <path
      d="M12 20.25C16.9706 20.25 21 16.5563 21 12C21 7.44365 16.9706 3.75 12 3.75C7.02944 3.75 3 7.44365 3 12C3 14.1036 3.85891 16.0234 5.2728 17.4806C5.70538 17.9265 6.01357 18.5192 5.85933 19.121C5.68829 19.7883 5.368 20.3959 4.93579 20.906C5.0918 20.9339 5.25 20.9558 5.40967 20.9713C5.60376 20.9903 5.80078 21 6 21C7.28201 21 8.47016 20.5979 9.44517 19.9129C10.2551 20.1323 11.1125 20.25 12 20.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 10C2 6.0334 5.69006 3 10 3C14.3099 3 18 6.0334 18 10C18 13.9666 14.3099 17 10 17C9.48658 17 8.98381 16.9577 8.49617 16.8766C7.51177 17.5834 6.3037 18 5 18C4.85237 18 4.70585 17.9947 4.56065 17.9841C4.29888 17.9651 4.06608 17.8107 3.9468 17.5769C3.82753 17.3431 3.83914 17.064 3.97742 16.8409C4.29476 16.329 4.48371 15.7294 4.49899 15.0848C2.97849 13.8253 2 12.0244 2 10Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.33691 21.7178C5.15732 21.7003 4.9793 21.6757 4.80365 21.6442C4.5396 21.597 4.3209 21.4123 4.23008 21.1599C4.13927 20.9075 4.19016 20.6258 4.36357 20.4211C4.76687 19.9451 5.05254 19.3685 5.17822 18.7349C5.20107 18.6196 5.15571 18.4182 4.92371 18.1923C3.2746 16.5871 2.25 14.4086 2.25 12C2.25 6.96934 6.67799 3 12 3C17.322 3 21.75 6.96934 21.75 12C21.75 17.0307 17.322 21 12 21C11.1668 21 10.3569 20.9034 9.58317 20.7213C8.54447 21.3731 7.3153 21.75 6 21.75C5.77647 21.75 5.55516 21.7391 5.33691 21.7178Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'chat bubble oval left';
-->
