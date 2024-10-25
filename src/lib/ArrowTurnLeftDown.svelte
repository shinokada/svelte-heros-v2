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
    ariaLabel = 'arrow turn left down',
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
      d="M11.9901 16.4996L8.23975 20.2495M8.23975 20.2495L4.48939 16.4996M8.23975 20.2495L8.23975 3.75L19.4907 3.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 3.75C16 4.16421 15.6642 4.5 15.25 4.5L7.75 4.5L7.75 15.4393L9.71967 13.4697C10.0126 13.1768 10.4874 13.1768 10.7803 13.4697C11.0732 13.7626 11.0732 14.2374 10.7803 14.5303L7.53033 17.7803C7.23744 18.0732 6.76256 18.0732 6.46967 17.7803L3.21967 14.5303C2.92678 14.2374 2.92678 13.7626 3.21967 13.4697C3.51256 13.1768 3.98744 13.1768 4.28033 13.4697L6.25 15.4393L6.25 3.75C6.25 3.33579 6.58579 3 7 3L15.25 3C15.6642 3 16 3.33579 16 3.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.46967 2.21967C5.61032 2.07902 5.80109 2 6 2H13.25C13.6642 2 14 2.33579 14 2.75C14 3.16421 13.6642 3.5 13.25 3.5H6.75L6.75 11.4393L7.71967 10.4697C8.01256 10.1768 8.48744 10.1768 8.78033 10.4697C9.07322 10.7626 9.07322 11.2374 8.78033 11.5303L6.53033 13.7803C6.23744 14.0732 5.76256 14.0732 5.46967 13.7803L3.21967 11.5303C2.92678 11.2374 2.92678 10.7626 3.21967 10.4697C3.51256 10.1768 3.98744 10.1768 4.28033 10.4697L5.25 11.4393L5.25 2.75C5.25 2.55109 5.32902 2.36032 5.46967 2.21967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.2397 3.75001C20.2397 4.16423 19.9039 4.50002 19.4897 4.50002L8.98877 4.50002L8.98877 18.4389L11.4588 15.9693C11.7517 15.6764 12.2266 15.6764 12.5195 15.9693C12.8124 16.2622 12.8123 16.7371 12.5194 17.03L8.76906 20.7799C8.47616 21.0727 8.00131 21.0727 7.7084 20.7799L3.95804 17.03C3.66512 16.7371 3.6651 16.2622 3.95799 15.9693C4.25089 15.6764 4.72578 15.6764 5.0187 15.9693L7.4887 18.4389L7.4887 3.75001C7.4887 3.33579 7.8245 3 8.23873 3L19.4897 3C19.9039 3 20.2397 3.33579 20.2397 3.75001Z"
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
@prop ariaLabel = 'arrow turn left down'
@prop ...restProps
-->
