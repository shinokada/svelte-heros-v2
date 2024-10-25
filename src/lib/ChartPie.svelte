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
    ariaLabel = 'chart pie',
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
      d="M10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5H10.5V6Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5 10.5H21C21 6.35786 17.6421 3 13.5 3V10.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M12 9.00003C11.4477 9.00003 11 8.55232 11 8.00003V3.00003C11 2.44775 11.4503 1.99253 11.997 2.0705C15.0651 2.50801 17.492 4.93492 17.9295 8.003C18.0075 8.54976 17.5523 9.00003 17 9.00003H12Z"
      fill={color}
    />
    <path
      d="M8.00297 4.0705C8.54972 3.99253 9 4.44775 9 5.00003V10C9 10.5523 9.44772 11 10 11H15C15.5523 11 16.0075 11.4503 15.9295 11.9971C15.4456 15.3908 12.5275 18 9 18C5.13401 18 2 14.866 2 11C2 7.47253 4.60923 4.55445 8.00297 4.0705Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M13.9754 6.50077C14.0026 6.77556 13.7761 7.00007 13.5 7.00007H9.5C9.22386 7.00007 9 6.77621 9 6.50007V2.50007C9 2.22393 9.2245 1.99744 9.4993 2.02469C11.8621 2.25894 13.7411 4.138 13.9754 6.50077Z"
      fill={color}
    />
    <path
      d="M6.5007 4.02469C6.7755 3.99744 7 4.22393 7 4.50007V8.50007C7 8.77621 7.22386 9.00007 7.5 9.00007H11.5C11.7761 9.00007 12.0026 9.22457 11.9754 9.49937C11.7248 12.0264 9.59291 14.0001 7 14.0001C4.23858 14.0001 2 11.7615 2 9.00007C2 6.40716 3.9737 4.27523 6.5007 4.02469Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 13.5C2.25 8.94365 5.94365 5.25 10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V12.75H18C18.4142 12.75 18.75 13.0858 18.75 13.5C18.75 18.0563 15.0563 21.75 10.5 21.75C5.94365 21.75 2.25 18.0563 2.25 13.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.75 3C12.75 2.58579 13.0858 2.25 13.5 2.25C18.0563 2.25 21.75 5.94365 21.75 10.5C21.75 10.9142 21.4142 11.25 21 11.25H13.5C13.0858 11.25 12.75 10.9142 12.75 10.5V3Z"
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
@prop ariaLabel = 'chart pie'
@prop ...restProps
-->
