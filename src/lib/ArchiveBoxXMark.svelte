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
    ariaLabel = 'archive box x mark',
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
      d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M2 3C1.44772 3 1 3.44772 1 4V5C1 5.55228 1.44772 6 2 6H18C18.5523 6 19 5.55228 19 5V4C19 3.44772 18.5523 3 18 3H2Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 7.5H18L17.1885 15.2094C17.0813 16.2273 16.223 17 15.1995 17H4.80052C3.77701 17 2.91866 16.2273 2.81151 15.2094L2 7.5ZM7.21967 9.21967C7.51256 8.92678 7.98744 8.92678 8.28033 9.21967L10 10.9393L11.7197 9.21967C12.0126 8.92678 12.4874 8.92678 12.7803 9.21967C13.0732 9.51256 13.0732 9.98744 12.7803 10.2803L11.0607 12L12.7803 13.7197C13.0732 14.0126 13.0732 14.4874 12.7803 14.7803C12.4874 15.0732 12.0126 15.0732 11.7197 14.7803L10 13.0607L8.28033 14.7803C7.98744 15.0732 7.51256 15.0732 7.21967 14.7803C6.92678 14.4874 6.92678 14.0126 7.21967 13.7197L8.93934 12L7.21967 10.2803C6.92678 9.98744 6.92678 9.51256 7.21967 9.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4C14 4.55228 13.5523 5 13 5H3C2.44772 5 2 4.55228 2 4V3Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 6H3V12C3 13.1046 3.89543 14 5 14H11C12.1046 14 13 13.1046 13 12V6ZM5.71967 7.46967C6.01256 7.17678 6.48744 7.17678 6.78033 7.46967L8 8.68934L9.21967 7.46967C9.51256 7.17678 9.98744 7.17678 10.2803 7.46967C10.5732 7.76256 10.5732 8.23744 10.2803 8.53033L9.06066 9.75L10.2803 10.9697C10.5732 11.2626 10.5732 11.7374 10.2803 12.0303C9.98744 12.3232 9.51256 12.3232 9.21967 12.0303L8 10.8107L6.78033 12.0303C6.48744 12.3232 6.01256 12.3232 5.71967 12.0303C5.42678 11.7374 5.42678 11.2626 5.71967 10.9697L6.93934 9.75L5.71967 8.53033C5.42678 8.23744 5.42678 7.76256 5.71967 7.46967Z"
      fill={color}
    />
  {:else}
    <path
      d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.21967 11.8447C9.51256 11.5518 9.98744 11.5518 10.2803 11.8447L12 13.5643L13.7197 11.8447C14.0126 11.5518 14.4874 11.5518 14.7803 11.8447C15.0732 12.1376 15.0732 12.6124 14.7803 12.9053L13.0607 14.625L14.7803 16.3447C15.0732 16.6376 15.0732 17.1124 14.7803 17.4053C14.4874 17.6982 14.0126 17.6982 13.7197 17.4053L12 15.6857L10.2803 17.4053C9.98744 17.6982 9.51256 17.6982 9.21967 17.4053C8.92678 17.1124 8.92678 16.6376 9.21967 16.3447L10.9393 14.625L9.21967 12.9053C8.92678 12.6124 8.92678 12.1376 9.21967 11.8447Z"
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
@prop ariaLabel = 'archive box x mark'
@prop ...restProps
-->
