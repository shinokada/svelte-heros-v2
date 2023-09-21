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

  export let ariaLabel = 'map';
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
      d="M9 6.75002V15M15 9.00002V17.25M15.5031 20.7485L20.3781 18.311C20.7592 18.1204 21 17.7309 21 17.3047V4.82031C21 3.98401 20.1199 3.44007 19.3719 3.81408L15.5031 5.74847C15.1864 5.90683 14.8136 5.90683 14.4969 5.74847L9.50312 3.25158C9.1864 3.09322 8.8136 3.09322 8.49688 3.25158L3.62188 5.68908C3.24075 5.87965 3 6.26919 3 6.69531V19.1797C3 20.016 3.8801 20.56 4.62811 20.186L8.49688 18.2516C8.8136 18.0932 9.1864 18.0932 9.50312 18.2516L14.4969 20.7485C14.8136 20.9068 15.1864 20.9068 15.5031 20.7485Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.15686 2.1755C7.78961 2.02353 7.37706 2.02353 7.00981 2.1755L2.92647 3.86515C2.3657 4.0972 2 4.64429 2 5.25118V16.1278C2 17.1966 3.08594 17.9225 4.07353 17.5139L7.58333 16.0615L11.8431 17.8242C12.2104 17.9762 12.6229 17.9762 12.9902 17.8242L17.0735 16.1345C17.6343 15.9025 18 15.3554 18 14.7485V3.87187C18 2.80308 16.9141 2.07719 15.9265 2.48584L12.4167 3.93818L8.15686 2.1755ZM7.58008 4.99988C7.99429 4.99988 8.33008 5.33566 8.33008 5.74988V12.2499C8.33008 12.6641 7.99429 12.9999 7.58008 12.9999C7.16586 12.9999 6.83008 12.6641 6.83008 12.2499V5.74988C6.83008 5.33566 7.16586 4.99988 7.58008 4.99988ZM13.1699 7.74988C13.1699 7.33566 12.8341 6.99988 12.4199 6.99988C12.0057 6.99988 11.6699 7.33566 11.6699 7.74988V14.2499C11.6699 14.6641 12.0057 14.9999 12.4199 14.9999C12.8341 14.9999 13.1699 14.6641 13.1699 14.2499V7.74988Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.16147 2.58076C8.68934 2.31683 9.31066 2.31683 9.83853 2.58076L14.8323 5.07765C14.9379 5.13043 15.0621 5.13043 15.1677 5.07765L19.0365 3.14326C20.2832 2.51992 21.75 3.42647 21.75 4.82031V17.3047C21.75 18.0149 21.3487 18.6642 20.7135 18.9818L15.8385 21.4193C15.3107 21.6832 14.6893 21.6832 14.1615 21.4193L9.16771 18.9224C9.06213 18.8696 8.93787 18.8696 8.8323 18.9224L4.96353 20.8568C3.71683 21.4801 2.25 20.5736 2.25 19.1797V6.69531C2.25 5.98512 2.65125 5.33587 3.28647 5.01826L8.16147 2.58076ZM9 6.00002C9.41421 6.00002 9.75 6.3358 9.75 6.75002V15C9.75 15.4142 9.41421 15.75 9 15.75C8.58579 15.75 8.25 15.4142 8.25 15V6.75002C8.25 6.3358 8.58579 6.00002 9 6.00002ZM15.75 9.00002C15.75 8.5858 15.4142 8.25002 15 8.25002C14.5858 8.25002 14.25 8.5858 14.25 9.00002V17.25C14.25 17.6642 14.5858 18 15 18C15.4142 18 15.75 17.6642 15.75 17.25V9.00002Z"
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
@prop export let ariaLabel = 'map';
-->
