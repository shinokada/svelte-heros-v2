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
        d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4H13.5V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4H15.25C16.7688 4 18 5.23122 18 6.75V15.25C18 16.7688 16.7688 18 15.25 18H4.75C3.23122 18 2 16.7688 2 15.25V6.75C2 5.23122 3.23122 4 4.75 4H5V2.75C5 2.33579 5.33579 2 5.75 2ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75V15.25C3.5 15.9404 4.05964 16.5 4.75 16.5H15.25C15.9404 16.5 16.5 15.9404 16.5 15.25V8.75C16.5 8.05964 15.9404 7.5 15.25 7.5H4.75Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 1.75C4 1.33579 4.33579 1 4.75 1C5.16421 1 5.5 1.33579 5.5 1.75V3H10.5V1.75C10.5 1.33579 10.8358 1 11.25 1C11.6642 1 12 1.33579 12 1.75V3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3V1.75ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V11.5C3.5 12.0523 3.94772 12.5 4.5 12.5H11.5C12.0523 12.5 12.5 12.0523 12.5 11.5V7C12.5 6.44772 12.0523 6 11.5 6H4.5Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z"
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
        d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4H13.5V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4H15.25C16.7688 4 18 5.23122 18 6.75V15.25C18 16.7688 16.7688 18 15.25 18H4.75C3.23122 18 2 16.7688 2 15.25V6.75C2 5.23122 3.23122 4 4.75 4H5V2.75C5 2.33579 5.33579 2 5.75 2ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75V15.25C3.5 15.9404 4.05964 16.5 4.75 16.5H15.25C15.9404 16.5 16.5 15.9404 16.5 15.25V8.75C16.5 8.05964 15.9404 7.5 15.25 7.5H4.75Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 1.75C4 1.33579 4.33579 1 4.75 1C5.16421 1 5.5 1.33579 5.5 1.75V3H10.5V1.75C10.5 1.33579 10.8358 1 11.25 1C11.6642 1 12 1.33579 12 1.75V3C13.1046 3 14 3.89543 14 5V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V5C2 3.89543 2.89543 3 4 3V1.75ZM4.5 6C3.94772 6 3.5 6.44772 3.5 7V11.5C3.5 12.0523 3.94772 12.5 4.5 12.5H11.5C12.0523 12.5 12.5 12.0523 12.5 11.5V7C12.5 6.44772 12.0523 6 11.5 6H4.5Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z"
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
