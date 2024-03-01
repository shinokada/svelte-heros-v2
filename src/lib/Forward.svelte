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
      d="M3 8.68867C3 7.82487 3.93317 7.28334 4.68316 7.7119L11.7906 11.7733C12.5464 12.2052 12.5464 13.295 11.7906 13.7269L4.68316 17.7883C3.93317 18.2169 3 17.6753 3 16.8115V8.68867Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.75 8.68867C12.75 7.82487 13.6832 7.28334 14.4332 7.7119L21.5406 11.7733C22.2964 12.2052 22.2964 13.295 21.5406 13.7269L14.4332 17.7883C13.6832 18.2169 12.75 17.6753 12.75 16.8115V8.68867Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.28824 4.81846C2.28891 4.20123 1 4.92008 1 6.09466V13.9051C1 15.0797 2.2889 15.7986 3.28824 15.1813L9.61101 11.2761C9.76598 11.1804 9.89564 11.0635 10 10.9323V13.9051C10 15.0797 11.2889 15.7986 12.2882 15.1813L18.611 11.2761C19.56 10.6899 19.56 9.30986 18.611 8.7237L12.2882 4.81846C11.2889 4.20123 10 4.92008 10 6.09466V9.06745C9.89564 8.93631 9.76598 8.81942 9.61101 8.7237L3.28824 4.81846Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.53 3.95633C1.86395 3.54005 1 4.0189 1 4.80433V11.1958C1 11.9813 1.86395 12.4601 2.53 12.0438L7.6432 8.84808C7.80276 8.74836 7.92169 8.61486 8 8.46479V11.1958C8 11.9813 8.86395 12.4601 9.53 12.0438L14.6432 8.84808C15.2699 8.45642 15.2699 7.54376 14.6432 7.15209L9.53 3.95633C8.86395 3.54005 8 4.0189 8 4.80433V7.53538C7.92169 7.38531 7.80276 7.25181 7.6432 7.15209L2.53 3.95633Z"
      fill={color}
    />
  {:else}
    <path
      d="M5.05526 7.06061C3.80528 6.34633 2.25 7.24889 2.25 8.68856V16.8114C2.25 18.2511 3.80528 19.1536 5.05526 18.4394L12 14.4709V16.8114C12 18.2511 13.5553 19.1536 14.8053 18.4394L21.9128 14.3779C23.1724 13.6581 23.1724 11.8418 21.9128 11.122L14.8053 7.06061C13.5553 6.34633 12 7.24889 12 8.68856V11.029L5.05526 7.06061Z"
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
@prop export let ariaLabel = 'forward';
-->
