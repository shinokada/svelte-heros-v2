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
    ariaLabel = 'wallet',
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
      d="M21 12C21 10.7574 19.9926 9.75 18.75 9.75H15C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75H5.25C4.00736 9.75 3 10.7574 3 12M21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12M21 12V9M3 12V9M21 9C21 7.75736 19.9926 6.75 18.75 6.75H5.25C4.00736 6.75 3 7.75736 3 9M21 9V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V9"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M1 4.24973C1.62675 3.77896 2.4058 3.5 3.25 3.5H16.75C17.5942 3.5 18.3733 3.77896 19 4.24973C18.9999 3.00721 17.9926 2 16.75 2H3.25C2.00745 2 1.00015 3.00721 1 4.24973Z"
      fill={color}
    />
    <path
      d="M1 7.24973C1.62675 6.77896 2.4058 6.5 3.25 6.5H16.75C17.5942 6.5 18.3733 6.77896 19 7.24973C18.9999 6.00721 17.9926 5 16.75 5H3.25C2.00745 5 1.00015 6.00721 1 7.24973Z"
      fill={color}
    />
    <path
      d="M7 8C7.55228 8 8 8.44772 8 9C8 10.1046 8.89543 11 10 11C11.1046 11 12 10.1046 12 9C12 8.44772 12.4477 8 13 8H16.75C17.9926 8 19 9.00736 19 10.25V15.75C19 16.9926 17.9926 18 16.75 18H3.25C2.00736 18 1 16.9926 1 15.75V10.25C1 9.00736 2.00736 8 3.25 8H7Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2 3.5C2 2.67157 2.67157 2 3.5 2H12.5C13.3284 2 14 2.67157 14 3.5V3.90135C13.5587 3.64609 13.0464 3.5 12.5 3.5H3.5C2.95357 3.5 2.44126 3.64609 2 3.90135V3.5Z"
      fill={color}
    />
    <path
      d="M3.5 5C2.67157 5 2 5.67157 2 6.5V6.90135C2.44126 6.64609 2.95357 6.5 3.5 6.5H12.5C13.0464 6.5 13.5587 6.64609 14 6.90135V6.5C14 5.67157 13.3284 5 12.5 5H3.5Z"
      fill={color}
    />
    <path
      d="M8 10C8.93374 10 9.71803 9.36012 9.93829 8.49494C10.0064 8.22733 10.2239 8 10.5 8H12.5C13.3284 8 14 8.67157 14 9.5V12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5V9.5C2 8.67157 2.67157 8 3.5 8H5.5C5.77614 8 5.99359 8.22733 6.06171 8.49494C6.28197 9.36012 7.06626 10 8 10Z"
      fill={color}
    />
  {:else}
    <path
      d="M2.27307 5.62524C3.06638 4.92494 4.10851 4.5 5.24989 4.5H18.7499C19.8913 4.5 20.9334 4.92494 21.7267 5.62524C21.5423 4.14526 20.2798 3 18.7499 3H5.24989C3.71995 3 2.4575 4.14525 2.27307 5.62524Z"
      fill={color}
    />
    <path
      d="M2.27307 8.62524C3.06638 7.92494 4.10851 7.5 5.24989 7.5H18.7499C19.8913 7.5 20.9334 7.92494 21.7267 8.62524C21.5423 7.14526 20.2798 6 18.7499 6H5.24989C3.71995 6 2.4575 7.14525 2.27307 8.62524Z"
      fill={color}
    />
    <path
      d="M5.25 9C3.59315 9 2.25 10.3431 2.25 12V18C2.25 19.6569 3.59315 21 5.25 21H18.75C20.4069 21 21.75 19.6569 21.75 18V12C21.75 10.3431 20.4069 9 18.75 9H15C14.5858 9 14.25 9.33579 14.25 9.75C14.25 10.9926 13.2426 12 12 12C10.7574 12 9.75 10.9926 9.75 9.75C9.75 9.33579 9.41421 9 9 9H5.25Z"
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
@prop ariaLabel = 'wallet'
@prop ...restProps
-->
