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
    ariaLabel = 'pencil',
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
      d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M2.69509 14.7623L1.4333 17.9168C1.27004 18.3249 1.67508 18.73 2.08324 18.5667L5.2377 17.3049C5.74067 17.1037 6.19753 16.8025 6.58057 16.4194L17.4998 5.50072C18.3282 4.67229 18.3282 3.32914 17.4998 2.50072C16.6713 1.67229 15.3282 1.67229 14.4998 2.50071L3.58057 13.4194C3.19752 13.8025 2.89627 14.2593 2.69509 14.7623Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0126 2.51256C11.696 1.82915 12.804 1.82915 13.4875 2.51256C14.1709 3.19598 14.1709 4.30402 13.4875 4.98744L6.22604 12.2489C5.97066 12.5042 5.66748 12.7068 5.33382 12.845L3.28702 13.6928C3.00676 13.8088 2.68417 13.7447 2.46968 13.5302C2.25519 13.3157 2.19103 12.9931 2.30712 12.7128L3.15488 10.6663C3.29308 10.3327 3.49563 10.0295 3.75098 9.77417L11.0126 2.51256Z"
      fill={color}
    />
  {:else}
    <path
      d="M21.7312 2.26884C20.706 1.24372 19.044 1.24372 18.0189 2.26884L16.8617 3.426L20.574 7.13831L21.7312 5.98116C22.7563 4.95603 22.7563 3.29397 21.7312 2.26884Z"
      fill={color}
    />
    <path
      d="M19.5134 8.19897L15.801 4.48666L3.65021 16.6375C3.03342 17.2543 2.58003 18.015 2.33101 18.851L1.53123 21.5359C1.45261 21.7998 1.52496 22.0856 1.71969 22.2803C1.91442 22.4751 2.2002 22.5474 2.46413 22.4688L5.14902 21.669C5.98499 21.42 6.74574 20.9666 7.36253 20.3498L19.5134 8.19897Z"
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
@prop ariaLabel = 'pencil'
@prop ...restProps
-->
