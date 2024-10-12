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
    ariaLabel = 'arrow turn down left',
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
      d="M7.49012 11.9996L3.74025 15.75M3.74025 15.75L7.49012 19.5004M3.74025 15.75H20.2397V4.49902"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.25 3C15.8358 3 15.5 3.33579 15.5 3.75V11.25H4.56066L6.53033 9.28033C6.82322 8.98744 6.82322 8.51256 6.53033 8.21967C6.23744 7.92678 5.76256 7.92678 5.46967 8.21967L2.21967 11.4697C1.92678 11.7626 1.92678 12.2374 2.21967 12.5303L5.46967 15.7803C5.76256 16.0732 6.23744 16.0732 6.53033 15.7803C6.82322 15.4874 6.82322 15.0126 6.53033 14.7197L4.56066 12.75H16.25C16.6642 12.75 17 12.4142 17 12V3.75C17 3.33579 16.6642 3 16.25 3Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.25 2C12.8358 2 12.5 2.33579 12.5 2.75V9.25H4.56066L5.53033 8.28033C5.82322 7.98744 5.82322 7.51256 5.53033 7.21967C5.23744 6.92678 4.76256 6.92678 4.46967 7.21967L2.21967 9.46967C1.92678 9.76256 1.92678 10.2374 2.21967 10.5303L4.46967 12.7803C4.76256 13.0732 5.23744 13.0732 5.53033 12.7803C5.82322 12.4874 5.82322 12.0126 5.53033 11.7197L4.56066 10.75H13.25C13.6642 10.75 14 10.4142 14 10V2.75C14 2.33579 13.6642 2 13.25 2Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2388 3.74902C19.8245 3.74902 19.4887 4.08483 19.4887 4.49906V15H5.54982L8.01949 12.53C8.31238 12.2371 8.31236 11.7622 8.01944 11.4693C7.72653 11.1764 7.25165 11.1764 6.95877 11.4693L3.20889 15.2197C2.91603 15.5126 2.91603 15.9875 3.20889 16.2804L6.95877 20.0307C7.25165 20.3236 7.72653 20.3237 8.01944 20.0308C8.31236 19.7379 8.31238 19.263 8.01949 18.9701L5.54982 16.5001H20.2388C20.653 16.5001 20.9888 16.1643 20.9888 15.75V4.49906C20.9888 4.08483 20.653 3.74902 20.2388 3.74902Z"
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
@prop ariaLabel = 'arrow turn down left'
@prop ...restProps
-->
