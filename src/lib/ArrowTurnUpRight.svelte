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
    ariaLabel = 'arrow turn up right',
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
      d="M16.4899 11.9994L20.2397 8.24902M20.2397 8.24902L16.4899 4.49866M20.2397 8.24902L3.74023 8.24902L3.74023 19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 17C4.16421 17 4.5 16.6642 4.5 16.25V8.75H15.4393L13.4697 10.7197C13.1768 11.0126 13.1768 11.4874 13.4697 11.7803C13.7626 12.0732 14.2374 12.0732 14.5303 11.7803L17.7803 8.53033C18.0732 8.23744 18.0732 7.76256 17.7803 7.46967L14.5303 4.21967C14.2374 3.92678 13.7626 3.92678 13.4697 4.21967C13.1768 4.51256 13.1768 4.98744 13.4697 5.28033L15.4393 7.25H3.75C3.33579 7.25 3 7.58579 3 8V16.25C3 16.6642 3.33579 17 3.75 17Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.75 14C3.16421 14 3.5 13.6642 3.5 13.25V6.75H11.4393L10.4697 7.71967C10.1768 8.01256 10.1768 8.48744 10.4697 8.78033C10.7626 9.07322 11.2374 9.07322 11.5303 8.78033L13.7803 6.53033C14.0732 6.23744 14.0732 5.76256 13.7803 5.46967L11.5303 3.21967C11.2374 2.92678 10.7626 2.92678 10.4697 3.21967C10.1768 3.51256 10.1768 3.98744 10.4697 4.28033L11.4393 5.25H2.75C2.33579 5.25 2 5.58579 2 6V13.25C2 13.6642 2.33579 14 2.75 14Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.73927 20.25C4.15349 20.25 4.48928 19.9142 4.48928 19.5L4.48928 8.99902L18.4282 8.99902L15.9585 11.469C15.6656 11.7619 15.6657 12.2368 15.9586 12.5297C16.2515 12.8226 16.7264 12.8226 17.0193 12.5297L20.7691 8.77932C21.062 8.48642 21.062 8.01156 20.7691 7.71866L17.0193 3.9683C16.7264 3.67538 16.2515 3.67535 15.9586 3.96825C15.6657 4.26114 15.6656 4.73603 15.9585 5.02896L18.4282 7.49895L3.73927 7.49895C3.32505 7.49895 2.98926 7.83476 2.98926 8.24899L2.98926 19.5C2.98926 19.9142 3.32505 20.25 3.73927 20.25Z"
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
@prop ariaLabel = 'arrow turn up right'
@prop ...restProps
-->
