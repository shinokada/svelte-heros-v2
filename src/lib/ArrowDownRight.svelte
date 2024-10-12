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
    ariaLabel = 'arrow down right',
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
      d="M4.5 4.5L19.5 19.5M19.5 19.5V8.25M19.5 19.5H8.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L12.4393 13.5H6.75C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15H14.25C14.3517 15 14.4487 14.9798 14.5371 14.9431C14.6235 14.9073 14.7047 14.8547 14.7754 14.7852C14.7787 14.782 14.782 14.7787 14.7852 14.7754C14.8547 14.7047 14.9073 14.6235 14.9431 14.5371C14.9798 14.4487 15 14.3517 15 14.25V6.75C15 6.33579 14.6642 6 14.25 6C13.8358 6 13.5 6.33579 13.5 6.75V12.4393L6.28033 5.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.21967 4.21967C3.92678 4.51256 3.92678 4.98744 4.21967 5.28033L9.43934 10.5H5.75C5.33579 10.5 5 10.8358 5 11.25C5 11.6642 5.33579 12 5.75 12H11.25C11.6642 12 12 11.6642 12 11.25V5.75C12 5.33579 11.6642 5 11.25 5C10.8358 5 10.5 5.33579 10.5 5.75V9.43934L5.28033 4.21967C4.98744 3.92678 4.51256 3.92678 4.21967 4.21967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.96967 3.96967C4.26256 3.67678 4.73744 3.67678 5.03033 3.96967L18.75 17.6893V8.25C18.75 7.83579 19.0858 7.5 19.5 7.5C19.9142 7.5 20.25 7.83579 20.25 8.25V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H8.25C7.83579 20.25 7.5 19.9142 7.5 19.5C7.5 19.0858 7.83579 18.75 8.25 18.75H17.6893L3.96967 5.03033C3.67678 4.73744 3.67678 4.26256 3.96967 3.96967Z"
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
@prop ariaLabel = 'arrow down right'
@prop ...restProps
-->
