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
    ariaLabel = 'arrow left end on rectangle',
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
      d="M15.75 9V5.25C15.75 4.00736 14.7426 3 13.5 3L7.5 3C6.25736 3 5.25 4.00736 5.25 5.25L5.25 18.75C5.25 19.9926 6.25736 21 7.5 21H13.5C14.7426 21 15.75 19.9926 15.75 18.75V15M12 9L9 12M9 12L12 15M9 12L21.75 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 4.25C3 3.00736 4.00736 2 5.25 2H10.75C11.9926 2 13 3.00736 13 4.25V6.25C13 6.66421 12.6642 7 12.25 7C11.8358 7 11.5 6.66421 11.5 6.25V4.25C11.5 3.83579 11.1642 3.5 10.75 3.5H5.25C4.83579 3.5 4.5 3.83579 4.5 4.25V15.75C4.5 16.1642 4.83579 16.5 5.25 16.5H10.75C11.1642 16.5 11.5 16.1642 11.5 15.75V13.75C11.5 13.3358 11.8358 13 12.25 13C12.6642 13 13 13.3358 13 13.75V15.75C13 16.9926 11.9926 18 10.75 18H5.25C4.00736 18 3 16.9926 3 15.75V4.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 10C19 9.58579 18.6642 9.25 18.25 9.25H8.70447L9.75172 8.30747C10.0596 8.03038 10.0846 7.55616 9.80747 7.24828C9.53038 6.94039 9.05616 6.91543 8.74828 7.19253L6.24828 9.44253C6.09024 9.58476 6 9.78738 6 10C6 10.2126 6.09024 10.4152 6.24828 10.5575L8.74828 12.8075C9.05616 13.0846 9.53038 13.0596 9.80747 12.7517C10.0846 12.4438 10.0596 11.9696 9.75172 11.6925L8.70447 10.75H18.25C18.6642 10.75 19 10.4142 19 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M4.75 2C3.23122 2 2 3.23122 2 4.75V11.25C2 12.7688 3.23122 14 4.75 14H7.75C9.26878 14 10.5 12.7688 10.5 11.25V10.75C10.5 10.3358 10.1642 10 9.75 10C9.33579 10 9 10.3358 9 10.75V11.25C9 11.9404 8.44036 12.5 7.75 12.5H4.75C4.05964 12.5 3.5 11.9404 3.5 11.25V4.75C3.5 4.05964 4.05964 3.5 4.75 3.5H7.75C8.44036 3.5 9 4.05964 9 4.75V5.25C9 5.66421 9.33579 6 9.75 6C10.1642 6 10.5 5.66421 10.5 5.25V4.75C10.5 3.23122 9.26878 2 7.75 2H4.75Z"
      fill={color}
    />
    <path
      d="M8.03033 6.28033C8.32322 5.98744 8.32322 5.51256 8.03033 5.21967C7.73744 4.92678 7.26256 4.92678 6.96967 5.21967L4.71967 7.46967C4.42678 7.76256 4.42678 8.23744 4.71967 8.53033L6.96967 10.7803C7.26256 11.0732 7.73744 11.0732 8.03033 10.7803C8.32322 10.4874 8.32322 10.0126 8.03033 9.71967L7.06066 8.75H14.25C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25H7.06066L8.03033 6.28033Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.5 3.75C6.67157 3.75 6 4.42157 6 5.25L6 18.75C6 19.5784 6.67157 20.25 7.5 20.25H13.5C14.3284 20.25 15 19.5784 15 18.75V15C15 14.5858 15.3358 14.25 15.75 14.25C16.1642 14.25 16.5 14.5858 16.5 15V18.75C16.5 20.4069 15.1569 21.75 13.5 21.75H7.5C5.84315 21.75 4.5 20.4069 4.5 18.75L4.5 5.25C4.5 3.59315 5.84315 2.25 7.5 2.25L13.5 2.25C15.1569 2.25 16.5 3.59315 16.5 5.25V9C16.5 9.41421 16.1642 9.75 15.75 9.75C15.3358 9.75 15 9.41421 15 9V5.25C15 4.42157 14.3284 3.75 13.5 3.75L7.5 3.75ZM12.5303 8.46967C12.8232 8.76256 12.8232 9.23744 12.5303 9.53033L10.8107 11.25L21.75 11.25C22.1642 11.25 22.5 11.5858 22.5 12C22.5 12.4142 22.1642 12.75 21.75 12.75L10.8107 12.75L12.5303 14.4697C12.8232 14.7626 12.8232 15.2374 12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697L11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967Z"
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
@prop ariaLabel = 'arrow left end on rectangle'
@prop ...restProps
-->
