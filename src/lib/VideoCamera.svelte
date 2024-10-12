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
    ariaLabel = 'video camera',
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
      d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.25 4C2.00736 4 1 5.00736 1 6.25V13.75C1 14.9926 2.00736 16 3.25 16H10.75C11.9926 16 13 14.9926 13 13.75V6.25C13 5.00736 11.9926 4 10.75 4H3.25Z"
      fill={color}
    />
    <path
      d="M19 4.75002C19 4.44668 18.8173 4.1732 18.537 4.05711C18.2568 3.94103 17.9342 4.00519 17.7197 4.21969L14.7197 7.21969C14.579 7.36034 14.5 7.55111 14.5 7.75002V12.25C14.5 12.4489 14.579 12.6397 14.7197 12.7804L17.7197 15.7804C17.9342 15.9949 18.2568 16.059 18.537 15.9429C18.8173 15.8268 19 15.5534 19 15.25V4.75002Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3 4C1.89543 4 1 4.89543 1 6V10C1 11.1046 1.89543 12 3 12H8C9.10457 12 10 11.1046 10 10V6C10 4.89543 9.10457 4 8 4H3Z"
      fill={color}
    />
    <path
      d="M15 4.75002C15 4.44668 14.8173 4.1732 14.537 4.05711C14.2568 3.94103 13.9342 4.00519 13.7197 4.21969L11.7197 6.21969C11.579 6.36034 11.5 6.55111 11.5 6.75002V9.25002C11.5 9.44893 11.579 9.6397 11.7197 9.78035L13.7197 11.7804C13.9342 11.9949 14.2568 12.059 14.537 11.9429C14.8173 11.8268 15 11.5534 15 11.25V4.75002Z"
      fill={color}
    />
  {:else}
    <path
      d="M4.5 4.5C2.84315 4.5 1.5 5.84315 1.5 7.5V16.5C1.5 18.1569 2.84315 19.5 4.5 19.5H12.75C14.4069 19.5 15.75 18.1569 15.75 16.5V7.5C15.75 5.84315 14.4069 4.5 12.75 4.5H4.5Z"
      fill={color}
    />
    <path
      d="M19.9393 18.75L17.25 16.0606V7.93931L19.9393 5.24996C20.8843 4.30501 22.5 4.97427 22.5 6.31063V17.6893C22.5 19.0257 20.8843 19.6949 19.9393 18.75Z"
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
@prop ariaLabel = 'video camera'
@prop ...restProps
-->
