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
    ariaLabel = 'face smile',
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
      d="M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75ZM9.375 9.75H9.3825V9.765H9.375V9.75ZM15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75ZM14.625 9.75H14.6325V9.765H14.625V9.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.5355 13.5355C13.8284 13.2426 13.8284 12.7678 13.5355 12.4749C13.2426 12.182 12.7678 12.182 12.4749 12.4749C11.108 13.8417 8.89196 13.8417 7.52513 12.4749C7.23223 12.182 6.75736 12.182 6.46447 12.4749C6.17157 12.7678 6.17157 13.2426 6.46447 13.5355C8.41709 15.4881 11.5829 15.4881 13.5355 13.5355ZM9 8.5C9 9.32843 8.55228 10 8 10C7.44772 10 7 9.32843 7 8.5C7 7.67157 7.44772 7 8 7C8.55228 7 9 7.67157 9 8.5ZM12 10C12.5523 10 13 9.32843 13 8.5C13 7.67157 12.5523 7 12 7C11.4477 7 11 7.67157 11 8.5C11 9.32843 11.4477 10 12 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 8C6.55228 8 7 7.32843 7 6.5C7 5.67157 6.55228 5 6 5C5.44772 5 5 5.67157 5 6.5C5 7.32843 5.44772 8 6 8ZM11 6.5C11 7.32843 10.5523 8 10 8C9.44771 8 9 7.32843 9 6.5C9 5.67157 9.44771 5 10 5C10.5523 5 11 5.67157 11 6.5ZM11.0052 10.7447C10.7123 10.4518 10.2374 10.4518 9.94454 10.7447C8.8706 11.8186 7.1294 11.8186 6.05546 10.7447C5.76256 10.4518 5.28769 10.4518 4.9948 10.7447C4.7019 11.0376 4.7019 11.5125 4.9948 11.8053C6.65452 13.4651 9.34548 13.4651 11.0052 11.8053C11.2981 11.5124 11.2981 11.0376 11.0052 10.7447Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.375 8.25C8.83433 8.25 8.54674 8.66881 8.43901 8.88426C8.30886 9.14457 8.25 9.45171 8.25 9.75C8.25 10.0483 8.30886 10.3554 8.43901 10.6157C8.54674 10.8312 8.83433 11.25 9.375 11.25C9.91567 11.25 10.2033 10.8312 10.311 10.6157C10.4411 10.3554 10.5 10.0483 10.5 9.75C10.5 9.45171 10.4411 9.14457 10.311 8.88426C10.2033 8.66881 9.91567 8.25 9.375 8.25ZM13.689 8.88426C13.7967 8.66881 14.0843 8.25 14.625 8.25C15.1657 8.25 15.4533 8.66881 15.561 8.88426C15.6911 9.14457 15.75 9.45171 15.75 9.75C15.75 10.0483 15.6911 10.3554 15.561 10.6157C15.4533 10.8312 15.1657 11.25 14.625 11.25C14.0843 11.25 13.7967 10.8312 13.689 10.6157C13.5589 10.3554 13.5 10.0483 13.5 9.75C13.5 9.45171 13.5589 9.14457 13.689 8.88426ZM15.7123 15.7123C16.0052 15.4194 16.0052 14.9446 15.7123 14.6517C15.4194 14.3588 14.9445 14.3588 14.6517 14.6517C13.1872 16.1161 10.8128 16.1161 9.34835 14.6517C9.05546 14.3588 8.58058 14.3588 8.28769 14.6517C7.9948 14.9446 7.9948 15.4194 8.28769 15.7123C10.3379 17.7626 13.6621 17.7626 15.7123 15.7123Z"
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
@prop ariaLabel = 'face smile'
@prop ...restProps
-->
