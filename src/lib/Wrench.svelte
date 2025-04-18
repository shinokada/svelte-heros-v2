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
    ariaLabel = 'wrench',
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
      d="M21.75 6.75C21.75 9.23528 19.7353 11.25 17.25 11.25C17.1206 11.25 16.9925 11.2445 16.8659 11.2338C15.7904 11.1429 14.6016 11.3052 13.9155 12.1383L6.76432 20.8219C6.28037 21.4096 5.55897 21.75 4.79769 21.75C3.39064 21.75 2.25 20.6094 2.25 19.2023C2.25 18.441 2.59044 17.7196 3.1781 17.2357L11.8617 10.0845C12.6948 9.39841 12.8571 8.20956 12.7662 7.13411C12.7555 7.00749 12.75 6.87938 12.75 6.75C12.75 4.26472 14.7647 2.25 17.25 2.25C17.9103 2.25 18.5375 2.39223 19.1024 2.64774L15.8262 5.92397C16.0823 7.03963 16.9605 7.91785 18.0762 8.17397L21.3524 4.89779C21.6078 5.46268 21.75 6.08973 21.75 6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.86723 19.125H4.87473V19.1325H4.86723V19.125Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 5.5C19 7.98528 16.9853 10 14.5 10C14.4022 10 14.3051 9.99688 14.2088 9.99073C13.3358 9.93497 12.4014 10.1183 11.8414 10.7903L5.81681 18.0198C5.29925 18.6409 4.53256 19 3.7241 19C2.21962 19 1 17.7804 1 16.2759C1 15.4674 1.3591 14.7008 1.98017 14.1832L9.20974 8.15855C9.88173 7.59855 10.065 6.66418 10.0093 5.79122C10.0031 5.69494 10 5.59783 10 5.5C10 3.01472 12.0147 1 14.5 1C14.9823 1 15.4469 1.07588 15.8825 1.21636C16.2067 1.32092 16.2735 1.72672 16.0327 1.9676L13.3398 4.66042C13.2094 4.79088 13.1582 4.98403 13.2292 5.15431C13.5334 5.88351 14.1172 6.46695 14.8466 6.77074C15.0168 6.84163 15.2098 6.79041 15.3402 6.66002L18.0325 3.96772C18.2734 3.72683 18.6792 3.79367 18.7838 4.11791C18.9242 4.55338 19 5.01783 19 5.5ZM4 17C4.55228 17 5 16.5523 5 16C5 15.4477 4.55228 15 4 15C3.44772 15 3 15.4477 3 16C3 16.5523 3.44772 17 4 17Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 8C13.433 8 15 6.433 15 4.5C15 4.16126 14.9519 3.83377 14.8621 3.52398C14.768 3.19913 14.365 3.13464 14.126 3.37385L12.0993 5.40148C11.921 5.57986 11.6367 5.59872 11.4459 5.43382C11.1321 5.16268 10.8384 4.86896 10.5672 4.55521C10.4024 4.36442 10.4212 4.08015 10.5995 3.90184L12.6271 1.87425C12.8662 1.63516 12.8017 1.23238 12.477 1.13817C12.1669 1.04822 11.8391 1 11.5 1C9.567 1 8 2.567 8 4.5C8 4.52183 8.0002 4.54361 8.0006 4.56535C8.01871 5.55435 7.86784 6.65835 7.08704 7.26564L1.77778 11.3951C1.28703 11.7768 1 12.3636 1 12.9853C1 14.098 1.90199 15 3.01466 15C3.63637 15 4.22325 14.713 4.60494 14.2222L8.73436 8.91296C9.34165 8.13216 10.4457 7.98129 11.4347 7.9994C11.4564 7.9998 11.4782 8 11.5 8ZM3 13.75C3.41421 13.75 3.75 13.4142 3.75 13C3.75 12.5858 3.41421 12.25 3 12.25C2.58579 12.25 2.25 12.5858 2.25 13C2.25 13.4142 2.58579 13.75 3 13.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6.75C12 3.85051 14.3505 1.5 17.25 1.5C17.7791 1.5 18.2913 1.57852 18.7747 1.72505C19.027 1.80151 19.2206 2.00479 19.2847 2.26048C19.3488 2.51618 19.2739 2.78674 19.0875 2.97313L15.7688 6.29183C15.8305 6.76741 16.0438 7.22581 16.409 7.59099C16.7742 7.95617 17.2326 8.16947 17.7082 8.23117L21.0269 4.91247C21.2133 4.72608 21.4838 4.65122 21.7395 4.7153C21.9952 4.77938 22.1985 4.97299 22.275 5.22526C22.4215 5.7087 22.5 6.22086 22.5 6.75C22.5 9.64949 20.1495 12 17.25 12C17.0995 12 16.9503 11.9936 16.8027 11.9812C15.7855 11.8952 14.9338 12.0816 14.4944 12.6151L7.34327 21.2987C6.71684 22.0593 5.78308 22.5 4.79769 22.5C2.97642 22.5 1.5 21.0236 1.5 19.2023C1.5 18.2169 1.94067 17.2832 2.70132 16.6567L11.3849 9.50557C11.9184 9.06623 12.1048 8.21453 12.0188 7.19728C12.0064 7.04968 12 6.9005 12 6.75ZM4.11723 19.125C4.11723 18.7108 4.45302 18.375 4.86723 18.375H4.87473C5.28895 18.375 5.62473 18.7108 5.62473 19.125V19.1325C5.62473 19.5468 5.28895 19.8825 4.87473 19.8825H4.86723C4.45302 19.8825 4.11723 19.5468 4.11723 19.1325V19.125Z"
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
@prop ariaLabel = 'wrench'
@prop ...restProps
-->
