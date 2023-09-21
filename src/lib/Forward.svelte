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

  export let ariaLabel = 'forward';
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
      d="M3 8.68819C3 7.82439 3.93317 7.28285 4.68316 7.71141L11.7906 11.7728C12.5464 12.2047 12.5464 13.2945 11.7906 13.7264L4.68316 17.7878C3.93317 18.2164 3 17.6748 3 16.811V8.68819Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.75 8.68819C12.75 7.82439 13.6832 7.28285 14.4332 7.71141L21.5406 11.7728C22.2964 12.2047 22.2964 13.2945 21.5406 13.7264L14.4332 17.7878C13.6832 18.2164 12.75 17.6748 12.75 16.811V8.68819Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.28824 4.81895C2.28891 4.20172 1 4.92057 1 6.09515V13.9056C1 15.0802 2.2889 15.7991 3.28824 15.1818L9.61101 11.2766C9.76598 11.1809 9.89564 11.064 10 10.9328V13.9056C10 15.0802 11.2889 15.7991 12.2882 15.1818L18.611 11.2766C19.56 10.6904 19.56 9.31035 18.611 8.72419L12.2882 4.81895C11.2889 4.20172 10 4.92057 10 6.09515V9.06794C9.89564 8.93679 9.76598 8.81991 9.61101 8.72419L3.28824 4.81895Z"
      fill={color}
    />
  {:else}
    <path
      d="M5.05526 7.06036C3.80528 6.34609 2.25 7.24865 2.25 8.68832V16.8112C2.25 18.2508 3.80528 19.1534 5.05526 18.4391L12 14.4707V16.8112C12 18.2508 13.5553 19.1534 14.8053 18.4391L21.9128 14.3777C23.1724 13.6579 23.1724 11.8416 21.9128 11.1218L14.8053 7.06036C13.5553 6.34609 12 7.24865 12 8.68832V11.0288L5.05526 7.06036Z"
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
@prop export let ariaLabel = 'forward';
-->
