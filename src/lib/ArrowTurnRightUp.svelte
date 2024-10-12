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
    ariaLabel = 'arrow turn right up',
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
      d="M11.9899 7.4994L15.7402 3.74952M15.7402 3.74952L19.4906 7.4994M15.7402 3.74952L15.7402 20.249L4.48926 20.249"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H11.25L11.25 4.56066L9.28033 6.53033C8.98744 6.82322 8.51256 6.82322 8.21967 6.53033C7.92678 6.23744 7.92678 5.76256 8.21967 5.46967L11.4697 2.21967C11.7626 1.92678 12.2374 1.92678 12.5303 2.21967L15.7803 5.46967C16.0732 5.76256 16.0732 6.23744 15.7803 6.53033C15.4874 6.82322 15.0126 6.82322 14.7197 6.53033L12.75 4.56066L12.75 16.25C12.75 16.6642 12.4142 17 12 17H3.75C3.33579 17 3 16.6642 3 16.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H9.25L9.25 4.56066L8.28033 5.53033C7.98744 5.82322 7.51256 5.82322 7.21967 5.53033C6.92678 5.23744 6.92678 4.76256 7.21967 4.46967L9.46967 2.21967C9.76256 1.92678 10.2374 1.92678 10.5303 2.21967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033C12.4874 5.82322 12.0126 5.82322 11.7197 5.53033L10.75 4.56066V13.25C10.75 13.6642 10.4142 14 10 14H2.75C2.33579 14 2 13.6642 2 13.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.73828 20.249C3.73828 19.8348 4.07408 19.499 4.48832 19.499L14.9893 19.499L14.9893 5.56007L12.5193 8.02975C12.2263 8.32263 11.7514 8.32261 11.4585 8.0297C11.1657 7.73678 11.1657 7.2619 11.4586 6.96902L15.209 3.21915C15.5019 2.92628 15.9767 2.92628 16.2696 3.21915L20.02 6.96902C20.3129 7.2619 20.3129 7.73678 20.02 8.0297C19.7271 8.32261 19.2522 8.32263 18.9593 8.02975L16.4893 5.56007L16.4893 20.249C16.4893 20.6632 16.1535 20.999 15.7393 20.999L4.48832 20.999C4.07408 20.999 3.73828 20.6632 3.73828 20.249Z"
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
@prop ariaLabel = 'arrow turn right up'
@prop ...restProps
-->
