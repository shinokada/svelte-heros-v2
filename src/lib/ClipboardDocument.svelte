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
    ariaLabel = 'clipboard document',
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
      d="M8.25 7.5V6.10822C8.25 4.97324 9.09499 4.01015 10.2261 3.91627C10.5994 3.88529 10.9739 3.85858 11.3495 3.83619M15.75 18H18C19.2426 18 20.25 16.9926 20.25 15.75V6.10822C20.25 4.97324 19.405 4.01015 18.2739 3.91627C17.9006 3.88529 17.5261 3.85858 17.1505 3.83619M15.75 18.75V16.875C15.75 15.011 14.239 13.5 12.375 13.5H10.875C10.2537 13.5 9.75 12.9963 9.75 12.375V10.875C9.75 9.01104 8.23896 7.5 6.375 7.5H5.25M17.1505 3.83619C16.8672 2.91757 16.0116 2.25 15 2.25H13.5C12.4884 2.25 11.6328 2.91757 11.3495 3.83619M17.1505 3.83619C17.2152 4.04602 17.25 4.26894 17.25 4.5V5.25H11.25V4.5C11.25 4.26894 11.2848 4.04602 11.3495 3.83619M6.75 7.5H4.875C4.25368 7.5 3.75 8.00368 3.75 8.625V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V16.5C15.75 11.5294 11.7206 7.5 6.75 7.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.9877 3.0124C17.1186 3.1311 18.0001 4.08761 18.0001 5.25V11.75C18.0001 12.9926 16.9927 14 15.7501 14H13.5001V10.6213C13.5001 9.82567 13.184 9.06261 12.6214 8.5L9.50008 5.37868C9.1106 4.9892 8.62505 4.71787 8.09912 4.58776C8.35944 3.74123 9.10578 3.10756 10.0125 3.0124C10.1312 1.88145 11.0877 1 12.2501 1H13.7501C14.9125 1 15.869 1.88145 15.9877 3.0124ZM11.5001 3.25C11.5001 2.83579 11.8359 2.5 12.2501 2.5H13.7501C14.1643 2.5 14.5001 2.83579 14.5001 3.25V3.5H11.5001V3.25Z"
      fill={color}
    />
    <path
      d="M3.5 6C2.67157 6 2 6.67157 2 7.5V16.5C2 17.3284 2.67157 18 3.5 18H10.5C11.3284 18 12 17.3284 12 16.5V10.6213C12 10.2235 11.842 9.84196 11.5607 9.56066L8.43934 6.43934C8.15804 6.15804 7.7765 6 7.37868 6H3.5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9863 3H12C13.1046 3 14 3.89543 14 5V11C14 11.9319 13.3626 12.715 12.5 12.937V10.4142C12.5 9.75117 12.2366 9.11529 11.7678 8.64645L8.35356 5.23223C7.88472 4.76339 7.24884 4.5 6.5858 4.5H4.06302C4.28504 3.63739 5.06809 3 6.00001 3H6.01374C6.1381 1.87501 7.09187 1 8.25001 1H9.75001C10.9081 1 11.8619 1.87501 11.9863 3ZM10.5 4V3.25C10.5 2.83579 10.1642 2.5 9.75001 2.5H8.25001C7.8358 2.5 7.50001 2.83579 7.50001 3.25V4H10.5Z"
      fill={color}
    />
    <path
      d="M3 6C2.44772 6 2 6.44771 2 7V14C2 14.5523 2.44772 15 3 15H10C10.5523 15 11 14.5523 11 14V10.4142C11 10.149 10.8946 9.89464 10.7071 9.70711L7.29289 6.29289C7.10536 6.10536 6.851 6 6.58579 6H3Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.6633 3.11765C17.8879 3.13319 18.1122 3.15026 18.336 3.16883C19.8753 3.29659 21 4.60281 21 6.10821V15.75C21 17.4068 19.6569 18.75 18 18.75V16.5C18 10.5781 13.4244 5.72484 7.61572 5.28281C7.93989 4.15127 8.91565 3.27245 10.1641 3.16883C10.3879 3.15026 10.6121 3.13319 10.8368 3.11765C11.3367 2.15647 12.3417 1.5 13.5 1.5H15C16.1584 1.5 17.1634 2.15647 17.6633 3.11765ZM12 4.5C12 3.67157 12.6716 3 13.5 3H15C15.8285 3 16.5 3.67157 16.5 4.5H12Z"
      fill={color}
    />
    <path
      d="M3 8.625C3 7.58947 3.83947 6.75 4.875 6.75H5.25C7.32107 6.75 9 8.42893 9 10.5V12.375C9 13.4105 9.83947 14.25 10.875 14.25H12.75C14.8211 14.25 16.5 15.9289 16.5 18V20.625C16.5 21.6605 15.6605 22.5 14.625 22.5H4.875C3.83947 22.5 3 21.6605 3 20.625V8.625Z"
      fill={color}
    />
    <path
      d="M10.5 10.5C10.5 9.18695 10.018 7.98648 9.22119 7.0659C12.6201 7.95377 15.2962 10.6299 16.1841 14.0288C15.2635 13.232 14.0631 12.75 12.75 12.75H10.875C10.6679 12.75 10.5 12.5821 10.5 12.375V10.5Z"
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
@prop ariaLabel = 'clipboard document'
@prop ...restProps
-->
