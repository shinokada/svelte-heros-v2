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
    ariaLabel = 'backward',
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
      d="M21 16.8115C21 17.6753 20.0668 18.2169 19.3169 17.7883L12.2094 13.7269C11.4536 13.295 11.4536 12.2052 12.2094 11.7733L19.3169 7.7119C20.0668 7.28334 21 7.82487 21 8.68867V16.8115Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.25 16.8115C11.25 17.6753 10.3168 18.2169 9.56685 17.7883L2.45936 13.7269C1.70357 13.295 1.70357 12.2052 2.45936 11.7733L9.56685 7.7119C10.3168 7.28334 11.25 7.82487 11.25 8.68867L11.25 16.8115Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M7.71178 4.81846C8.71111 4.20123 10 4.92008 10 6.09466V9.06745C10.1044 8.93631 10.234 8.81942 10.389 8.7237L16.7118 4.81846C17.7111 4.20123 19 4.92008 19 6.09466V13.9051C19 15.0797 17.7111 15.7986 16.7118 15.1813L10.389 11.2761C10.234 11.1804 10.1044 11.0635 10 10.9323V13.9051C10 15.0797 8.71111 15.7986 7.71178 15.1813L1.38901 11.2761C0.439994 10.6899 0.439991 9.30986 1.38901 8.7237L7.71178 4.81846Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8.5 4.75C8.5 4.48569 8.36087 4.24089 8.13379 4.10564C7.90671 3.97038 7.62519 3.96464 7.39279 4.09053L1.39279 7.34053C1.15077 7.47163 1 7.72476 1 8C1 8.27524 1.15077 8.52837 1.39279 8.65947L7.39279 11.9095C7.62519 12.0354 7.90671 12.0296 8.13379 11.8944C8.36087 11.7591 8.5 11.5143 8.5 11.25V8.98838L13.8928 11.9095C14.1252 12.0354 14.4067 12.0296 14.6338 11.8944C14.8609 11.7591 15 11.5143 15 11.25V4.75C15 4.48569 14.8609 4.24089 14.6338 4.10564C14.4067 3.97038 14.1252 3.96464 13.8928 4.09053L8.5 7.01162V4.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M9.19475 18.4394C10.4447 19.1536 12 18.2511 12 16.8114V14.4709L18.9447 18.4394C20.1947 19.1536 21.75 18.2511 21.75 16.8114L21.75 8.68856C21.75 7.24889 20.1947 6.34633 18.9447 7.06061L12 11.029V8.68856C12 7.24889 10.4447 6.34633 9.19475 7.06061L2.08726 11.122C0.827605 11.8418 0.827603 13.6581 2.08726 14.3779L9.19475 18.4394Z"
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
@prop ariaLabel = 'backward'
@prop ...restProps
-->
