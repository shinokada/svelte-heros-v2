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
        d="M9 15L3 9M3 9L9 3M3 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.79252 2.23214C8.07852 2.53177 8.06748 3.00651 7.76786 3.29252L3.62192 7.25H13.625C16.5935 7.25 19 9.65647 19 12.625C19 15.5935 16.5935 18 13.625 18H10.75C10.3358 18 10 17.6642 10 17.25C10 16.8358 10.3358 16.5 10.75 16.5H13.625C15.7651 16.5 17.5 14.7651 17.5 12.625C17.5 10.4849 15.7651 8.75 13.625 8.75H3.62192L7.76786 12.7075C8.06748 12.9935 8.07852 13.4682 7.79252 13.7679C7.50651 14.0675 7.03177 14.0785 6.73214 13.7925L1.23214 8.54252C1.08388 8.401 1 8.20496 1 8C1 7.79504 1.08388 7.59901 1.23214 7.45748L6.73214 2.20748C7.03177 1.92148 7.50651 1.93252 7.79252 2.23214Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 9.75C12.5 8.23122 11.2688 7 9.75 7H4.56066L6.78033 9.21967C7.07322 9.51256 7.07322 9.98744 6.78033 10.2803C6.48744 10.5732 6.01256 10.5732 5.71967 10.2803L2.21967 6.78033C1.92678 6.48744 1.92678 6.01256 2.21967 5.71967L5.71967 2.21967C6.01256 1.92678 6.48744 1.92678 6.78033 2.21967C7.07322 2.51256 7.07322 2.98744 6.78033 3.28033L4.56066 5.5L9.75 5.5C12.0972 5.5 14 7.40279 14 9.75C14 12.0972 12.0972 14 9.75 14H8.75C8.33579 14 8 13.6642 8 13.25C8 12.8358 8.33579 12.5 8.75 12.5H9.75C11.2688 12.5 12.5 11.2688 12.5 9.75Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.53033 2.46967C9.82322 2.76256 9.82322 3.23744 9.53033 3.53033L4.81066 8.25H15C18.7279 8.25 21.75 11.2721 21.75 15C21.75 18.7279 18.7279 21.75 15 21.75H12C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25H15C17.8995 20.25 20.25 17.8995 20.25 15C20.25 12.1005 17.8995 9.75 15 9.75H4.81066L9.53033 14.4697C9.82322 14.7626 9.82322 15.2374 9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967L8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967Z"
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
        d="M9 15L3 9M3 9L9 3M3 9H15C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21H12"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.79252 2.23214C8.07852 2.53177 8.06748 3.00651 7.76786 3.29252L3.62192 7.25H13.625C16.5935 7.25 19 9.65647 19 12.625C19 15.5935 16.5935 18 13.625 18H10.75C10.3358 18 10 17.6642 10 17.25C10 16.8358 10.3358 16.5 10.75 16.5H13.625C15.7651 16.5 17.5 14.7651 17.5 12.625C17.5 10.4849 15.7651 8.75 13.625 8.75H3.62192L7.76786 12.7075C8.06748 12.9935 8.07852 13.4682 7.79252 13.7679C7.50651 14.0675 7.03177 14.0785 6.73214 13.7925L1.23214 8.54252C1.08388 8.401 1 8.20496 1 8C1 7.79504 1.08388 7.59901 1.23214 7.45748L6.73214 2.20748C7.03177 1.92148 7.50651 1.93252 7.79252 2.23214Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 9.75C12.5 8.23122 11.2688 7 9.75 7H4.56066L6.78033 9.21967C7.07322 9.51256 7.07322 9.98744 6.78033 10.2803C6.48744 10.5732 6.01256 10.5732 5.71967 10.2803L2.21967 6.78033C1.92678 6.48744 1.92678 6.01256 2.21967 5.71967L5.71967 2.21967C6.01256 1.92678 6.48744 1.92678 6.78033 2.21967C7.07322 2.51256 7.07322 2.98744 6.78033 3.28033L4.56066 5.5L9.75 5.5C12.0972 5.5 14 7.40279 14 9.75C14 12.0972 12.0972 14 9.75 14H8.75C8.33579 14 8 13.6642 8 13.25C8 12.8358 8.33579 12.5 8.75 12.5H9.75C11.2688 12.5 12.5 11.2688 12.5 9.75Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.53033 2.46967C9.82322 2.76256 9.82322 3.23744 9.53033 3.53033L4.81066 8.25H15C18.7279 8.25 21.75 11.2721 21.75 15C21.75 18.7279 18.7279 21.75 15 21.75H12C11.5858 21.75 11.25 21.4142 11.25 21C11.25 20.5858 11.5858 20.25 12 20.25H15C17.8995 20.25 20.25 17.8995 20.25 15C20.25 12.1005 17.8995 9.75 15 9.75H4.81066L9.53033 14.4697C9.82322 14.7626 9.82322 15.2374 9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303L2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967L8.46967 2.46967C8.76256 2.17678 9.23744 2.17678 9.53033 2.46967Z"
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
