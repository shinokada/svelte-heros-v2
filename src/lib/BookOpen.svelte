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
    ariaLabel = 'book open',
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
      d="M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917M12 6.04168V20.2917"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M10.75 16.8195C11.9579 15.9871 13.4212 15.5 15 15.5C15.7103 15.5 16.3964 15.5985 17.0459 15.7822C17.272 15.8462 17.515 15.8005 17.7024 15.6587C17.8899 15.5169 18 15.2955 18 15.0605V4.06055C18 3.72495 17.7771 3.4302 17.4541 3.33886C16.6731 3.11796 15.8497 3 15 3C13.4636 3 12.016 3.38549 10.75 4.06487V16.8195Z"
      fill={color}
    />
    <path
      d="M9.25 4.06487C7.98396 3.38549 6.5364 3 5 3C4.15029 3 3.32689 3.11796 2.54588 3.33886C2.22295 3.4302 2 3.72495 2 4.06055V15.0605C2 15.2955 2.11014 15.5169 2.29756 15.6587C2.48497 15.8005 2.728 15.8462 2.95412 15.7822C3.60361 15.5985 4.28967 15.5 5 15.5C6.57884 15.5 8.04208 15.9871 9.25 16.8195V4.06487Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M7.25 3.68772C6.25693 3.24568 5.15715 3 4 3C3.44413 3 2.9015 3.05669 2.37757 3.16462C2.15412 3.21064 2 3.4115 2 3.63964V11.6344C2 11.9794 2.34235 12.2215 2.67903 12.1459C3.10405 12.0504 3.54614 12 4 12C5.1977 12 6.31344 12.3509 7.25 12.9556V3.68772Z"
      fill={color}
    />
    <path
      d="M8.75 12.9556C9.68656 12.3509 10.8023 12 12 12C12.4539 12 12.8959 12.0504 13.321 12.1459C13.6577 12.2215 14 11.9794 14 11.6344V3.63964C14 3.4115 13.8459 3.21064 13.6224 3.16462C13.0985 3.05669 12.5559 3 12 3C10.8428 3 9.74308 3.24568 8.75 3.68772V12.9556Z"
      fill={color}
    />
  {:else}
    <path
      d="M11.25 4.53286C9.73455 3.56279 7.93246 3 6 3C4.86178 3 3.76756 3.19535 2.75007 3.55499C2.45037 3.66091 2.25 3.94425 2.25 4.26212V18.5121C2.25 18.7556 2.36818 18.9839 2.56696 19.1245C2.76574 19.265 3.02039 19.3004 3.24993 19.2192C4.10911 18.9156 5.03441 18.75 6 18.75C7.99502 18.75 9.82325 19.4573 11.25 20.6357V4.53286Z"
      fill={color}
    />
    <path
      d="M12.75 20.6357C14.1768 19.4573 16.005 18.75 18 18.75C18.9656 18.75 19.8909 18.9156 20.7501 19.2192C20.9796 19.3004 21.2343 19.265 21.433 19.1245C21.6318 18.9839 21.75 18.7556 21.75 18.5121V4.26212C21.75 3.94425 21.5496 3.66091 21.2499 3.55499C20.2324 3.19535 19.1382 3 18 3C16.0675 3 14.2655 3.56279 12.75 4.53286V20.6357Z"
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
@prop ariaLabel = 'book open'
@prop ...restProps
-->
