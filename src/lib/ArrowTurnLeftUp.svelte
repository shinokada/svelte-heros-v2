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
    ariaLabel = 'arrow turn left up',
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
      d="M11.9901 7.4994L8.23975 3.74952M8.23975 3.74952L4.48939 7.4994M8.23975 3.74952L8.23975 20.249L19.4907 20.249"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 16.25C16 15.8358 15.6642 15.5 15.25 15.5H7.75L7.75 4.56066L9.71967 6.53033C10.0126 6.82322 10.4874 6.82322 10.7803 6.53033C11.0732 6.23744 11.0732 5.76256 10.7803 5.46967L7.53033 2.21967C7.23744 1.92678 6.76256 1.92678 6.46967 2.21967L3.21967 5.46967C2.92678 5.76256 2.92678 6.23744 3.21967 6.53033C3.51256 6.82322 3.98744 6.82322 4.28033 6.53033L6.25 4.56066L6.25 16.25C6.25 16.6642 6.58579 17 7 17H15.25C15.6642 17 16 16.6642 16 16.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 13.25C14 12.8358 13.6642 12.5 13.25 12.5H6.75L6.75 4.56066L7.71967 5.53033C8.01256 5.82322 8.48744 5.82322 8.78033 5.53033C9.07322 5.23744 9.07322 4.76256 8.78033 4.46967L6.53033 2.21967C6.23744 1.92678 5.76256 1.92678 5.46967 2.21967L3.21967 4.46967C2.92678 4.76256 2.92678 5.23744 3.21967 5.53033C3.51256 5.82322 3.98744 5.82322 4.28033 5.53033L5.25 4.56066L5.25 13.25C5.25 13.6642 5.58579 14 6 14H13.25C13.6642 14 14 13.6642 14 13.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2397 20.249C20.2397 19.8348 19.9039 19.499 19.4897 19.499L8.98877 19.499L8.98877 5.56007L11.4588 8.02975C11.7517 8.32263 12.2266 8.32261 12.5195 8.0297C12.8124 7.73678 12.8123 7.2619 12.5194 6.96902L8.76907 3.21915C8.47616 2.92628 8.00131 2.92628 7.70841 3.21915L3.95805 6.96902C3.66512 7.2619 3.6651 7.73678 3.95799 8.0297C4.25089 8.32261 4.72578 8.32263 5.0187 8.02975L7.4887 5.56007L7.4887 20.249C7.4887 20.6632 7.8245 20.999 8.23873 20.999L19.4897 20.999C19.9039 20.999 20.2397 20.6632 20.2397 20.249Z"
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
@prop ariaLabel = 'arrow turn left up'
@prop ...restProps
-->
