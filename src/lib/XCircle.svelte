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
    ariaLabel = 'x circle',
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
      d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L8.93934 10L7.21967 11.7197C6.92678 12.0126 6.92678 12.4874 7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803L10 11.0607L11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803C13.0732 12.4874 13.0732 12.0126 12.7803 11.7197L11.0607 10L12.7803 8.28033C13.0732 7.98744 13.0732 7.51256 12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967L10 8.93934L8.28033 7.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM10.7803 10.7803C10.4874 11.0732 10.0126 11.0732 9.71967 10.7803L8 9.06066L6.28033 10.7803C5.98744 11.0732 5.51256 11.0732 5.21967 10.7803C4.92678 10.4874 4.92678 10.0126 5.21967 9.71967L6.93934 8L5.21967 6.28033C4.92678 5.98744 4.92678 5.51256 5.21967 5.21967C5.51256 4.92678 5.98744 4.92678 6.28033 5.21967L8 6.93934L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L9.06066 8L10.7803 9.71967C11.0732 10.0126 11.0732 10.4874 10.7803 10.7803Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM10.2803 9.21967C9.98744 8.92678 9.51256 8.92678 9.21967 9.21967C8.92678 9.51256 8.92678 9.98744 9.21967 10.2803L10.9393 12L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803L12 13.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L13.0607 12L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L12 10.9393L10.2803 9.21967Z"
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
@prop ariaLabel = 'x circle'
@prop ...restProps
-->
