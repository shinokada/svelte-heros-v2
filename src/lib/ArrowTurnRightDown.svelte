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
    ariaLabel = 'arrow turn right down',
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
      d="M11.9899 16.4996L15.7402 20.2495M15.7402 20.2495L19.4906 16.4996M15.7402 20.2495L15.7402 3.75L4.48926 3.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3.75C3 4.16421 3.33579 4.5 3.75 4.5L11.25 4.5L11.25 15.4393L9.28033 13.4697C8.98744 13.1768 8.51256 13.1768 8.21967 13.4697C7.92678 13.7626 7.92678 14.2374 8.21967 14.5303L11.4697 17.7803C11.7626 18.0732 12.2374 18.0732 12.5303 17.7803L15.7803 14.5303C16.0732 14.2374 16.0732 13.7626 15.7803 13.4697C15.4874 13.1768 15.0126 13.1768 14.7197 13.4697L12.75 15.4393L12.75 3.75C12.75 3.33579 12.4142 3 12 3L3.75 3C3.33579 3 3 3.33579 3 3.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 2.75C2 3.16421 2.33579 3.5 2.75 3.5L9.25 3.5L9.25 11.4393L8.28033 10.4697C7.98744 10.1768 7.51256 10.1768 7.21967 10.4697C6.92678 10.7626 6.92678 11.2374 7.21967 11.5303L9.46967 13.7803C9.76256 14.0732 10.2374 14.0732 10.5303 13.7803L12.7803 11.5303C13.0732 11.2374 13.0732 10.7626 12.7803 10.4697C12.4874 10.1768 12.0126 10.1768 11.7197 10.4697L10.75 11.4393V2.75C10.75 2.33579 10.4142 2 10 2L2.75 2C2.33579 2 2 2.33579 2 2.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.73828 3.75001C3.73828 4.16423 4.07408 4.50002 4.48832 4.50002L14.9893 4.50002L14.9893 18.4389L12.5193 15.9693C12.2263 15.6764 11.7514 15.6764 11.4586 15.9693C11.1657 16.2622 11.1657 16.7371 11.4586 17.03L15.209 20.7799C15.5019 21.0727 15.9767 21.0727 16.2696 20.7799L20.02 17.03C20.3129 16.7371 20.3129 16.2622 20.02 15.9693C19.7271 15.6764 19.2522 15.6764 18.9593 15.9693L16.4893 18.4389L16.4893 3.75001C16.4893 3.33579 16.1535 3 15.7393 3L4.48832 3C4.07408 3 3.73828 3.33579 3.73828 3.75001Z"
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
@prop ariaLabel = 'arrow turn right down'
@prop ...restProps
-->
