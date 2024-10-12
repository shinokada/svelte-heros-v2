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
    ariaLabel = 'arrow turn up left',
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
      d="M7.49012 11.9994L3.74025 8.24902M3.74025 8.24902L7.49012 4.49866M3.74025 8.24902L20.2397 8.24902L20.2397 19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.25 17C15.8358 17 15.5 16.6642 15.5 16.25V8.75H4.56066L6.53033 10.7197C6.82322 11.0126 6.82322 11.4874 6.53033 11.7803C6.23744 12.0732 5.76256 12.0732 5.46967 11.7803L2.21967 8.53033C1.92678 8.23744 1.92678 7.76256 2.21967 7.46967L5.46967 4.21967C5.76256 3.92678 6.23744 3.92678 6.53033 4.21967C6.82322 4.51256 6.82322 4.98744 6.53033 5.28033L4.56066 7.25H16.25C16.6642 7.25 17 7.58579 17 8V16.25C17 16.6642 16.6642 17 16.25 17Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.25 14C12.8358 14 12.5 13.6642 12.5 13.25V6.75H4.56066L5.53033 7.71967C5.82322 8.01256 5.82322 8.48744 5.53033 8.78033C5.23744 9.07322 4.76256 9.07322 4.46967 8.78033L2.21967 6.53033C1.92678 6.23744 1.92678 5.76256 2.21967 5.46967L4.46967 3.21967C4.76256 2.92678 5.23744 2.92678 5.53033 3.21967C5.82322 3.51256 5.82322 3.98744 5.53033 4.28033L4.56066 5.25H13.25C13.6642 5.25 14 5.58579 14 6V13.25C14 13.6642 13.6642 14 13.25 14Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2388 20.25C19.8245 20.25 19.4887 19.9142 19.4887 19.5L19.4887 8.99902L5.54982 8.99902L8.0195 11.469C8.31238 11.7619 8.31236 12.2368 8.01944 12.5297C7.72653 12.8226 7.25165 12.8226 6.95877 12.5297L3.20889 8.77932C2.91603 8.48642 2.91603 8.01156 3.20889 7.71866L6.95877 3.9683C7.25165 3.67538 7.72653 3.67535 8.01944 3.96825C8.31236 4.26114 8.31238 4.73603 8.0195 5.02896L5.54982 7.49895L20.2388 7.49895C20.653 7.49895 20.9888 7.83476 20.9888 8.24899L20.9888 19.5C20.9888 19.9142 20.653 20.25 20.2388 20.25Z"
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
@prop ariaLabel = 'arrow turn up left'
@prop ...restProps
-->
