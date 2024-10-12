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
    ariaLabel = 'circle stack',
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
      d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 1C13.866 1 17 2.79086 17 5C17 7.20914 13.866 9 10 9C6.13401 9 3 7.20914 3 5C3 2.79086 6.13401 1 10 1ZM15.694 9.13079C16.1576 8.86588 16.6044 8.54736 17 8.17775V10C17 12.2091 13.866 14 10 14C6.13401 14 3 12.2091 3 10V8.17775C3.3956 8.54736 3.84244 8.86588 4.30604 9.13079C5.83803 10.0062 7.85433 10.5 10 10.5C12.1457 10.5 14.162 10.0062 15.694 9.13079ZM3 13.1777V15C3 17.2091 6.13401 19 10 19C13.866 19 17 17.2091 17 15V13.1777C16.6044 13.5474 16.1576 13.8659 15.694 14.1308C14.162 15.0062 12.1457 15.5 10 15.5C7.85433 15.5 5.83803 15.0062 4.30604 14.1308C3.84244 13.8659 3.3956 13.5474 3 13.1777Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8 7C11.3137 7 14 5.65685 14 4C14 2.34315 11.3137 1 8 1C4.68629 1 2 2.34315 2 4C2 5.65685 4.68629 7 8 7Z"
      fill={color}
    />
    <path
      d="M8 8.5002C9.83923 8.5002 11.5785 8.13064 12.9135 7.46316C13.2795 7.28013 13.6539 7.0526 14 6.7793V8.0002C14 9.65705 11.3137 11.0002 8 11.0002C4.68629 11.0002 2 9.65705 2 8.0002V6.7793C2.34614 7.0526 2.72049 7.28013 3.08654 7.46316C4.4215 8.13064 6.16077 8.5002 8 8.5002Z"
      fill={color}
    />
    <path
      d="M8 12.5002C9.83923 12.5002 11.5785 12.1306 12.9135 11.4632C13.2795 11.2801 13.6539 11.0526 14 10.7793V12.0002C14 13.6571 11.3137 15.0002 8 15.0002C4.68629 15.0002 2 13.6571 2 12.0002V10.7793C2.34614 11.0526 2.72049 11.2801 3.08654 11.4632C4.4215 12.1306 6.16077 12.5002 8 12.5002Z"
      fill={color}
    />
  {:else}
    <path
      d="M21 6.375C21 9.06739 16.9706 11.25 12 11.25C7.02944 11.25 3 9.06739 3 6.375C3 3.68261 7.02944 1.5 12 1.5C16.9706 1.5 21 3.68261 21 6.375Z"
      fill={color}
    />
    <path
      d="M12 12.75C14.6852 12.75 17.1905 12.1637 19.0784 11.1411C19.7684 10.7673 20.4248 10.3043 20.9747 9.75674C20.9915 9.87831 21 10.0011 21 10.125C21 12.8174 16.9706 15 12 15C7.02944 15 3 12.8174 3 10.125C3 10.0011 3.00853 9.8783 3.02529 9.75674C3.57523 10.3043 4.23162 10.7673 4.92161 11.1411C6.80949 12.1637 9.31481 12.75 12 12.75Z"
      fill={color}
    />
    <path
      d="M12 16.5C14.6852 16.5 17.1905 15.9137 19.0784 14.8911C19.7684 14.5173 20.4248 14.0543 20.9747 13.5067C20.9915 13.6283 21 13.7511 21 13.875C21 16.5674 16.9706 18.75 12 18.75C7.02944 18.75 3 16.5674 3 13.875C3 13.7511 3.00853 13.6283 3.02529 13.5067C3.57523 14.0543 4.23162 14.5173 4.92161 14.8911C6.80949 15.9137 9.31481 16.5 12 16.5Z"
      fill={color}
    />
    <path
      d="M12 20.25C14.6852 20.25 17.1905 19.6637 19.0784 18.6411C19.7684 18.2673 20.4248 17.8043 20.9747 17.2567C20.9915 17.3783 21 17.5011 21 17.625C21 20.3174 16.9706 22.5 12 22.5C7.02944 22.5 3 20.3174 3 17.625C3 17.5011 3.00853 17.3783 3.02529 17.2567C3.57523 17.8043 4.23162 18.2673 4.92161 18.6411C6.80949 19.6637 9.31481 20.25 12 20.25Z"
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
@prop ariaLabel = 'circle stack'
@prop ...restProps
-->
