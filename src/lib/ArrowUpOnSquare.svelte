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
    ariaLabel = 'arrow up on square',
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
      d="M9 8.25H7.5C6.25736 8.25 5.25 9.25736 5.25 10.5V19.5C5.25 20.7426 6.25736 21.75 7.5 21.75H16.5C17.7426 21.75 18.75 20.7426 18.75 19.5V10.5C18.75 9.25736 17.7426 8.25 16.5 8.25H15M15 5.25L12 2.25M12 2.25L9 5.25M12 2.25L12 15"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.75 7H10.75L10.75 3.6599L12.7004 5.76034C12.9823 6.06387 13.4568 6.08145 13.7603 5.7996C14.0639 5.51774 14.0814 5.04319 13.7996 4.73966L10.5496 1.23966C10.4077 1.08684 10.2085 1 10 1C9.79145 1 9.59231 1.08684 9.4504 1.23966L6.2004 4.73966C5.91855 5.04319 5.93613 5.51774 6.23966 5.79959C6.54319 6.08145 7.01774 6.06387 7.29959 5.76034L9.25 3.6599L9.25 7H6.25C5.00736 7 4 8.00736 4 9.25V16.75C4 17.9926 5.00736 19 6.25 19H13.75C14.9926 19 16 17.9926 16 16.75V9.25C16 8.00736 14.9926 7 13.75 7ZM10.75 7H9.25L9.25 12.25C9.25 12.6642 9.58579 13 10 13C10.4142 13 10.75 12.6642 10.75 12.25L10.75 7Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8.75 6.00012H7.25024V3.56078L6.03057 4.78045C5.73768 5.07334 5.26281 5.07334 4.96991 4.78045C4.67702 4.48756 4.67702 4.01268 4.96991 3.71979L7.46991 1.21979C7.76281 0.926899 8.23768 0.926899 8.53057 1.21979L11.0306 3.71979C11.3235 4.01268 11.3235 4.48756 11.0306 4.78045C10.7377 5.07335 10.2628 5.07335 9.96991 4.78045L8.75024 3.56078L8.75 6.00012L11 6C12.1046 6 13 6.89543 13 8V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V8C3 6.89543 3.89543 6 5 6L7.25024 6.00012L7.25 11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25L8.75 6.00012Z"
      fill={color}
    />
  {:else}
    <path
      d="M11.4697 1.71967C11.7626 1.42678 12.2374 1.42678 12.5303 1.71967L15.5303 4.71967C15.8232 5.01256 15.8232 5.48744 15.5303 5.78033C15.2374 6.07322 14.7626 6.07322 14.4697 5.78033L12.75 4.06066L12.75 7.5H11.25V4.06066L9.53033 5.78033C9.23744 6.07322 8.76256 6.07322 8.46967 5.78033C8.17678 5.48744 8.17678 5.01256 8.46967 4.71967L11.4697 1.71967Z"
      fill={color}
    />
    <path
      d="M11.25 7.5L11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V7.5H16.5C18.1569 7.5 19.5 8.84315 19.5 10.5V19.5C19.5 21.1569 18.1569 22.5 16.5 22.5H7.5C5.84315 22.5 4.5 21.1569 4.5 19.5V10.5C4.5 8.84315 5.84315 7.5 7.5 7.5H11.25Z"
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
@prop ariaLabel = 'arrow up on square'
@prop ...restProps
-->
