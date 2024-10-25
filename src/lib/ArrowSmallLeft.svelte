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
    ariaLabel = 'arrow small left',
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
      d="M19.5 12L4.5 12M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 10C15 10.4142 14.6642 10.75 14.25 10.75H7.61208L9.76983 12.7094C10.0684 12.9965 10.0777 13.4713 9.79062 13.7698C9.50353 14.0684 9.02875 14.0777 8.73017 13.7906L5.23017 10.5406C5.08311 10.3992 5 10.204 5 10C5 9.79599 5.08311 9.60078 5.23017 9.45938L8.73017 6.20938C9.02875 5.92228 9.50353 5.93159 9.79062 6.23017C10.0777 6.52875 10.0684 7.00353 9.76983 7.29063L7.61208 9.25L14.25 9.25C14.6642 9.25 15 9.58579 15 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    replace_svg_micro
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75L6.31066 12.75L11.7803 18.2197C12.0732 18.5126 12.0732 18.9874 11.7803 19.2803C11.4874 19.5732 11.0126 19.5732 10.7197 19.2803L3.96967 12.5303C3.67678 12.2374 3.67678 11.7626 3.96967 11.4697L10.7197 4.71967C11.0126 4.42678 11.4874 4.42678 11.7803 4.71967C12.0732 5.01256 12.0732 5.48744 11.7803 5.78033L6.31066 11.25L19.5 11.25C19.9142 11.25 20.25 11.5858 20.25 12Z"
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
@prop ariaLabel = 'arrow small left'
@prop ...restProps
-->
