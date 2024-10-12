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
    ariaLabel = 'chevron up',
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
      d="M4.5 15.75L12 8.25L19.5 15.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.46967 6.46967C9.76256 6.17678 10.2374 6.17678 10.5303 6.46967L14.7803 10.7197C15.0732 11.0126 15.0732 11.4874 14.7803 11.7803C14.4874 12.0732 14.0126 12.0732 13.7197 11.7803L10 8.06066L6.28033 11.7803C5.98744 12.0732 5.51256 12.0732 5.21967 11.7803C4.92678 11.4874 4.92678 11.0126 5.21967 10.7197L9.46967 6.46967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7803 9.78033C11.4874 10.0732 11.0126 10.0732 10.7197 9.78033L8 7.06066L5.28033 9.78033C4.98744 10.0732 4.51256 10.0732 4.21967 9.78033C3.92678 9.48744 3.92678 9.01256 4.21967 8.71967L7.46967 5.46967C7.76256 5.17678 8.23744 5.17678 8.53033 5.46967L11.7803 8.71967C12.0732 9.01256 12.0732 9.48744 11.7803 9.78033Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z"
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
@prop ariaLabel = 'chevron up'
@prop ...restProps
-->
