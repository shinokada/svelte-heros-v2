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
    ariaLabel = 'paper airplane',
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
      d="M5.99972 12L3.2688 3.12451C9.88393 5.04617 16.0276 8.07601 21.4855 11.9997C16.0276 15.9235 9.884 18.9535 3.26889 20.8752L5.99972 12ZM5.99972 12L13.5 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.10526 2.28844C2.85362 2.25277 2.60104 2.34697 2.43421 2.5387C2.26738 2.73044 2.209 2.99361 2.27911 3.2379L3.69276 8.16378C3.87733 8.80688 4.4655 9.25 5.13456 9.25H11.25C11.6642 9.25 12 9.58579 12 10C12 10.4142 11.6642 10.75 11.25 10.75H5.13457C4.4655 10.75 3.87733 11.1931 3.69277 11.8362L2.27911 16.7621C2.209 17.0064 2.26738 17.2696 2.43421 17.4613C2.60104 17.6531 2.85362 17.7473 3.10526 17.7116C8.94303 16.8842 14.221 14.3187 18.3983 10.5574C18.5563 10.4151 18.6465 10.2126 18.6465 10C18.6465 9.78746 18.5563 9.58489 18.3983 9.44266C14.221 5.68129 8.94303 3.11585 3.10526 2.28844Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.86908 2.29797C2.60248 2.25655 2.33418 2.3615 2.16646 2.57282C1.99873 2.78414 1.95744 3.06927 2.05831 3.31949L3.39039 6.62389C3.54291 7.00223 3.90994 7.25 4.31787 7.25H8.25C8.66421 7.25 9 7.58579 9 8C9 8.41421 8.66421 8.75 8.25 8.75H4.31812C3.9102 8.75 3.54317 8.99777 3.39065 9.37611L2.05831 12.6811C1.95744 12.9314 1.99873 13.2165 2.16646 13.4278C2.33418 13.6391 2.60248 13.7441 2.86908 13.7027C7.23525 13.0242 11.2273 11.2161 14.5368 8.58762C14.7159 8.44534 14.8204 8.22908 14.8204 8.00032C14.8204 7.77155 14.7159 7.55529 14.5368 7.41302C11.2273 4.78455 7.23525 2.97644 2.86908 2.29797Z"
      fill={color}
    />
  {:else}
    <path
      d="M3.47804 2.4043C3.2133 2.3274 2.92771 2.40193 2.73432 2.5984C2.54093 2.79487 2.47091 3.0816 2.55198 3.3451L4.98426 11.25H13.5C13.9142 11.25 14.25 11.5858 14.25 12C14.25 12.4142 13.9142 12.75 13.5 12.75H4.98427L2.55207 20.6546C2.471 20.9181 2.54102 21.2049 2.73441 21.4013C2.92781 21.5978 3.2134 21.6723 3.47814 21.5954C10.1767 19.6494 16.3974 16.5814 21.9233 12.6087C22.1193 12.4678 22.2355 12.2412 22.2355 11.9998C22.2355 11.7583 22.1193 11.5317 21.9233 11.3908C16.3974 7.41817 10.1767 4.35021 3.47804 2.4043Z"
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
@prop ariaLabel = 'paper airplane'
@prop ...restProps
-->
