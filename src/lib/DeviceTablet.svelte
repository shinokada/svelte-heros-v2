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
    ariaLabel = 'device tablet',
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
      d="M10.5 19.5H13.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.5C19.5 3.25736 18.4926 2.25 17.25 2.25H6.75C5.50736 2.25 4.5 3.25736 4.5 4.5V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 1C3.34315 1 2 2.34315 2 4V16C2 17.6569 3.34315 19 5 19H15C16.6569 19 18 17.6569 18 16V4C18 2.34315 16.6569 1 15 1H5ZM3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H15C15.8284 2.5 16.5 3.17157 16.5 4V16C16.5 16.8284 15.8284 17.5 15 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16V4ZM8.75 15.5C8.33579 15.5 8 15.8358 8 16.25C8 16.6642 8.33579 17 8.75 17H11.25C11.6642 17 12 16.6642 12 16.25C12 15.8358 11.6642 15.5 11.25 15.5H8.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 3.5C2 2.11929 3.11929 1 4.5 1H11.5C12.8807 1 14 2.11929 14 3.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V3.5ZM4.5 2.5H11.5C12.0523 2.5 12.5 2.94772 12.5 3.5V12.5C12.5 13.0523 12.0523 13.5 11.5 13.5H4.5C3.94772 13.5 3.5 13.0523 3.5 12.5V3.5C3.5 2.94772 3.94772 2.5 4.5 2.5Z"
      fill={color}
    />
  {:else}
    <path
      d="M10.5 18C10.0858 18 9.75 18.3358 9.75 18.75C9.75 19.1642 10.0858 19.5 10.5 19.5H13.5C13.9142 19.5 14.25 19.1642 14.25 18.75C14.25 18.3358 13.9142 18 13.5 18H10.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.125 1.5C5.26104 1.5 3.75 3.01104 3.75 4.875V19.125C3.75 20.989 5.26104 22.5 7.125 22.5H16.875C18.739 22.5 20.25 20.989 20.25 19.125V4.875C20.25 3.01104 18.739 1.5 16.875 1.5H7.125ZM6 4.875C6 4.25368 6.50368 3.75 7.125 3.75H16.875C17.4963 3.75 18 4.25368 18 4.875V19.125C18 19.7463 17.4963 20.25 16.875 20.25H7.125C6.50368 20.25 6 19.7463 6 19.125V4.875Z"
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
@prop ariaLabel = 'device tablet'
@prop ...restProps
-->
