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
    ariaLabel = 'shopping bag',
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
      d="M15.75 10.5V6C15.75 3.92893 14.0711 2.25 12 2.25C9.92893 2.25 8.25 3.92893 8.25 6V10.5M19.606 8.50723L20.8692 20.5072C20.9391 21.1715 20.4183 21.75 19.7504 21.75H4.24963C3.58172 21.75 3.06089 21.1715 3.13081 20.5072L4.39397 8.50723C4.45424 7.93466 4.93706 7.5 5.51279 7.5H18.4872C19.0629 7.5 19.5458 7.93466 19.606 8.50723ZM8.625 10.5C8.625 10.7071 8.4571 10.875 8.25 10.875C8.04289 10.875 7.875 10.7071 7.875 10.5C7.875 10.2929 8.04289 10.125 8.25 10.125C8.4571 10.125 8.625 10.2929 8.625 10.5ZM16.125 10.5C16.125 10.7071 15.9571 10.875 15.75 10.875C15.5429 10.875 15.375 10.7071 15.375 10.5C15.375 10.2929 15.5429 10.125 15.75 10.125C15.9571 10.125 16.125 10.2929 16.125 10.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 5V6H4.66704C3.7593 6 3.00225 6.69407 2.92362 7.5984L2.09753 17.0984C2.00862 18.1209 2.81463 19 3.84095 19H16.1595C17.1858 19 17.9918 18.1209 17.9029 17.0984L17.0768 7.5984C16.9982 6.69407 16.2411 6 15.3334 6H14V5C14 2.79086 12.2091 1 10 1C7.79086 1 6 2.79086 6 5ZM10 2.5C8.61929 2.5 7.5 3.61929 7.5 5V6H12.5V5C12.5 3.61929 11.3807 2.5 10 2.5ZM7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10V8.75C12.5 8.33579 12.8358 8 13.25 8C13.6642 8 14 8.33579 14 8.75V10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10V8.75C6 8.33579 6.33579 8 6.75 8C7.16421 8 7.5 8.33579 7.5 8.75V10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.00001 4C5.00001 2.34315 6.34316 1 8.00001 1C9.65687 1 11 2.34315 11 4V5H11.6425C12.4132 5 13.0584 5.58394 13.1351 6.35074L13.8351 13.3507C13.9234 14.2338 13.23 15 12.3425 15H3.65749C2.77006 15 2.07664 14.2338 2.16494 13.3507L2.86494 6.35075C2.94162 5.58394 3.58687 5 4.35749 5H5.00001V4ZM9.50001 4V5H6.50001V4C6.50001 3.17157 7.17159 2.5 8.00001 2.5C8.82844 2.5 9.50001 3.17157 9.50001 4ZM6.5 7.75C6.5 7.33579 6.16421 7 5.75 7C5.33579 7 5 7.33579 5 7.75V8.75C5 10.4069 6.34315 11.75 8 11.75C9.65685 11.75 11 10.4069 11 8.75V7.75C11 7.33579 10.6642 7 10.25 7C9.83579 7 9.5 7.33579 9.5 7.75V8.75C9.5 9.57843 8.82843 10.25 8 10.25C7.17157 10.25 6.5 9.57843 6.5 8.75V7.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.5 6V6.75H5.51287C4.55332 6.75 3.74862 7.47444 3.64817 8.42872L2.38502 20.4287C2.26848 21.5358 3.13652 22.5 4.24971 22.5H19.7504C20.8636 22.5 21.7317 21.5358 21.6151 20.4287L20.352 8.42872C20.2515 7.47444 19.4468 6.75 18.4873 6.75H16.5V6C16.5 3.51472 14.4853 1.5 12 1.5C9.51472 1.5 7.5 3.51472 7.5 6ZM12 3C10.3431 3 9 4.34315 9 6V6.75H15V6C15 4.34315 13.6569 3 12 3ZM9 11.25C9 12.9069 10.3431 14.25 12 14.25C13.6569 14.25 15 12.9069 15 11.25V10.5C15 10.0858 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 10.0858 16.5 10.5V11.25C16.5 13.7353 14.4853 15.75 12 15.75C9.51472 15.75 7.5 13.7353 7.5 11.25V10.5C7.5 10.0858 7.83579 9.75 8.25 9.75C8.66421 9.75 9 10.0858 9 10.5V11.25Z"
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
@prop ariaLabel = 'shopping bag'
@prop ...restProps
-->
