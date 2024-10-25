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
    ariaLabel = 'chevron up down',
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
      d="M8.25 15L12 18.75L15.75 15M8.25 9L12 5.25L15.75 9"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5303 3.46967C10.2374 3.17678 9.76256 3.17678 9.46967 3.46967L6.21967 6.71967C5.92678 7.01256 5.92678 7.48744 6.21967 7.78033C6.51256 8.07322 6.98744 8.07322 7.28033 7.78033L10 5.06066L12.7197 7.78033C13.0126 8.07322 13.4874 8.07322 13.7803 7.78033C14.0732 7.48744 14.0732 7.01256 13.7803 6.71967L10.5303 3.46967ZM6.21967 13.2803L9.46967 16.5303C9.76256 16.8232 10.2374 16.8232 10.5303 16.5303L13.7803 13.2803C14.0732 12.9874 14.0732 12.5126 13.7803 12.2197C13.4874 11.9268 13.0126 11.9268 12.7197 12.2197L10 14.9393L7.28033 12.2197C6.98744 11.9268 6.51256 11.9268 6.21967 12.2197C5.92678 12.5126 5.92678 12.9874 6.21967 13.2803Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.21967 10.2197C5.51256 9.92678 5.98744 9.92678 6.28033 10.2197L8 11.9393L9.71967 10.2197C10.0126 9.92678 10.4874 9.92678 10.7803 10.2197C11.0732 10.5126 11.0732 10.9874 10.7803 11.2803L8.53033 13.5303C8.23744 13.8232 7.76256 13.8232 7.46967 13.5303L5.21967 11.2803C4.92678 10.9874 4.92678 10.5126 5.21967 10.2197Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.7803 5.78033C10.4874 6.07322 10.0126 6.07322 9.71967 5.78033L8 4.06066L6.28033 5.78033C5.98744 6.07322 5.51256 6.07322 5.21967 5.78033C4.92678 5.48744 4.92678 5.01256 5.21967 4.71967L7.46967 2.46967C7.76256 2.17678 8.23744 2.17678 8.53033 2.46967L10.7803 4.71967C11.0732 5.01256 11.0732 5.48744 10.7803 5.78033Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033C15.9874 9.82322 15.5126 9.82322 15.2197 9.53033L12 6.31066L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L11.4697 4.71967ZM7.71967 14.4697C8.01256 14.1768 8.48744 14.1768 8.78033 14.4697L12 17.6893L15.2197 14.4697C15.5126 14.1768 15.9874 14.1768 16.2803 14.4697C16.5732 14.7626 16.5732 15.2374 16.2803 15.5303L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L7.71967 15.5303C7.42678 15.2374 7.42678 14.7626 7.71967 14.4697Z"
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
@prop ariaLabel = 'chevron up down'
@prop ...restProps
-->
