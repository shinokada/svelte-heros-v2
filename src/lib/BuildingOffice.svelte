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
    ariaLabel = 'building office',
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
      d="M3.75 21H20.25M4.5 3H19.5M5.25 3V21M18.75 3V21M9 6.75H10.5M9 9.75H10.5M9 12.75H10.5M13.5 6.75H15M13.5 9.75H15M13.5 12.75H15M9 21V17.625C9 17.0037 9.50368 16.5 10.125 16.5H13.875C14.4963 16.5 15 17.0037 15 17.625V21"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 16.5V3.5H3.75C3.33579 3.5 3 3.16421 3 2.75C3 2.33579 3.33579 2 3.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H16V16.5H16.25C16.6642 16.5 17 16.8358 17 17.25C17 17.6642 16.6642 18 16.25 18H12.75C12.3358 18 12 17.6642 12 17.25V14.75C12 14.3358 11.6642 14 11.25 14H8.75C8.33579 14 8 14.3358 8 14.75V17.25C8 17.6642 7.66421 18 7.25 18H3.75C3.33579 18 3 17.6642 3 17.25C3 16.8358 3.33579 16.5 3.75 16.5H4ZM7 5.5C7 5.22386 7.22386 5 7.5 5H8.5C8.77614 5 9 5.22386 9 5.5V6.5C9 6.77614 8.77614 7 8.5 7H7.5C7.22386 7 7 6.77614 7 6.5V5.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5V10.5C7 10.7761 7.22386 11 7.5 11H8.5C8.77614 11 9 10.7761 9 10.5V9.5C9 9.22386 8.77614 9 8.5 9H7.5ZM11 5.5C11 5.22386 11.2239 5 11.5 5H12.5C12.7761 5 13 5.22386 13 5.5V6.5C13 6.77614 12.7761 7 12.5 7H11.5C11.2239 7 11 6.77614 11 6.5V5.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5V10.5C11 10.7761 11.2239 11 11.5 11H12.5C12.7761 11 13 10.7761 13 10.5V9.5C13 9.22386 12.7761 9 12.5 9H11.5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 2C3.33579 2 3 2.33579 3 2.75C3 3.16421 3.33579 3.5 3.75 3.5H4V12.5H3.75C3.33579 12.5 3 12.8358 3 13.25C3 13.6642 3.33579 14 3.75 14H6C6.27614 14 6.5 13.7761 6.5 13.5V10.5C6.5 10.2239 6.72386 10 7 10H9C9.27614 10 9.5 10.2239 9.5 10.5V13.5C9.5 13.7761 9.72386 14 10 14H12.25C12.6642 14 13 13.6642 13 13.25C13 12.8358 12.6642 12.5 12.25 12.5H12V3.5H12.25C12.6642 3.5 13 3.16421 13 2.75C13 2.33579 12.6642 2 12.25 2H3.75ZM6.5 4C6.22386 4 6 4.22386 6 4.5V5C6 5.27614 6.22386 5.5 6.5 5.5H7C7.27614 5.5 7.5 5.27614 7.5 5V4.5C7.5 4.22386 7.27614 4 7 4H6.5ZM6 7C6 6.72386 6.22386 6.5 6.5 6.5H7C7.27614 6.5 7.5 6.72386 7.5 7V7.5C7.5 7.77614 7.27614 8 7 8H6.5C6.22386 8 6 7.77614 6 7.5V7ZM9 4C8.72386 4 8.5 4.22386 8.5 4.5V5C8.5 5.27614 8.72386 5.5 9 5.5H9.5C9.77614 5.5 10 5.27614 10 5V4.5C10 4.22386 9.77614 4 9.5 4H9ZM8.5 7C8.5 6.72386 8.72386 6.5 9 6.5H9.5C9.77614 6.5 10 6.72386 10 7V7.5C10 7.77614 9.77614 8 9.5 8H9C8.72386 8 8.5 7.77614 8.5 7.5V7Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 2.25C4.08579 2.25 3.75 2.58579 3.75 3C3.75 3.41421 4.08579 3.75 4.5 3.75V20.25H3.75C3.33579 20.25 3 20.5858 3 21C3 21.4142 3.33579 21.75 3.75 21.75H20.25C20.6642 21.75 21 21.4142 21 21C21 20.5858 20.6642 20.25 20.25 20.25H19.5V3.75C19.9142 3.75 20.25 3.41421 20.25 3C20.25 2.58579 19.9142 2.25 19.5 2.25H4.5ZM9 6C8.58579 6 8.25 6.33579 8.25 6.75C8.25 7.16421 8.58579 7.5 9 7.5H10.5C10.9142 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 10.9142 6 10.5 6H9ZM8.25 9.75C8.25 9.33579 8.58579 9 9 9H10.5C10.9142 9 11.25 9.33579 11.25 9.75C11.25 10.1642 10.9142 10.5 10.5 10.5H9C8.58579 10.5 8.25 10.1642 8.25 9.75ZM9 12C8.58579 12 8.25 12.3358 8.25 12.75C8.25 13.1642 8.58579 13.5 9 13.5H10.5C10.9142 13.5 11.25 13.1642 11.25 12.75C11.25 12.3358 10.9142 12 10.5 12H9ZM12.75 6.75C12.75 6.33579 13.0858 6 13.5 6H15C15.4142 6 15.75 6.33579 15.75 6.75C15.75 7.16421 15.4142 7.5 15 7.5H13.5C13.0858 7.5 12.75 7.16421 12.75 6.75ZM13.5 9C13.0858 9 12.75 9.33579 12.75 9.75C12.75 10.1642 13.0858 10.5 13.5 10.5H15C15.4142 10.5 15.75 10.1642 15.75 9.75C15.75 9.33579 15.4142 9 15 9H13.5ZM12.75 12.75C12.75 12.3358 13.0858 12 13.5 12H15C15.4142 12 15.75 12.3358 15.75 12.75C15.75 13.1642 15.4142 13.5 15 13.5H13.5C13.0858 13.5 12.75 13.1642 12.75 12.75ZM9 19.5V17.25C9 16.8358 9.33579 16.5 9.75 16.5H14.25C14.6642 16.5 15 16.8358 15 17.25V19.5C15 19.9142 14.6642 20.25 14.25 20.25H9.75C9.33579 20.25 9 19.9142 9 19.5Z"
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
@prop ariaLabel = 'building office'
@prop ...restProps
-->
