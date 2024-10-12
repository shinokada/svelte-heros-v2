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
    ariaLabel = 'currency rupee',
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
      d="M15 8.25L9 8.25M15 11.25H9M12 17.25L9 14.25H10.5C12.1569 14.25 13.5 12.9069 13.5 11.25C13.5 9.59315 12.1569 8.25 10.5 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.00002 5.75C6.00002 5.33579 6.33581 5 6.75002 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H11.1227C11.5229 6.99922 11.8059 7.59647 11.9298 8.25H13.25C13.6642 8.25 14 8.58579 14 9C14 9.41421 13.6642 9.75 13.25 9.75H11.9298C11.6108 11.4316 10.2393 12.7405 8.52636 12.9657L10.2804 14.7197C10.5732 15.0126 10.5732 15.4874 10.2804 15.7803C9.98746 16.0732 9.51259 16.0732 9.21969 15.7803L6.21969 12.7803C6.00519 12.5658 5.94103 12.2432 6.05711 11.963C6.1732 11.6827 6.44668 11.5 6.75002 11.5H8.00002C9.11943 11.5 10.067 10.7643 10.3856 9.75H6.75C6.33579 9.75 6 9.41421 6 9C6 8.58579 6.33579 8.25 6.75 8.25H10.3856C10.067 7.23572 9.11943 6.5 8.00002 6.5H6.75002C6.33581 6.5 6.00002 6.16421 6.00002 5.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.75 4C4.33579 4 4 4.33579 4 4.75C4 5.16421 4.33579 5.5 4.75 5.5H6.50002C7.19812 5.5 7.80075 5.90876 8.08161 6.5H4.75C4.33579 6.5 4 6.83579 4 7.25C4 7.66421 4.33579 8 4.75 8H8.08161C7.80075 8.59124 7.19812 9 6.50002 9H4.75002C4.44668 9 4.1732 9.18273 4.05711 9.46299C3.94103 9.74324 4.00519 10.0658 4.21969 10.2803L6.71969 12.7803C7.01259 13.0732 7.48746 13.0732 7.78035 12.7803C8.07325 12.4874 8.07325 12.0126 7.78035 11.7197L6.56014 10.4995C8.0703 10.4721 9.3289 9.41462 9.66306 8H11.25C11.6642 8 12 7.66421 12 7.25C12 6.83579 11.6642 6.5 11.25 6.5H9.66306C9.57797 6.13981 9.43295 5.80277 9.23911 5.5H11.25C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4H4.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 8.58579 9 9 9H10.5C11.4797 9 12.3131 9.62611 12.622 10.5H9C8.58579 10.5 8.25 10.8358 8.25 11.25C8.25 11.6642 8.58579 12 9 12H12.622C12.3131 12.8739 11.4797 13.5 10.5 13.5H9C8.69665 13.5 8.42318 13.6827 8.30709 13.963C8.191 14.2432 8.25517 14.5658 8.46967 14.7803L11.4697 17.7803C11.7626 18.0732 12.2374 18.0732 12.5303 17.7803C12.8232 17.4874 12.8232 17.0126 12.5303 16.7197L10.7989 14.9883C12.4785 14.8558 13.8468 13.6168 14.175 12H15C15.4142 12 15.75 11.6642 15.75 11.25C15.75 10.8358 15.4142 10.5 15 10.5H14.175C14.0625 9.94584 13.8278 9.43606 13.5003 9H15C15.4142 9 15.75 8.66421 15.75 8.25C15.75 7.83579 15.4142 7.5 15 7.5H9Z"
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
@prop ariaLabel = 'currency rupee'
@prop ...restProps
-->
