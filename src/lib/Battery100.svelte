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

  export let ariaLabel = 'battery 100';
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
      d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M4.5 10.5H18V15H4.5V10.5ZM3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.75 8C4.33579 8 4 8.33579 4 8.75V11.25C4 11.6642 4.33579 12 4.75 12H14.25C14.6642 12 15 11.6642 15 11.25V8.75C15 8.33579 14.6642 8 14.25 8H4.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 7.25C1 6.00736 2.00736 5 3.25 5H15.75C16.9926 5 18 6.00736 18 7.25V8.33535C18.5826 8.54127 19 9.09689 19 9.75V10.25C19 10.9031 18.5826 11.4587 18 11.6646V12.75C18 13.9926 16.9926 15 15.75 15H3.25C2.00736 15 1 13.9926 1 12.75V7.25ZM3.25 6.5C2.83579 6.5 2.5 6.83579 2.5 7.25V12.75C2.5 13.1642 2.83579 13.5 3.25 13.5H15.75C16.1642 13.5 16.5 13.1642 16.5 12.75V7.25C16.5 6.83579 16.1642 6.5 15.75 6.5H3.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 6.75C2.09315 6.75 0.75 8.09315 0.75 9.75V15.75C0.75 17.4069 2.09315 18.75 3.75 18.75H18.75C20.4069 18.75 21.75 17.4069 21.75 15.75V15.7125C22.6058 15.5388 23.25 14.7821 23.25 13.875V11.625C23.25 10.7179 22.6058 9.96123 21.75 9.78751V9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H3.75ZM18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V15.75C20.25 16.5784 19.5784 17.25 18.75 17.25H3.75C2.92157 17.25 2.25 16.5784 2.25 15.75V9.75C2.25 8.92157 2.92157 8.25 3.75 8.25H18.75ZM4.5 9.75C4.08579 9.75 3.75 10.0858 3.75 10.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H18C18.4142 15.75 18.75 15.4142 18.75 15V10.5C18.75 10.0858 18.4142 9.75 18 9.75H4.5Z"
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
@prop export let ariaLabel = 'battery 100';
-->
