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
    ariaLabel = 'arrow uturn down',
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
      d="M15 15L9 21M9 21L3 15M9 21V9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9V12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.23214 12.2075C2.53177 11.9215 3.00651 11.9325 3.29252 12.2321L7.25 16.3781V6.375C7.25 3.40647 9.65647 1 12.625 1C15.5935 1 18 3.40647 18 6.375V9.25C18 9.66421 17.6642 10 17.25 10C16.8358 10 16.5 9.66421 16.5 9.25V6.375C16.5 4.2349 14.7651 2.5 12.625 2.5C10.4849 2.5 8.75 4.2349 8.75 6.375V16.3781L12.7075 12.2321C12.9935 11.9325 13.4682 11.9215 13.7679 12.2075C14.0675 12.4935 14.0785 12.9682 13.7925 13.2679L8.54252 18.7679C8.401 18.9161 8.20496 19 8 19C7.79504 19 7.59901 18.9161 7.45748 18.7679L2.20748 13.2679C1.92148 12.9682 1.93252 12.4935 2.23214 12.2075Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.75 3.5C8.23122 3.5 7 4.73122 7 6.25V11.4393L9.21967 9.21967C9.51256 8.92678 9.98744 8.92678 10.2803 9.21967C10.5732 9.51256 10.5732 9.98744 10.2803 10.2803L6.78033 13.7803C6.48744 14.0732 6.01256 14.0732 5.71967 13.7803L2.21967 10.2803C1.92678 9.98744 1.92678 9.51256 2.21967 9.21967C2.51256 8.92678 2.98744 8.92678 3.28033 9.21967L5.5 11.4393V6.25C5.5 3.90279 7.40279 2 9.75 2C12.0972 2 14 3.90279 14 6.25V7.25C14 7.66421 13.6642 8 13.25 8C12.8358 8 12.5 7.66421 12.5 7.25V6.25C12.5 4.73122 11.2688 3.5 9.75 3.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 3.75C12.1005 3.75 9.75 6.10051 9.75 9L9.75 19.1893L14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303L9.53033 21.5303C9.38968 21.671 9.19891 21.75 9 21.75C8.80109 21.75 8.61032 21.671 8.46967 21.5303L2.46967 15.5303C2.17678 15.2374 2.17678 14.7626 2.46967 14.4697C2.76256 14.1768 3.23744 14.1768 3.53033 14.4697L8.25 19.1893V9C8.25 5.27208 11.2721 2.25 15 2.25C18.7279 2.25 21.75 5.27208 21.75 9V12C21.75 12.4142 21.4142 12.75 21 12.75C20.5858 12.75 20.25 12.4142 20.25 12V9C20.25 6.10051 17.8995 3.75 15 3.75Z"
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
@prop ariaLabel = 'arrow uturn down'
@prop ...restProps
-->
