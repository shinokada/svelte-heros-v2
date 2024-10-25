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
    ariaLabel = 'viewfinder circle',
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
      d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.25 2C3.00736 2 2 3.00736 2 4.25V6.25C2 6.66421 2.33579 7 2.75 7C3.16421 7 3.5 6.66421 3.5 6.25V4.25C3.5 3.83579 3.83579 3.5 4.25 3.5H6.25C6.66421 3.5 7 3.16421 7 2.75C7 2.33579 6.66421 2 6.25 2H4.25Z"
      fill={color}
    />
    <path
      d="M13.75 2C13.3358 2 13 2.33579 13 2.75C13 3.16421 13.3358 3.5 13.75 3.5H15.75C16.1642 3.5 16.5 3.83579 16.5 4.25V6.25C16.5 6.66421 16.8358 7 17.25 7C17.6642 7 18 6.66421 18 6.25V4.25C18 3.00736 16.9926 2 15.75 2H13.75Z"
      fill={color}
    />
    <path
      d="M3.5 13.75C3.5 13.3358 3.16421 13 2.75 13C2.33579 13 2 13.3358 2 13.75V15.75C2 16.9926 3.00736 18 4.25 18H6.25C6.66421 18 7 17.6642 7 17.25C7 16.8358 6.66421 16.5 6.25 16.5H4.25C3.83579 16.5 3.5 16.1642 3.5 15.75V13.75Z"
      fill={color}
    />
    <path
      d="M18 13.75C18 13.3358 17.6642 13 17.25 13C16.8358 13 16.5 13.3358 16.5 13.75V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H13.75C13.3358 16.5 13 16.8358 13 17.25C13 17.6642 13.3358 18 13.75 18H15.75C16.9926 18 18 16.9926 18 15.75V13.75Z"
      fill={color}
    />
    <path
      d="M7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3.75 2C2.7835 2 2 2.7835 2 3.75V5.25C2 5.66421 2.33579 6 2.75 6C3.16421 6 3.5 5.66421 3.5 5.25V3.75C3.5 3.61193 3.61193 3.5 3.75 3.5H5.25C5.66421 3.5 6 3.16421 6 2.75C6 2.33579 5.66421 2 5.25 2H3.75Z"
      fill={color}
    />
    <path
      d="M10.75 2C10.3358 2 10 2.33579 10 2.75C10 3.16421 10.3358 3.5 10.75 3.5H12.25C12.3881 3.5 12.5 3.61193 12.5 3.75V5.25C12.5 5.66421 12.8358 6 13.25 6C13.6642 6 14 5.66421 14 5.25V3.75C14 2.7835 13.2165 2 12.25 2H10.75Z"
      fill={color}
    />
    <path
      d="M3.5 10.75C3.5 10.3358 3.16421 10 2.75 10C2.33579 10 2 10.3358 2 10.75V12.25C2 13.2165 2.7835 14 3.75 14H5.25C5.66421 14 6 13.6642 6 13.25C6 12.8358 5.66421 12.5 5.25 12.5H3.75C3.61193 12.5 3.5 12.3881 3.5 12.25V10.75Z"
      fill={color}
    />
    <path
      d="M14 10.75C14 10.3358 13.6642 10 13.25 10C12.8358 10 12.5 10.3358 12.5 10.75V12.25C12.5 12.3881 12.3881 12.5 12.25 12.5H10.75C10.3358 12.5 10 12.8358 10 13.25C10 13.6642 10.3358 14 10.75 14H12.25C13.2165 14 14 13.2165 14 12.25V10.75Z"
      fill={color}
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      fill={color}
    />
  {:else}
    <path
      d="M6 3C4.34315 3 3 4.34315 3 6V7.5C3 7.91421 3.33579 8.25 3.75 8.25C4.16421 8.25 4.5 7.91421 4.5 7.5V6C4.5 5.17157 5.17157 4.5 6 4.5H7.5C7.91421 4.5 8.25 4.16421 8.25 3.75C8.25 3.33579 7.91421 3 7.5 3H6Z"
      fill={color}
    />
    <path
      d="M16.5 3C16.0858 3 15.75 3.33579 15.75 3.75C15.75 4.16421 16.0858 4.5 16.5 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V7.5C19.5 7.91421 19.8358 8.25 20.25 8.25C20.6642 8.25 21 7.91421 21 7.5V6C21 4.34315 19.6569 3 18 3H16.5Z"
      fill={color}
    />
    <path
      d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
      fill={color}
    />
    <path
      d="M4.5 16.5C4.5 16.0858 4.16421 15.75 3.75 15.75C3.33579 15.75 3 16.0858 3 16.5V18C3 19.6569 4.34315 21 6 21H7.5C7.91421 21 8.25 20.6642 8.25 20.25C8.25 19.8358 7.91421 19.5 7.5 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V16.5Z"
      fill={color}
    />
    <path
      d="M21 16.5C21 16.0858 20.6642 15.75 20.25 15.75C19.8358 15.75 19.5 16.0858 19.5 16.5V18C19.5 18.8284 18.8284 19.5 18 19.5H16.5C16.0858 19.5 15.75 19.8358 15.75 20.25C15.75 20.6642 16.0858 21 16.5 21H18C19.6569 21 21 19.6569 21 18V16.5Z"
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
@prop ariaLabel = 'viewfinder circle'
@prop ...restProps
-->
