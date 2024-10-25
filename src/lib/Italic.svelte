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
    ariaLabel = 'italic',
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
      d="M5.24756 20.2457H9.05106M9.05106 20.2457H12.7474M9.05106 20.2457L14.9438 3.74414M14.9438 3.74414H11.2474M14.9438 3.74414H18.7473"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 2.75C8 2.33579 8.33579 2 8.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H13.0347L8.55196 16.5H11.25C11.6642 16.5 12 16.8358 12 17.25C12 17.6642 11.6642 18 11.25 18H3.75C3.33579 18 3 17.6642 3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H6.96528L11.448 3.5H8.75C8.33579 3.5 8 3.16421 8 2.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.25 2.75C6.25 2.33579 6.58579 2 7 2H13C13.4142 2 13.75 2.33579 13.75 2.75C13.75 3.16421 13.4142 3.5 13 3.5H10.5169L7.08829 12.5H9C9.41421 12.5 9.75 12.8358 9.75 13.25C9.75 13.6642 9.41421 14 9 14H3C2.58579 14 2.25 13.6642 2.25 13.25C2.25 12.8358 2.58579 12.5 3 12.5H5.48314L8.91171 3.5H7C6.58579 3.5 6.25 3.16421 6.25 2.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.497 3.74418C10.497 3.32994 10.8327 2.99414 11.247 2.99414H18.7468C19.161 2.99414 19.4968 3.32994 19.4968 3.74418C19.4968 4.15842 19.161 4.49422 18.7468 4.49422H15.4719L10.1148 19.4957H12.7469C13.1612 19.4957 13.497 19.8315 13.497 20.2458C13.497 20.66 13.1612 20.9958 12.7469 20.9958H5.24709C4.83286 20.9958 4.49707 20.66 4.49707 20.2458C4.49707 19.8315 4.83286 19.4957 5.24709 19.4957H8.52202L13.8791 4.49422H11.247C10.8327 4.49422 10.497 4.15842 10.497 3.74418Z"
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
@prop ariaLabel = 'italic'
@prop ...restProps
-->
