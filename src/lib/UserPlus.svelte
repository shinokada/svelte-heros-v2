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
    ariaLabel = 'user plus',
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
      d="M18 7.5V10.5M18 10.5V13.5M18 10.5H21M18 10.5H15M12.75 6.375C12.75 8.23896 11.239 9.75 9.375 9.75C7.51104 9.75 6 8.23896 6 6.375C6 4.51104 7.51104 3 9.375 3C11.239 3 12.75 4.51104 12.75 6.375ZM3.00092 19.2343C3.00031 19.198 3 19.1615 3 19.125C3 15.6042 5.85418 12.75 9.375 12.75C12.8958 12.75 15.75 15.6042 15.75 19.125V19.1276C15.75 19.1632 15.7497 19.1988 15.7491 19.2343C13.8874 20.3552 11.7065 21 9.375 21C7.04353 21 4.86264 20.3552 3.00092 19.2343Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M10 5C10 6.65685 8.65685 8 7 8C5.34315 8 4 6.65685 4 5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5Z"
      fill={color}
    />
    <path
      d="M1.61528 16.428C1.21798 16.1736 0.987847 15.721 1.04605 15.2529C1.41416 12.292 3.93944 10 6.9999 10C10.0604 10 12.5856 12.2914 12.9537 15.2522C13.012 15.7203 12.7818 16.1729 12.3845 16.4273C10.8302 17.4225 8.98243 18 6.9999 18C5.01737 18 3.16959 17.4231 1.61528 16.428Z"
      fill={color}
    />
    <path
      d="M16.25 5.75C16.25 5.33579 15.9142 5 15.5 5C15.0858 5 14.75 5.33579 14.75 5.75V7.75H12.75C12.3358 7.75 12 8.08579 12 8.5C12 8.91421 12.3358 9.25 12.75 9.25H14.75V11.25C14.75 11.6642 15.0858 12 15.5 12C15.9142 12 16.25 11.6642 16.25 11.25V9.25H18.25C18.6642 9.25 19 8.91421 19 8.5C19 8.08579 18.6642 7.75 18.25 7.75H16.25V5.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8.5 4.5C8.5 5.88071 7.38071 7 6 7C4.61929 7 3.5 5.88071 3.5 4.5C3.5 3.11929 4.61929 2 6 2C7.38071 2 8.5 3.11929 8.5 4.5Z"
      fill={color}
    />
    <path
      d="M9.99951 13C10.5518 13 11.0099 12.5478 10.9008 12.0064C10.44 9.72096 8.42072 8 5.99951 8C3.57829 8 1.55903 9.72096 1.09823 12.0064C0.989075 12.5478 1.44722 13 1.99951 13H9.99951Z"
      fill={color}
    />
    <path
      d="M12.5 3.5C12.9142 3.5 13.25 3.83579 13.25 4.25V5.25H14.25C14.6642 5.25 15 5.58579 15 6C15 6.41421 14.6642 6.75 14.25 6.75H13.25V7.75C13.25 8.16421 12.9142 8.5 12.5 8.5C12.0858 8.5 11.75 8.16421 11.75 7.75V6.75H10.75C10.3358 6.75 10 6.41421 10 6C10 5.58579 10.3358 5.25 10.75 5.25H11.75V4.25C11.75 3.83579 12.0858 3.5 12.5 3.5Z"
      fill={color}
    />
  {:else}
    <path
      d="M5.25 6.375C5.25 4.09683 7.09683 2.25 9.375 2.25C11.6532 2.25 13.5 4.09683 13.5 6.375C13.5 8.65317 11.6532 10.5 9.375 10.5C7.09683 10.5 5.25 8.65317 5.25 6.375Z"
      fill={color}
    />
    <path
      d="M2.25 19.125C2.25 15.19 5.43997 12 9.375 12C13.31 12 16.5 15.19 16.5 19.125V19.1276C16.5 19.1674 16.4996 19.2074 16.499 19.2469C16.4946 19.5054 16.3574 19.7435 16.1359 19.8768C14.1607 21.0661 11.8466 21.75 9.375 21.75C6.90343 21.75 4.5893 21.0661 2.61406 19.8768C2.39256 19.7435 2.25537 19.5054 2.25103 19.2469C2.25034 19.2064 2.25 19.1657 2.25 19.125Z"
      fill={color}
    />
    <path
      d="M18.75 7.5C18.75 7.08579 18.4142 6.75 18 6.75C17.5858 6.75 17.25 7.08579 17.25 7.5V9.75H15C14.5858 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 14.5858 11.25 15 11.25H17.25V13.5C17.25 13.9142 17.5858 14.25 18 14.25C18.4142 14.25 18.75 13.9142 18.75 13.5V11.25H21C21.4142 11.25 21.75 10.9142 21.75 10.5C21.75 10.0858 21.4142 9.75 21 9.75H18.75V7.5Z"
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
@prop ariaLabel = 'user plus'
@prop ...restProps
-->
