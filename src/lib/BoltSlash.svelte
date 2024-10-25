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
    ariaLabel = 'bolt slash',
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
      d="M11.4123 15.6549L9.75 21.75L13.4949 17.7376M9.25736 13.5H3.75L6.40873 10.6514M8.4569 8.4569L14.25 2.25L12 10.5H20.25L15.5431 15.5431M8.4569 8.4569L3 3M8.4569 8.4569L15.5431 15.5431M15.5431 15.5431L21 21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.21967 2.21967C2.51256 1.92678 2.98744 1.92678 3.28033 2.21967L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803L2.21967 3.28033C1.92678 2.98744 1.92678 2.51256 2.21967 2.21967Z"
      fill={color}
    />
    <path
      d="M4.73016 7.91214L2.19108 10.7499C1.99385 10.9704 1.9446 11.2861 2.06533 11.5562C2.18607 11.8262 2.45423 12 2.75001 12H8.81805L4.73016 7.91214Z"
      fill={color}
    />
    <path
      d="M9.23329 12.4153L8.01666 18.0929C7.9454 18.4255 8.10685 18.7644 8.41002 18.9185C8.71318 19.0727 9.08215 19.0036 9.30894 18.7501L12.2647 15.4467L9.23329 12.4153Z"
      fill={color}
    />
    <path
      d="M15.2699 12.0879L17.8089 9.25013C18.0062 9.0297 18.0554 8.71393 17.9347 8.4439C17.814 8.17388 17.5458 8.00003 17.25 8.00003H11.182L15.2699 12.0879Z"
      fill={color}
    />
    <path
      d="M10.7667 7.58476L11.9834 1.90718C12.0546 1.57461 11.8932 1.23571 11.59 1.08152C11.2868 0.927338 10.9179 0.996463 10.6911 1.24994L7.73537 4.55339L10.7667 7.58476Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M9.58011 1.07659C9.88578 1.22641 10.0522 1.56332 9.98545 1.89712L9.16486 6.00004H13.25C13.5437 6.00004 13.8103 6.1714 13.9323 6.43851C14.0542 6.70562 14.0091 7.01933 13.8168 7.24123L11.9129 9.43802L6.38525 3.91037L8.68324 1.25884C8.90619 1.00159 9.27444 0.926759 9.58011 1.07659Z"
      fill={color}
    />
    <path
      d="M4.08715 6.56202L9.6148 12.0897L7.31678 14.7412C7.09383 14.9985 6.72559 15.0733 6.41991 14.9235C6.11424 14.7737 5.94781 14.4368 6.01458 14.103L6.83516 10H2.75001C2.45637 10 2.18974 9.82868 2.06777 9.56157C1.9458 9.29446 1.99093 8.98074 2.18324 8.75884L4.08715 6.56202Z"
      fill={color}
    />
    <path
      d="M2.21967 2.21967C2.51256 1.92678 2.98744 1.92678 3.28033 2.21967L13.7803 12.7197C14.0732 13.0126 14.0732 13.4874 13.7803 13.7803C13.4874 14.0732 13.0126 14.0732 12.7197 13.7803L2.21967 3.28033C1.92678 2.98744 1.92678 2.51256 2.21967 2.21967Z"
      fill={color}
    />
  {:else}
    <path
      d="M20.7983 11.0118L17.6099 14.4279L9.4624 6.28042L13.7017 1.73829C13.937 1.48615 14.314 1.42701 14.6152 1.59495C14.9165 1.76289 15.0643 2.11463 14.9736 2.44736L12.982 9.75003H20.25C20.5487 9.75003 20.8189 9.92721 20.9379 10.2011C21.0569 10.475 21.0021 10.7934 20.7983 11.0118Z"
      fill={color}
    />
    <path
      d="M3.20173 12.9883L6.39014 9.57212L14.5376 17.7196L10.2983 22.2618C10.063 22.5139 9.68604 22.573 9.38481 22.4051C9.08357 22.2372 8.9357 21.8854 9.02644 21.5527L11.0181 14.25H3.75002C3.45137 14.25 3.18118 14.0728 3.06216 13.7989C2.94313 13.525 2.99795 13.2066 3.20173 12.9883Z"
      fill={color}
    />
    <path
      d="M3.53033 2.46967C3.23744 2.17678 2.76256 2.17678 2.46967 2.46967C2.17678 2.76256 2.17678 3.23744 2.46967 3.53033L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L3.53033 2.46967Z"
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
@prop ariaLabel = 'bolt slash'
@prop ...restProps
-->
