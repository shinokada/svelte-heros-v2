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
    ariaLabel = 'code bracket square',
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
      d="M14.25 9.75L16.5 12L14.25 14.25M9.75 14.25L7.5 12L9.75 9.75M6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.25 2C3.00736 2 2 3.00736 2 4.25V15.75C2 16.9926 3.00736 18 4.25 18H15.75C16.9926 18 18 16.9926 18 15.75V4.25C18 3.00736 16.9926 2 15.75 2H4.25ZM8.28033 8.28033C8.57322 7.98744 8.57322 7.51256 8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967L4.96967 9.46967C4.67678 9.76256 4.67678 10.2374 4.96967 10.5303L7.21967 12.7803C7.51256 13.0732 7.98744 13.0732 8.28033 12.7803C8.57322 12.4874 8.57322 12.0126 8.28033 11.7197L6.56066 10L8.28033 8.28033ZM12.7803 7.21967C12.4874 6.92678 12.0126 6.92678 11.7197 7.21967C11.4268 7.51256 11.4268 7.98744 11.7197 8.28033L13.4393 10L11.7197 11.7197C11.4268 12.0126 11.4268 12.4874 11.7197 12.7803C12.0126 13.0732 12.4874 13.0732 12.7803 12.7803L15.0303 10.5303C15.3232 10.2374 15.3232 9.76256 15.0303 9.46967L12.7803 7.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4ZM6.78033 5.96967C7.07322 6.26256 7.07322 6.73744 6.78033 7.03033L5.81066 8L6.78033 8.96967C7.07322 9.26256 7.07322 9.73744 6.78033 10.0303C6.48744 10.3232 6.01256 10.3232 5.71967 10.0303L4.21967 8.53033C3.92678 8.23744 3.92678 7.76256 4.21967 7.46967L5.71967 5.96967C6.01256 5.67678 6.48744 5.67678 6.78033 5.96967ZM9.21967 7.03033C8.92678 6.73744 8.92678 6.26256 9.21967 5.96967C9.51256 5.67678 9.98744 5.67678 10.2803 5.96967L11.7803 7.46967C12.0732 7.76256 12.0732 8.23744 11.7803 8.53033L10.2803 10.0303C9.98744 10.3232 9.51256 10.3232 9.21967 10.0303C8.92678 9.73744 8.92678 9.26256 9.21967 8.96967L10.1893 8L9.21967 7.03033Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM17.25 12C17.25 12.1989 17.171 12.3897 17.0303 12.5303L14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803C13.4268 14.4874 13.4268 14.0126 13.7197 13.7197L15.4393 12L13.7197 10.2803C13.4268 9.98744 13.4268 9.51256 13.7197 9.21967C14.0126 8.92678 14.4874 8.92678 14.7803 9.21967L17.0303 11.4697C17.171 11.6103 17.25 11.8011 17.25 12ZM6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303L9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803C10.5732 14.4874 10.5732 14.0126 10.2803 13.7197L8.56066 12L10.2803 10.2803C10.5732 9.98744 10.5732 9.51256 10.2803 9.21967C9.98744 8.92678 9.51256 8.92678 9.21967 9.21967L6.96967 11.4697Z"
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
@prop ariaLabel = 'code bracket square'
@prop ...restProps
-->
