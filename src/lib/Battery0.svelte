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
        d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 7.25C1 6.00736 2.00736 5 3.25 5H15.75C16.9926 5 18 6.00736 18 7.25V8.33535C18.5826 8.54127 19 9.09689 19 9.75V10.25C19 10.9031 18.5826 11.4587 18 11.6646V12.75C18 13.9926 16.9926 15 15.75 15H3.25C2.00736 15 1 13.9926 1 12.75V7.25ZM3.25 6.5C2.83579 6.5 2.5 6.83579 2.5 7.25V12.75C2.5 13.1642 2.83579 13.5 3.25 13.5H15.75C16.1642 13.5 16.5 13.1642 16.5 12.75V7.25C16.5 6.83579 16.1642 6.5 15.75 6.5H3.25Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 6.25C1 5.00736 2.00736 4 3.25 4H11.75C12.9926 4 14 5.00736 14 6.25V6.33535C14.5826 6.54127 15 7.09689 15 7.75V8.25C15 8.90311 14.5826 9.45873 14 9.66465V9.75C14 10.9926 12.9926 12 11.75 12H3.25C2.00736 12 1 10.9926 1 9.75V6.25ZM3.25 5.5C2.83579 5.5 2.5 5.83579 2.5 6.25V9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H11.75C12.1642 10.5 12.5 10.1642 12.5 9.75V6.25C12.5 5.83579 12.1642 5.5 11.75 5.5H3.25Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 9.75C0.75 8.09315 2.09315 6.75 3.75 6.75H18.75C20.4069 6.75 21.75 8.09315 21.75 9.75V9.78751C22.6058 9.96123 23.25 10.7179 23.25 11.625V13.875C23.25 14.7821 22.6058 15.5388 21.75 15.7125V15.75C21.75 17.4069 20.4069 18.75 18.75 18.75H3.75C2.09315 18.75 0.75 17.4069 0.75 15.75V9.75ZM20.25 9.75C20.25 8.92157 19.5784 8.25 18.75 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15.75C2.25 16.5784 2.92157 17.25 3.75 17.25H18.75C19.5784 17.25 20.25 16.5784 20.25 15.75V9.75Z"
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
        d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 7.25C1 6.00736 2.00736 5 3.25 5H15.75C16.9926 5 18 6.00736 18 7.25V8.33535C18.5826 8.54127 19 9.09689 19 9.75V10.25C19 10.9031 18.5826 11.4587 18 11.6646V12.75C18 13.9926 16.9926 15 15.75 15H3.25C2.00736 15 1 13.9926 1 12.75V7.25ZM3.25 6.5C2.83579 6.5 2.5 6.83579 2.5 7.25V12.75C2.5 13.1642 2.83579 13.5 3.25 13.5H15.75C16.1642 13.5 16.5 13.1642 16.5 12.75V7.25C16.5 6.83579 16.1642 6.5 15.75 6.5H3.25Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 6.25C1 5.00736 2.00736 4 3.25 4H11.75C12.9926 4 14 5.00736 14 6.25V6.33535C14.5826 6.54127 15 7.09689 15 7.75V8.25C15 8.90311 14.5826 9.45873 14 9.66465V9.75C14 10.9926 12.9926 12 11.75 12H3.25C2.00736 12 1 10.9926 1 9.75V6.25ZM3.25 5.5C2.83579 5.5 2.5 5.83579 2.5 6.25V9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H11.75C12.1642 10.5 12.5 10.1642 12.5 9.75V6.25C12.5 5.83579 12.1642 5.5 11.75 5.5H3.25Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 9.75C0.75 8.09315 2.09315 6.75 3.75 6.75H18.75C20.4069 6.75 21.75 8.09315 21.75 9.75V9.78751C22.6058 9.96123 23.25 10.7179 23.25 11.625V13.875C23.25 14.7821 22.6058 15.5388 21.75 15.7125V15.75C21.75 17.4069 20.4069 18.75 18.75 18.75H3.75C2.09315 18.75 0.75 17.4069 0.75 15.75V9.75ZM20.25 9.75C20.25 8.92157 19.5784 8.25 18.75 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15.75C2.25 16.5784 2.92157 17.25 3.75 17.25H18.75C19.5784 17.25 20.25 16.5784 20.25 15.75V9.75Z"
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
