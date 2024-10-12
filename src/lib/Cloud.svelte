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
    ariaLabel = 'cloud',
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
      d="M2.25 15C2.25 17.4853 4.26472 19.5 6.75 19.5H18C20.0711 19.5 21.75 17.8211 21.75 15.75C21.75 14.1479 20.7453 12.7805 19.3316 12.2433C19.4407 11.9324 19.5 11.5981 19.5 11.25C19.5 9.59315 18.1569 8.25 16.5 8.25C16.1767 8.25 15.8654 8.30113 15.5737 8.39575C14.9765 6.1526 12.9312 4.5 10.5 4.5C7.6005 4.5 5.25 6.85051 5.25 9.75C5.25 10.0832 5.28105 10.4092 5.3404 10.7252C3.54555 11.3167 2.25 13.0071 2.25 15Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M1 12.5C1 14.9853 3.01472 17 5.5 17H15C17.2091 17 19 15.2091 19 13C19 11.4649 18.1353 10.1318 16.8664 9.4612C16.9534 9.15579 17 8.83334 17 8.5C17 6.567 15.433 5 13.5 5C13.1017 5 12.7189 5.06655 12.3621 5.18913C11.5758 3.87771 10.1404 3 8.5 3C6.01472 3 4 5.01472 4 7.5C4 7.75044 4.02046 7.9961 4.05979 8.2354C2.28084 8.83595 1 10.5184 1 12.5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M1 9.5C1 11.433 2.567 13 4.5 13H12C13.6569 13 15 11.6569 15 10C15 8.66283 14.1252 7.53 12.9166 7.14262C12.971 6.93756 13 6.72217 13 6.5C13 5.11929 11.8807 4 10.5 4C10.2274 4 9.96493 4.04364 9.71929 4.12432C9.18482 2.87521 7.94462 2 6.5 2C4.567 2 3 3.567 3 5.5C3 5.77356 3.03138 6.03979 3.09075 6.29529C1.85956 6.83748 1 8.06836 1 9.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 9.75C4.5 6.43629 7.18629 3.75 10.5 3.75C13.028 3.75 15.1893 5.31282 16.0733 7.52408C16.2135 7.50816 16.3559 7.5 16.5 7.5C18.5711 7.5 20.25 9.17893 20.25 11.25C20.25 11.4459 20.2349 11.6386 20.2058 11.827C21.5744 12.5981 22.5 14.0653 22.5 15.75C22.5 18.2353 20.4853 20.25 18 20.25H6.75C3.85051 20.25 1.5 17.8995 1.5 15C1.5 12.8968 2.73627 11.084 4.52024 10.2459C4.50683 10.0822 4.5 9.91686 4.5 9.75Z"
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
@prop ariaLabel = 'cloud'
@prop ...restProps
-->
