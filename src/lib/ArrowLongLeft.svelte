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

  export let ariaLabel = 'arrow long left';
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
      d="M6.75 15.75L3 12M3 12L6.75 8.25M3 12H21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 10C18 10.4142 17.6642 10.75 17.25 10.75L4.6599 10.75L6.76034 12.7004C7.06387 12.9823 7.08145 13.4568 6.79959 13.7603C6.51774 14.0639 6.04319 14.0815 5.73966 13.7996L2.23966 10.5496C2.08684 10.4077 2 10.2086 2 10C2 9.79145 2.08684 9.59232 2.23966 9.45041L5.73966 6.20041C6.04319 5.91856 6.51774 5.93613 6.79959 6.23966C7.08145 6.5432 7.06387 7.01775 6.76034 7.2996L4.6599 9.25L17.25 9.25C17.6642 9.25 18 9.58579 18 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 8C14 8.41421 13.6642 8.75 13.25 8.75L4.56066 8.75L5.78033 9.96967C6.07322 10.2626 6.07322 10.7374 5.78033 11.0303C5.48744 11.3232 5.01256 11.3232 4.71967 11.0303L2.21967 8.53033C1.92678 8.23744 1.92678 7.76256 2.21967 7.46967L4.71967 4.96967C5.01256 4.67678 5.48744 4.67678 5.78033 4.96967C6.07322 5.26256 6.07322 5.73744 5.78033 6.03033L4.56066 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.28033 7.71967C7.57322 8.01256 7.57322 8.48744 7.28033 8.78033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L7.28033 15.2197C7.57322 15.5126 7.57322 15.9874 7.28033 16.2803C6.98744 16.5732 6.51256 16.5732 6.21967 16.2803L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L6.21967 7.71967C6.51256 7.42678 6.98744 7.42678 7.28033 7.71967Z"
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
@prop export let ariaLabel = 'arrow long left';
-->
