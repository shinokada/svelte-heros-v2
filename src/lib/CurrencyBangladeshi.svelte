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
    ariaLabel = 'currency bangladeshi',
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
      d="M8.25 7.49997L8.66459 7.29267C9.16327 7.04333 9.75 7.40596 9.75 7.96349V10.5M9.75 10.5H15.75M9.75 10.5H8.25M9.75 10.5V15.9383C9.75 16.2921 9.91144 16.6351 10.2229 16.803C10.7518 17.0882 11.357 17.25 12 17.25C13.8142 17.25 15.3275 15.9617 15.675 14.25C15.7579 13.8414 15.412 13.5 14.995 13.5H14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM5.93934 5.49996C6.88428 4.55502 8.5 5.22426 8.5 6.56062V8H14.25C14.6642 8 15 8.33579 15 8.75C15 9.16421 14.6642 9.5 14.25 9.5H8.5V13.775C8.5 14.0711 8.64363 14.23 8.75926 14.2739C9.1439 14.4198 9.56172 14.5 10 14.5C11.3936 14.5 12.5986 13.6853 13.1616 12.5037H12.75C12.3358 12.5037 12 12.1679 12 11.7537C12 11.3395 12.3358 11.0037 12.75 11.0037H13.2872C13.7494 11.0037 14.1744 11.2149 14.4434 11.5599C14.7206 11.9155 14.8262 12.4125 14.6272 12.8974C13.8806 14.7166 12.091 16 10 16C9.37719 16 8.77933 15.8857 8.22739 15.6764C7.37603 15.3536 7 14.513 7 13.775V9.5H5.75C5.33579 9.5 5 9.16421 5 8.75C5 8.33579 5.33579 8 5.75 8H7V6.56062L6.78033 6.78029C6.48744 7.07319 6.01256 7.07319 5.71967 6.78029C5.42678 6.4874 5.42678 6.01253 5.71967 5.71963L5.93934 5.49996Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM5.25 4.70729C4.98617 4.80033 4.68069 4.74135 4.46967 4.53033C4.17678 4.23743 4.17678 3.76256 4.46967 3.46967C5.31117 2.62817 6.75 3.22415 6.75 4.41421V6H12.25C12.6642 6 13 6.33579 13 6.75C13 7.16421 12.6642 7.5 12.25 7.5H6.75V10.5977C6.75 11.1468 7.0454 11.4336 7.29476 11.4685C7.44315 11.4892 7.5951 11.5 7.75 11.5C8.67002 11.5 9.50155 11.1176 10.0933 10.5022H9.75C9.33579 10.5022 9 10.1664 9 9.75222C9 9.338 9.33579 9.00222 9.75 9.00222H11.4583C11.7078 9.00222 11.941 9.12628 12.0804 9.33321C12.2198 9.54014 12.2471 9.80284 12.1534 10.034C11.4486 11.772 9.74362 13 7.75 13C7.52539 13 7.304 12.9844 7.08697 12.954C5.82127 12.777 5.25 11.5784 5.25 10.5977V7.5H3.75C3.33579 7.5 3 7.16421 3 6.75C3 6.33579 3.33579 6 3.75 6H5.25V4.70729Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM10.5002 7.96345C10.5002 6.84838 9.3267 6.12314 8.32934 6.62181L7.91475 6.82911C7.54427 7.01435 7.3941 7.46485 7.57934 7.83534C7.76459 8.20582 8.21509 8.35599 8.58557 8.17075L9.00016 7.96345V9.74993H8.25016C7.83595 9.74993 7.50016 10.0857 7.50016 10.4999C7.50016 10.9141 7.83595 11.2499 8.25016 11.2499H9.00016V15.9382C9.00016 16.5014 9.25961 17.1356 9.8671 17.4631C10.5027 17.8058 11.2299 18 12.0002 18C14.1781 18 15.9932 16.4535 16.4102 14.3992C16.6086 13.4217 15.7739 12.75 14.9952 12.75H14.2502C13.836 12.75 13.5002 13.0857 13.5002 13.5C13.5002 13.9142 13.836 14.25 14.2502 14.25H14.9058C14.5731 15.544 13.3975 16.5 12.0002 16.5C11.4844 16.5 11.0012 16.3705 10.579 16.1428C10.5674 16.1366 10.5508 16.1239 10.5338 16.0916C10.5155 16.0567 10.5002 16.0036 10.5002 15.9382V11.2499H15.7502C16.1644 11.2499 16.5002 10.9141 16.5002 10.4999C16.5002 10.0857 16.1644 9.74993 15.7502 9.74993H10.5002V7.96345Z"
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
@prop ariaLabel = 'currency bangladeshi'
@prop ...restProps
-->
