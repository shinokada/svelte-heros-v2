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
    ariaLabel = 'user minus',
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
      d="M22 10.5H16M13.75 6.375C13.75 8.23896 12.239 9.75 10.375 9.75C8.51104 9.75 7 8.23896 7 6.375C7 4.51104 8.51104 3 10.375 3C12.239 3 13.75 4.51104 13.75 6.375ZM4.00092 19.2343C4.00031 19.198 4 19.1615 4 19.125C4 15.6042 6.85418 12.75 10.375 12.75C13.8958 12.75 16.75 15.6042 16.75 19.125V19.1276C16.75 19.1632 16.7497 19.1988 16.7491 19.2343C14.8874 20.3552 12.7065 21 10.375 21C8.04353 21 5.86264 20.3552 4.00092 19.2343Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z"
      fill={color}
    />
    <path
      d="M2.04605 15.2529C1.98785 15.721 2.21798 16.1736 2.61528 16.428C4.16959 17.4231 6.01737 18 7.9999 18C9.98243 18 11.8302 17.4225 13.3845 16.4273C13.7818 16.1729 14.012 15.7203 13.9537 15.2522C13.5856 12.2914 11.0604 10 7.9999 10C4.93944 10 2.41416 12.292 2.04605 15.2529Z"
      fill={color}
    />
    <path
      d="M12.75 7.75C12.3358 7.75 12 8.08579 12 8.5C12 8.91421 12.3358 9.25 12.75 9.25H18.25C18.6642 9.25 19 8.91421 19 8.5C19 8.08579 18.6642 7.75 18.25 7.75H12.75Z"
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
      d="M10.75 5.25C10.3358 5.25 10 5.58579 10 6C10 6.41421 10.3358 6.75 10.75 6.75H14.25C14.6642 6.75 15 6.41421 15 6C15 5.58579 14.6642 5.25 14.25 5.25H10.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M10.375 2.25C8.09683 2.25 6.25 4.09683 6.25 6.375C6.25 8.65317 8.09683 10.5 10.375 10.5C12.6532 10.5 14.5 8.65317 14.5 6.375C14.5 4.09683 12.6532 2.25 10.375 2.25Z"
      fill={color}
    />
    <path
      d="M10.375 12C6.43997 12 3.25 15.19 3.25 19.125C3.25 19.1657 3.25034 19.2064 3.25103 19.2469C3.25537 19.5054 3.39256 19.7435 3.61406 19.8768C5.5893 21.0661 7.90343 21.75 10.375 21.75C12.8466 21.75 15.1607 21.0661 17.1359 19.8768C17.3574 19.7435 17.4946 19.5054 17.499 19.2469C17.4996 19.2074 17.5 19.1674 17.5 19.1276V19.125C17.5 15.19 14.31 12 10.375 12Z"
      fill={color}
    />
    <path
      d="M16 9.75C15.5858 9.75 15.25 10.0858 15.25 10.5C15.25 10.9142 15.5858 11.25 16 11.25H22C22.4142 11.25 22.75 10.9142 22.75 10.5C22.75 10.0858 22.4142 9.75 22 9.75H16Z"
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
@prop ariaLabel = 'user minus'
@prop ...restProps
-->
