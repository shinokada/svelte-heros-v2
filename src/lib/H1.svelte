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
    ariaLabel = 'h1',
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
      d="M2.24316 4.49316V11.9939M2.24316 11.9939V19.4946M2.24316 11.9939L12.7434 11.9946M12.7434 4.49389V11.9946M12.7434 11.9946V19.4953M17.244 10.8682L19.494 9.3681V19.4941M19.494 19.4941H17.244M19.494 19.4941H21.744"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V9.25H8.5V4.75C8.5 4.33579 8.83579 4 9.25 4C9.66421 4 10 4.33579 10 4.75V15.25C10 15.6642 9.66421 16 9.25 16C8.83579 16 8.5 15.6642 8.5 15.25V10.75H3.5V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V4.75C2 4.33579 2.33579 4 2.75 4ZM13 8.75C13 8.33579 13.3358 8 13.75 8H15.5C15.9142 8 16.25 8.33579 16.25 8.75V14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H13.75C13.3358 16 13 15.6642 13 15.25C13 14.8358 13.3358 14.5 13.75 14.5H14.75V9.5H13.75C13.3358 9.5 13 9.16421 13 8.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.75 3C2.16421 3 2.5 3.33579 2.5 3.75V7.25H6.5V3.75C6.5 3.33579 6.83579 3 7.25 3C7.66421 3 8 3.33579 8 3.75V12.25C8 12.6642 7.66421 13 7.25 13C6.83579 13 6.5 12.6642 6.5 12.25V8.75H2.5V12.25C2.5 12.6642 2.16421 13 1.75 13C1.33579 13 1 12.6642 1 12.25V3.75C1 3.33579 1.33579 3 1.75 3ZM10 6.75C10 6.33579 10.3358 6 10.75 6H12.5C12.9142 6 13.25 6.33579 13.25 6.75V11.5H14.25C14.6642 11.5 15 11.8358 15 12.25C15 12.6642 14.6642 13 14.25 13H10.75C10.3358 13 10 12.6642 10 12.25C10 11.8358 10.3358 11.5 10.75 11.5H11.75V7.5H10.75C10.3358 7.5 10 7.16421 10 6.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.24319 3.74316C2.65741 3.74316 2.99321 4.07897 2.99321 4.4932V11.2439H11.9934V4.49393C11.9934 4.07969 12.3292 3.74389 12.7434 3.74389C13.1577 3.74389 13.4934 4.07969 13.4934 4.49393V19.4954C13.4934 19.9096 13.1577 20.2454 12.7434 20.2454C12.3292 20.2454 11.9934 19.9096 11.9934 19.4954V12.744H2.99321V19.4946C2.99321 19.9089 2.65741 20.2447 2.24319 20.2447C1.82896 20.2447 1.49316 19.9089 1.49316 19.4946V4.4932C1.49316 4.07897 1.82896 3.74316 2.24319 3.74316ZM19.8479 8.70685C20.0918 8.83736 20.244 9.09153 20.244 9.36814V18.7441H21.744C22.1582 18.7441 22.494 19.0799 22.494 19.4941C22.494 19.9084 22.1582 20.2442 21.744 20.2442H17.244C16.8298 20.2442 16.494 19.9084 16.494 19.4941C16.494 19.0799 16.8298 18.7441 17.244 18.7441H18.744V10.7697L17.6601 11.4923C17.3155 11.7221 16.8498 11.629 16.62 11.2844C16.3902 10.9397 16.4833 10.474 16.828 10.2442L19.0779 8.74409C19.3081 8.59064 19.604 8.57633 19.8479 8.70685Z"
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
@prop ariaLabel = 'h1'
@prop ...restProps
-->
