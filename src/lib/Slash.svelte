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
    ariaLabel = 'slash',
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
      d="M9 20.2475L15 3.74707"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5284 3.04731C12.9177 3.18887 13.1185 3.61919 12.977 4.00846L8.43308 16.5042C8.29152 16.8935 7.8612 17.0943 7.47192 16.9527C7.08265 16.8112 6.88183 16.3809 7.02339 15.9916L11.5673 3.49585C11.7088 3.10657 12.1392 2.90576 12.5284 3.04731Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.0741 2.04731C10.4634 2.18887 10.6642 2.61919 10.5227 3.00846L6.70505 13.5069C6.56349 13.8962 6.13317 14.097 5.7439 13.9555C5.35462 13.8139 5.1538 13.3836 5.29536 12.9943L9.11299 2.49585C9.25454 2.10657 9.68486 1.90576 10.0741 2.04731Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.256 3.04243C15.6453 3.18399 15.8461 3.61434 15.7046 4.00364L9.7046 20.504C9.56304 20.8933 9.13271 21.0942 8.74342 20.9526C8.35414 20.811 8.15331 20.3807 8.29487 19.9914L14.2948 3.49099C14.4364 3.1017 14.8667 2.90087 15.256 3.04243Z"
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
@prop ariaLabel = 'slash'
@prop ...restProps
-->
