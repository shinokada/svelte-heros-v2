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
    ariaLabel = 'home modern',
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
      d="M8.25 21V16.125C8.25 15.5037 8.75368 15 9.375 15H11.625C12.2463 15 12.75 15.5037 12.75 16.125V21M12.75 21H17.25V3.54545M12.75 21H20.25V10.75M2.25 21H3.75M21.75 21H3.75M2.25 9L6.75 7.36364M18.75 3L17.25 3.54545M17.25 9.75L20.25 10.75M21.75 11.25L20.25 10.75M6.75 7.36364V3H3.75V21M6.75 7.36364L17.25 3.54545"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M14.9156 2.40399C15.1067 2.77148 14.9637 3.22432 14.5962 3.41541L14 3.72542V17C14 17.5523 13.5523 18 13 18H10.74C10.3258 18 9.99 17.6642 9.99 17.25V13.75C9.99 13.3358 9.65421 13 9.24 13H6.75C6.33579 13 6 13.3358 6 13.75V17.25C6 17.6642 5.66421 18 5.25 18H1.75C1.33579 18 1 17.6642 1 17.25C1 16.8358 1.33579 16.5 1.75 16.5H2V9.95726C1.65296 10.0803 1.25946 9.93201 1.08474 9.59602C0.893644 9.22852 1.03664 8.77569 1.40414 8.58459L2 8.27474V5.75C2 5.33579 2.33579 5 2.75 5C3.16421 5 3.5 5.33579 3.5 5.75V7.49474L13.9041 2.08459C14.2716 1.89349 14.7245 2.03649 14.9156 2.40399Z"
      fill={color}
    />
    <path
      d="M15.8615 8.56923C16.0854 8.43325 16.3642 8.42404 16.5967 8.54493L18.596 9.58459C18.9635 9.77569 19.1065 10.2285 18.9154 10.596C18.7407 10.932 18.3473 11.0803 18.0003 10.9573V16.5H18.25C18.6642 16.5 19 16.8358 19 17.25C19 17.6642 18.6642 18 18.25 18H16.25C16.0511 18 15.8603 17.921 15.7196 17.7803C15.579 17.6396 15.5 17.4489 15.5 17.2499L15.5006 9.21028C15.5007 8.94824 15.6375 8.70521 15.8615 8.56923Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M10.5358 3.44371C10.9188 3.28599 11.1014 2.84765 10.9437 2.46463C10.786 2.08162 10.3476 1.89898 9.96463 2.05669L3.5 4.7186V3.75C3.5 3.33579 3.16421 3 2.75 3C2.33579 3 2 3.33579 2 3.75V5.33624L1.46463 5.55669C1.08162 5.7144 0.898977 6.15274 1.05669 6.53576C1.20951 6.9069 1.62585 7.0899 2 6.95739V12.5H1.75C1.33579 12.5 1 12.8358 1 13.25C1 13.6642 1.33579 14 1.75 14H4C4.55228 14 5 13.5523 5 13V12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12V13C7 13.5523 7.44772 14 8 14H9C9.55228 14 10 13.5523 10 13V3.66431L10.5358 3.44371Z"
      fill={color}
    />
    <path
      d="M11.8285 5.80164C11.6206 5.94087 11.4958 6.1746 11.4958 6.42481V8.5C11.4958 8.52688 11.4972 8.55344 11.5 8.57959V13C11.5 13.5523 11.9477 14 12.5 14H13C13.5523 14 14 13.5523 14 13V7.95717C14.3742 8.08968 14.7905 7.90668 14.9433 7.53554C15.101 7.15252 14.9184 6.71418 14.5354 6.55647L12.5314 5.7313C12.3 5.63603 12.0364 5.66242 11.8285 5.80164Z"
      fill={color}
    />
  {:else}
    <path
      d="M19.0061 3.70484C19.3954 3.56329 19.5962 3.13297 19.4547 2.74369C19.3131 2.35442 18.8828 2.1536 18.4935 2.29515L6 6.83825V3C6 2.58579 5.66421 2.25 5.25 2.25H3.75C3.33579 2.25 3 2.58579 3 3V7.92916L1.99353 8.29515C1.60426 8.43671 1.40344 8.86703 1.54499 9.25631C1.68655 9.64558 2.11687 9.8464 2.50615 9.70484L19.0061 3.70484Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.01896 11.1145L18 5.66687V9.08837L22.0061 10.5452C22.3954 10.6867 22.5962 11.117 22.4547 11.5063C22.3131 11.8956 21.8828 12.0964 21.4935 11.9548L20.9998 11.7753V20.25H21.75C22.1642 20.25 22.5 20.5858 22.5 21C22.5 21.4142 22.1642 21.75 21.75 21.75H2.25C1.83579 21.75 1.5 21.4142 1.5 21C1.5 20.5858 1.83579 20.25 2.25 20.25H3V11.1213L3.01896 11.1145ZM18 20.25V10.6845L19.4998 11.2299V20.25H18ZM9 14.25C8.58579 14.25 8.25 14.5858 8.25 15V19.5C8.25 19.9142 8.58579 20.25 9 20.25H12C12.4142 20.25 12.75 19.9142 12.75 19.5V15C12.75 14.5858 12.4142 14.25 12 14.25H9Z"
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
@prop ariaLabel = 'home modern'
@prop ...restProps
-->
