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
    ariaLabel = 'swatch',
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
      d="M4.09835 19.9017C5.56282 21.3661 7.93719 21.3661 9.40165 19.9017L15.8033 13.5M6.75 21C4.67893 21 3 19.3211 3 17.25V4.125C3 3.50368 3.50368 3 4.125 3H9.375C9.99632 3 10.5 3.50368 10.5 4.125V8.1967M6.75 21C8.82107 21 10.5 19.3211 10.5 17.25V8.1967M6.75 21H19.875C20.4963 21 21 20.4963 21 19.875V14.625C21 14.0037 20.4963 13.5 19.875 13.5H15.8033M10.5 8.1967L13.3791 5.31757C13.8185 4.87823 14.5308 4.87823 14.9701 5.31757L18.6824 9.02988C19.1218 9.46922 19.1218 10.1815 18.6824 10.6209L15.8033 13.5M6.75 17.25H6.7575V17.2575H6.75V17.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 2C2.67157 2 2 2.67157 2 3.5V15C2 16.6569 3.34315 18 5 18C6.65685 18 8 16.6569 8 15V3.5C8 2.67157 7.32843 2 6.5 2H3.5ZM15.253 8.98957L9.5 14.7426V6.25731L11.0104 4.74693C11.5962 4.16114 12.5459 4.16114 13.1317 4.74693L15.253 6.86825C15.8388 7.45403 15.8388 8.40378 15.253 8.98957ZM8.36395 18H16.5C17.3284 18 18 17.3284 18 16.5V13.5C18 12.6716 17.3284 12 16.5 12H14.364L8.36395 18ZM5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 3C2 2.44772 2.44772 2 3 2H6C6.55228 2 7 2.44772 7 3V11.5C7 12.8807 5.88071 14 4.5 14C3.11929 14 2 12.8807 2 11.5V3ZM5.25 11.5C5.25 11.9142 4.91421 12.25 4.5 12.25C4.08579 12.25 3.75 11.9142 3.75 11.5C3.75 11.0858 4.08579 10.75 4.5 10.75C4.91421 10.75 5.25 11.0858 5.25 11.5Z"
      fill={color}
    />
    <path
      d="M8.5 11.0349L12.2776 7.25729C12.6682 6.86676 12.6682 6.2336 12.2776 5.84308L10.1563 3.72176C9.7658 3.33123 9.13264 3.33123 8.74211 3.72175L8.5 3.96387V11.0349Z"
      fill={color}
    />
    <path
      d="M7.65625 14H12.9998C13.5521 14 13.9998 13.5523 13.9998 13V10C13.9998 9.44772 13.5521 9 12.9998 9H12.6562L7.65625 14Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 4.125C2.25 3.08947 3.08947 2.25 4.125 2.25H9.375C10.4105 2.25 11.25 3.08947 11.25 4.125V17.25C11.25 19.7353 9.23528 21.75 6.75 21.75C4.26472 21.75 2.25 19.7353 2.25 17.25V4.125ZM6.75 18.375C7.37132 18.375 7.875 17.8713 7.875 17.25C7.875 16.6287 7.37132 16.125 6.75 16.125C6.12868 16.125 5.625 16.6287 5.625 17.25C5.625 17.8713 6.12868 18.375 6.75 18.375Z"
      fill={color}
    />
    <path
      d="M10.719 21.75H19.8751C20.9106 21.75 21.7501 20.9105 21.7501 19.875V14.625C21.7501 13.5895 20.9106 12.75 19.8751 12.75H19.7353L10.9927 21.4926C10.9035 21.5818 10.8122 21.6676 10.719 21.75Z"
      fill={color}
    />
    <path
      d="M12.7383 17.6255L19.2125 11.1512C19.9448 10.419 19.9448 9.23179 19.2125 8.49955L15.5002 4.78724C14.768 4.05501 13.5808 4.05501 12.8486 4.78724L12.7498 4.88598V17.25C12.7498 17.3761 12.7459 17.5013 12.7383 17.6255Z"
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
@prop ariaLabel = 'swatch'
@prop ...restProps
-->
