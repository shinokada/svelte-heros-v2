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
        d="M18.75 4.5L11.25 12L18.75 19.5M12.75 4.5L5.25 12L12.75 19.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.71967 9.46967C4.42678 9.76256 4.42678 10.2374 4.71967 10.5303L8.96967 14.7803C9.26256 15.0732 9.73744 15.0732 10.0303 14.7803C10.3232 14.4874 10.3232 14.0126 10.0303 13.7197L6.31066 10L10.0303 6.28033C10.3232 5.98744 10.3232 5.51256 10.0303 5.21967C9.73744 4.92678 9.26256 4.92678 8.96967 5.21967L4.71967 9.46967ZM13.9697 5.21967L9.71967 9.46967C9.42678 9.76256 9.42678 10.2374 9.71967 10.5303L13.9697 14.7803C14.2626 15.0732 14.7374 15.0732 15.0303 14.7803C15.3232 14.4874 15.3232 14.0126 15.0303 13.7197L11.3107 10L15.0303 6.28033C15.3232 5.98744 15.3232 5.51256 15.0303 5.21967C14.7374 4.92678 14.2626 4.92678 13.9697 5.21967Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.21967 7.59467C2.92678 7.88756 2.92678 8.36244 3.21967 8.65533L6.46967 11.9053C6.76256 12.1982 7.23744 12.1982 7.53033 11.9053C7.82322 11.6124 7.82322 11.1376 7.53033 10.8447L4.81066 8.125L7.53033 5.40533C7.82322 5.11244 7.82322 4.63756 7.53033 4.34467C7.23744 4.05178 6.76256 4.05178 6.46967 4.34467L3.21967 7.59467ZM11.4697 4.34467L8.21967 7.59467C7.92678 7.88756 7.92678 8.36244 8.21967 8.65533L11.4697 11.9053C11.7626 12.1982 12.2374 12.1982 12.5303 11.9053C12.8232 11.6124 12.8232 11.1376 12.5303 10.8447L9.81066 8.125L12.5303 5.40533C12.8232 5.11244 12.8232 4.63756 12.5303 4.34467C12.2374 4.05178 11.7626 4.05178 11.4697 4.34467Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7197 11.4697C10.4268 11.7626 10.4268 12.2374 10.7197 12.5303L18.2197 20.0303C18.5126 20.3232 18.9874 20.3232 19.2803 20.0303C19.5732 19.7374 19.5732 19.2626 19.2803 18.9697L12.3107 12L19.2803 5.03033C19.5732 4.73744 19.5732 4.26256 19.2803 3.96967C18.9874 3.67678 18.5126 3.67678 18.2197 3.96967L10.7197 11.4697Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.71967 11.4697C4.42678 11.7626 4.42678 12.2374 4.71967 12.5303L12.2197 20.0303C12.5126 20.3232 12.9874 20.3232 13.2803 20.0303C13.5732 19.7374 13.5732 19.2626 13.2803 18.9697L6.31066 12L13.2803 5.03033C13.5732 4.73744 13.5732 4.26256 13.2803 3.96967C12.9874 3.67678 12.5126 3.67678 12.2197 3.96967L4.71967 11.4697Z"
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
        d="M18.75 4.5L11.25 12L18.75 19.5M12.75 4.5L5.25 12L12.75 19.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.71967 9.46967C4.42678 9.76256 4.42678 10.2374 4.71967 10.5303L8.96967 14.7803C9.26256 15.0732 9.73744 15.0732 10.0303 14.7803C10.3232 14.4874 10.3232 14.0126 10.0303 13.7197L6.31066 10L10.0303 6.28033C10.3232 5.98744 10.3232 5.51256 10.0303 5.21967C9.73744 4.92678 9.26256 4.92678 8.96967 5.21967L4.71967 9.46967ZM13.9697 5.21967L9.71967 9.46967C9.42678 9.76256 9.42678 10.2374 9.71967 10.5303L13.9697 14.7803C14.2626 15.0732 14.7374 15.0732 15.0303 14.7803C15.3232 14.4874 15.3232 14.0126 15.0303 13.7197L11.3107 10L15.0303 6.28033C15.3232 5.98744 15.3232 5.51256 15.0303 5.21967C14.7374 4.92678 14.2626 4.92678 13.9697 5.21967Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.21967 7.59467C2.92678 7.88756 2.92678 8.36244 3.21967 8.65533L6.46967 11.9053C6.76256 12.1982 7.23744 12.1982 7.53033 11.9053C7.82322 11.6124 7.82322 11.1376 7.53033 10.8447L4.81066 8.125L7.53033 5.40533C7.82322 5.11244 7.82322 4.63756 7.53033 4.34467C7.23744 4.05178 6.76256 4.05178 6.46967 4.34467L3.21967 7.59467ZM11.4697 4.34467L8.21967 7.59467C7.92678 7.88756 7.92678 8.36244 8.21967 8.65533L11.4697 11.9053C11.7626 12.1982 12.2374 12.1982 12.5303 11.9053C12.8232 11.6124 12.8232 11.1376 12.5303 10.8447L9.81066 8.125L12.5303 5.40533C12.8232 5.11244 12.8232 4.63756 12.5303 4.34467C12.2374 4.05178 11.7626 4.05178 11.4697 4.34467Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7197 11.4697C10.4268 11.7626 10.4268 12.2374 10.7197 12.5303L18.2197 20.0303C18.5126 20.3232 18.9874 20.3232 19.2803 20.0303C19.5732 19.7374 19.5732 19.2626 19.2803 18.9697L12.3107 12L19.2803 5.03033C19.5732 4.73744 19.5732 4.26256 19.2803 3.96967C18.9874 3.67678 18.5126 3.67678 18.2197 3.96967L10.7197 11.4697Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.71967 11.4697C4.42678 11.7626 4.42678 12.2374 4.71967 12.5303L12.2197 20.0303C12.5126 20.3232 12.9874 20.3232 13.2803 20.0303C13.5732 19.7374 13.5732 19.2626 13.2803 18.9697L6.31066 12L13.2803 5.03033C13.5732 4.73744 13.5732 4.26256 13.2803 3.96967C12.9874 3.67678 12.5126 3.67678 12.2197 3.96967L4.71967 11.4697Z"
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
