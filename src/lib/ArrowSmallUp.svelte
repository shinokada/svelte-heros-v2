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
    ariaLabel = 'arrow small up',
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
      d="M12 19.5L12 4.5M12 4.5L5.25 11.25M12 4.5L18.75 11.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 15C9.58579 15 9.25 14.6642 9.25 14.25L9.25 7.61208L7.29063 9.76983C7.00353 10.0684 6.52875 10.0777 6.23017 9.79062C5.93159 9.50353 5.92228 9.02875 6.20938 8.73017L9.45938 5.23017C9.60078 5.08311 9.79599 5 10 5C10.204 5 10.3992 5.08311 10.5406 5.23017L13.7906 8.73017C14.0777 9.02875 14.0684 9.50353 13.7698 9.79062C13.4713 10.0777 12.9965 10.0684 12.7094 9.76983L10.75 7.61208V14.25C10.75 14.6642 10.4142 15 10 15Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    replace_svg_micro
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 20.25C11.5858 20.25 11.25 19.9142 11.25 19.5V6.31066L5.78033 11.7803C5.48744 12.0732 5.01256 12.0732 4.71967 11.7803C4.42678 11.4874 4.42678 11.0126 4.71967 10.7197L11.4697 3.96967C11.7626 3.67678 12.2374 3.67678 12.5303 3.96967L19.2803 10.7197C19.5732 11.0126 19.5732 11.4874 19.2803 11.7803C18.9874 12.0732 18.5126 12.0732 18.2197 11.7803L12.75 6.31066V19.5C12.75 19.9142 12.4142 20.25 12 20.25Z"
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
@prop ariaLabel = 'arrow small up'
@prop ...restProps
-->
