<script lang="ts">
  import { getContext } from 'svelte';

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline' | 'mini' | 'micro';
    strokeWidth?: string;
    withEvents?: boolean;
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
  export let strokeWidth: string = ctx.strokeWidth || '1.5';
  export let withEvents: boolean = ctx.withEvents || false;
  export let title: TitleType = {};
  export let desc: DescType = {};
  export let ariaLabel: string = 'academic cap';

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  let hasDescription = false;
  let viewBox: string = '';

  function updateHasDescription() {
    hasDescription = !!(title?.id || desc?.id);
  }
  updateHasDescription();

  $: {
    updateHasDescription();

    if (variation === 'mini') {
      size = size || '20';
      viewBox = '0 0 20 20';
    } else if (variation === 'micro') {
      size = size || '16';
      viewBox = '0 0 16 16';
    } else {
      size = size || '24';
      viewBox = '0 0 24 24';
    }
  }
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
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
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    {#if variation === 'outline'}
      <path
        d="M4.5 5.25L12 12.75L19.5 5.25M4.5 11.25L12 18.75L19.5 11.25"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.46967 15.2803C9.76256 15.5732 10.2374 15.5732 10.5303 15.2803L14.7803 11.0303C15.0732 10.7374 15.0732 10.2626 14.7803 9.96967C14.4874 9.67678 14.0126 9.67678 13.7197 9.96967L10 13.6893L6.28033 9.96967C5.98744 9.67678 5.51256 9.67678 5.21967 9.96967C4.92678 10.2626 4.92678 10.7374 5.21967 11.0303L9.46967 15.2803ZM5.21967 6.03033L9.46967 10.2803C9.76256 10.5732 10.2374 10.5732 10.5303 10.2803L14.7803 6.03033C15.0732 5.73744 15.0732 5.26256 14.7803 4.96967C14.4874 4.67678 14.0126 4.67678 13.7197 4.96967L10 8.68934L6.28033 4.96967C5.98744 4.67678 5.51256 4.67678 5.21967 4.96967C4.92678 5.26256 4.92678 5.73744 5.21967 6.03033Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.46967 12.7803C7.76256 13.0732 8.23744 13.0732 8.53033 12.7803L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967C11.4874 8.17678 11.0126 8.17678 10.7197 8.46967L8 11.1893L5.28033 8.46967C4.98744 8.17678 4.51256 8.17678 4.21967 8.46967C3.92678 8.76256 3.92678 9.23744 4.21967 9.53033L7.46967 12.7803ZM4.21967 4.53033L7.46967 7.78033C7.76256 8.07322 8.23744 8.07322 8.53033 7.78033L11.7803 4.53033C12.0732 4.23744 12.0732 3.76256 11.7803 3.46967C11.4874 3.17678 11.0126 3.17678 10.7197 3.46967L8 6.18934L5.28033 3.46967C4.98744 3.17678 4.51256 3.17678 4.21967 3.46967C3.92678 3.76256 3.92678 4.23744 4.21967 4.53033Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 13.2803C11.7626 13.5732 12.2374 13.5732 12.5303 13.2803L20.0303 5.78033C20.3232 5.48744 20.3232 5.01256 20.0303 4.71967C19.7374 4.42678 19.2626 4.42678 18.9697 4.71967L12 11.6893L5.03033 4.71967C4.73744 4.42678 4.26256 4.42678 3.96967 4.71967C3.67678 5.01256 3.67678 5.48744 3.96967 5.78033L11.4697 13.2803Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 19.2803C11.7626 19.5732 12.2374 19.5732 12.5303 19.2803L20.0303 11.7803C20.3232 11.4874 20.3232 11.0126 20.0303 10.7197C19.7374 10.4268 19.2626 10.4268 18.9697 10.7197L12 17.6893L5.03033 10.7197C4.73744 10.4268 4.26256 10.4268 3.96967 10.7197C3.67678 11.0126 3.67678 11.4874 3.96967 11.7803L11.4697 19.2803Z"
        fill={color}
      />
    {/if}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    {viewBox}
    stroke-width={strokeWidth}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    {#if variation === 'outline'}
      <path
        d="M4.5 5.25L12 12.75L19.5 5.25M4.5 11.25L12 18.75L19.5 11.25"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.46967 15.2803C9.76256 15.5732 10.2374 15.5732 10.5303 15.2803L14.7803 11.0303C15.0732 10.7374 15.0732 10.2626 14.7803 9.96967C14.4874 9.67678 14.0126 9.67678 13.7197 9.96967L10 13.6893L6.28033 9.96967C5.98744 9.67678 5.51256 9.67678 5.21967 9.96967C4.92678 10.2626 4.92678 10.7374 5.21967 11.0303L9.46967 15.2803ZM5.21967 6.03033L9.46967 10.2803C9.76256 10.5732 10.2374 10.5732 10.5303 10.2803L14.7803 6.03033C15.0732 5.73744 15.0732 5.26256 14.7803 4.96967C14.4874 4.67678 14.0126 4.67678 13.7197 4.96967L10 8.68934L6.28033 4.96967C5.98744 4.67678 5.51256 4.67678 5.21967 4.96967C4.92678 5.26256 4.92678 5.73744 5.21967 6.03033Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.46967 12.7803C7.76256 13.0732 8.23744 13.0732 8.53033 12.7803L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967C11.4874 8.17678 11.0126 8.17678 10.7197 8.46967L8 11.1893L5.28033 8.46967C4.98744 8.17678 4.51256 8.17678 4.21967 8.46967C3.92678 8.76256 3.92678 9.23744 4.21967 9.53033L7.46967 12.7803ZM4.21967 4.53033L7.46967 7.78033C7.76256 8.07322 8.23744 8.07322 8.53033 7.78033L11.7803 4.53033C12.0732 4.23744 12.0732 3.76256 11.7803 3.46967C11.4874 3.17678 11.0126 3.17678 10.7197 3.46967L8 6.18934L5.28033 3.46967C4.98744 3.17678 4.51256 3.17678 4.21967 3.46967C3.92678 3.76256 3.92678 4.23744 4.21967 4.53033Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 13.2803C11.7626 13.5732 12.2374 13.5732 12.5303 13.2803L20.0303 5.78033C20.3232 5.48744 20.3232 5.01256 20.0303 4.71967C19.7374 4.42678 19.2626 4.42678 18.9697 4.71967L12 11.6893L5.03033 4.71967C4.73744 4.42678 4.26256 4.42678 3.96967 4.71967C3.67678 5.01256 3.67678 5.48744 3.96967 5.78033L11.4697 13.2803Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 19.2803C11.7626 19.5732 12.2374 19.5732 12.5303 19.2803L20.0303 11.7803C20.3232 11.4874 20.3232 11.0126 20.0303 10.7197C19.7374 10.4268 19.2626 10.4268 18.9697 10.7197L12 17.6893L5.03033 10.7197C4.73744 10.4268 4.26256 10.4268 3.96967 10.7197C3.67678 11.0126 3.67678 11.4874 3.96967 11.7803L11.4697 19.2803Z"
        fill={color}
      />
    {/if}
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let withEvents: boolean = ctx.withEvents || false;
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
@prop export let ariaLabel: string = 'academic cap';
-->
