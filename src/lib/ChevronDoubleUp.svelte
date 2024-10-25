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
    ariaLabel = 'chevron double up',
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
      d="M4.5 18.75L12 11.25L19.5 18.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.5 12.75L12 5.25L19.5 12.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.46967 4.71967C9.76256 4.42678 10.2374 4.42678 10.5303 4.71967L14.7803 8.96967C15.0732 9.26256 15.0732 9.73744 14.7803 10.0303C14.4874 10.3232 14.0126 10.3232 13.7197 10.0303L10 6.31066L6.28033 10.0303C5.98744 10.3232 5.51256 10.3232 5.21967 10.0303C4.92678 9.73744 4.92678 9.26256 5.21967 8.96967L9.46967 4.71967ZM5.21967 13.9697L9.46967 9.71967C9.76256 9.42678 10.2374 9.42678 10.5303 9.71967L14.7803 13.9697C15.0732 14.2626 15.0732 14.7374 14.7803 15.0303C14.4874 15.3232 14.0126 15.3232 13.7197 15.0303L10 11.3107L6.28033 15.0303C5.98744 15.3232 5.51256 15.3232 5.21967 15.0303C4.92678 14.7374 4.92678 14.2626 5.21967 13.9697Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.46967 3.21967C7.76256 2.92678 8.23744 2.92678 8.53033 3.21967L11.7803 6.46967C12.0732 6.76256 12.0732 7.23744 11.7803 7.53033C11.4874 7.82322 11.0126 7.82322 10.7197 7.53033L8 4.81066L5.28033 7.53033C4.98744 7.82322 4.51256 7.82322 4.21967 7.53033C3.92678 7.23744 3.92678 6.76256 4.21967 6.46967L7.46967 3.21967ZM4.21967 11.4697L7.46967 8.21967C7.76256 7.92678 8.23744 7.92678 8.53033 8.21967L11.7803 11.4697C12.0732 11.7626 12.0732 12.2374 11.7803 12.5303C11.4874 12.8232 11.0126 12.8232 10.7197 12.5303L8 9.81066L5.28033 12.5303C4.98744 12.8232 4.51256 12.8232 4.21967 12.5303C3.92678 12.2374 3.92678 11.7626 4.21967 11.4697Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4697 10.7197C11.7626 10.4268 12.2374 10.4268 12.5303 10.7197L20.0303 18.2197C20.3232 18.5126 20.3232 18.9874 20.0303 19.2803C19.7374 19.5732 19.2626 19.5732 18.9697 19.2803L12 12.3107L5.03033 19.2803C4.73744 19.5732 4.26256 19.5732 3.96967 19.2803C3.67678 18.9874 3.67678 18.5126 3.96967 18.2197L11.4697 10.7197Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L20.0303 12.2197C20.3232 12.5126 20.3232 12.9874 20.0303 13.2803C19.7374 13.5732 19.2626 13.5732 18.9697 13.2803L12 6.31066L5.03033 13.2803C4.73744 13.5732 4.26256 13.5732 3.96967 13.2803C3.67678 12.9874 3.67678 12.5126 3.96967 12.2197L11.4697 4.71967Z"
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
@prop ariaLabel = 'chevron double up'
@prop ...restProps
-->
