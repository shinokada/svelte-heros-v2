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

  export let ariaLabel = 'speaker x mark';
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
      d="M17.25 9.75041L19.5 12.0004M19.5 12.0004L21.75 14.2504M19.5 12.0004L21.75 9.75041M19.5 12.0004L17.25 14.2504M6.75 8.25041L11.4697 3.53074C11.9421 3.05827 12.75 3.3929 12.75 4.06107V19.9398C12.75 20.6079 11.9421 20.9426 11.4697 20.4701L6.75 15.7504H4.50905C3.62971 15.7504 2.8059 15.2439 2.57237 14.3962C2.36224 13.6334 2.25 12.83 2.25 12.0004C2.25 11.1708 2.36224 10.3675 2.57237 9.60465C2.8059 8.75689 3.62971 8.25041 4.50905 8.25041H6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M9.54747 3.06153C9.82215 3.18021 10 3.4508 10 3.75002V16.25C10 16.5492 9.82215 16.8198 9.54747 16.9385C9.2728 17.0572 8.95387 17.0012 8.73598 16.7962L4.70257 13H3.16724C2.85725 13 2.5792 12.8093 2.46756 12.5201C2.16534 11.7372 2 10.887 2 10C2 9.11302 2.16534 8.26287 2.46756 7.47993C2.5792 7.19074 2.85725 7.00002 3.16724 7.00002H4.70257L8.73598 3.20387C8.95387 2.99879 9.2728 2.94286 9.54747 3.06153Z"
      fill={color}
    />
    <path
      d="M13.2803 7.2197C12.9874 6.92681 12.5126 6.92681 12.2197 7.2197C11.9268 7.51259 11.9268 7.98747 12.2197 8.28036L13.9393 10L12.2197 11.7197C11.9268 12.0126 11.9268 12.4875 12.2197 12.7804C12.5126 13.0733 12.9874 13.0733 13.2803 12.7804L15 11.0607L16.7197 12.7804C17.0126 13.0733 17.4874 13.0733 17.7803 12.7804C18.0732 12.4875 18.0732 12.0126 17.7803 11.7197L16.0607 10L17.7803 8.28036C18.0732 7.98747 18.0732 7.51259 17.7803 7.2197C17.4874 6.92681 17.0126 6.92681 16.7197 7.2197L15 8.93937L13.2803 7.2197Z"
      fill={color}
    />
  {:else}
    <path
      d="M13.5 4.06063C13.5 2.72427 11.8843 2.05501 10.9393 2.99996L6.43934 7.49997H4.50905C3.36772 7.49997 2.19106 8.1644 1.8493 9.40502C1.62147 10.2321 1.5 11.1024 1.5 12C1.5 12.8975 1.62147 13.7678 1.8493 14.5949C2.19106 15.8355 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.9449 13.5 21.2757 13.5 19.9393V4.06063Z"
      fill={color}
    />
    <path
      d="M17.7803 9.21962C17.4874 8.92673 17.0126 8.92673 16.7197 9.21962C16.4268 9.51252 16.4268 9.98739 16.7197 10.2803L18.4393 12L16.7197 13.7196C16.4268 14.0125 16.4268 14.4874 16.7197 14.7803C17.0126 15.0732 17.4874 15.0732 17.7803 14.7803L19.5 13.0606L21.2197 14.7803C21.5126 15.0732 21.9874 15.0732 22.2803 14.7803C22.5732 14.4874 22.5732 14.0125 22.2803 13.7196L20.5607 12L22.2803 10.2803C22.5732 9.98739 22.5732 9.51252 22.2803 9.21962C21.9874 8.92673 21.5126 8.92673 21.2197 9.21962L19.5 10.9393L17.7803 9.21962Z"
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
@prop export let ariaLabel = 'speaker x mark';
-->
