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
    ariaLabel = 'arrow left circle',
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
      d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.25 10.75C13.6642 10.75 14 10.4142 14 10C14 9.58579 13.6642 9.25 13.25 9.25H8.6599L10.7603 7.29959C11.0639 7.01774 11.0814 6.54319 10.7996 6.23966C10.5177 5.93613 10.0432 5.91855 9.73966 6.2004L6.23966 9.4504C6.08684 9.59231 6 9.79145 6 10C6 10.2086 6.08684 10.4077 6.23966 10.5496L9.73966 13.7996C10.0432 14.0814 10.5177 14.0639 10.7996 13.7603C11.0814 13.4568 11.0639 12.9823 10.7603 12.7004L8.6599 10.75H13.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM11.25 8.75C11.6642 8.75 12 8.41421 12 8C12 7.58579 11.6642 7.25 11.25 7.25H6.56066L7.78033 6.03033C8.07322 5.73744 8.07322 5.26256 7.78033 4.96967C7.48744 4.67678 7.01256 4.67678 6.71967 4.96967L4.21967 7.46967C3.92678 7.76256 3.92678 8.23744 4.21967 8.53033L6.71967 11.0303C7.01256 11.3232 7.48744 11.3232 7.78033 11.0303C8.07322 10.7374 8.07322 10.2626 7.78033 9.96967L6.56066 8.75H11.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM7.71967 11.4697C7.57902 11.6103 7.5 11.8011 7.5 12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303L10.7197 15.5303C11.0126 15.8232 11.4874 15.8232 11.7803 15.5303C12.0732 15.2374 12.0732 14.7626 11.7803 14.4697L10.0607 12.75H15.75C16.1642 12.75 16.5 12.4142 16.5 12C16.5 11.5858 16.1642 11.25 15.75 11.25L10.0607 11.25L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967C11.4874 8.17678 11.0126 8.17678 10.7197 8.46967L7.71967 11.4697Z"
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
@prop ariaLabel = 'arrow left circle'
@prop ...restProps
-->
