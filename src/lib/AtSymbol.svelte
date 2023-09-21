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

  export let ariaLabel = 'at symbol';
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
      d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM16.5 12C16.5 13.6569 17.5074 15 18.75 15C19.9926 15 21 13.6569 21 12C21 9.69671 20.1213 7.3934 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364M16.5 12V8.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.40403 14.5962C2.86563 12.0578 2.86563 7.94221 5.40403 5.40381C7.94244 2.8654 12.058 2.8654 14.5964 5.40381C15.8658 6.67316 16.5002 8.33534 16.5002 10C16.5002 10.6904 15.9404 11.25 15.25 11.25C14.5596 11.25 14 10.6904 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14C11.4553 14 12.7292 13.2228 13.429 12.0607C13.914 12.4897 14.5516 12.75 15.25 12.75C16.7614 12.75 17.9881 11.5307 17.9999 10.022C18.0001 10.0147 18.0002 10.0074 18.0002 10C18.0002 7.95378 17.219 5.9051 15.6571 4.34315C12.5329 1.21895 7.46757 1.21895 4.34337 4.34315C1.21918 7.46734 1.21918 12.5327 4.34337 15.6569C7.46757 18.781 12.5329 18.781 15.6571 15.6569C15.95 15.364 15.95 14.8891 15.6571 14.5962C15.3642 14.3033 14.8893 14.3033 14.5964 14.5962C12.058 17.1346 7.94244 17.1346 5.40403 14.5962ZM10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.8336 6.16637C14.6118 2.94454 9.38819 2.94454 6.16637 6.16637C2.94454 9.38819 2.94454 14.6118 6.16637 17.8336C9.38819 21.0555 14.6118 21.0555 17.8336 17.8336C18.1265 17.5407 18.6014 17.5407 18.8943 17.8336C19.1872 18.1265 19.1872 18.6014 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C20.798 7.00937 21.75 9.50593 21.75 12C21.75 12.975 21.4545 13.8866 20.941 14.5713C20.4273 15.2563 19.6603 15.75 18.75 15.75C17.8462 15.75 17.0837 15.2633 16.57 14.5859C15.668 16.1767 13.9593 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C13.469 6.75 14.7971 7.35335 15.75 8.32576V8.25C15.75 7.83579 16.0858 7.5 16.5 7.5C16.9142 7.5 17.25 7.83579 17.25 8.25V12C17.25 12.6818 17.4582 13.2703 17.759 13.6713C18.0596 14.0721 18.4177 14.25 18.75 14.25C19.0823 14.25 19.4404 14.0721 19.741 13.6713C20.0418 13.2703 20.25 12.6819 20.25 12C20.25 9.88749 19.4447 7.77743 17.8336 6.16637ZM15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12Z"
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
@prop export let ariaLabel = 'at symbol';
-->
