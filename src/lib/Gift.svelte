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
    ariaLabel = 'gift',
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
      d="M21 11.25V19.5C21 20.3284 20.3284 21 19.5 21H5.25C4.42157 21 3.75 20.3284 3.75 19.5V11.25M12 4.875C12 3.42525 10.8247 2.25 9.375 2.25C7.92525 2.25 6.75 3.42525 6.75 4.875C6.75 6.32475 7.92525 7.5 9.375 7.5C10.1095 7.5 12 7.5 12 7.5M12 4.875C12 5.59024 12 7.5 12 7.5M12 4.875C12 3.42525 13.1753 2.25 14.625 2.25C16.0747 2.25 17.25 3.42525 17.25 4.875C17.25 6.32475 16.0747 7.5 14.625 7.5C13.8905 7.5 12 7.5 12 7.5M12 7.5V21M3.375 11.25H21.375C21.9963 11.25 22.5 10.7463 22.5 10.125V8.625C22.5 8.00368 21.9963 7.5 21.375 7.5H3.375C2.75368 7.5 2.25 8.00368 2.25 8.625V10.125C2.25 10.7463 2.75368 11.25 3.375 11.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.0002 6C14.314 5.58217 14.5 5.0628 14.5 4.5C14.5 3.11929 13.3807 2 12 2C11.1822 2 10.4561 2.39267 10 2.99976C9.54389 2.39267 8.8178 2 8 2C6.61929 2 5.5 3.11929 5.5 4.5C5.5 5.0628 5.68597 5.58217 5.99982 6H3.25C2.55964 6 2 6.55964 2 7.25V7.75C2 8.44036 2.55964 9 3.25 9H9.25V6H10.75V9H16.75C17.4404 9 18 8.44036 18 7.75V7.25C18 6.55964 17.4404 6 16.75 6H14.0002ZM13 4.5C13 5.05228 12.5523 5.5 12 5.5H11L11 4.5C11 3.94772 11.4477 3.5 12 3.5C12.5523 3.5 13 3.94772 13 4.5ZM7 4.5C7 5.05228 7.44772 5.5 8 5.5H9V4.5C9 3.94772 8.55228 3.5 8 3.5C7.44772 3.5 7 3.94772 7 4.5Z"
      fill={color}
    /> <path d="M9.25 10.5H3V15.25C3 16.7688 4.23122 18 5.75 18H9.25V10.5Z" fill={color} />
    <path d="M10.75 18V10.5H17V15.25C17 16.7688 15.7688 18 14.25 18H10.75Z" fill={color} />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 3.5C3.75 4.0628 3.93597 4.58217 4.24982 5H2C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7H7.25V5H8.75V7H14C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5H11.7492C12.0631 4.58217 12.249 4.0628 12.249 3.5C12.249 2.11929 11.1297 1 9.74902 1C9.06791 1 8.45041 1.27238 7.99951 1.71416C7.54862 1.27238 6.93112 1 6.25 1C4.86929 1 3.75 2.11929 3.75 3.5ZM7.24902 3.5L7.2493 3.46229C7.22947 2.92748 6.78966 2.5 6.25 2.5C5.69772 2.5 5.25 2.94772 5.25 3.5C5.25 4.05228 5.69772 4.5 6.25 4.5H7.24936L7.24902 3.5ZM9.74902 2.5C9.20937 2.5 8.76955 2.92748 8.74972 3.46229L8.75 3.5V4.5H9.74902C10.3013 4.5 10.749 4.05228 10.749 3.5C10.749 2.94772 10.3013 2.5 9.74902 2.5Z"
      fill={color}
    /> <path d="M7.25 8.5H2V12C2 13.1046 2.89543 14 4 14H7.25V8.5Z" fill={color} />
    <path d="M8.75 14V8.5H14V12C14 13.1046 13.1046 14 12 14H8.75Z" fill={color} />
  {:else}
    <path
      d="M9.375 3C8.33947 3 7.5 3.83947 7.5 4.875C7.5 5.91053 8.33947 6.75 9.375 6.75H11.25V11.25H3.375C2.33947 11.25 1.5 10.4105 1.5 9.375V8.625C1.5 7.58947 2.33947 6.75 3.375 6.75H6.56833C6.20935 6.21371 6 5.5688 6 4.875C6 3.01104 7.51104 1.5 9.375 1.5C10.4352 1.5 11.3813 1.98888 12 2.7535C12.6187 1.98888 13.5648 1.5 14.625 1.5C16.489 1.5 18 3.01104 18 4.875C18 5.5688 17.7906 6.21371 17.4317 6.75H21.375C22.4105 6.75 23.25 7.58947 23.25 8.625V9.375C23.25 10.4105 22.4105 11.25 21.375 11.25H12.75V6.75H14.625C15.6605 6.75 16.5 5.91053 16.5 4.875C16.5 3.83947 15.6605 3 14.625 3C13.5895 3 12.75 3.83947 12.75 4.875V6.75H11.25V4.875C11.25 3.83947 10.4105 3 9.375 3Z"
      fill={color}
    /> <path d="M11.25 12.75H3V19.5C3 20.7426 4.00736 21.75 5.25 21.75H11.25V12.75Z" fill={color} />
    <path
      d="M12.75 12.75V21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V12.75H12.75Z"
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
@prop ariaLabel = 'gift'
@prop ...restProps
-->
