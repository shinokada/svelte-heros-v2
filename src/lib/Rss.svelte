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
    ariaLabel = 'rss',
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
      d="M12.75 19.5V18.75C12.75 14.6079 9.39214 11.25 5.25 11.25H4.5M4.5 4.5H5.25C13.1201 4.5 19.5 10.8799 19.5 18.75V19.5M6 18.75C6 19.1642 5.66421 19.5 5.25 19.5C4.83579 19.5 4.5 19.1642 4.5 18.75C4.5 18.3358 4.83579 18 5.25 18C5.66421 18 6 18.3358 6 18.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.75 3C3.33579 3 3 3.33579 3 3.75V4.25C3 4.66421 3.33579 5 3.75 5H4C10.0751 5 15 9.92487 15 16V16.25C15 16.6642 15.3358 17 15.75 17H16.25C16.6642 17 17 16.6642 17 16.25V16C17 8.8203 11.1797 3 4 3H3.75Z"
      fill={color}
    />
    <path
      d="M3 8.75C3 8.33579 3.33579 8 3.75 8H4C8.41828 8 12 11.5817 12 16V16.25C12 16.6642 11.6642 17 11.25 17H10.75C10.3358 17 10 16.6642 10 16.25V16C10 12.6863 7.31371 10 4 10H3.75C3.33579 10 3 9.66421 3 9.25V8.75Z"
      fill={color}
    />
    <path
      d="M7 15C7 16.1046 6.10457 17 5 17C3.89543 17 3 16.1046 3 15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 2.75C2 2.33579 2.33579 2 2.75 2C8.9632 2 14 7.0368 14 13.25C14 13.6642 13.6642 14 13.25 14C12.8358 14 12.5 13.6642 12.5 13.25C12.5 7.86522 8.13478 3.5 2.75 3.5C2.33579 3.5 2 3.16421 2 2.75ZM2 7.25C2 6.83579 2.33579 6.5 2.75 6.5C6.47792 6.5 9.5 9.52208 9.5 13.25C9.5 13.6642 9.16421 14 8.75 14C8.33579 14 8 13.6642 8 13.25C8 10.3505 5.64949 8 2.75 8C2.33579 8 2 7.66421 2 7.25ZM3.5 11C2.67157 11 2 11.6716 2 12.5C2 13.3284 2.67157 14 3.5 14C4.32843 14 5 13.3284 5 12.5C5 11.6716 4.32843 11 3.5 11Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H5.25C13.5343 3.75 20.25 10.4657 20.25 18.75V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H18.75C18.3358 20.25 18 19.9142 18 19.5V18.75C18 11.7084 12.2916 6 5.25 6H4.5C4.08579 6 3.75 5.66421 3.75 5.25V4.5ZM3.75 11.25C3.75 10.8358 4.08579 10.5 4.5 10.5H5.25C9.80635 10.5 13.5 14.1937 13.5 18.75V19.5C13.5 19.9142 13.1642 20.25 12.75 20.25H12C11.5858 20.25 11.25 19.9142 11.25 19.5V18.75C11.25 15.4363 8.56371 12.75 5.25 12.75H4.5C4.08579 12.75 3.75 12.4142 3.75 12V11.25ZM3.75 18.75C3.75 17.9216 4.42157 17.25 5.25 17.25C6.07843 17.25 6.75 17.9216 6.75 18.75C6.75 19.5784 6.07843 20.25 5.25 20.25C4.42157 20.25 3.75 19.5784 3.75 18.75Z"
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
@prop ariaLabel = 'rss'
@prop ...restProps
-->
