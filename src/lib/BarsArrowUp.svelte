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

  export let ariaLabel = 'bars arrow up';
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
      d="M3 4.5H17.25M3 9H12.75M3 13.5H8.25M13.5 12.75L17.25 9M17.25 9L21 12.75M17.25 9V21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 3.75C2 3.33579 2.33579 3 2.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 7.5C2 7.08579 2.33579 6.75 2.75 6.75H9.11474C9.52895 6.75 9.86474 7.08579 9.86474 7.5C9.86474 7.91421 9.52895 8.25 9.11474 8.25H2.75C2.33579 8.25 2 7.91421 2 7.5ZM14 7C14.2086 7 14.4077 7.08684 14.5496 7.23966L17.7996 10.7397C18.0814 11.0432 18.0639 11.5177 17.7603 11.7996C17.4568 12.0814 16.9823 12.0639 16.7004 11.7603L14.75 9.6599L14.75 16.25C14.75 16.6642 14.4142 17 14 17C13.5858 17 13.25 16.6642 13.25 16.25L13.25 9.6599L11.2996 11.7603C11.0177 12.0639 10.5432 12.0814 10.2397 11.7996C9.93613 11.5177 9.91855 11.0432 10.2004 10.7397L13.4504 7.23966C13.5923 7.08684 13.7914 7 14 7ZM2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H6.99999C7.4142 10.5 7.74999 10.8358 7.74999 11.25C7.74999 11.6642 7.4142 12 6.99999 12H2.75C2.33579 12 2 11.6642 2 11.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 4.5C2.25 4.08579 2.58579 3.75 3 3.75H17.25C17.6642 3.75 18 4.08579 18 4.5C18 4.91421 17.6642 5.25 17.25 5.25H3C2.58579 5.25 2.25 4.91421 2.25 4.5ZM16.7197 8.46967C17.0126 8.17678 17.4874 8.17678 17.7803 8.46967L21.5303 12.2197C21.8232 12.5126 21.8232 12.9874 21.5303 13.2803C21.2374 13.5732 20.7626 13.5732 20.4697 13.2803L18 10.8107L18 21C18 21.4142 17.6642 21.75 17.25 21.75C16.8358 21.75 16.5 21.4142 16.5 21L16.5 10.8107L14.0303 13.2803C13.7374 13.5732 13.2626 13.5732 12.9697 13.2803C12.6768 12.9874 12.6768 12.5126 12.9697 12.2197L16.7197 8.46967ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H12.75C13.1642 8.25 13.5 8.58579 13.5 9C13.5 9.41421 13.1642 9.75 12.75 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM2.25 13.5C2.25 13.0858 2.58579 12.75 3 12.75H8.25C8.66421 12.75 9 13.0858 9 13.5C9 13.9142 8.66421 14.25 8.25 14.25H3C2.58579 14.25 2.25 13.9142 2.25 13.5Z"
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
@prop export let ariaLabel = 'bars arrow up';
-->
