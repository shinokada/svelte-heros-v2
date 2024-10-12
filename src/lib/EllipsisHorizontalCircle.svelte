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
    ariaLabel = 'ellipsis horizontal circle',
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
      d="M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11ZM7 10C7 10.5523 6.55228 11 6 11C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9C6.55228 9 7 9.44772 7 10ZM14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM5.5 8C5.5 8.55228 5.05228 9 4.5 9C3.94772 9 3.5 8.55228 3.5 8C3.5 7.44772 3.94772 7 4.5 7C5.05228 7 5.5 7.44772 5.5 8ZM11.5 9C12.0523 9 12.5 8.55228 12.5 8C12.5 7.44772 12.0523 7 11.5 7C10.9477 7 10.5 7.44772 10.5 8C10.5 8.55228 10.9477 9 11.5 9Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875ZM15.375 12C15.375 11.3787 15.8787 10.875 16.5 10.875C17.1213 10.875 17.625 11.3787 17.625 12C17.625 12.6213 17.1213 13.125 16.5 13.125C15.8787 13.125 15.375 12.6213 15.375 12ZM7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875Z"
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
@prop ariaLabel = 'ellipsis horizontal circle'
@prop ...restProps
-->
