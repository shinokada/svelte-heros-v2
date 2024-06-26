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
        d="M13.5 16.875H16.875M16.875 16.875H20.25M16.875 16.875V13.5M16.875 16.875V20.25M6 10.5H8.25C9.49264 10.5 10.5 9.49264 10.5 8.25V6C10.5 4.75736 9.49264 3.75 8.25 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V8.25C3.75 9.49264 4.75736 10.5 6 10.5ZM6 20.25H8.25C9.49264 20.25 10.5 19.2426 10.5 18V15.75C10.5 14.5074 9.49264 13.5 8.25 13.5H6C4.75736 13.5 3.75 14.5074 3.75 15.75V18C3.75 19.2426 4.75736 20.25 6 20.25ZM15.75 10.5H18C19.2426 10.5 20.25 9.49264 20.25 8.25V6C20.25 4.75736 19.2426 3.75 18 3.75H15.75C14.5074 3.75 13.5 4.75736 13.5 6V8.25C13.5 9.49264 14.5074 10.5 15.75 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        d="M2 4.25C2 3.00736 3.00736 2 4.25 2H6.75C7.99264 2 9 3.00736 9 4.25V6.75C9 7.99264 7.99264 9 6.75 9H4.25C3.00736 9 2 7.99264 2 6.75V4.25Z"
        fill={color}
      />
      <path
        d="M2 13.25C2 12.0074 3.00736 11 4.25 11H6.75C7.99264 11 9 12.0074 9 13.25V15.75C9 16.9926 7.99264 18 6.75 18H4.25C3.00736 18 2 16.9926 2 15.75V13.25Z"
        fill={color}
      />
      <path
        d="M11 4.25C11 3.00736 12.0074 2 13.25 2H15.75C16.9926 2 18 3.00736 18 4.25V6.75C18 7.99264 16.9926 9 15.75 9H13.25C12.0074 9 11 7.99264 11 6.75V4.25Z"
        fill={color}
      />
      <path
        d="M15.25 11.75C15.25 11.3358 14.9142 11 14.5 11C14.0858 11 13.75 11.3358 13.75 11.75V13.75H11.75C11.3358 13.75 11 14.0858 11 14.5C11 14.9142 11.3358 15.25 11.75 15.25H13.75V17.25C13.75 17.6642 14.0858 18 14.5 18C14.9142 18 15.25 17.6642 15.25 17.25V15.25H17.25C17.6642 15.25 18 14.9142 18 14.5C18 14.0858 17.6642 13.75 17.25 13.75H15.25V11.75Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        d="M2 3.5C2 2.67157 2.67157 2 3.5 2H5.5C6.32843 2 7 2.67157 7 3.5V5.5C7 6.32843 6.32843 7 5.5 7H3.5C2.67157 7 2 6.32843 2 5.5V3.5Z"
        fill={color}
      />
      <path
        d="M2 10.5C2 9.67157 2.67157 9 3.5 9H5.5C6.32843 9 7 9.67157 7 10.5V12.5C7 13.3284 6.32843 14 5.5 14H3.5C2.67157 14 2 13.3284 2 12.5V10.5Z"
        fill={color}
      />
      <path
        d="M10.5 2C9.67157 2 9 2.67157 9 3.5V5.5C9 6.32843 9.67157 7 10.5 7H12.5C13.3284 7 14 6.32843 14 5.5V3.5C14 2.67157 13.3284 2 12.5 2H10.5Z"
        fill={color}
      />
      <path
        d="M11.5 9C11.9142 9 12.25 9.33579 12.25 9.75V10.75H13.25C13.6642 10.75 14 11.0858 14 11.5C14 11.9142 13.6642 12.25 13.25 12.25H12.25V13.25C12.25 13.6642 11.9142 14 11.5 14C11.0858 14 10.75 13.6642 10.75 13.25V12.25H9.75C9.33579 12.25 9 11.9142 9 11.5C9 11.0858 9.33579 10.75 9.75 10.75H10.75V9.75C10.75 9.33579 11.0858 9 11.5 9Z"
        fill={color}
      />
    {:else}
      <path
        d="M6 3C4.34315 3 3 4.34315 3 6V8.25C3 9.90685 4.34315 11.25 6 11.25H8.25C9.90685 11.25 11.25 9.90685 11.25 8.25V6C11.25 4.34315 9.90685 3 8.25 3H6Z"
        fill={color}
      />
      <path
        d="M15.75 3C14.0931 3 12.75 4.34315 12.75 6V8.25C12.75 9.90685 14.0931 11.25 15.75 11.25H18C19.6569 11.25 21 9.90685 21 8.25V6C21 4.34315 19.6569 3 18 3H15.75Z"
        fill={color}
      />
      <path
        d="M6 12.75C4.34315 12.75 3 14.0931 3 15.75V18C3 19.6569 4.34315 21 6 21H8.25C9.90685 21 11.25 19.6569 11.25 18V15.75C11.25 14.0931 9.90685 12.75 8.25 12.75H6Z"
        fill={color}
      />
      <path
        d="M17.625 13.5C17.625 13.0858 17.2892 12.75 16.875 12.75C16.4608 12.75 16.125 13.0858 16.125 13.5V16.125H13.5C13.0858 16.125 12.75 16.4608 12.75 16.875C12.75 17.2892 13.0858 17.625 13.5 17.625H16.125V20.25C16.125 20.6642 16.4608 21 16.875 21C17.2892 21 17.625 20.6642 17.625 20.25V17.625H20.25C20.6642 17.625 21 17.2892 21 16.875C21 16.4608 20.6642 16.125 20.25 16.125H17.625V13.5Z"
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
        d="M13.5 16.875H16.875M16.875 16.875H20.25M16.875 16.875V13.5M16.875 16.875V20.25M6 10.5H8.25C9.49264 10.5 10.5 9.49264 10.5 8.25V6C10.5 4.75736 9.49264 3.75 8.25 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V8.25C3.75 9.49264 4.75736 10.5 6 10.5ZM6 20.25H8.25C9.49264 20.25 10.5 19.2426 10.5 18V15.75C10.5 14.5074 9.49264 13.5 8.25 13.5H6C4.75736 13.5 3.75 14.5074 3.75 15.75V18C3.75 19.2426 4.75736 20.25 6 20.25ZM15.75 10.5H18C19.2426 10.5 20.25 9.49264 20.25 8.25V6C20.25 4.75736 19.2426 3.75 18 3.75H15.75C14.5074 3.75 13.5 4.75736 13.5 6V8.25C13.5 9.49264 14.5074 10.5 15.75 10.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        d="M2 4.25C2 3.00736 3.00736 2 4.25 2H6.75C7.99264 2 9 3.00736 9 4.25V6.75C9 7.99264 7.99264 9 6.75 9H4.25C3.00736 9 2 7.99264 2 6.75V4.25Z"
        fill={color}
      />
      <path
        d="M2 13.25C2 12.0074 3.00736 11 4.25 11H6.75C7.99264 11 9 12.0074 9 13.25V15.75C9 16.9926 7.99264 18 6.75 18H4.25C3.00736 18 2 16.9926 2 15.75V13.25Z"
        fill={color}
      />
      <path
        d="M11 4.25C11 3.00736 12.0074 2 13.25 2H15.75C16.9926 2 18 3.00736 18 4.25V6.75C18 7.99264 16.9926 9 15.75 9H13.25C12.0074 9 11 7.99264 11 6.75V4.25Z"
        fill={color}
      />
      <path
        d="M15.25 11.75C15.25 11.3358 14.9142 11 14.5 11C14.0858 11 13.75 11.3358 13.75 11.75V13.75H11.75C11.3358 13.75 11 14.0858 11 14.5C11 14.9142 11.3358 15.25 11.75 15.25H13.75V17.25C13.75 17.6642 14.0858 18 14.5 18C14.9142 18 15.25 17.6642 15.25 17.25V15.25H17.25C17.6642 15.25 18 14.9142 18 14.5C18 14.0858 17.6642 13.75 17.25 13.75H15.25V11.75Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        d="M2 3.5C2 2.67157 2.67157 2 3.5 2H5.5C6.32843 2 7 2.67157 7 3.5V5.5C7 6.32843 6.32843 7 5.5 7H3.5C2.67157 7 2 6.32843 2 5.5V3.5Z"
        fill={color}
      />
      <path
        d="M2 10.5C2 9.67157 2.67157 9 3.5 9H5.5C6.32843 9 7 9.67157 7 10.5V12.5C7 13.3284 6.32843 14 5.5 14H3.5C2.67157 14 2 13.3284 2 12.5V10.5Z"
        fill={color}
      />
      <path
        d="M10.5 2C9.67157 2 9 2.67157 9 3.5V5.5C9 6.32843 9.67157 7 10.5 7H12.5C13.3284 7 14 6.32843 14 5.5V3.5C14 2.67157 13.3284 2 12.5 2H10.5Z"
        fill={color}
      />
      <path
        d="M11.5 9C11.9142 9 12.25 9.33579 12.25 9.75V10.75H13.25C13.6642 10.75 14 11.0858 14 11.5C14 11.9142 13.6642 12.25 13.25 12.25H12.25V13.25C12.25 13.6642 11.9142 14 11.5 14C11.0858 14 10.75 13.6642 10.75 13.25V12.25H9.75C9.33579 12.25 9 11.9142 9 11.5C9 11.0858 9.33579 10.75 9.75 10.75H10.75V9.75C10.75 9.33579 11.0858 9 11.5 9Z"
        fill={color}
      />
    {:else}
      <path
        d="M6 3C4.34315 3 3 4.34315 3 6V8.25C3 9.90685 4.34315 11.25 6 11.25H8.25C9.90685 11.25 11.25 9.90685 11.25 8.25V6C11.25 4.34315 9.90685 3 8.25 3H6Z"
        fill={color}
      />
      <path
        d="M15.75 3C14.0931 3 12.75 4.34315 12.75 6V8.25C12.75 9.90685 14.0931 11.25 15.75 11.25H18C19.6569 11.25 21 9.90685 21 8.25V6C21 4.34315 19.6569 3 18 3H15.75Z"
        fill={color}
      />
      <path
        d="M6 12.75C4.34315 12.75 3 14.0931 3 15.75V18C3 19.6569 4.34315 21 6 21H8.25C9.90685 21 11.25 19.6569 11.25 18V15.75C11.25 14.0931 9.90685 12.75 8.25 12.75H6Z"
        fill={color}
      />
      <path
        d="M17.625 13.5C17.625 13.0858 17.2892 12.75 16.875 12.75C16.4608 12.75 16.125 13.0858 16.125 13.5V16.125H13.5C13.0858 16.125 12.75 16.4608 12.75 16.875C12.75 17.2892 13.0858 17.625 13.5 17.625H16.125V20.25C16.125 20.6642 16.4608 21 16.875 21C17.2892 21 17.625 20.6642 17.625 20.25V17.625H20.25C20.6642 17.625 21 17.2892 21 16.875C21 16.4608 20.6642 16.125 20.25 16.125H17.625V13.5Z"
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
