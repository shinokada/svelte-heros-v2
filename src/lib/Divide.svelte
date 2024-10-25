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
    ariaLabel = 'divide',
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
      d="M4.49902 11.9983H19.4987M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808ZM12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808ZM11.9998 18.7509H12.0073V18.7584H11.9998V18.7509ZM12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M11.25 4C11.25 4.69036 10.6904 5.25 10 5.25C9.30964 5.25 8.75 4.69036 8.75 4C8.75 3.30964 9.30964 2.75 10 2.75C10.6904 2.75 11.25 3.30964 11.25 4Z"
      fill={color}
    />
    <path
      d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25H16.25C16.6642 9.25 17 9.58579 17 10C17 10.4142 16.6642 10.75 16.25 10.75H3.75C3.33579 10.75 3 10.4142 3 10Z"
      fill={color}
    />
    <path
      d="M10 17.25C10.6904 17.25 11.25 16.6904 11.25 16C11.25 15.3096 10.6904 14.75 10 14.75C9.30964 14.75 8.75 15.3096 8.75 16C8.75 16.6904 9.30964 17.25 10 17.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 8C2 7.58579 2.33579 7.25 2.75 7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41421 13.6642 8.75 13.25 8.75H2.75C2.33579 8.75 2 8.41421 2 8Z"
      fill={color}
    />
    <path
      d="M9 3C9 3.55228 8.55228 4 8 4C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3Z"
      fill={color}
    />
    <path
      d="M9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.8737 5.24812C10.8737 4.62682 11.3773 4.12305 11.9987 4.12305C12.6201 4.12305 13.1237 4.62682 13.1237 5.24812C13.1237 5.86942 12.6201 6.3732 11.9987 6.3732C11.3773 6.3732 10.8737 5.86942 10.8737 5.24812ZM3.74854 11.9983C3.74854 11.5841 4.08433 11.2483 4.49855 11.2483H19.4983C19.9125 11.2483 20.2483 11.5841 20.2483 11.9983C20.2483 12.4126 19.9125 12.7484 19.4983 12.7484H4.49855C4.08433 12.7484 3.74854 12.4126 3.74854 11.9983ZM10.8743 18.751C10.8743 18.1297 11.378 17.6259 11.9994 17.6259C12.6207 17.6259 13.1244 18.1297 13.1244 18.751C13.1244 19.3723 12.6207 19.8761 11.9994 19.8761C11.378 19.8761 10.8743 19.3723 10.8743 18.751Z"
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
@prop ariaLabel = 'divide'
@prop ...restProps
-->
