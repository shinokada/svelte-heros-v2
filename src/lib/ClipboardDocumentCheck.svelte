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
    ariaLabel = 'clipboard document check',
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
      d="M11.3495 3.83619C11.2848 4.04602 11.25 4.26894 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H16.5C16.9142 5.25 17.25 4.91421 17.25 4.5C17.25 4.26894 17.2152 4.04602 17.1505 3.83619M11.3495 3.83619C11.6328 2.91757 12.4884 2.25 13.5 2.25H15C16.0116 2.25 16.8672 2.91757 17.1505 3.83619M11.3495 3.83619C10.9739 3.85858 10.5994 3.88529 10.2261 3.91627C9.09499 4.01015 8.25 4.97324 8.25 6.10822V8.25M17.1505 3.83619C17.5261 3.85858 17.9006 3.88529 18.2739 3.91627C19.405 4.01015 20.25 4.97324 20.25 6.10822V16.5C20.25 17.7426 19.2426 18.75 18 18.75H15.75M8.25 8.25H4.875C4.25368 8.25 3.75 8.75368 3.75 9.375V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V18.75M8.25 8.25H14.625C15.2463 8.25 15.75 8.75368 15.75 9.375V18.75M7.5 15.75L9 17.25L12 13.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.9999 5.25C17.9999 4.08761 17.1185 3.1311 15.9875 3.0124C15.8688 1.88145 14.9123 1 13.7499 1H12.2499C11.0875 1 10.131 1.88145 10.0123 3.0124C9.13721 3.10424 8.4115 3.69769 8.12793 4.5H10.9999C12.3806 4.5 13.4999 5.61929 13.4999 7V14H15.7499C16.9925 14 17.9999 12.9926 17.9999 11.75V5.25ZM12.2499 2.5C11.8357 2.5 11.4999 2.83579 11.4999 3.25V3.5H14.4999V3.25C14.4999 2.83579 14.1641 2.5 13.7499 2.5H12.2499Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C2.44772 6 2 6.44771 2 7V17C2 17.5523 2.44772 18 3 18H11C11.5523 18 12 17.5523 12 17V7C12 6.44772 11.5523 6 11 6H3ZM9.87404 10.166C10.1038 9.82138 10.0107 9.35573 9.66603 9.12596C9.32138 8.8962 8.85573 8.98933 8.62596 9.33397L6.13343 13.0728L5.28033 12.2197C4.98744 11.9268 4.51256 11.9268 4.21967 12.2197C3.92678 12.5126 3.92678 12.9874 4.21967 13.2803L5.71967 14.7803C5.87855 14.9392 6.1003 15.0185 6.3239 14.9963C6.5475 14.9742 6.7494 14.853 6.87404 14.666L9.87404 10.166Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9862 3H12C13.1045 3 14 3.89543 14 5V11C14 11.9319 13.3626 12.715 12.5 12.937V7C12.5 5.61929 11.3807 4.5 9.99998 4.5H4.06299C4.28501 3.63739 5.06806 3 5.99998 3H6.01371C6.13807 1.87501 7.09184 1 8.24998 1H9.74998C10.9081 1 11.8619 1.87501 11.9862 3ZM10.5 4V3.25C10.5 2.83579 10.1642 2.5 9.74998 2.5H8.24998C7.83577 2.5 7.49998 2.83579 7.49998 3.25V4H10.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 7C2 6.44772 2.44772 6 3 6H10C10.5523 6 11 6.44772 11 7V14C11 14.5523 10.5523 15 10 15H3C2.44772 15 2 14.5523 2 14V7ZM8.58542 8.0791C8.95591 8.26434 9.10608 8.71485 8.92083 9.08533L7.17083 12.5853C7.06755 12.7919 6.87485 12.9394 6.64847 12.9851C6.42209 13.0308 6.18727 12.9697 6.01192 12.8194L4.26192 11.3194C3.94743 11.0498 3.911 10.5763 4.18057 10.2618C4.45014 9.94733 4.92361 9.91091 5.23811 10.1805L6.25878 11.0553L7.57919 8.41451C7.76443 8.04403 8.21494 7.89386 8.58542 8.0791Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.50183 6H11.2477L11.25 6H14.6299C16.4915 6.00268 17.9999 7.51269 17.9999 9.375V18.75C19.6567 18.75 20.9999 17.4068 20.9999 15.75V6.10821C20.9999 4.60282 19.8751 3.2966 18.3358 3.16884C18.1121 3.15027 17.8879 3.13321 17.6632 3.11767C17.1633 2.15647 16.1583 1.5 15 1.5H13.5C12.3417 1.5 11.3367 2.15647 10.8368 3.11765C10.6121 3.13319 10.3878 3.15026 10.1639 3.16884C8.66165 3.29353 7.55421 4.54069 7.50183 6ZM13.5 3C12.6716 3 12 3.67157 12 4.5H16.5C16.5 3.67157 15.8284 3 15 3H13.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 9.375C3 8.33947 3.83947 7.5 4.875 7.5H14.625C15.6605 7.5 16.5 8.33947 16.5 9.375V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V9.375ZM12.5857 13.9685C12.8444 13.6451 12.792 13.1731 12.4685 12.9143C12.1451 12.6556 11.6731 12.708 11.4143 13.0315L8.93781 16.1272L8.03033 15.2197C7.73744 14.9268 7.26256 14.9268 6.96967 15.2197C6.67678 15.5126 6.67678 15.9874 6.96967 16.2803L8.46967 17.7803C8.62052 17.9312 8.82847 18.0107 9.04148 17.9989C9.25448 17.9871 9.45238 17.8851 9.58565 17.7185L12.5857 13.9685Z"
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
@prop ariaLabel = 'clipboard document check'
@prop ...restProps
-->
