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
    ariaLabel = 'document check',
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
      d="M10.125 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.625M10.125 2.25H10.5C15.4706 2.25 19.5 6.27944 19.5 11.25V11.625M10.125 2.25C11.989 2.25 13.5 3.76104 13.5 5.625V7.125C13.5 7.74632 14.0037 8.25 14.625 8.25H16.125C17.989 8.25 19.5 9.76104 19.5 11.625M9 15L11.25 17.25L15 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3.5C3 2.67157 3.67157 2 4.5 2H11.3787C11.7765 2 12.158 2.15804 12.4393 2.43934L16.5607 6.56066C16.842 6.84197 17 7.2235 17 7.62132V16.5C17 17.3284 16.3284 18 15.5 18H4.5C3.67157 18 3 17.3284 3 16.5V3.5ZM13.8566 9.19113C14.1002 8.85614 14.0261 8.38708 13.6911 8.14345C13.3561 7.89982 12.8871 7.97388 12.6434 8.30887L9.15969 13.099L7.28033 11.2197C6.98744 10.9268 6.51256 10.9268 6.21967 11.2197C5.92678 11.5126 5.92678 11.9874 6.21967 12.2803L8.71967 14.7803C8.87477 14.9354 9.08999 15.0149 9.30867 14.9977C9.52734 14.9805 9.72754 14.8685 9.85655 14.6911L13.8566 9.19113Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 2C3.17157 2 2.5 2.67157 2.5 3.5V12.5C2.5 13.3284 3.17157 14 4 14H12C12.8284 14 13.5 13.3284 13.5 12.5V6.62132C13.5 6.2235 13.342 5.84197 13.0607 5.56066L9.93934 2.43934C9.65804 2.15804 9.2765 2 8.87868 2H4ZM10.7134 6.16023C11.0391 6.41614 11.0957 6.88763 10.8398 7.21334L8.08975 10.7133C7.96343 10.8741 7.77695 10.9763 7.57347 10.9964C7.36999 11.0164 7.16716 10.9525 7.01192 10.8194L5.26192 9.31941C4.94743 9.04985 4.911 8.57637 5.18057 8.26188C5.45014 7.94738 5.92361 7.91096 6.23811 8.18053L7.39384 9.17116L9.66027 6.2866C9.91619 5.9609 10.3877 5.90432 10.7134 6.16023Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 1.5H5.625C4.58947 1.5 3.75 2.33947 3.75 3.375V20.625C3.75 21.6605 4.58947 22.5 5.625 22.5H18.375C19.4105 22.5 20.25 21.6605 20.25 20.625V12.75C20.25 10.6789 18.5711 9 16.5 9H14.625C13.5895 9 12.75 8.16053 12.75 7.125V5.25C12.75 3.17893 11.0711 1.5 9 1.5ZM15.6103 12.4359C15.8511 12.0989 15.773 11.6305 15.4359 11.3897C15.0989 11.1489 14.6305 11.227 14.3897 11.5641L11.1543 16.0936L9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303L10.7197 17.7803C10.8756 17.9362 11.0921 18.0156 11.3119 17.9974C11.5316 17.9793 11.7322 17.8653 11.8603 17.6859L15.6103 12.4359Z"
      fill={color}
    />
    <path
      d="M12.9712 1.8159C13.768 2.73648 14.25 3.93695 14.25 5.25V7.125C14.25 7.33211 14.4179 7.5 14.625 7.5H16.5C17.8131 7.5 19.0135 7.98204 19.9341 8.77881C19.0462 5.37988 16.3701 2.70377 12.9712 1.8159Z"
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
@prop ariaLabel = 'document check'
@prop ...restProps
-->
