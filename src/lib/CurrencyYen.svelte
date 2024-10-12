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
    ariaLabel = 'currency yen',
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
      d="M9 7.5L12 12M12 12L15 7.5M12 12V17.25M15 12H9M15 15H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.34581 5.29439C7.09419 4.96536 6.62349 4.9026 6.29445 5.15421C5.96542 5.40582 5.90266 5.87653 6.15427 6.20557L9.05588 9.99998H6.75004C6.33583 9.99998 6.00004 10.3358 6.00004 10.75C6.00004 11.1642 6.33583 11.5 6.75004 11.5H9.25004V12.5H6.75004C6.33583 12.5 6.00004 12.8358 6.00004 13.25C6.00004 13.6642 6.33583 14 6.75004 14H9.25004V15.25C9.25004 15.6642 9.58583 16 10 16C10.4143 16 10.75 15.6642 10.75 15.25V14H13.25C13.6643 14 14 13.6642 14 13.25C14 12.8358 13.6643 12.5 13.25 12.5H10.75V11.5H13.25C13.6643 11.5 14 11.1642 14 10.75C14 10.3358 13.6643 9.99998 13.25 9.99998H10.9442L13.8458 6.20557C14.0974 5.87653 14.0347 5.40582 13.7056 5.15421C13.3766 4.9026 12.9059 4.96536 12.6543 5.29439L10 8.76531L7.34581 5.29439Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM5.60004 3.54998C5.35152 3.21861 4.88141 3.15145 4.55004 3.39998C4.21867 3.64851 4.15152 4.11861 4.40004 4.44998L7.06256 8H4.75C4.33579 8 4 8.33579 4 8.75C4 9.16421 4.33579 9.5 4.75 9.5H7.25004V10.5H4.75C4.33579 10.5 4 10.8358 4 11.25C4 11.6642 4.33579 12 4.75 12H7.25004V12.5C7.25004 12.9142 7.58583 13.25 8.00004 13.25C8.41426 13.25 8.75004 12.9142 8.75004 12.5V12H11.25C11.6642 12 12 11.6642 12 11.25C12 10.8358 11.6642 10.5 11.25 10.5H8.75004V9.5H11.25C11.6642 9.5 12 9.16421 12 8.75C12 8.33579 11.6642 8 11.25 8H8.93753L11.6 4.44998C11.8486 4.11861 11.7814 3.64851 11.45 3.39998C11.1187 3.15145 10.6486 3.21861 10.4 3.54998L8.00004 6.74998L5.60004 3.54998Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9.62404 7.08397C9.39427 6.73933 8.92862 6.6462 8.58397 6.87596C8.23933 7.10573 8.1462 7.57138 8.37596 7.91603L10.5986 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V14.25H9C8.58579 14.25 8.25 14.5858 8.25 15C8.25 15.4142 8.58579 15.75 9 15.75H11.25V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V15.75H15C15.4142 15.75 15.75 15.4142 15.75 15C15.75 14.5858 15.4142 14.25 15 14.25H12.75V12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H13.4014L15.624 7.91603C15.8538 7.57138 15.7607 7.10573 15.416 6.87596C15.0714 6.6462 14.6057 6.73933 14.376 7.08397L12 10.6479L9.62404 7.08397Z"
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
@prop ariaLabel = 'currency yen'
@prop ...restProps
-->
