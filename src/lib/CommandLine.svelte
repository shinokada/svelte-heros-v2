<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size,
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    variation = ctx.variation || 'outline',
    strokeWidth = ctx.strokeWidth || '1.5',
    title,
    desc,
    ariaLabel = 'command line',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));

  let viewBox = $derived.by(() => {
    if (variation === 'mini') return '0 0 20 20';
    if (variation === 'micro') return '0 0 16 16';
    return '0 0 24 24';
  });
  let variationSize = $derived.by(() => {
    if (variation === 'mini') return '20';
    if (variation === 'micro') return '16';
    return '24';
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size || variationSize}
  height={size || variationSize}
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
      d="M6.75 7.5L9.75 9.75L6.75 12M11.25 12H14.25M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.25 3C2.00736 3 1 4.00736 1 5.25V14.75C1 15.9926 2.00736 17 3.25 17H16.75C17.9926 17 19 15.9926 19 14.75V5.25C19 4.00736 17.9926 3 16.75 3H3.25ZM4.19253 11.7517C3.91544 11.4438 3.94039 10.9696 4.24828 10.6925L6.12886 9L4.24828 7.30747C3.94039 7.03038 3.91543 6.55616 4.19253 6.24828C4.46962 5.94039 4.94384 5.91544 5.25172 6.19253L7.75172 8.44253C7.90976 8.58476 8 8.78738 8 9C8 9.21261 7.90976 9.41524 7.75172 9.55747L5.25172 11.8075C4.94384 12.0846 4.46962 12.0596 4.19253 11.7517ZM9.75 10.25C9.33579 10.25 9 10.5858 9 11C9 11.4142 9.33579 11.75 9.75 11.75H12.25C12.6642 11.75 13 11.4142 13 11C13 10.5858 12.6642 10.25 12.25 10.25H9.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4ZM4.21967 5.96967C3.92678 6.26256 3.92678 6.73744 4.21967 7.03033L5.18934 8L4.21967 8.96967C3.92678 9.26256 3.92678 9.73744 4.21967 10.0303C4.51256 10.3232 4.98744 10.3232 5.28033 10.0303L6.78033 8.53033C7.07322 8.23744 7.07322 7.76256 6.78033 7.46967L5.28033 5.96967C4.98744 5.67678 4.51256 5.67678 4.21967 5.96967ZM8.75 8.5C8.33579 8.5 8 8.83579 8 9.25C8 9.66421 8.33579 10 8.75 10H11.25C11.6642 10 12 9.66421 12 9.25C12 8.83579 11.6642 8.5 11.25 8.5H8.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 6C2.25 4.34315 3.59315 3 5.25 3H18.75C20.4069 3 21.75 4.34315 21.75 6V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V6ZM6.21967 6.96967C6.51256 6.67678 6.98744 6.67678 7.28033 6.96967L9.53033 9.21967C9.82322 9.51256 9.82322 9.98744 9.53033 10.2803L7.28033 12.5303C6.98744 12.8232 6.51256 12.8232 6.21967 12.5303C5.92678 12.2374 5.92678 11.7626 6.21967 11.4697L7.93934 9.75L6.21967 8.03033C5.92678 7.73744 5.92678 7.26256 6.21967 6.96967ZM10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75H13.5C13.9142 12.75 14.25 12.4142 14.25 12C14.25 11.5858 13.9142 11.25 13.5 11.25H10.5Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com/)
## Props
@prop size = ctx.size
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop variation = ctx.variation || 'outline'
@prop strokeWidth = ctx.strokeWidth || '1.5'
@prop title
@prop desc
@prop ariaLabel = 'command line'
@prop ...restProps
-->
