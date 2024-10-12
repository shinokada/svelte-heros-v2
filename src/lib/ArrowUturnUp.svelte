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
    ariaLabel = 'arrow uturn up',
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
      d="M9 9L15 3M15 3L21 9M15 3L15 15C15 18.3137 12.3137 21 9 21C5.68629 21 3 18.3137 3 15L3 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.7679 7.79252C17.4682 8.07852 16.9935 8.06748 16.7075 7.76786L12.75 3.62192L12.75 13.625C12.75 16.5935 10.3435 19 7.375 19C4.40647 19 2 16.5935 2 13.625L2 10.75C2 10.3358 2.33579 10 2.75 10C3.16421 10 3.5 10.3358 3.5 10.75L3.5 13.625C3.5 15.7651 5.2349 17.5 7.375 17.5C9.5151 17.5 11.25 15.7651 11.25 13.625L11.25 3.62192L7.29252 7.76786C7.00651 8.06748 6.53177 8.07852 6.23214 7.79252C5.93252 7.50651 5.92148 7.03177 6.20748 6.73214L11.4575 1.23214C11.599 1.08388 11.795 1 12 1C12.205 1 12.401 1.08388 12.5425 1.23214L17.7925 6.73214C18.0785 7.03177 18.0675 7.50651 17.7679 7.79252Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.25 12.5C7.76878 12.5 9 11.2688 9 9.75L9 4.56066L6.78033 6.78033C6.48744 7.07322 6.01256 7.07322 5.71967 6.78033C5.42678 6.48744 5.42678 6.01256 5.71967 5.71967L9.21967 2.21967C9.51256 1.92678 9.98744 1.92678 10.2803 2.21967L13.7803 5.71967C14.0732 6.01256 14.0732 6.48744 13.7803 6.78033C13.4874 7.07322 13.0126 7.07322 12.7197 6.78033L10.5 4.56066V9.75C10.5 12.0972 8.59721 14 6.25 14C3.90279 14 2 12.0972 2 9.75L2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75L3.5 9.75C3.5 11.2688 4.73122 12.5 6.25 12.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.5303 9.53033C21.2374 9.82322 20.7626 9.82322 20.4697 9.53033L15.75 4.81066V15C15.75 18.7279 12.7279 21.75 9 21.75C5.27208 21.75 2.25 18.7279 2.25 15L2.25 12C2.25 11.5858 2.58579 11.25 3 11.25C3.41421 11.25 3.75 11.5858 3.75 12L3.75 15C3.75 17.8995 6.10051 20.25 9 20.25C11.8995 20.25 14.25 17.8995 14.25 15V4.81066L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L14.4697 2.46967C14.7626 2.17678 15.2374 2.17678 15.5303 2.46967L21.5303 8.46967C21.8232 8.76256 21.8232 9.23744 21.5303 9.53033Z"
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
@prop ariaLabel = 'arrow uturn up'
@prop ...restProps
-->
