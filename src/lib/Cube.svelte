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
    ariaLabel = 'cube',
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
      d="M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M10.3623 1.09332C10.1368 0.968894 9.86321 0.968894 9.63769 1.09332L2.52344 5.01842L10 9.14342L17.4766 5.01842L10.3623 1.09332Z"
      fill={color}
    />
    <path
      d="M18 6.44278L10.75 10.4428V18.6928L17.6123 14.9067C17.8515 14.7747 18 14.5232 18 14.25V6.44278Z"
      fill={color}
    />
    <path
      d="M9.25 18.6928V10.4428L2 6.44278V14.25C2 14.5232 2.14852 14.7747 2.38769 14.9067L9.25 18.6928Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8.3721 1.34882C8.14153 1.21706 7.85847 1.21706 7.6279 1.34882L2.81794 4.09736L7.99998 7.13075L13.182 4.09735L8.3721 1.34882Z"
      fill={color}
    />
    <path
      d="M14 5.35664L8.74998 8.42982V14.4353L13.6221 11.6512C13.8558 11.5177 14 11.2691 14 11V5.35664Z"
      fill={color}
    />
    <path
      d="M7.24998 14.4352V8.42982L2 5.35666V11C2 11.2691 2.14421 11.5177 2.3779 11.6512L7.24998 14.4352Z"
      fill={color}
    />
  {:else}
    <path
      d="M12.3779 1.60217C12.1444 1.46594 11.8556 1.46594 11.6221 1.60217L3 6.63172L12 11.8817L21 6.63172L12.3779 1.60217Z"
      fill={color}
    />
    <path
      d="M21.75 7.93078L12.75 13.1808V22.1808L21.3779 17.1478C21.6083 17.0134 21.75 16.7668 21.75 16.5V7.93078Z"
      fill={color}
    />
    <path
      d="M11.25 22.1808V13.1808L2.25 7.93078V16.5C2.25 16.7668 2.39168 17.0134 2.6221 17.1478L11.25 22.1808Z"
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
@prop ariaLabel = 'cube'
@prop ...restProps
-->
