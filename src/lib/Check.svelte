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
        d="M4.5 12.75L10.5 18.75L19.5 5.25"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9983C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.416 3.37592C12.7607 3.60568 12.8538 4.07134 12.624 4.41598L7.62404 11.916C7.4994 12.1029 7.2975 12.2242 7.0739 12.2463C6.8503 12.2684 6.62855 12.1892 6.46967 12.0303L3.46967 9.03029C3.17678 8.73739 3.17678 8.26252 3.46967 7.96963C3.76256 7.67673 4.23744 7.67673 4.53033 7.96963L6.88343 10.3227L11.376 3.58393C11.6057 3.23929 12.0714 3.14616 12.416 3.37592Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.916 4.62592C20.2607 4.85568 20.3538 5.32134 20.124 5.66598L11.124 19.166C10.9994 19.3529 10.7975 19.4742 10.5739 19.4963C10.3503 19.5184 10.1286 19.4392 9.96967 19.2803L3.96967 13.2803C3.67678 12.9874 3.67678 12.5125 3.96967 12.2196C4.26256 11.9267 4.73744 11.9267 5.03033 12.2196L10.3834 17.5727L18.876 4.83393C19.1057 4.48929 19.5714 4.39616 19.916 4.62592Z"
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
        d="M4.5 12.75L10.5 18.75L19.5 5.25"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9983C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.416 3.37592C12.7607 3.60568 12.8538 4.07134 12.624 4.41598L7.62404 11.916C7.4994 12.1029 7.2975 12.2242 7.0739 12.2463C6.8503 12.2684 6.62855 12.1892 6.46967 12.0303L3.46967 9.03029C3.17678 8.73739 3.17678 8.26252 3.46967 7.96963C3.76256 7.67673 4.23744 7.67673 4.53033 7.96963L6.88343 10.3227L11.376 3.58393C11.6057 3.23929 12.0714 3.14616 12.416 3.37592Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.916 4.62592C20.2607 4.85568 20.3538 5.32134 20.124 5.66598L11.124 19.166C10.9994 19.3529 10.7975 19.4742 10.5739 19.4963C10.3503 19.5184 10.1286 19.4392 9.96967 19.2803L3.96967 13.2803C3.67678 12.9874 3.67678 12.5125 3.96967 12.2196C4.26256 11.9267 4.73744 11.9267 5.03033 12.2196L10.3834 17.5727L18.876 4.83393C19.1057 4.48929 19.5714 4.39616 19.916 4.62592Z"
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
