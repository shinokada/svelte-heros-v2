<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline' | 'mini' | 'micro';
    viewBox?: string;
    strokeWidth?: string;
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
  export let viewBox: string = ctx.viewBox || '0 0 24 24';
  export let strokeWidth: string = ctx.strokeWidth || '1.5';

  if (variation === 'mini') {
    size = size || '20';
    viewBox = viewBox || '0 0 20 20';
  } else if (variation === 'micro') {
    size = size || '16';
    viewBox = viewBox || '0 0 16 16';
  } else {
    size = size || '24';
    viewBox = viewBox || '0 0 24 24';
  }

  export let ariaLabel = 'arrow up on square stack';
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
      d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5M13.5 4.5L10.5 1.5M10.5 1.5L7.5 4.5M10.5 1.5L10.5 12.75M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.75 6L8.75 6V10.25C8.75 10.6642 8.41421 11 8 11C7.58579 11 7.25 10.6642 7.25 10.25V6L8.74999 6V3.70447L9.69252 4.75172C9.96962 5.05961 10.4438 5.08456 10.7517 4.80747C11.0596 4.53038 11.0846 4.05616 10.8075 3.74828L8.55747 1.24828C8.41523 1.09024 8.21261 1 7.99999 1C7.78738 1 7.58476 1.09024 7.44252 1.24828L5.19252 3.74828C4.91543 4.05616 4.94039 4.53038 5.24827 4.80747C5.55615 5.08456 6.03037 5.05961 6.30746 4.75172L7.24999 3.70447V6H5.25C4.00736 6 3 7.00736 3 8.25V12.75C3 13.9926 4.00736 15 5.25 15H10.75C11.9926 15 13 13.9926 13 12.75V8.25C13 7.00736 11.9926 6 10.75 6ZM7 16.75V16.5H10.75C12.8211 16.5 14.5 14.8211 14.5 12.75V10H14.75C15.9926 10 17 11.0074 17 12.25V16.75C17 17.9926 15.9926 19 14.75 19H9.25C8.00736 19 7 17.9926 7 16.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M5.26756 14C5.61337 14.5978 6.25972 15 7 15H11C12.1046 15 13 14.1046 13 13V10C13 9.25972 12.5978 8.61337 12 8.26756V11C12 12.6569 10.6569 14 9 14H5.26756Z"
      fill={color}
    />
    <path
      d="M6.25 6H7.75L7.75 3.56066L8.96967 4.78033C9.26256 5.07322 9.73744 5.07322 10.0303 4.78033C10.3232 4.48744 10.3232 4.01256 10.0303 3.71967L7.53033 1.21967C7.23744 0.926777 6.76256 0.926777 6.46967 1.21967L3.96967 3.71967C3.67678 4.01256 3.67678 4.48744 3.96967 4.78033C4.26256 5.07322 4.73744 5.07322 5.03033 4.78033L6.25 3.56066L6.25 6Z"
      fill={color}
    />
    <path
      d="M6.25 8.75C6.25 9.16421 6.58579 9.5 7 9.5C7.41421 9.5 7.75 9.16421 7.75 8.75L7.75 6H9C10.1046 6 11 6.89543 11 8V11C11 12.1046 10.1046 13 9 13H5C3.89543 13 3 12.1046 3 11V8C3 6.89543 3.89543 6 5 6H6.25L6.25 8.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967L14.0303 3.96967C14.3232 4.26256 14.3232 4.73744 14.0303 5.03033C13.7374 5.32322 13.2626 5.32322 12.9697 5.03033L11.25 3.31066V6.75H9.75V3.31066L8.03033 5.03033C7.73744 5.32322 7.26256 5.32322 6.96967 5.03033C6.67678 4.73744 6.67678 4.26256 6.96967 3.96967L9.96967 0.96967Z"
      fill={color}
    />
    <path
      d="M9.75 6.75V12.75C9.75 13.1642 10.0858 13.5 10.5 13.5C10.9142 13.5 11.25 13.1642 11.25 12.75V6.75H14.25C15.9069 6.75 17.25 8.09315 17.25 9.75V17.25C17.25 18.9069 15.9069 20.25 14.25 20.25H6.75C5.09315 20.25 3.75 18.9069 3.75 17.25V9.75C3.75 8.09315 5.09315 6.75 6.75 6.75H9.75Z"
      fill={color}
    />
    <path
      d="M7.15137 21.75C7.67008 22.6467 8.6396 23.25 9.75002 23.25H17.25C18.9069 23.25 20.25 21.9069 20.25 20.25V12.75C20.25 11.6396 19.6467 10.6701 18.75 10.1514V17.25C18.75 19.7353 16.7353 21.75 14.25 21.75H7.15137Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'arrow up on square stack';
-->
