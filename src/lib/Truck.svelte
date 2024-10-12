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
    ariaLabel = 'truck',
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
      d="M8.25 18.75C8.25 19.5784 7.57843 20.25 6.75 20.25C5.92157 20.25 5.25 19.5784 5.25 18.75M8.25 18.75C8.25 17.9216 7.57843 17.25 6.75 17.25C5.92157 17.25 5.25 17.9216 5.25 18.75M8.25 18.75H14.25M5.25 18.75H3.375C2.75368 18.75 2.25 18.2463 2.25 17.625V14.2504M19.5 18.75C19.5 19.5784 18.8284 20.25 18 20.25C17.1716 20.25 16.5 19.5784 16.5 18.75M19.5 18.75C19.5 17.9216 18.8284 17.25 18 17.25C17.1716 17.25 16.5 17.9216 16.5 18.75M19.5 18.75L20.625 18.75C21.2463 18.75 21.7537 18.2457 21.7154 17.6256C21.5054 14.218 20.3473 11.0669 18.5016 8.43284C18.1394 7.91592 17.5529 7.60774 16.9227 7.57315H14.25M16.5 18.75H14.25M14.25 7.57315V6.61479C14.25 6.0473 13.8275 5.56721 13.263 5.50863C11.6153 5.33764 9.94291 5.25 8.25 5.25C6.55709 5.25 4.88466 5.33764 3.23698 5.50863C2.67252 5.56721 2.25 6.0473 2.25 6.61479V14.2504M14.25 7.57315V14.2504M14.25 18.75V14.2504M14.25 14.2504H2.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M6.5 3C5.4488 3 4.40669 3.03958 3.37512 3.11734C2.58952 3.17656 2 3.83452 2 4.60628V10.5H11V4.60628C11 3.83452 10.4105 3.17656 9.62488 3.11734C8.59331 3.03958 7.5512 3 6.5 3Z"
      fill={color}
    />
    <path
      d="M2 12V14.5C2 15.3284 2.67157 16 3.5 16H3.54148C3.77952 14.5811 5.0135 13.5 6.5 13.5C7.9865 13.5 9.22048 14.5811 9.45852 16H10.25C10.6642 16 11 15.6642 11 15.25V12H2Z"
      fill={color}
    />
    <path
      d="M6.5 18C7.32843 18 8 17.3284 8 16.5C8 15.6716 7.32843 15 6.5 15C5.67157 15 5 15.6716 5 16.5C5 17.3284 5.67157 18 6.5 18Z"
      fill={color}
    />
    <path
      d="M13.25 5C12.8358 5 12.5 5.33579 12.5 5.75V14.2639C13.0308 13.7889 13.7316 13.5 14.5 13.5C15.8814 13.5 17.0447 14.4336 17.3933 15.7043C17.7639 15.4289 18.0037 14.9852 17.9883 14.4772C17.8967 11.4639 17.2717 8.58345 16.204 5.92808C15.9743 5.35688 15.4206 5 14.8229 5H13.25Z"
      fill={color}
    />
    <path
      d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.90849 2.06726C2.39314 2.10051 2 2.53369 2 3.05011V8H8V3.05011C8 2.53369 7.60685 2.10051 7.09151 2.06726C6.40009 2.02265 5.70269 2 5 2C4.29731 2 3.59991 2.02265 2.90849 2.06726Z"
      fill={color}
    />
    <path
      d="M12.9189 4.72164C12.8043 4.29252 12.4118 4 11.9676 4H10C9.44772 4 9 4.44772 9 5V11.2676C9.29417 11.0974 9.63571 11 10 11C11.1046 11 12 11.8954 12 13H13C13.5523 13 14.0016 12.5521 13.9847 12.0001C13.9076 9.49048 13.5417 7.05362 12.9189 4.72164Z"
      fill={color}
    />
    <path
      d="M11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13C9 12.4477 9.44771 12 10 12C10.5523 12 11 12.4477 11 13Z"
      fill={color}
    />
    <path
      d="M2 12V9H8V12C8 12.5523 7.55228 13 7 13C7 11.8954 6.10457 11 5 11C3.89543 11 3 11.8954 3 13C2.44772 13 2 12.5523 2 12Z"
      fill={color}
    />
    <path
      d="M6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13Z"
      fill={color}
    />
  {:else}
    <path
      d="M3.375 4.5C2.33947 4.5 1.5 5.33947 1.5 6.375V13.5H13.5V6.375C13.5 5.33947 12.6605 4.5 11.625 4.5H3.375Z"
      fill={color}
    />
    <path
      d="M13.5 15H1.5V17.625C1.5 18.6605 2.33947 19.5 3.375 19.5H3.75C3.75 17.8431 5.09315 16.5 6.75 16.5C8.40685 16.5 9.75 17.8431 9.75 19.5H12.75C13.1642 19.5 13.5 19.1642 13.5 18.75V15Z"
      fill={color}
    />
    <path
      d="M8.25 19.5C8.25 18.6716 7.57843 18 6.75 18C5.92157 18 5.25 18.6716 5.25 19.5C5.25 20.3284 5.92157 21 6.75 21C7.57843 21 8.25 20.3284 8.25 19.5Z"
      fill={color}
    />
    <path
      d="M15.75 6.75C15.3358 6.75 15 7.08579 15 7.5V18.75C15 18.8368 15.0147 18.9202 15.0419 18.9977C15.2809 17.58 16.5143 16.5 18 16.5C19.6442 16.5 20.9794 17.8226 20.9998 19.462C21.8531 19.2869 22.5224 18.5266 22.464 17.5794C22.231 13.799 20.8775 10.321 18.7324 7.4749C18.378 7.00463 17.8265 6.75 17.2621 6.75H15.75Z"
      fill={color}
    />
    <path
      d="M19.5 19.5C19.5 18.6716 18.8284 18 18 18C17.1716 18 16.5 18.6716 16.5 19.5C16.5 20.3284 17.1716 21 18 21C18.8284 21 19.5 20.3284 19.5 19.5Z"
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
@prop ariaLabel = 'truck'
@prop ...restProps
-->
