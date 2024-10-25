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
    ariaLabel = 'bold',
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
      d="M6.75038 3.74414H5.99707V11.9949H13.1221C15.4002 11.9949 17.2471 10.1479 17.2471 7.8695C17.2471 5.59113 15.4002 3.74414 13.1221 3.74414H6.75038ZM6.75038 3.74414V4.12491M6.75038 20.2456H13.4971C15.9824 20.2456 17.9971 18.2307 17.9971 15.7452C17.9971 13.2597 15.9824 11.2448 13.4971 11.2448H5.99707V20.2456H6.75038ZM6.75038 20.2456V19.8751M6.75038 4.12491H12.7504C14.8215 4.12491 16.5005 5.80387 16.5005 7.87496C16.5005 9.94606 14.8215 11.625 12.7504 11.625H6.75038M6.75038 4.12491V11.625M6.75038 11.625V19.8751M6.75038 11.625H13.1254C15.4036 11.625 17.2505 13.4719 17.2505 15.7501C17.2505 18.0283 15.4036 19.8751 13.1254 19.8751H6.75038M7.49707 4.49421H12.3721C14.236 4.49421 15.7471 6.00538 15.7471 7.8695C15.7471 9.73362 14.236 11.2448 12.3721 11.2448H7.49707V4.49421ZM7.49707 11.9949H12.7471C14.8181 11.9949 16.4971 13.6739 16.4971 15.7452C16.4971 17.8164 14.8181 19.4955 12.7471 19.4955H7.49707V11.9949Z"
      stroke={color}
      stroke-width="2"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 3C4 2.44772 4.44772 2 5 2H11C13.4853 2 15.5 4.01472 15.5 6.5C15.5 7.69501 15.0342 8.78123 14.2742 9.58698C15.3283 10.4582 16 11.7757 16 13.25C16 15.8734 13.8734 18 11.25 18H5C4.44772 18 4 17.5523 4 17V3ZM6.5 8.5V4.5H11C12.1046 4.5 13 5.39543 13 6.5C13 7.60457 12.1046 8.5 11 8.5H6.5ZM6.5 11V15.5H11.25C12.4926 15.5 13.5 14.4926 13.5 13.25C13.5 12.0074 12.4926 11 11.25 11H6.5Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3C3 2.44772 3.44772 2 4 2H9C10.933 2 12.5 3.567 12.5 5.5C12.5 6.26179 12.2566 6.96674 11.8434 7.54133C12.5562 8.22395 13 9.18514 13 10.25C13 12.3211 11.3211 14 9.25 14H4C3.44772 14 3 13.5523 3 13V3ZM5.5 6.5V4.5H9C9.55228 4.5 10 4.94772 10 5.5C10 6.05228 9.55228 6.5 9 6.5H5.5ZM5.5 9V11.5H9.25C9.94036 11.5 10.5 10.9404 10.5 10.25C10.5 9.55964 9.94036 9 9.25 9H5.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.24609 3.74418C5.24609 3.32994 5.58189 2.99414 5.99611 2.99414H13.121C15.8134 2.99414 17.9959 5.17701 17.9959 7.86958C17.9959 9.26677 17.4082 10.5267 16.4666 11.4156C17.8432 12.3622 18.7459 13.9483 18.7459 15.7453C18.7459 18.645 16.3955 20.9958 13.496 20.9958H5.99611C5.58189 20.9958 5.24609 20.66 5.24609 20.2458V3.74418ZM12.371 10.4949C13.8206 10.4949 14.9959 9.31954 14.9959 7.86958C14.9959 6.41961 13.8206 5.24429 12.371 5.24429H8.2461V10.4949H12.371ZM8.2461 12.745V18.7457H12.746C14.4027 18.7457 15.7459 17.4024 15.7459 15.7453C15.7459 14.0882 14.4027 12.745 12.746 12.745H8.2461Z"
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
@prop ariaLabel = 'bold'
@prop ...restProps
-->
