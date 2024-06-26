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
        d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        d="M11.9834 1.90718C12.0546 1.57461 11.8932 1.23571 11.59 1.08152C11.2868 0.927338 10.9179 0.996463 10.6911 1.24994L2.19108 10.7499C1.99385 10.9704 1.9446 11.2861 2.06533 11.5562C2.18607 11.8262 2.45423 12 2.75001 12H9.32227L8.01666 18.0929C7.9454 18.4255 8.10685 18.7644 8.41002 18.9185C8.71318 19.0727 9.08215 19.0036 9.30894 18.7501L17.8089 9.25013C18.0062 9.0297 18.0554 8.71393 17.9347 8.4439C17.814 8.17388 17.5458 8.00003 17.25 8.00003H10.6778L11.9834 1.90718Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.58011 1.07655C9.88578 1.22638 10.0522 1.56328 9.98545 1.89709L9.16486 6H13.25C13.5437 6 13.8103 6.17136 13.9323 6.43847C14.0542 6.70558 14.0091 7.0193 13.8168 7.2412L7.31678 14.7412C7.09383 14.9984 6.72559 15.0733 6.41991 14.9234C6.11424 14.7736 5.94781 14.4367 6.01458 14.1029L6.83516 10H2.75001C2.45637 10 2.18974 9.82864 2.06777 9.56153C1.9458 9.29442 1.99093 8.9807 2.18324 8.7588L8.68324 1.2588C8.90619 1.00155 9.27444 0.92672 9.58011 1.07655Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6152 1.59492C14.9164 1.76287 15.0643 2.1146 14.9736 2.44734L12.9819 9.75H20.25C20.5486 9.75 20.8188 9.92718 20.9378 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0117L10.2983 22.2617C10.063 22.5139 9.68601 22.573 9.38478 22.4051C9.08354 22.2371 8.93567 21.8854 9.02641 21.5527L11.018 14.25H3.74999C3.45134 14.25 3.18115 14.0728 3.06213 13.7989C2.9431 13.525 2.99792 13.2066 3.20169 12.9883L13.7017 1.73826C13.937 1.48613 14.314 1.42698 14.6152 1.59492Z"
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
        d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        d="M11.9834 1.90718C12.0546 1.57461 11.8932 1.23571 11.59 1.08152C11.2868 0.927338 10.9179 0.996463 10.6911 1.24994L2.19108 10.7499C1.99385 10.9704 1.9446 11.2861 2.06533 11.5562C2.18607 11.8262 2.45423 12 2.75001 12H9.32227L8.01666 18.0929C7.9454 18.4255 8.10685 18.7644 8.41002 18.9185C8.71318 19.0727 9.08215 19.0036 9.30894 18.7501L17.8089 9.25013C18.0062 9.0297 18.0554 8.71393 17.9347 8.4439C17.814 8.17388 17.5458 8.00003 17.25 8.00003H10.6778L11.9834 1.90718Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.58011 1.07655C9.88578 1.22638 10.0522 1.56328 9.98545 1.89709L9.16486 6H13.25C13.5437 6 13.8103 6.17136 13.9323 6.43847C14.0542 6.70558 14.0091 7.0193 13.8168 7.2412L7.31678 14.7412C7.09383 14.9984 6.72559 15.0733 6.41991 14.9234C6.11424 14.7736 5.94781 14.4367 6.01458 14.1029L6.83516 10H2.75001C2.45637 10 2.18974 9.82864 2.06777 9.56153C1.9458 9.29442 1.99093 8.9807 2.18324 8.7588L8.68324 1.2588C8.90619 1.00155 9.27444 0.92672 9.58011 1.07655Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6152 1.59492C14.9164 1.76287 15.0643 2.1146 14.9736 2.44734L12.9819 9.75H20.25C20.5486 9.75 20.8188 9.92718 20.9378 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0117L10.2983 22.2617C10.063 22.5139 9.68601 22.573 9.38478 22.4051C9.08354 22.2371 8.93567 21.8854 9.02641 21.5527L11.018 14.25H3.74999C3.45134 14.25 3.18115 14.0728 3.06213 13.7989C2.9431 13.525 2.99792 13.2066 3.20169 12.9883L13.7017 1.73826C13.937 1.48613 14.314 1.42698 14.6152 1.59492Z"
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
