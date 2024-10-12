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
    ariaLabel = 'archive box',
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
      d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.99976 11.25H13.9998M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M2 3C1.44772 3 1 3.44772 1 4V5C1 5.55228 1.44772 6 2 6H18C18.5523 6 19 5.55228 19 5V4C19 3.44772 18.5523 3 18 3H2Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 7.5H18L17.1885 15.2094C17.0813 16.2273 16.223 17 15.1995 17H4.80052C3.77701 17 2.91866 16.2273 2.81151 15.2094L2 7.5ZM7 11C7 10.4477 7.44772 10 8 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H8C7.44772 12 7 11.5523 7 11Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3 2C2.44772 2 2 2.44772 2 3V4C2 4.55228 2.44772 5 3 5H13C13.5523 5 14 4.55228 14 4V3C14 2.44772 13.5523 2 13 2H3Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6H13V12C13 13.1046 12.1046 14 11 14H5C3.89543 14 3 13.1046 3 12V6ZM6 8.75C6 8.33579 6.33579 8 6.75 8H9.25C9.66421 8 10 8.33579 10 8.75C10 9.16421 9.66421 9.5 9.25 9.5H6.75C6.33579 9.5 6 9.16421 6 8.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.24976 12.75C9.24976 12.3358 9.58554 12 9.99976 12H13.9998C14.414 12 14.7498 12.3358 14.7498 12.75C14.7498 13.1642 14.414 13.5 13.9998 13.5H9.99976C9.58554 13.5 9.24976 13.1642 9.24976 12.75Z"
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
@prop ariaLabel = 'archive box'
@prop ...restProps
-->
