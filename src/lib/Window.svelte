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
    ariaLabel = 'window',
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
      d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21M5.25 6H5.2575V6.0075H5.25V6ZM7.5 6H7.5075V6.0075H7.5V6ZM9.75 6H9.7575V6.0075H9.75V6Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.25 2C3.00736 2 2 3.00736 2 4.25V15.75C2 16.9926 3.00736 18 4.25 18H15.75C16.9926 18 18 16.9926 18 15.75V4.25C18 3.00736 16.9926 2 15.75 2H4.25ZM3.5 8V15.75C3.5 16.1642 3.83579 16.5 4.25 16.5H15.75C16.1642 16.5 16.5 16.1642 16.5 15.75V8H3.5ZM5 4.25C4.58579 4.25 4.25 4.58579 4.25 5V5.01C4.25 5.42421 4.58579 5.76 5 5.76H5.01C5.42421 5.76 5.76 5.42421 5.76 5.01V5C5.76 4.58579 5.42421 4.25 5.01 4.25H5ZM7.25 5C7.25 4.58579 7.58579 4.25 8 4.25H8.01C8.42421 4.25 8.76 4.58579 8.76 5V5.01C8.76 5.42421 8.42421 5.76 8.01 5.76H8C7.58579 5.76 7.25 5.42421 7.25 5.01V5ZM11 4.25C10.5858 4.25 10.25 4.58579 10.25 5V5.01C10.25 5.42421 10.5858 5.76 11 5.76H11.01C11.4242 5.76 11.76 5.42421 11.76 5.01V5C11.76 4.58579 11.4242 4.25 11.01 4.25H11Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12ZM3.5 6.5V12C3.5 12.2761 3.72386 12.5 4 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V6.5C12.5 6.22386 12.2761 6 12 6H4C3.72386 6 3.5 6.22386 3.5 6.5ZM4.25 4.75C4.66421 4.75 5 4.41421 5 4C5 3.58579 4.66421 3.25 4.25 3.25C3.83579 3.25 3.5 3.58579 3.5 4C3.5 4.41421 3.83579 4.75 4.25 4.75ZM7 4C7 4.41421 6.66421 4.75 6.25 4.75C5.83579 4.75 5.5 4.41421 5.5 4C5.5 3.58579 5.83579 3.25 6.25 3.25C6.66421 3.25 7 3.58579 7 4ZM8.25 4.75C8.66421 4.75 9 4.41421 9 4C9 3.58579 8.66421 3.25 8.25 3.25C7.83579 3.25 7.5 3.58579 7.5 4C7.5 4.41421 7.83579 4.75 8.25 4.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 6C2.25 4.34315 3.59315 3 5.25 3H18.75C20.4069 3 21.75 4.34315 21.75 6V18C21.75 19.6569 20.4069 21 18.75 21H5.25C3.59315 21 2.25 19.6569 2.25 18V6ZM20.25 9H3.75V18C3.75 18.8284 4.42157 19.5 5.25 19.5H18.75C19.5784 19.5 20.25 18.8284 20.25 18V9ZM5.25 5.25C4.83579 5.25 4.5 5.58579 4.5 6V6.0075C4.5 6.42171 4.83579 6.7575 5.25 6.7575H5.2575C5.67171 6.7575 6.0075 6.42171 6.0075 6.0075V6C6.0075 5.58579 5.67171 5.25 5.2575 5.25H5.25ZM6.75 6C6.75 5.58579 7.08579 5.25 7.5 5.25H7.5075C7.92171 5.25 8.2575 5.58579 8.2575 6V6.0075C8.2575 6.42171 7.92171 6.7575 7.5075 6.7575H7.5C7.08579 6.7575 6.75 6.42171 6.75 6.0075V6ZM9.75 5.25C9.33579 5.25 9 5.58579 9 6V6.0075C9 6.42171 9.33579 6.7575 9.75 6.7575H9.7575C10.1717 6.7575 10.5075 6.42171 10.5075 6.0075V6C10.5075 5.58579 10.1717 5.25 9.7575 5.25H9.75Z"
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
@prop ariaLabel = 'window'
@prop ...restProps
-->
