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
        d="M4.5 10.5L12 3M12 3L19.5 10.5M12 3V21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 17C9.58579 17 9.25 16.6642 9.25 16.25L9.25 5.61208L5.29062 9.76983C5.00353 10.0684 4.52875 10.0777 4.23017 9.79063C3.93159 9.50353 3.92228 9.02875 4.20937 8.73017L9.45937 3.23017C9.60078 3.08311 9.79598 3 10 3C10.204 3 10.3992 3.08311 10.5406 3.23017L15.7906 8.73017C16.0777 9.02875 16.0684 9.50353 15.7698 9.79062C15.4713 10.0777 14.9965 10.0684 14.7094 9.76983L10.75 5.61208L10.75 16.25C10.75 16.6642 10.4142 17 10 17Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 14C7.58579 14 7.25 13.6642 7.25 13.25L7.25 4.56066L4.03033 7.78033C3.73744 8.07322 3.26256 8.07322 2.96967 7.78033C2.67678 7.48744 2.67678 7.01256 2.96967 6.71967L7.46967 2.21967C7.76256 1.92678 8.23744 1.92678 8.53033 2.21967L13.0303 6.71967C13.3232 7.01256 13.3232 7.48744 13.0303 7.78033C12.7374 8.07322 12.2626 8.07322 11.9697 7.78033L8.75 4.56066L8.75 13.25C8.75 13.6642 8.41421 14 8 14Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L20.0303 9.96967C20.3232 10.2626 20.3232 10.7374 20.0303 11.0303C19.7374 11.3232 19.2626 11.3232 18.9697 11.0303L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L5.03033 11.0303C4.73744 11.3232 4.26256 11.3232 3.96967 11.0303C3.67678 10.7374 3.67678 10.2626 3.96967 9.96967L11.4697 2.46967Z"
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
        d="M4.5 10.5L12 3M12 3L19.5 10.5M12 3V21"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 17C9.58579 17 9.25 16.6642 9.25 16.25L9.25 5.61208L5.29062 9.76983C5.00353 10.0684 4.52875 10.0777 4.23017 9.79063C3.93159 9.50353 3.92228 9.02875 4.20937 8.73017L9.45937 3.23017C9.60078 3.08311 9.79598 3 10 3C10.204 3 10.3992 3.08311 10.5406 3.23017L15.7906 8.73017C16.0777 9.02875 16.0684 9.50353 15.7698 9.79062C15.4713 10.0777 14.9965 10.0684 14.7094 9.76983L10.75 5.61208L10.75 16.25C10.75 16.6642 10.4142 17 10 17Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 14C7.58579 14 7.25 13.6642 7.25 13.25L7.25 4.56066L4.03033 7.78033C3.73744 8.07322 3.26256 8.07322 2.96967 7.78033C2.67678 7.48744 2.67678 7.01256 2.96967 6.71967L7.46967 2.21967C7.76256 1.92678 8.23744 1.92678 8.53033 2.21967L13.0303 6.71967C13.3232 7.01256 13.3232 7.48744 13.0303 7.78033C12.7374 8.07322 12.2626 8.07322 11.9697 7.78033L8.75 4.56066L8.75 13.25C8.75 13.6642 8.41421 14 8 14Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L20.0303 9.96967C20.3232 10.2626 20.3232 10.7374 20.0303 11.0303C19.7374 11.3232 19.2626 11.3232 18.9697 11.0303L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L5.03033 11.0303C4.73744 11.3232 4.26256 11.3232 3.96967 11.0303C3.67678 10.7374 3.67678 10.2626 3.96967 9.96967L11.4697 2.46967Z"
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
