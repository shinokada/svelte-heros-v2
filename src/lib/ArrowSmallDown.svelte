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
    ariaLabel = 'arrow small down',
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
      d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 5C10.4142 5 10.75 5.33579 10.75 5.75V12.3879L12.7094 10.2302C12.9965 9.93159 13.4713 9.92228 13.7698 10.2094C14.0684 10.4965 14.0777 10.9713 13.7906 11.2698L10.5406 14.7698C10.3992 14.9169 10.204 15 10 15C9.79599 15 9.60078 14.9169 9.45938 14.7698L6.20938 11.2698C5.92228 10.9713 5.93159 10.4965 6.23017 10.2094C6.52875 9.92228 7.00353 9.93159 7.29063 10.2302L9.25 12.3879V5.75C9.25 5.33579 9.58579 5 10 5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    replace_svg_micro
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5L12.75 17.6893L18.2197 12.2197C18.5126 11.9268 18.9874 11.9268 19.2803 12.2197C19.5732 12.5126 19.5732 12.9874 19.2803 13.2803L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L4.71967 13.2803C4.42678 12.9874 4.42678 12.5126 4.71967 12.2197C5.01256 11.9268 5.48744 11.9268 5.78033 12.2197L11.25 17.6893L11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75Z"
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
@prop ariaLabel = 'arrow small down'
@prop ...restProps
-->
