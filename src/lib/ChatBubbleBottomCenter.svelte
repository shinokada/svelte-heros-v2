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
    ariaLabel = 'chat bubble bottom center',
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
      d="M2.25 12.7593C2.25 14.3604 3.37341 15.754 4.95746 15.987C6.02548 16.144 7.10495 16.2659 8.19464 16.3513C8.66142 16.388 9.08828 16.6324 9.348 17.022L12 21L14.652 17.0221C14.9117 16.6325 15.3386 16.388 15.8053 16.3514C16.895 16.2659 17.9745 16.1441 19.0425 15.9871C20.6266 15.7542 21.75 14.3606 21.75 12.7595V6.74056C21.75 5.13946 20.6266 3.74583 19.0425 3.51293C16.744 3.17501 14.3926 3 12.0003 3C9.60776 3 7.25612 3.17504 4.95747 3.51302C3.37342 3.74593 2.25 5.13956 2.25 6.74064V12.7593Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.42976 2.52374C5.56943 2.17905 7.76407 2 10 2C12.2359 2 14.4306 2.17905 16.5702 2.52374C18.0066 2.75513 19 4.01325 19 5.42588V10.5741C19 11.9867 18.0066 13.2449 16.5702 13.4763C15.4024 13.6644 14.2181 13.8032 13.0196 13.8905C12.7399 13.9108 12.4988 14.0703 12.3775 14.3035L10.6654 17.596C10.5363 17.8443 10.2798 18 10 18C9.7202 18 9.46367 17.8443 9.33459 17.596L7.62247 14.3035C7.5012 14.0703 7.2601 13.9108 6.9804 13.8905C5.78193 13.8032 4.59764 13.6644 3.42976 13.4763C1.99338 13.2449 1 11.9867 1 10.5741V5.42588C1 4.01325 1.99339 2.75513 3.42976 2.52374Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M1 8.74053C1 9.72321 1.71341 10.5653 2.68906 10.6827C3.5937 10.7915 4.50678 10.8729 5.42746 10.926C5.78969 10.9469 6.11506 11.1572 6.27733 11.4817L7.32918 13.5854C7.45622 13.8395 7.71592 14 8 14C8.28408 14 8.54378 13.8395 8.67082 13.5854L9.72265 11.4817C9.88492 11.1572 10.2103 10.9469 10.5725 10.9261C11.4932 10.873 12.4063 10.7916 13.3109 10.6828C14.2866 10.5654 15 9.72332 15 8.74062V4.25938C15 3.27668 14.2866 2.43458 13.3109 2.3172C11.57 2.10777 9.79777 2 8.00039 2C6.20273 2 4.43025 2.10781 2.68906 2.3173C1.71341 2.43469 1 3.27679 1 4.25947V8.74053Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.84836 2.771C7.18302 2.42773 9.57113 2.25 12.0003 2.25C14.4292 2.25 16.8171 2.4277 19.1516 2.77091C21.1299 3.06177 22.5 4.79445 22.5 6.74056V12.7595C22.5 14.7056 21.1299 16.4382 19.1516 16.7291C18.0054 16.8976 16.8464 17.0262 15.6759 17.1135C15.5514 17.1228 15.4431 17.1875 15.379 17.2835L12.624 21.416C12.4849 21.6247 12.2508 21.75 12 21.75C11.7492 21.75 11.5151 21.6247 11.376 21.416L8.62092 17.2835C8.5569 17.1874 8.44853 17.1227 8.32408 17.1134C7.15358 17.0261 5.99452 16.8975 4.84836 16.729C2.87004 16.4381 1.5 14.7054 1.5 12.7593V6.74064C1.5 4.79455 2.87004 3.06188 4.84836 2.771Z"
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
@prop ariaLabel = 'chat bubble bottom center'
@prop ...restProps
-->
