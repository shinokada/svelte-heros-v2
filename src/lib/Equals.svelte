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
    ariaLabel = 'equals',
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
      d="M4.49854 8.24805H19.4982M4.49854 15.749H19.4982"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.75 6C3.33579 6 3 6.33579 3 6.75C3 7.16421 3.33579 7.5 3.75 7.5H16.25C16.6642 7.5 17 7.16421 17 6.75C17 6.33579 16.6642 6 16.25 6H3.75Z"
      fill={color}
    />
    <path
      d="M3.75 13.5C3.33579 13.5 3 13.8358 3 14.25C3 14.6642 3.33579 15 3.75 15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H3.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4.75C2 4.33579 2.33579 4 2.75 4H13.25C13.6642 4 14 4.33579 14 4.75C14 5.16421 13.6642 5.5 13.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H13.25C13.6642 10.5 14 10.8358 14 11.25C14 11.6642 13.6642 12 13.25 12H2.75C2.33579 12 2 11.6642 2 11.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.74805 8.24809C3.74805 7.83385 4.08384 7.49805 4.49807 7.49805H19.4978C19.912 7.49805 20.2478 7.83385 20.2478 8.24809C20.2478 8.66232 19.912 8.99813 19.4978 8.99813H4.49807C4.08384 8.99813 3.74805 8.66232 3.74805 8.24809Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.74805 15.7491C3.74805 15.3348 4.08384 14.999 4.49807 14.999H19.4978C19.912 14.999 20.2478 15.3348 20.2478 15.7491C20.2478 16.1633 19.912 16.4991 19.4978 16.4991H4.49807C4.08384 16.4991 3.74805 16.1633 3.74805 15.7491Z"
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
@prop ariaLabel = 'equals'
@prop ...restProps
-->
