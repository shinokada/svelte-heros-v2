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
    ariaLabel = 'cloud arrow up',
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
      d="M12 16.5L12 9.75M12 9.75L15 12.75M12 9.75L9 12.75M6.75 19.5C4.26472 19.5 2.25 17.4853 2.25 15C2.25 13.0071 3.54555 11.3167 5.3404 10.7252C5.28105 10.4092 5.25 10.0832 5.25 9.75C5.25 6.85051 7.60051 4.5 10.5 4.5C12.9312 4.5 14.9765 6.1526 15.5737 8.39575C15.8654 8.30113 16.1767 8.25 16.5 8.25C18.1569 8.25 19.5 9.59315 19.5 11.25C19.5 11.5981 19.4407 11.9324 19.3316 12.2433C20.7453 12.7805 21.75 14.1479 21.75 15.75C21.75 17.8211 20.0711 19.5 18 19.5H6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.5 17C3.01472 17 1 14.9853 1 12.5C1 10.5184 2.28084 8.83595 4.05979 8.2354C4.02046 7.9961 4 7.75044 4 7.5C4 5.01472 6.01472 3 8.5 3C10.1404 3 11.5758 3.87771 12.3621 5.18913C12.7189 5.06655 13.1017 5 13.5 5C15.433 5 17 6.567 17 8.5C17 8.83334 16.9534 9.15579 16.8664 9.4612C18.1353 10.1318 19 11.4649 19 13C19 15.2091 17.2091 17 15 17H5.5ZM9.25 14.25C9.25 14.6642 9.58579 15 10 15C10.4142 15 10.75 14.6642 10.75 14.25V9.6599L12.7004 11.7603C12.9823 12.0639 13.4568 12.0814 13.7603 11.7996C14.0639 11.5177 14.0814 11.0432 13.7996 10.7397L10.5496 7.23966C10.4077 7.08684 10.2086 7 10 7C9.79145 7 9.59231 7.08684 9.45041 7.23966L6.20041 10.7397C5.91855 11.0432 5.93613 11.5177 6.23966 11.7996C6.54319 12.0814 7.01774 12.0639 7.2996 11.7603L9.25 9.6599V14.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 13C2.567 13 1 11.433 1 9.5C1 8.06836 1.85956 6.83748 3.09075 6.29529C3.03138 6.03979 3 5.77356 3 5.5C3 3.567 4.567 2 6.5 2C7.94462 2 9.18482 2.87521 9.71929 4.12432C9.96493 4.04364 10.2274 4 10.5 4C11.8807 4 13 5.11929 13 6.5C13 6.72217 12.971 6.93756 12.9166 7.14262C14.1252 7.53 15 8.66283 15 10C15 11.6569 13.6569 13 12 13H4.5ZM5.21967 7.96967C4.92678 8.26256 4.92678 8.73744 5.21967 9.03033C5.51256 9.32322 5.98744 9.32322 6.28033 9.03033L7.25 8.06066L7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75L8.75 8.06066L9.71967 9.03033C10.0126 9.32322 10.4874 9.32322 10.7803 9.03033C11.0732 8.73744 11.0732 8.26256 10.7803 7.96967L8.53033 5.71967C8.23744 5.42678 7.76256 5.42678 7.46967 5.71967L5.21967 7.96967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 3.75C7.18629 3.75 4.5 6.43629 4.5 9.75C4.5 9.91685 4.50683 10.0822 4.52024 10.2459C2.73627 11.084 1.5 12.8968 1.5 15C1.5 17.8995 3.85051 20.25 6.75 20.25H18C20.4853 20.25 22.5 18.2353 22.5 15.75C22.5 14.0653 21.5744 12.5981 20.2058 11.827C20.2349 11.6386 20.25 11.4459 20.25 11.25C20.25 9.17893 18.5711 7.5 16.5 7.5C16.3559 7.5 16.2135 7.50816 16.0733 7.52408C15.1893 5.31282 13.028 3.75 10.5 3.75ZM12.5303 9.21967C12.2374 8.92678 11.7626 8.92678 11.4697 9.21967L8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803C8.76256 13.5732 9.23744 13.5732 9.53033 13.2803L11.25 11.5607L11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V11.5607L14.4697 13.2803C14.7626 13.5732 15.2374 13.5732 15.5303 13.2803C15.8232 12.9874 15.8232 12.5126 15.5303 12.2197L12.5303 9.21967Z"
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
@prop ariaLabel = 'cloud arrow up'
@prop ...restProps
-->
