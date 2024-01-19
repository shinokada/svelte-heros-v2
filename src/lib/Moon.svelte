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

  export let ariaLabel = 'moon';
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
      d="M21.7519 15.0021C20.597 15.484 19.3296 15.7501 18 15.7501C12.6152 15.7501 8.25 11.3849 8.25 6.00011C8.25 4.67052 8.51614 3.40308 8.99806 2.24817C5.47566 3.71798 3 7.19493 3 11.2501C3 16.6349 7.36522 21.0001 12.75 21.0001C16.8052 21.0001 20.2821 18.5245 21.7519 15.0021Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.45519 2.00395C7.68518 2.18765 7.78646 2.4889 7.71414 2.77423C7.57443 3.32547 7.5 3.90348 7.5 4.49996C7.5 8.36595 10.634 11.5 14.5 11.5C15.6435 11.5 16.721 11.2263 17.6724 10.7417C17.9347 10.608 18.2509 10.6402 18.4809 10.8239C18.7109 11.0076 18.8122 11.3089 18.7399 11.5942C17.8069 15.2755 14.4725 18 10.5 18C5.80558 18 2 14.1944 2 9.49996C2 6.19139 3.89048 3.32567 6.64671 1.92168C6.909 1.78807 7.22519 1.82025 7.45519 2.00395Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M14.438 10.1477C14.6278 9.72286 14.1166 9.36124 13.6899 9.54667C13.0188 9.83824 12.2783 9.9999 11.5 9.9999C8.46243 9.9999 6 7.53747 6 4.4999C6 3.72165 6.16164 2.98114 6.45319 2.31014C6.63861 1.88337 6.27698 1.37223 5.85212 1.56197C3.58205 2.57578 2 4.85312 2 7.49997C2 11.0898 4.91015 14 8.5 14C11.1469 14 13.4243 12.4179 14.438 10.1477Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.52839 1.71786C9.74339 1.93286 9.80731 2.2564 9.69021 2.53701C9.2458 3.60204 9 4.77143 9 6.00013C9 10.9707 13.0294 15.0001 18 15.0001C19.2287 15.0001 20.3981 14.7543 21.4631 14.3099C21.7437 14.1928 22.0673 14.2567 22.2823 14.4717C22.4973 14.6867 22.5612 15.0103 22.4441 15.2909C20.8618 19.0828 17.1183 21.7501 12.75 21.7501C6.95101 21.7501 2.25 17.0491 2.25 11.2501C2.25 6.88184 4.91735 3.13829 8.70924 1.55603C8.98985 1.43894 9.31338 1.50286 9.52839 1.71786Z"
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
@prop export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'moon';
-->
