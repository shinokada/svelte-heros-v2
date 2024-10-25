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
    ariaLabel = 'arrow uturn right',
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
      d="M15 15L21 9M21 9L15 3M21 9H9C5.68629 9 3 11.6863 3 15C3 18.3137 5.68629 21 9 21H12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2075 2.23214C11.9215 2.53177 11.9325 3.00651 12.2321 3.29252L16.3781 7.25H6.375C3.40647 7.25 1 9.65647 1 12.625C1 15.5935 3.40647 18 6.375 18H9.25C9.66421 18 10 17.6642 10 17.25C10 16.8358 9.66421 16.5 9.25 16.5H6.375C4.2349 16.5 2.5 14.7651 2.5 12.625C2.5 10.4849 4.2349 8.75 6.375 8.75H16.3781L12.2321 12.7075C11.9325 12.9935 11.9215 13.4682 12.2075 13.7679C12.4935 14.0675 12.9682 14.0785 13.2679 13.7925L18.7679 8.54252C18.9161 8.401 19 8.20496 19 8C19 7.79504 18.9161 7.59901 18.7679 7.45748L13.2679 2.20748C12.9682 1.92148 12.4935 1.93252 12.2075 2.23214Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 9.75C3.5 8.23122 4.73122 7 6.25 7H11.4393L9.21967 9.21967C8.92678 9.51256 8.92678 9.98744 9.21967 10.2803C9.51256 10.5732 9.98744 10.5732 10.2803 10.2803L13.7803 6.78033C14.0732 6.48744 14.0732 6.01256 13.7803 5.71967L10.2803 2.21967C9.98744 1.92678 9.51256 1.92678 9.21967 2.21967C8.92678 2.51256 8.92678 2.98744 9.21967 3.28033L11.4393 5.5L6.25 5.5C3.90279 5.5 2 7.40279 2 9.75C2 12.0972 3.90279 14 6.25 14H7.25C7.66421 14 8 13.6642 8 13.25C8 12.8358 7.66421 12.5 7.25 12.5H6.25C4.73122 12.5 3.5 11.2688 3.5 9.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.4697 2.46967C14.7626 2.17678 15.2374 2.17678 15.5303 2.46967L21.5303 8.46967C21.8232 8.76256 21.8232 9.23744 21.5303 9.53033L15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697L19.1893 9.75H9C6.10051 9.75 3.75 12.1005 3.75 15C3.75 17.8995 6.10051 20.25 9 20.25H12C12.4142 20.25 12.75 20.5858 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75H9C5.27208 21.75 2.25 18.7279 2.25 15C2.25 11.2721 5.27208 8.25 9 8.25H19.1893L14.4697 3.53033C14.1768 3.23744 14.1768 2.76256 14.4697 2.46967Z"
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
@prop ariaLabel = 'arrow uturn right'
@prop ...restProps
-->
