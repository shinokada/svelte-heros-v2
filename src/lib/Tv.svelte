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
    ariaLabel = 'tv',
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
      d="M6 20.25H18M10.5 17.25V20.25M13.5 17.25V20.25M3.375 17.25H20.625C21.2463 17.25 21.75 16.7463 21.75 16.125V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V16.125C2.25 16.7463 2.75368 17.25 3.375 17.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path d="M4 5H16V12H4V5Z" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 3.5C1 2.67157 1.67157 2 2.5 2H17.5C18.3284 2 19 2.67157 19 3.5V13.5C19 14.3284 18.3284 15 17.5 15H12V16.5H15.25C15.6642 16.5 16 16.8358 16 17.25C16 17.6642 15.6642 18 15.25 18H4.75C4.33579 18 4 17.6642 4 17.25C4 16.8358 4.33579 16.5 4.75 16.5H8V15H2.5C1.67157 15 1 14.3284 1 13.5V3.5ZM17.5 3.5L2.5 3.5V13.5H17.5V3.5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path d="M12 5H4V9H12V5Z" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 3C1 2.44772 1.44772 2 2 2H14C14.5523 2 15 2.44772 15 3V11C15 11.5523 14.5523 12 14 12H10V13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H3.75C3.33579 15 3 14.6642 3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H6V12H2C1.44772 12 1 11.5523 1 11V3ZM2.5 10.5V3.5H13.5V10.5H2.5Z"
      fill={color}
    />
  {:else}
    <path d="M19.5 6H4.5V15H19.5V6Z" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V16.125C1.5 17.1605 2.33947 18 3.375 18H9.75V19.5H6C5.58579 19.5 5.25 19.8358 5.25 20.25C5.25 20.6642 5.58579 21 6 21H18C18.4142 21 18.75 20.6642 18.75 20.25C18.75 19.8358 18.4142 19.5 18 19.5H14.25V18H20.625C21.6605 18 22.5 17.1605 22.5 16.125V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375ZM3.375 16.5H20.625C20.8321 16.5 21 16.3321 21 16.125V4.875C21 4.66789 20.8321 4.5 20.625 4.5H3.375C3.16789 4.5 3 4.66789 3 4.875V16.125C3 16.3321 3.16789 16.5 3.375 16.5Z"
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
@prop ariaLabel = 'tv'
@prop ...restProps
-->
