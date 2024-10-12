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
    ariaLabel = 'folder open',
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
      d="M3.74999 9.77602C3.86203 9.7589 3.97698 9.75 4.09426 9.75H19.9057C20.023 9.75 20.138 9.7589 20.25 9.77602M3.74999 9.77602C2.55399 9.9588 1.68982 11.0788 1.86688 12.3182L2.72402 18.3182C2.88237 19.4267 3.83169 20.25 4.95141 20.25H19.0486C20.1683 20.25 21.1176 19.4267 21.276 18.3182L22.1331 12.3182C22.3102 11.0788 21.446 9.9588 20.25 9.77602M3.74999 9.77602V6C3.74999 4.75736 4.75735 3.75 5.99999 3.75H9.87867C10.2765 3.75 10.658 3.90804 10.9393 4.18934L13.0607 6.31066C13.342 6.59197 13.7235 6.75 14.1213 6.75H18C19.2426 6.75 20.25 7.75736 20.25 9V9.77602"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.75 3C3.7835 3 3 3.7835 3 4.75V7.50159C3.03443 7.50053 3.06902 7.5 3.10378 7.5H16.8959C16.9307 7.5 16.9654 7.50054 17 7.50161V6.75C17 5.7835 16.2165 5 15.25 5H11.4142C11.3479 5 11.2843 4.97366 11.2374 4.92678L9.82322 3.51256C9.49504 3.18437 9.04992 3 8.58579 3H4.75Z"
      fill={color}
    />
    <path
      d="M3.10373 9C1.92632 9 1.08486 10.1393 1.43112 11.2647L2.81573 15.7647C3.04167 16.4989 3.72009 17 4.48835 17H15.5112C16.2795 17 16.9579 16.4989 17.1838 15.7647L18.5684 11.2647C18.9147 10.1393 18.0732 9 16.8958 9H3.10373Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3 3.5C3 2.67157 3.67157 2 4.5 2H6.37868C6.7765 2 7.15804 2.15804 7.43934 2.43934L8.56066 3.56066C8.84196 3.84197 9.2235 4 9.62132 4H11.5C12.3284 4 13 4.67157 13 5.5V6.5H3V3.5Z"
      fill={color}
    />
    <path
      d="M3.08123 8C2.05739 8 1.33444 9.00305 1.6582 9.97434L2.6582 12.9743C2.86237 13.5869 3.43558 14 4.08123 14H11.919C12.5646 14 13.1378 13.5869 13.342 12.9743L14.342 9.97434C14.6657 9.00305 13.9428 8 12.919 8H3.08123Z"
      fill={color}
    />
  {:else}
    <path
      d="M19.9057 9C20.2877 9 20.6549 9.05664 21 9.16156V9C21 7.34315 19.6569 6 18 6H14.1213C13.9224 6 13.7316 5.92098 13.591 5.78033L11.4697 3.65901C11.0477 3.23705 10.4754 3 9.87868 3H6C4.34315 3 3 4.34315 3 6V9.16152C3.34508 9.05663 3.71223 9 4.09421 9H19.9057Z"
      fill={color}
    />
    <path
      d="M4.0943 10.5C2.72506 10.5 1.67327 11.7127 1.86691 13.0682L2.72405 19.0682C2.8824 20.1767 3.83173 21 4.95144 21H19.0486C20.1683 21 21.1176 20.1767 21.276 19.0682L22.1331 13.0682C22.3268 11.7127 21.275 10.5 19.9058 10.5H4.0943Z"
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
@prop ariaLabel = 'folder open'
@prop ...restProps
-->
