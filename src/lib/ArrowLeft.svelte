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
    ariaLabel = 'arrow left',
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
      d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 10C17 10.4142 16.6642 10.75 16.25 10.75L5.61208 10.75L9.76983 14.7094C10.0684 14.9965 10.0777 15.4713 9.79062 15.7698C9.50353 16.0684 9.02875 16.0777 8.73017 15.7906L3.23017 10.5406C3.08311 10.3992 3 10.204 3 10C3 9.79599 3.08311 9.60078 3.23017 9.45938L8.73017 4.20938C9.02875 3.92228 9.50353 3.93159 9.79062 4.23017C10.0777 4.52875 10.0684 5.00353 9.76983 5.29063L5.61208 9.25L16.25 9.25C16.6642 9.25 17 9.58579 17 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 8C14 8.41421 13.6642 8.75 13.25 8.75L4.56066 8.75L7.78033 11.9697C8.07322 12.2626 8.07322 12.7374 7.78033 13.0303C7.48744 13.3232 7.01256 13.3232 6.71967 13.0303L2.21967 8.53033C1.92678 8.23744 1.92678 7.76256 2.21967 7.46967L6.71967 2.96967C7.01256 2.67678 7.48744 2.67678 7.78033 2.96967C8.07322 3.26256 8.07322 3.73744 7.78033 4.03033L4.56066 7.25L13.25 7.25C13.6642 7.25 14 7.58579 14 8Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0303 3.96967C11.3232 4.26256 11.3232 4.73744 11.0303 5.03033L4.81066 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H4.81066L11.0303 18.9697C11.3232 19.2626 11.3232 19.7374 11.0303 20.0303C10.7374 20.3232 10.2626 20.3232 9.96967 20.0303L2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L9.96967 3.96967C10.2626 3.67678 10.7374 3.67678 11.0303 3.96967Z"
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
@prop ariaLabel = 'arrow left'
@prop ...restProps
-->
