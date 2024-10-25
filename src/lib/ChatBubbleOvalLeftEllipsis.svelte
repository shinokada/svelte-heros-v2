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
    ariaLabel = 'chat bubble oval left ellipsis',
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
      d="M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75M21 12C21 16.5563 16.9706 20.25 12 20.25C11.1125 20.25 10.2551 20.1323 9.44517 19.9129C8.47016 20.5979 7.28201 21 6 21C5.80078 21 5.60376 20.9903 5.40967 20.9713C5.25 20.9558 5.0918 20.9339 4.93579 20.906C5.41932 20.3353 5.76277 19.6427 5.91389 18.8808C6.00454 18.4238 5.7807 17.9799 5.44684 17.6549C3.9297 16.1782 3 14.1886 3 12C3 7.44365 7.02944 3.75 12 3.75C16.9706 3.75 21 7.44365 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 3C5.69006 3 2 6.0334 2 10C2 12.0244 2.97849 13.8253 4.49899 15.0848C4.48371 15.7294 4.29476 16.329 3.97742 16.8409C3.83914 17.064 3.82753 17.3431 3.9468 17.5769C4.06608 17.8107 4.29888 17.9651 4.56065 17.9841C4.70585 17.9947 4.85237 18 5 18C6.3037 18 7.51177 17.5834 8.49617 16.8766C8.98381 16.9577 9.48658 17 10 17C14.3099 17 18 13.9666 18 10C18 6.0334 14.3099 3 10 3ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10ZM13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 2C4.26184 2 1 4.5691 1 8C1 9.86014 1.97915 11.4858 3.45459 12.5659C3.38055 13.0221 3.21838 13.4482 2.98605 13.8269C2.83711 14.0698 2.83857 14.376 2.98983 14.6174C3.1411 14.8587 3.41604 14.9936 3.6995 14.9654C4.81757 14.8544 5.85852 14.4801 6.7588 13.9061C7.16215 13.9679 7.57698 14 8 14C11.7382 14 15 11.4309 15 8C15 4.5691 11.7382 2 8 2ZM5 9C5.55228 9 6 8.55228 6 8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.80365 21.6442C4.9793 21.6757 5.15732 21.7003 5.33691 21.7178C5.55516 21.7391 5.77647 21.75 6 21.75C7.3153 21.75 8.54447 21.3731 9.58317 20.7213C10.3569 20.9034 11.1668 21 12 21C17.322 21 21.75 17.0307 21.75 12C21.75 6.96934 17.322 3 12 3C6.67799 3 2.25 6.96934 2.25 12C2.25 14.4086 3.2746 16.5871 4.92371 18.1923C5.15571 18.4182 5.20107 18.6196 5.17822 18.7349C5.05254 19.3685 4.76687 19.9451 4.36357 20.4211C4.19016 20.6258 4.13927 20.9075 4.23008 21.1599C4.3209 21.4123 4.5396 21.597 4.80365 21.6442ZM8.25 10.875C7.62868 10.875 7.125 11.3787 7.125 12C7.125 12.6213 7.62868 13.125 8.25 13.125C8.87132 13.125 9.375 12.6213 9.375 12C9.375 11.3787 8.87132 10.875 8.25 10.875ZM10.875 12C10.875 11.3787 11.3787 10.875 12 10.875C12.6213 10.875 13.125 11.3787 13.125 12C13.125 12.6213 12.6213 13.125 12 13.125C11.3787 13.125 10.875 12.6213 10.875 12ZM15.75 10.875C15.1287 10.875 14.625 11.3787 14.625 12C14.625 12.6213 15.1287 13.125 15.75 13.125C16.3713 13.125 16.875 12.6213 16.875 12C16.875 11.3787 16.3713 10.875 15.75 10.875Z"
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
@prop ariaLabel = 'chat bubble oval left ellipsis'
@prop ...restProps
-->
