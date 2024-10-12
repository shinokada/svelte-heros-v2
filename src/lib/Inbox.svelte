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
    ariaLabel = 'inbox',
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
      d="M2.25 13.5H6.10942C6.96166 13.5 7.74075 13.9815 8.12188 14.7438L8.37812 15.2562C8.75925 16.0185 9.53834 16.5 10.3906 16.5H13.6094C14.4617 16.5 15.2408 16.0185 15.6219 15.2562L15.8781 14.7438C16.2592 13.9815 17.0383 13.5 17.8906 13.5H21.75M2.25 13.8383V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V13.8383C21.75 13.614 21.7165 13.391 21.6505 13.1766L19.2387 5.33831C18.9482 4.39423 18.076 3.75 17.0882 3.75H6.91179C5.92403 3.75 5.05178 4.39423 4.76129 5.33831L2.3495 13.1766C2.28354 13.391 2.25 13.614 2.25 13.8383Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 11.2708C1 11.0237 1.03331 10.7777 1.09902 10.5395L2.622 5.0187C2.95099 3.82611 4.03584 3 5.27298 3H14.727C15.9642 3 17.049 3.8261 17.378 5.0187L18.901 10.5395C18.9667 10.7777 19 11.0237 19 11.2708V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V11.2708ZM4.06799 5.41759C4.21753 4.8755 4.71065 4.5 5.27298 4.5H14.727C15.2894 4.5 15.7825 4.8755 15.932 5.41759L17.455 10.9384C17.4606 10.9588 17.4657 10.9794 17.4703 11H14C13.6471 11 13.3203 11.186 13.1401 11.4895L12.5339 12.5105C12.3537 12.814 12.0269 13 11.674 13H8.23607C7.8573 13 7.51103 12.786 7.34164 12.4472L6.89443 11.5528C6.72504 11.214 6.37877 11 6 11H2.52969C2.53427 10.9794 2.53938 10.9588 2.54501 10.9384L4.06799 5.41759Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.78373 3C3.85012 3 3.01349 3.57656 2.68113 4.44901L1.1474 8.47505C1.04995 8.73086 1 9.0023 1 9.27604V10.75C1 11.9926 2.00736 13 3.25 13H12.75C13.9926 13 15 11.9926 15 10.75V9.27604C15 9.0023 14.95 8.73086 14.8526 8.47505L13.3189 4.44901C12.9865 3.57656 12.1499 3 11.2163 3H4.78373ZM4.08286 4.983C4.19365 4.69219 4.47252 4.5 4.78373 4.5H11.2163C11.5275 4.5 11.8063 4.69219 11.9171 4.983L13.4474 9H11.0352C10.7008 9 10.3886 9.1671 10.2031 9.4453L9.79687 10.0547C9.6114 10.3329 9.29917 10.5 8.96482 10.5H7.03518C6.70083 10.5 6.3886 10.3329 6.20313 10.0547L5.79687 9.4453C5.6114 9.1671 5.29917 9 4.96482 9H2.55258L4.08286 4.983Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.91179 3C5.59478 3 4.43177 3.85897 4.04446 5.11774L1.63266 12.9561C1.54472 13.2419 1.5 13.5393 1.5 13.8383V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V13.8383C22.5 13.5393 22.4553 13.2419 22.3673 12.9561L19.9555 5.11774C19.5682 3.85897 18.4052 3 17.0882 3H6.91179ZM20.7345 12.75L18.5219 5.55887C18.3282 4.92948 17.7467 4.5 17.0882 4.5H6.91179C6.25329 4.5 5.67178 4.92948 5.47812 5.55887L3.26547 12.75H6.10942C7.24574 12.75 8.28453 13.392 8.79271 14.4084L9.04894 14.9208C9.30302 15.429 9.82242 15.75 10.3906 15.75H13.6094C14.1776 15.75 14.697 15.429 14.9511 14.9208L15.2073 14.4084C15.7155 13.392 16.7543 12.75 17.8906 12.75H20.7345Z"
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
@prop ariaLabel = 'inbox'
@prop ...restProps
-->
