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
    ariaLabel = 'underline',
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
      d="M17.9953 3.74414V11.2449C17.9953 14.5589 15.3091 17.2454 11.9954 17.2454C8.6818 17.2454 5.99556 14.5589 5.99556 11.2449V3.74414M3.74561 20.2457H20.2453"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V9C5.5 11.4853 7.51472 13.5 10 13.5C12.4853 13.5 14.5 11.4853 14.5 9V2.75C14.5 2.33579 14.8358 2 15.25 2C15.6642 2 16 2.33579 16 2.75V9C16 12.3137 13.3137 15 10 15C6.68629 15 4 12.3137 4 9V2.75C4 2.33579 4.33579 2 4.75 2ZM2 17.25C2 16.8358 2.33579 16.5 2.75 16.5H17.25C17.6642 16.5 18 16.8358 18 17.25C18 17.6642 17.6642 18 17.25 18H2.75C2.33579 18 2 17.6642 2 17.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.75 2C5.16421 2 5.5 2.33579 5.5 2.75V7C5.5 8.38071 6.61929 9.5 8 9.5C9.38071 9.5 10.5 8.38071 10.5 7V2.75C10.5 2.33579 10.8358 2 11.25 2C11.6642 2 12 2.33579 12 2.75V7C12 9.20914 10.2091 11 8 11C5.79086 11 4 9.20914 4 7V2.75C4 2.33579 4.33579 2 4.75 2ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H13.25C13.6642 12.5 14 12.8358 14 13.25C14 13.6642 13.6642 14 13.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.99509 2.99414C6.40931 2.99414 6.74511 3.32994 6.74511 3.74418V11.2449C6.74511 14.1448 9.09561 16.4954 11.995 16.4954C14.8943 16.4954 17.2448 14.1448 17.2448 11.2449V3.74418C17.2448 3.32994 17.5806 2.99414 17.9949 2.99414C18.4091 2.99414 18.7449 3.32994 18.7449 3.74418V11.2449C18.7449 14.9731 15.7229 17.9955 11.995 17.9955C8.26705 17.9955 5.24507 14.9731 5.24507 11.2449V3.74418C5.24507 3.32994 5.58087 2.99414 5.99509 2.99414ZM2.99512 20.2458C2.99512 19.8315 3.33091 19.4957 3.74514 19.4957H20.2448C20.659 19.4957 20.9948 19.8315 20.9948 20.2458C20.9948 20.66 20.659 20.9958 20.2448 20.9958H3.74514C3.33091 20.9958 2.99512 20.66 2.99512 20.2458Z"
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
@prop ariaLabel = 'underline'
@prop ...restProps
-->
