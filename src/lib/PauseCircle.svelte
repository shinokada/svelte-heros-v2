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
    ariaLabel = 'pause circle',
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
      d="M14.25 9V15M9.75 15V9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM7 7.75C7 7.33579 7.33579 7 7.75 7H8.25C8.66421 7 9 7.33579 9 7.75V12.25C9 12.6642 8.66421 13 8.25 13H7.75C7.33579 13 7 12.6642 7 12.25V7.75ZM11 7.75C11 7.33579 11.3358 7 11.75 7H12.25C12.6642 7 13 7.33579 13 7.75V12.25C13 12.6642 12.6642 13 12.25 13H11.75C11.3358 13 11 12.6642 11 12.25V7.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM5.5 5.5C5.5 5.22386 5.72386 5 6 5H6.5C6.77614 5 7 5.22386 7 5.5V10.5C7 10.7761 6.77614 11 6.5 11H6C5.72386 11 5.5 10.7761 5.5 10.5V5.5ZM9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H10C10.2761 11 10.5 10.7761 10.5 10.5V5.5C10.5 5.22386 10.2761 5 10 5H9.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM9 8.25C8.58579 8.25 8.25 8.58579 8.25 9V15C8.25 15.4142 8.58579 15.75 9 15.75H9.75C10.1642 15.75 10.5 15.4142 10.5 15V9C10.5 8.58579 10.1642 8.25 9.75 8.25H9ZM14.25 8.25C13.8358 8.25 13.5 8.58579 13.5 9V15C13.5 15.4142 13.8358 15.75 14.25 15.75H15C15.4142 15.75 15.75 15.4142 15.75 15V9C15.75 8.58579 15.4142 8.25 15 8.25H14.25Z"
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
@prop ariaLabel = 'pause circle'
@prop ...restProps
-->
