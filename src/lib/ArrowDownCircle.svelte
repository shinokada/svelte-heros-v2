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
    ariaLabel = 'arrow down circle',
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
      d="M9 12.75L12 15.75M12 15.75L15 12.75M12 15.75L12 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10.75 6.75C10.75 6.33579 10.4142 6 10 6C9.58579 6 9.25 6.33579 9.25 6.75V11.3401L7.29959 9.23966C7.01774 8.93613 6.54319 8.91855 6.23966 9.20041C5.93613 9.48226 5.91855 9.95681 6.20041 10.2603L9.45041 13.7603C9.59231 13.9132 9.79145 14 10 14C10.2086 14 10.4077 13.9132 10.5496 13.7603L13.7996 10.2603C14.0814 9.95681 14.0639 9.48226 13.7603 9.20041C13.4568 8.91855 12.9823 8.93613 12.7004 9.23966L10.75 11.3401V6.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75V9.43934L6.03033 8.21967C5.73744 7.92678 5.26256 7.92678 4.96967 8.21967C4.67678 8.51256 4.67678 8.98744 4.96967 9.28033L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L11.0303 9.28033C11.3232 8.98744 11.3232 8.51256 11.0303 8.21967C10.7374 7.92678 10.2626 7.92678 9.96967 8.21967L8.75 9.43934V4.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803L15.5303 13.2803C15.8232 12.9874 15.8232 12.5126 15.5303 12.2197C15.2374 11.9268 14.7626 11.9268 14.4697 12.2197L12.75 13.9393L12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25L11.25 13.9393L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L11.4697 16.2803Z"
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
@prop ariaLabel = 'arrow down circle'
@prop ...restProps
-->
