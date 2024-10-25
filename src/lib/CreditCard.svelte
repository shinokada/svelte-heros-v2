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
    ariaLabel = 'credit card',
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
      d="M2.25 8.25H21.75M2.25 9H21.75M5.25 14.25H11.25M5.25 16.5H8.25M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 4C1.67157 4 1 4.67157 1 5.5V6H19V5.5C19 4.67157 18.3284 4 17.5 4H2.5ZM19 8.5H1V14.5C1 15.3284 1.67157 16 2.5 16H17.5C18.3284 16 19 15.3284 19 14.5V8.5ZM3 13.25C3 12.8358 3.33579 12.5 3.75 12.5H5.25C5.66421 12.5 6 12.8358 6 13.25C6 13.6642 5.66421 14 5.25 14H3.75C3.33579 14 3 13.6642 3 13.25ZM7.75 12.5C7.33579 12.5 7 12.8358 7 13.25C7 13.6642 7.33579 14 7.75 14H11.25C11.6642 14 12 13.6642 12 13.25C12 12.8358 11.6642 12.5 11.25 12.5H7.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.5 3C1.67157 3 1 3.67157 1 4.5V5H15V4.5C15 3.67157 14.3284 3 13.5 3H2.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 7H1V11.5C1 12.3284 1.67157 13 2.5 13H13.5C14.3284 13 15 12.3284 15 11.5V7ZM3 10.25C3 9.83579 3.33579 9.5 3.75 9.5H4.25C4.66421 9.5 5 9.83579 5 10.25C5 10.6642 4.66421 11 4.25 11H3.75C3.33579 11 3 10.6642 3 10.25ZM6.75 9.5C6.33579 9.5 6 9.83579 6 10.25C6 10.6642 6.33579 11 6.75 11H9.25C9.66421 11 10 10.6642 10 10.25C10 9.83579 9.66421 9.5 9.25 9.5H6.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M4.5 3.75C2.84315 3.75 1.5 5.09315 1.5 6.75V7.5H22.5V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5 9.75H1.5V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V9.75ZM4.5 13.5C4.5 13.0858 4.83579 12.75 5.25 12.75H11.25C11.6642 12.75 12 13.0858 12 13.5C12 13.9142 11.6642 14.25 11.25 14.25H5.25C4.83579 14.25 4.5 13.9142 4.5 13.5ZM5.25 15.75C4.83579 15.75 4.5 16.0858 4.5 16.5C4.5 16.9142 4.83579 17.25 5.25 17.25H8.25C8.66421 17.25 9 16.9142 9 16.5C9 16.0858 8.66421 15.75 8.25 15.75H5.25Z"
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
@prop ariaLabel = 'credit card'
@prop ...restProps
-->
