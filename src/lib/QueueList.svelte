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
    ariaLabel = 'queue list',
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
      d="M3.75 12H20.25M3.75 15.75H20.25M3.75 19.5H20.25M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M2 4.5C2 3.11929 3.11929 2 4.5 2H15.5C16.8807 2 18 3.11929 18 4.5C18 5.88071 16.8807 7 15.5 7H4.5C3.11929 7 2 5.88071 2 4.5Z"
      fill={color}
    />
    <path
      d="M2.75 9.08337C2.33579 9.08337 2 9.41916 2 9.83337C2 10.2476 2.33579 10.5834 2.75 10.5834H17.25C17.6642 10.5834 18 10.2476 18 9.83337C18 9.41916 17.6642 9.08337 17.25 9.08337H2.75Z"
      fill={color}
    />
    <path
      d="M2.75 12.6633C2.33579 12.6633 2 12.9991 2 13.4133C2 13.8275 2.33579 14.1633 2.75 14.1633H17.25C17.6642 14.1633 18 13.8275 18 13.4133C18 12.9991 17.6642 12.6633 17.25 12.6633H2.75Z"
      fill={color}
    />
    <path
      d="M2.75 16.25C2.33579 16.25 2 16.5858 2 17C2 17.4143 2.33579 17.75 2.75 17.75H17.25C17.6642 17.75 18 17.4143 18 17C18 16.5858 17.6642 16.25 17.25 16.25H2.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6H4C2.89543 6 2 5.10457 2 4Z"
      fill={color}
    />
    <path
      d="M2 9.25C2 8.83579 2.33579 8.5 2.75 8.5H13.25C13.6642 8.5 14 8.83579 14 9.25C14 9.66421 13.6642 10 13.25 10H2.75C2.33579 10 2 9.66421 2 9.25Z"
      fill={color}
    />
    <path
      d="M2.75 12.5C2.33579 12.5 2 12.8358 2 13.25C2 13.6642 2.33579 14 2.75 14H13.25C13.6642 14 14 13.6642 14 13.25C14 12.8358 13.6642 12.5 13.25 12.5H2.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M5.625 3.75C4.17525 3.75 3 4.92525 3 6.375C3 7.82475 4.17525 9 5.625 9H18.375C19.8247 9 21 7.82475 21 6.375C21 4.92525 19.8247 3.75 18.375 3.75H5.625Z"
      fill={color}
    />
    <path
      d="M3.75 11.25C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H3.75Z"
      fill={color}
    />
    <path
      d="M3 15.75C3 15.3358 3.33579 15 3.75 15H20.25C20.6642 15 21 15.3358 21 15.75C21 16.1642 20.6642 16.5 20.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75Z"
      fill={color}
    />
    <path
      d="M3.75 18.75C3.33579 18.75 3 19.0858 3 19.5C3 19.9142 3.33579 20.25 3.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5C21 19.0858 20.6642 18.75 20.25 18.75H3.75Z"
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
@prop ariaLabel = 'queue list'
@prop ...restProps
-->
