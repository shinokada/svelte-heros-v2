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
    ariaLabel = 'paint brush',
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
      d="M9.53086 16.1224C9.08517 15.0243 8.00801 14.25 6.75 14.25C5.09315 14.25 3.75 15.5931 3.75 17.25C3.75 18.4926 2.74262 19.5 1.49998 19.5C1.44928 19.5 1.39898 19.4983 1.34912 19.495C2.12648 20.8428 3.58229 21.75 5.24998 21.75C7.72821 21.75 9.73854 19.7467 9.74993 17.2711C9.74998 17.2641 9.75 17.2571 9.75 17.25C9.75 16.8512 9.67217 16.4705 9.53086 16.1224ZM9.53086 16.1224C10.7252 15.7153 11.8612 15.1705 12.9175 14.5028M7.875 14.4769C8.2823 13.2797 8.8281 12.1411 9.49724 11.0825M12.9175 14.5028C14.798 13.3141 16.4259 11.7362 17.6806 9.85406L21.5566 4.04006C21.6827 3.85093 21.75 3.6287 21.75 3.40139C21.75 2.76549 21.2345 2.25 20.5986 2.25C20.3713 2.25 20.1491 2.31729 19.9599 2.44338L14.1459 6.31937C12.2638 7.57413 10.6859 9.20204 9.49724 11.0825M12.9175 14.5028C12.2396 12.9833 11.0167 11.7604 9.49724 11.0825"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M15.9932 1.38468C16.3195 1.13518 16.7188 1 17.1295 1C18.1626 1 19.0002 1.83751 19.0002 2.87063C19.0002 3.28136 18.865 3.68067 18.6155 4.00694L14.5856 9.27674C13.4464 10.7666 11.9978 11.9799 10.349 12.839C9.93563 11.2868 8.71335 10.0645 7.16113 9.6512C8.02023 8.00236 9.23359 6.5538 10.7234 5.41453L15.9932 1.38468Z"
      fill={color}
    />
    <path
      d="M5.99977 11C4.34292 11 2.99977 12.3431 2.99977 14C2.99977 14.2761 2.77591 14.5 2.49977 14.5C2.41931 14.5 2.3453 14.4815 2.2798 14.4493C2.00461 14.314 1.67475 14.3598 1.44686 14.565C1.21898 14.7702 1.139 15.0935 1.2449 15.3813C1.80692 16.9087 3.27495 18 4.99977 18C7.20742 18 8.99735 16.2113 8.99977 14.0042L8.99977 14C8.99977 13.52 8.88647 13.0642 8.68446 12.6601C8.39396 12.0789 7.92089 11.6058 7.33969 11.3153C6.93554 11.1133 6.47981 11 5.99977 11Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M12.6133 1.25783C12.8654 1.08971 13.1617 1 13.4648 1C14.3127 1 15 1.68733 15 2.53518C15 2.83827 14.9103 3.13457 14.7422 3.38675L12.8381 6.24283C11.9595 7.56078 10.7169 8.57786 9.27774 9.18189C8.87694 8.03308 7.96692 7.12306 6.81812 6.72226C7.42214 5.28315 8.43922 4.04052 9.75718 3.16189L12.6133 1.25783Z"
      fill={color}
    />
    <path
      d="M5.49976 8C4.11905 8 2.99976 9.11929 2.99976 10.5C2.99976 10.7761 2.77591 11 2.49976 11C2.42716 11 2.36004 10.985 2.29976 10.9586C2.01467 10.8338 1.68215 10.8981 1.46405 11.12C1.24595 11.342 1.1876 11.6756 1.31739 11.9585C1.86958 13.1618 3.086 14 4.49976 14C6.43276 14 7.99976 12.433 7.99976 10.5C7.99976 9.11929 6.88048 8 5.49976 8Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.5986 1.5C20.2232 1.5 19.8562 1.61111 19.5439 1.81934L14.4649 5.20533C13.1853 6.05835 12.0203 7.0624 10.993 8.19218C13.1064 9.18391 14.8161 10.8935 15.8078 13.007C16.9376 11.9797 17.9416 10.8146 18.7946 9.53508L22.1806 4.45609C22.3888 4.14375 22.5 3.77677 22.5 3.40139C22.5 2.35128 21.6487 1.5 20.5986 1.5ZM12.2995 15.5249C12.9568 15.1597 13.5898 14.7563 14.1954 14.3175C13.3836 12.258 11.742 10.6164 9.68246 9.80456C9.24361 10.4102 8.84023 11.0432 8.47506 11.7005L8.19653 12.2018C9.93302 12.6985 11.3015 14.0669 11.7981 15.8034L12.2995 15.5249ZM6.74995 13.5C4.67886 13.5 2.99995 15.1789 2.99995 17.25C2.99995 18.0784 2.32839 18.75 1.49995 18.75C1.46599 18.75 1.43219 18.7489 1.3986 18.7466C1.12245 18.7284 0.858681 18.8637 0.712418 19.0986C0.566154 19.3336 0.561166 19.63 0.699441 19.8697C1.60524 21.4402 3.30337 22.5 5.24995 22.5C8.14946 22.5 10.5 20.1495 10.5 17.25C10.5 15.1789 8.82104 13.5 6.74995 13.5Z"
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
@prop ariaLabel = 'paint brush'
@prop ...restProps
-->
