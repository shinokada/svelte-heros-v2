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
    ariaLabel = 'arrow turn down right',
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
      d="M16.4899 11.9996L20.2397 15.75M20.2397 15.75L16.4899 19.5004M20.2397 15.75H3.74023V4.49902"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V11.25H15.4393L13.4697 9.28033C13.1768 8.98744 13.1768 8.51256 13.4697 8.21967C13.7626 7.92678 14.2374 7.92678 14.5303 8.21967L17.7803 11.4697C18.0732 11.7626 18.0732 12.2374 17.7803 12.5303L14.5303 15.7803C14.2374 16.0732 13.7626 16.0732 13.4697 15.7803C13.1768 15.4874 13.1768 15.0126 13.4697 14.7197L15.4393 12.75H3.75C3.33579 12.75 3 12.4142 3 12V3.75C3 3.33579 3.33579 3 3.75 3Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V9.25H11.4393L10.4697 8.28033C10.1768 7.98744 10.1768 7.51256 10.4697 7.21967C10.7626 6.92678 11.2374 6.92678 11.5303 7.21967L13.7803 9.46967C14.0732 9.76256 14.0732 10.2374 13.7803 10.5303L11.5303 12.7803C11.2374 13.0732 10.7626 13.0732 10.4697 12.7803C10.1768 12.4874 10.1768 12.0126 10.4697 11.7197L11.4393 10.75H2.75C2.33579 10.75 2 10.4142 2 10V2.75C2 2.33579 2.33579 2 2.75 2Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.73927 3.74902C4.15349 3.74902 4.48928 4.08483 4.48928 4.49906V15H18.4282L15.9585 12.53C15.6656 12.2371 15.6657 11.7622 15.9586 11.4693C16.2515 11.1764 16.7264 11.1764 17.0193 11.4693L20.7691 15.2197C21.062 15.5126 21.062 15.9875 20.7691 16.2804L17.0193 20.0307C16.7264 20.3236 16.2515 20.3237 15.9586 20.0308C15.6657 19.7379 15.6656 19.263 15.9585 18.9701L18.4282 16.5001H3.73927C3.32505 16.5001 2.98926 16.1643 2.98926 15.75V4.49906C2.98926 4.08483 3.32505 3.74902 3.73927 3.74902Z"
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
@prop ariaLabel = 'arrow turn down right'
@prop ...restProps
-->
