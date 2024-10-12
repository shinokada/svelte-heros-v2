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
    ariaLabel = 'arrow right end on rectangle',
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
      d="M8.25 9V5.25C8.25 4.00736 9.25736 3 10.5 3L16.5 3C17.7426 3 18.75 4.00736 18.75 5.25L18.75 18.75C18.75 19.9926 17.7426 21 16.5 21H10.5C9.25736 21 8.25 19.9926 8.25 18.75V15M12 9L15 12M15 12L12 15M15 12L2.25 12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 4.25C17 3.00736 15.9926 2 14.75 2H9.25C8.00736 2 7 3.00736 7 4.25V6.25C7 6.66421 7.33579 7 7.75 7C8.16421 7 8.5 6.66421 8.5 6.25V4.25C8.5 3.83579 8.83579 3.5 9.25 3.5H14.75C15.1642 3.5 15.5 3.83579 15.5 4.25V15.75C15.5 16.1642 15.1642 16.5 14.75 16.5H9.25C8.83579 16.5 8.5 16.1642 8.5 15.75V13.75C8.5 13.3358 8.16421 13 7.75 13C7.33579 13 7 13.3358 7 13.75V15.75C7 16.9926 8.00736 18 9.25 18H14.75C15.9926 18 17 16.9926 17 15.75V4.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 10C1 9.58579 1.33579 9.25 1.75 9.25H11.2955L10.2483 8.30747C9.94039 8.03038 9.91543 7.55616 10.1925 7.24828C10.4696 6.94039 10.9438 6.91543 11.2517 7.19253L13.7517 9.44253C13.9098 9.58476 14 9.78738 14 10C14 10.2126 13.9098 10.4152 13.7517 10.5575L11.2517 12.8075C10.9438 13.0846 10.4696 13.0596 10.1925 12.7517C9.91543 12.4438 9.94039 11.9696 10.2483 11.6925L11.2955 10.75H1.75C1.33579 10.75 1 10.4142 1 10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M11.25 2C12.7688 2 14 3.23122 14 4.75V11.25C14 12.7688 12.7688 14 11.25 14H8.25C6.73122 14 5.5 12.7688 5.5 11.25V10.75C5.5 10.3358 5.83579 10 6.25 10C6.66421 10 7 10.3358 7 10.75V11.25C7 11.9404 7.55964 12.5 8.25 12.5H11.25C11.9404 12.5 12.5 11.9404 12.5 11.25V4.75C12.5 4.05964 11.9404 3.5 11.25 3.5H8.25C7.55964 3.5 7 4.05964 7 4.75V5.25C7 5.66421 6.66421 6 6.25 6C5.83579 6 5.5 5.66421 5.5 5.25V4.75C5.5 3.23122 6.73122 2 8.25 2H11.25Z"
      fill={color}
    />
    <path
      d="M7.96967 6.28033C7.67678 5.98744 7.67678 5.51256 7.96967 5.21967C8.26256 4.92678 8.73744 4.92678 9.03033 5.21967L11.2803 7.46967C11.5732 7.76256 11.5732 8.23744 11.2803 8.53033L9.03033 10.7803C8.73744 11.0732 8.26256 11.0732 7.96967 10.7803C7.67678 10.4874 7.67678 10.0126 7.96967 9.71967L8.93934 8.75H1.75C1.33579 8.75 1 8.41421 1 8C1 7.58579 1.33579 7.25 1.75 7.25H8.93934L7.96967 6.28033Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.5 3.75C17.3284 3.75 18 4.42157 18 5.25L18 18.75C18 19.5784 17.3284 20.25 16.5 20.25H10.5C9.67157 20.25 9 19.5784 9 18.75V15C9 14.5858 8.66421 14.25 8.25 14.25C7.83579 14.25 7.5 14.5858 7.5 15V18.75C7.5 20.4069 8.84315 21.75 10.5 21.75H16.5C18.1569 21.75 19.5 20.4069 19.5 18.75L19.5 5.25C19.5 3.59315 18.1569 2.25 16.5 2.25L10.5 2.25C8.84315 2.25 7.5 3.59315 7.5 5.25V9C7.5 9.41421 7.83578 9.75 8.25 9.75C8.66421 9.75 9 9.41421 9 9V5.25C9 4.42157 9.67157 3.75 10.5 3.75L16.5 3.75ZM11.4697 8.46967C11.1768 8.76256 11.1768 9.23744 11.4697 9.53033L13.1893 11.25L2.25 11.25C1.83578 11.25 1.5 11.5858 1.5 12C1.5 12.4142 1.83578 12.75 2.25 12.75L13.1893 12.75L11.4697 14.4697C11.1768 14.7626 11.1768 15.2374 11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697L12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967Z"
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
@prop ariaLabel = 'arrow right end on rectangle'
@prop ...restProps
-->
