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
    ariaLabel = 'arrow left start on rectangle',
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
      d="M8.25 9V5.25C8.25 4.00736 9.25736 3 10.5 3H16.5C17.7426 3 18.75 4.00736 18.75 5.25V18.75C18.75 19.9926 17.7426 21 16.5 21H10.5C9.25736 21 8.25 19.9926 8.25 18.75V15M5.25 15L2.25 12M2.25 12L5.25 9M2.25 12L15 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 4.25C17 3.00736 15.9926 2 14.75 2H9.25C8.00736 2 7 3.00736 7 4.25V6.25C7 6.66421 7.33579 7 7.75 7C8.16421 7 8.5 6.66421 8.5 6.25V4.25C8.5 3.83579 8.83579 3.5 9.25 3.5H14.75C15.1642 3.5 15.5 3.83579 15.5 4.25V15.75C15.5 16.1642 15.1642 16.5 14.75 16.5H9.25C8.83579 16.5 8.5 16.1642 8.5 15.75V13.75C8.5 13.3358 8.16421 13 7.75 13C7.33579 13 7 13.3358 7 13.75V15.75C7 16.9926 8.00736 18 9.25 18H14.75C15.9926 18 17 16.9926 17 15.75V4.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 10C14 9.58579 13.6642 9.25 13.25 9.25H3.70447L4.75172 8.30747C5.05961 8.03038 5.08457 7.55616 4.80747 7.24828C4.53038 6.94039 4.05616 6.91543 3.74828 7.19253L1.24828 9.44253C1.09024 9.58476 1 9.78738 1 10C1 10.2126 1.09024 10.4152 1.24828 10.5575L3.74828 12.8075C4.05616 13.0846 4.53038 13.0596 4.80747 12.7517C5.08457 12.4438 5.05961 11.9696 4.75172 11.6925L3.70447 10.75H13.25C13.6642 10.75 14 10.4142 14 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 4.75C14 3.23122 12.7688 2 11.25 2H8.25C6.73122 2 5.5 3.23122 5.5 4.75V5.25C5.5 5.66421 5.83579 6 6.25 6C6.66421 6 7 5.66421 7 5.25V4.75C7 4.05964 7.55964 3.5 8.25 3.5H11.25C11.9404 3.5 12.5 4.05964 12.5 4.75V11.25C12.5 11.9404 11.9404 12.5 11.25 12.5H8.25C7.55964 12.5 7 11.9404 7 11.25V10.75C7 10.3358 6.66421 10 6.25 10C5.83579 10 5.5 10.3358 5.5 10.75V11.25C5.5 12.7688 6.73122 14 8.25 14H11.25C12.7688 14 14 12.7688 14 11.25V4.75ZM4.53033 5.21967C4.23744 4.92678 3.76256 4.92678 3.46967 5.21967L1.21967 7.46967C0.926777 7.76256 0.926777 8.23744 1.21967 8.53033L3.46967 10.7803C3.76256 11.0732 4.23744 11.0732 4.53033 10.7803C4.82322 10.4874 4.82322 10.0126 4.53033 9.71967L3.56066 8.75L10.75 8.75C11.1642 8.75 11.5 8.41421 11.5 8C11.5 7.58579 11.1642 7.25 10.75 7.25L3.56066 7.25L4.53033 6.28033C4.82322 5.98744 4.82322 5.51256 4.53033 5.21967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.5 3.75C17.3284 3.75 18 4.42157 18 5.25V18.75C18 19.5784 17.3284 20.25 16.5 20.25H10.5C9.67157 20.25 9 19.5784 9 18.75V15C9 14.5858 8.66421 14.25 8.25 14.25C7.83579 14.25 7.5 14.5858 7.5 15V18.75C7.5 20.4069 8.84315 21.75 10.5 21.75H16.5C18.1569 21.75 19.5 20.4069 19.5 18.75V5.25C19.5 3.59315 18.1569 2.25 16.5 2.25L10.5 2.25C8.84315 2.25 7.5 3.59315 7.5 5.25V9C7.5 9.41422 7.83579 9.75 8.25 9.75C8.66421 9.75 9 9.41422 9 9V5.25C9 4.42157 9.67157 3.75 10.5 3.75L16.5 3.75ZM5.78033 8.46967C5.48744 8.17678 5.01256 8.17678 4.71967 8.46967L1.71967 11.4697C1.42678 11.7626 1.42678 12.2374 1.71967 12.5303L4.71967 15.5303C5.01256 15.8232 5.48744 15.8232 5.78033 15.5303C6.07322 15.2374 6.07322 14.7626 5.78033 14.4697L4.06066 12.75L15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25L4.06066 11.25L5.78033 9.53033C6.07322 9.23744 6.07322 8.76256 5.78033 8.46967Z"
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
@prop ariaLabel = 'arrow left start on rectangle'
@prop ...restProps
-->
