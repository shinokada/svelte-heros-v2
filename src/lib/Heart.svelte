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
    ariaLabel = 'heart',
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
      d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M9.65298 16.9149L9.6476 16.9121L9.62912 16.9024C9.61341 16.8941 9.59102 16.8822 9.56238 16.8667C9.50511 16.8358 9.42281 16.7907 9.31906 16.732C9.11164 16.6146 8.81794 16.4425 8.46663 16.2206C7.76556 15.7777 6.82731 15.1314 5.88539 14.3197C4.04447 12.7332 2 10.3523 2 7.5C2 5.01472 4.01472 3 6.5 3C7.9144 3 9.17542 3.65238 10 4.67158C10.8246 3.65238 12.0856 3 13.5 3C15.9853 3 18 5.01472 18 7.5C18 10.3523 15.9555 12.7332 14.1146 14.3197C13.1727 15.1314 12.2344 15.7777 11.5334 16.2206C11.1821 16.4425 10.8884 16.6146 10.6809 16.732C10.5772 16.7907 10.4949 16.8358 10.4376 16.8667C10.409 16.8822 10.3866 16.8941 10.3709 16.9024L10.3524 16.9121L10.347 16.9149L10.3453 16.9158C10.13 17.03 9.87 17.03 9.65529 16.9161L9.65298 16.9149Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.00019 6.34163C2.01809 4.49304 3.5222 3 5.37503 3C6.43525 3 7.38129 3.48888 8.00003 4.2535C8.61876 3.48888 9.5648 3 10.625 3C12.489 3 14 4.51104 14 6.375C14 6.42155 13.9991 6.46792 13.9972 6.51409C13.9335 8.64751 12.3785 10.2732 11.0417 11.298C10.3524 11.8264 9.67051 12.234 9.16292 12.5091C8.90827 12.6471 8.6953 12.7529 8.54433 12.825C8.46878 12.861 8.40861 12.8887 8.36632 12.9078C8.34517 12.9173 8.32848 12.9247 8.31657 12.93L8.3023 12.9362L8.29793 12.9381L8.29644 12.9387C8.11018 13.02 7.89018 13.02 7.70423 12.939L7.70215 12.9381L7.6977 12.9362L7.68318 12.9298C7.67105 12.9245 7.65405 12.9169 7.6325 12.9072C7.58941 12.8878 7.5281 12.8596 7.45115 12.8228C7.29738 12.7494 7.08053 12.6415 6.82155 12.5008C6.30539 12.2203 5.61283 11.8047 4.91593 11.2659C3.56388 10.2205 1.99929 8.55828 1.99921 6.38003C1.99921 6.36719 1.99953 6.35439 2.00019 6.34163Z"
      fill={color}
    />
  {:else}
    <path
      d="M11.645 20.9107L11.6384 20.9072L11.6158 20.8949C11.5965 20.8844 11.5689 20.8693 11.5336 20.8496C11.4629 20.8101 11.3612 20.7524 11.233 20.6769C10.9765 20.5261 10.6132 20.3039 10.1785 20.015C9.31074 19.4381 8.15122 18.5901 6.9886 17.5063C4.68781 15.3615 2.25 12.1751 2.25 8.25C2.25 5.32194 4.7136 3 7.6875 3C9.43638 3 11.0023 3.79909 12 5.0516C12.9977 3.79909 14.5636 3 16.3125 3C19.2864 3 21.75 5.32194 21.75 8.25C21.75 12.1751 19.3122 15.3615 17.0114 17.5063C15.8488 18.5901 14.6893 19.4381 13.8215 20.015C13.3868 20.3039 13.0235 20.5261 12.767 20.6769C12.6388 20.7524 12.5371 20.8101 12.4664 20.8496C12.4311 20.8693 12.4035 20.8844 12.3842 20.8949L12.3616 20.9072L12.355 20.9107L12.3523 20.9121C12.1323 21.0289 11.8677 21.0289 11.6477 20.9121L11.645 20.9107Z"
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
@prop ariaLabel = 'heart'
@prop ...restProps
-->
