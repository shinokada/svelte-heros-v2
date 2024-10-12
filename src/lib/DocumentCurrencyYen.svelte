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
    ariaLabel = 'document currency yen',
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
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M9.75 11.25L12 14.25M12 14.25L14.25 11.25M12 14.25V18.75M9.75 15H14.25M9.75 17.25H14.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 2C3.67157 2 3 2.67157 3 3.5V16.5C3 17.3284 3.67157 18 4.5 18H15.5C16.3284 18 17 17.3284 17 16.5V7.62132C17 7.2235 16.842 6.84197 16.5607 6.56066L12.4393 2.43934C12.158 2.15804 11.7765 2 11.3787 2H4.5ZM8.34577 6.29445C8.09415 5.96542 7.62345 5.90266 7.29441 6.15427C6.96538 6.40588 6.90262 6.87659 7.15423 7.20563L9.05584 10H6.75C6.33579 10 6 10.3358 6 10.75C6 11.1643 6.33579 11.5 6.75 11.5H9.25V12.5H6.75C6.33579 12.5 6 12.8358 6 13.25C6 13.6643 6.33579 14 6.75 14H9.25V15.25C9.25 15.6643 9.58579 16 10 16C10.4142 16 10.75 15.6643 10.75 15.25V14H13.25C13.6642 14 14 13.6643 14 13.25C14 12.8358 13.6642 12.5 13.25 12.5H10.75V11.5H13.25C13.6642 11.5 14 11.1643 14 10.75C14 10.3358 13.6642 10 13.25 10H10.9442L12.8458 7.20563C13.0974 6.87659 13.0346 6.40588 12.7056 6.15427C12.3766 5.90266 11.9058 5.96542 11.6542 6.29445L10 8.76537L8.34577 6.29445Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 3.5C2.5 2.67157 3.17157 2 4 2H8.87868C9.2765 2 9.65804 2.15804 9.93934 2.43934L13.0607 5.56066C13.342 5.84197 13.5 6.2235 13.5 6.62132V12.5C13.5 13.3284 12.8284 14 12 14H4C3.17157 14 2.5 13.3284 2.5 12.5V3.5ZM6.16344 5.30102C5.91491 4.96965 5.44481 4.90249 5.11344 5.15102C4.78207 5.39955 4.71491 5.86965 4.96344 6.20102L6.3125 7.99977H5C4.58579 7.99977 4.25 8.33556 4.25 8.74977C4.25 9.16398 4.58579 9.49977 5 9.49977H7.25V10.4998H5C4.58579 10.4998 4.25 10.8356 4.25 11.2498C4.25 11.664 4.58579 11.9998 5 11.9998H7.25V12.2498C7.25 12.664 7.58579 12.9998 8 12.9998C8.41421 12.9998 8.75 12.664 8.75 12.2498V11.9998H11C11.4142 11.9998 11.75 11.664 11.75 11.2498C11.75 10.8356 11.4142 10.4998 11 10.4998H8.75V9.49977H11C11.4142 9.49977 11.75 9.16398 11.75 8.74977C11.75 8.33556 11.4142 7.99977 11 7.99977H9.6875L11.0366 6.20102C11.2851 5.86965 11.2179 5.39955 10.8866 5.15102C10.5552 4.90249 10.0851 4.96965 9.83656 5.30102L8 7.74977L6.16344 5.30102Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 3.375C3.75 2.33947 4.58947 1.5 5.625 1.5H9C11.0711 1.5 12.75 3.17893 12.75 5.25V7.125C12.75 8.16053 13.5895 9 14.625 9H16.5C18.5711 9 20.25 10.6789 20.25 12.75V20.625C20.25 21.6605 19.4105 22.5 18.375 22.5H5.625C4.58947 22.5 3.75 21.6605 3.75 20.625V3.375ZM14.25 5.25C14.25 3.93695 13.768 2.73648 12.9712 1.8159C16.3701 2.70377 19.0462 5.37988 19.9341 8.77881C19.0135 7.98204 17.8131 7.5 16.5 7.5H14.625C14.4179 7.5 14.25 7.33211 14.25 7.125V5.25ZM10.35 10.8C10.1015 10.4687 9.63141 10.4015 9.30004 10.65C8.96867 10.8986 8.90152 11.3687 9.15004 11.7L11.0625 14.25H9.75004C9.33583 14.25 9.00004 14.5858 9.00004 15C9.00004 15.4143 9.33583 15.75 9.75004 15.75H11.25V16.5H9.75004C9.33583 16.5 9.00004 16.8358 9.00004 17.25C9.00004 17.6643 9.33583 18 9.75004 18H11.25V18.75C11.25 19.1643 11.5858 19.5 12 19.5C12.4143 19.5 12.75 19.1643 12.75 18.75V18H14.25C14.6643 18 15 17.6643 15 17.25C15 16.8358 14.6643 16.5 14.25 16.5H12.75V15.75H14.25C14.6643 15.75 15 15.4143 15 15C15 14.5858 14.6643 14.25 14.25 14.25H12.9375L14.85 11.7C15.0986 11.3687 15.0314 10.8986 14.7 10.65C14.3687 10.4015 13.8986 10.4687 13.65 10.8L12 13L10.35 10.8Z"
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
@prop ariaLabel = 'document currency yen'
@prop ...restProps
-->
