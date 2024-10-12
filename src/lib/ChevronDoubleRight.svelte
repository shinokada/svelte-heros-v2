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
    ariaLabel = 'chevron double right',
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
      d="M5.25 4.5L12.75 12L5.25 19.5M11.25 4.5L18.75 12L11.25 19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.2803 9.46967C15.5732 9.76256 15.5732 10.2374 15.2803 10.5303L11.0303 14.7803C10.7374 15.0732 10.2626 15.0732 9.96967 14.7803C9.67678 14.4874 9.67678 14.0126 9.96967 13.7197L13.6893 10L9.96967 6.28033C9.67678 5.98744 9.67678 5.51256 9.96967 5.21967C10.2626 4.92678 10.7374 4.92678 11.0303 5.21967L15.2803 9.46967ZM6.03033 5.21967L10.2803 9.46967C10.5732 9.76256 10.5732 10.2374 10.2803 10.5303L6.03033 14.7803C5.73744 15.0732 5.26256 15.0732 4.96967 14.7803C4.67678 14.4874 4.67678 14.0126 4.96967 13.7197L8.68934 10L4.96967 6.28033C4.67678 5.98744 4.67678 5.51256 4.96967 5.21967C5.26256 4.92678 5.73744 4.92678 6.03033 5.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.7803 7.59467C13.0732 7.88756 13.0732 8.36244 12.7803 8.65533L9.53033 11.9053C9.23744 12.1982 8.76256 12.1982 8.46967 11.9053C8.17678 11.6124 8.17678 11.1376 8.46967 10.8447L11.1893 8.125L8.46967 5.40533C8.17678 5.11244 8.17678 4.63756 8.46967 4.34467C8.76256 4.05178 9.23744 4.05178 9.53033 4.34467L12.7803 7.59467ZM4.53033 4.34467L7.78033 7.59467C8.07322 7.88756 8.07322 8.36244 7.78033 8.65533L4.53033 11.9053C4.23744 12.1982 3.76256 12.1982 3.46967 11.9053C3.17678 11.6124 3.17678 11.1376 3.46967 10.8447L6.18934 8.125L3.46967 5.40533C3.17678 5.11244 3.17678 4.63756 3.46967 4.34467C3.76256 4.05178 4.23744 4.05178 4.53033 4.34467Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.2803 11.4697C13.5732 11.7626 13.5732 12.2374 13.2803 12.5303L5.78033 20.0303C5.48744 20.3232 5.01256 20.3232 4.71967 20.0303C4.42678 19.7374 4.42678 19.2626 4.71967 18.9697L11.6893 12L4.71967 5.03033C4.42678 4.73744 4.42678 4.26256 4.71967 3.96967C5.01256 3.67678 5.48744 3.67678 5.78033 3.96967L13.2803 11.4697Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.2803 11.4697C19.5732 11.7626 19.5732 12.2374 19.2803 12.5303L11.7803 20.0303C11.4874 20.3232 11.0126 20.3232 10.7197 20.0303C10.4268 19.7374 10.4268 19.2626 10.7197 18.9697L17.6893 12L10.7197 5.03033C10.4268 4.73744 10.4268 4.26256 10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967L19.2803 11.4697Z"
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
@prop ariaLabel = 'chevron double right'
@prop ...restProps
-->
