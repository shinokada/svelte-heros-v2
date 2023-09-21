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

  export let ariaLabel = 'currency pound';
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
      d="M14.1213 7.62877C12.9497 6.45719 11.0503 6.45719 9.87868 7.62877C9.37424 8.13321 9.08699 8.7726 9.01694 9.43073C8.9944 9.64251 9.01512 9.85582 9.04524 10.0667L9.5512 13.6084C9.68065 14.5146 9.5307 15.4386 9.12135 16.2573L9 16.5L10.5385 15.9872C11.0003 15.8332 11.4997 15.8332 11.9615 15.9872L12.6158 16.2053C13.182 16.394 13.7999 16.3501 14.3336 16.0832L15 15.75M8.25 12H12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.73223 6.23223C9.70854 5.25592 11.2915 5.25592 12.2678 6.23223C12.5607 6.52513 13.0355 6.52513 13.3284 6.23223C13.6213 5.93934 13.6213 5.46447 13.3284 5.17157C11.7663 3.60948 9.23367 3.60948 7.67157 5.17157C6.89067 5.95247 6.5 6.97747 6.5 8V8.16481C6.5 8.52945 6.53382 8.89272 6.60072 9.25H6.25C5.83579 9.25 5.5 9.58579 5.5 10C5.5 10.4142 5.83579 10.75 6.25 10.75H6.98724C7.175 11.782 7.05016 12.853 6.61952 13.8219L6.56464 13.9454C6.44963 14.2042 6.49018 14.5057 6.66948 14.7249C6.84878 14.9441 7.13625 15.0436 7.4127 14.9821L8.68531 14.6993C9.21441 14.5818 9.76361 14.589 10.2894 14.7204C11.0842 14.9191 11.9158 14.9191 12.7106 14.7204L13.6819 14.4776C14.0837 14.3771 14.3281 13.9699 14.2276 13.5681C14.1271 13.1663 13.7199 12.9219 13.3181 13.0224L12.3468 13.2652C11.7908 13.4042 11.2092 13.4042 10.6532 13.2652C9.91296 13.0802 9.14026 13.0673 8.39452 13.2275C8.58441 12.4159 8.62237 11.5757 8.5063 10.75H9.75C10.1642 10.75 10.5 10.4142 10.5 10C10.5 9.58579 10.1642 9.25 9.75 9.25H8.13603C8.0458 8.89574 8 8.53121 8 8.16481V8C8 7.35903 8.24393 6.72054 8.73223 6.23223Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.76273 9.51002C9.81529 9.01621 10.0302 8.53785 10.409 8.15901C11.2877 7.28033 12.7123 7.28033 13.591 8.15901C13.8839 8.4519 14.3588 8.4519 14.6517 8.15901C14.9445 7.86612 14.9445 7.39124 14.6517 7.09835C13.1872 5.63388 10.8128 5.63388 9.34835 7.09835C8.7183 7.7284 8.3587 8.52881 8.27116 9.35126C8.23849 9.6582 8.27044 9.94628 8.30277 10.1726L8.45668 11.25H8.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75H8.67097L8.80874 13.7144C8.91661 14.4695 8.79165 15.2396 8.45053 15.9218L8.32918 16.1645C8.19352 16.4358 8.23466 16.7621 8.43341 16.9913C8.63216 17.2205 8.94939 17.3074 9.23717 17.2114L10.7757 16.6986C11.0836 16.596 11.4164 16.596 11.7243 16.6986L12.3787 16.9167C13.1335 17.1683 13.9573 17.1098 14.669 16.7539L15.3354 16.4207C15.7059 16.2355 15.8561 15.785 15.6708 15.4145C15.4856 15.044 15.0351 14.8939 14.6646 15.0791L13.9982 15.4123C13.6424 15.5902 13.2304 15.6195 12.853 15.4937L12.1987 15.2756C11.5829 15.0703 10.9171 15.0703 10.3013 15.2756L10.2401 15.296C10.3601 14.7089 10.3794 14.1022 10.2937 13.5023L10.1862 12.75H12C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25H9.97191L9.7877 9.9605C9.7598 9.76518 9.75032 9.62664 9.76273 9.51002Z"
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
@prop export let ariaLabel = 'currency pound';
-->
