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
    ariaLabel = 'building library',
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
      d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.3325C17.0563 9.94906 14.5514 9.75 12 9.75C9.44861 9.75 6.94372 9.94906 4.5 10.3325V21M3 21H21M12 6.75H12.0075V6.7575H12V6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.67411 2.07459C9.88011 1.97514 10.1202 1.97514 10.3262 2.07459L17.5762 5.57459C17.9493 5.75467 18.1057 6.20304 17.9256 6.57606C17.7576 6.92403 17.3561 7.08351 17.0002 6.95718V16.5H17.2502C17.6644 16.5 18.0002 16.8358 18.0002 17.25C18.0002 17.6642 17.6644 18 17.2502 18H2.75017C2.33596 18 2.00017 17.6642 2.00017 17.25C2.00017 16.8358 2.33596 16.5 2.75017 16.5H3.00017V6.95718C2.6442 7.08351 2.24274 6.92403 2.07476 6.57606C1.89468 6.20304 2.05109 5.75467 2.42411 5.57459L9.67411 2.07459ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM7.5 9.75C7.5 9.33579 7.16421 9 6.75 9C6.33579 9 6 9.33579 6 9.75V15.25C6 15.6642 6.33579 16 6.75 16C7.16421 16 7.5 15.6642 7.5 15.25V9.75ZM10.75 9.75C10.75 9.33579 10.4142 9 10 9C9.58579 9 9.25 9.33579 9.25 9.75V15.25C9.25 15.6642 9.58579 16 10 16C10.4142 16 10.75 15.6642 10.75 15.25V9.75ZM14 9.75C14 9.33579 13.6642 9 13.25 9C12.8358 9 12.5 9.33579 12.5 9.75V15.25C12.5 15.6642 12.8358 16 13.25 16C13.6642 16 14 15.6642 14 15.25V9.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.60534 2.1123C7.84722 1.96257 8.15299 1.96257 8.39487 2.1123L13.6449 5.3623C13.9971 5.58032 14.1058 6.04257 13.8878 6.39477C13.6986 6.70039 13.3255 6.8227 13 6.70724V12.5H13.25C13.6642 12.5 14 12.8358 14 13.25C14 13.6642 13.6642 14 13.25 14H2.75C2.33579 14 2 13.6642 2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H3V6.70731C2.67455 6.82265 2.30156 6.70032 2.1124 6.39477C1.89438 6.04257 2.00315 5.58032 2.35534 5.3623L7.60534 2.1123ZM4.5 8.75C4.5 8.33579 4.83579 8 5.25 8C5.66421 8 6 8.33579 6 8.75V11.75C6 12.1642 5.66421 12.5 5.25 12.5C4.83579 12.5 4.5 12.1642 4.5 11.75V8.75ZM8 8C7.58579 8 7.25 8.33579 7.25 8.75V11.75C7.25 12.1642 7.58579 12.5 8 12.5C8.41421 12.5 8.75 12.1642 8.75 11.75V8.75C8.75 8.33579 8.41421 8 8 8ZM10 8.75C10 8.33579 10.3358 8 10.75 8C11.1642 8 11.5 8.33579 11.5 8.75V11.75C11.5 12.1642 11.1642 12.5 10.75 12.5C10.3358 12.5 10 12.1642 10 11.75V8.75ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
      fill={color}
    />
  {:else}
    <path
      d="M11.5841 2.37596C11.836 2.20801 12.1642 2.20801 12.4161 2.37596L21.4161 8.37596C21.7608 8.60573 21.8539 9.07138 21.6241 9.41603C21.3944 9.76067 20.9287 9.8538 20.5841 9.62404L12.0001 3.90139L3.4161 9.62404C3.07146 9.8538 2.60581 9.76067 2.37604 9.41603C2.14628 9.07138 2.23941 8.60573 2.58405 8.37596L11.5841 2.37596Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.25 10.3325V20.25H21C21.4142 20.25 21.75 20.5858 21.75 21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21C2.25 20.5858 2.58579 20.25 3 20.25H3.75V10.3325C3.75 9.96317 4.01888 9.64882 4.38374 9.59157C6.86578 9.20211 9.40954 9 12 9C14.5905 9 17.1342 9.20211 19.6163 9.59157C19.9811 9.64882 20.25 9.96317 20.25 10.3325ZM12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V12.75ZM15.75 12C16.1642 12 16.5 12.3358 16.5 12.75V19.5C16.5 19.9142 16.1642 20.25 15.75 20.25C15.3358 20.25 15 19.9142 15 19.5V12.75C15 12.3358 15.3358 12 15.75 12ZM9 12.75C9 12.3358 8.66421 12 8.25 12C7.83579 12 7.5 12.3358 7.5 12.75V19.5C7.5 19.9142 7.83579 20.25 8.25 20.25C8.66421 20.25 9 19.9142 9 19.5V12.75Z"
      fill={color}
    />
    <path
      d="M12 7.875C12.6213 7.875 13.125 7.37132 13.125 6.75C13.125 6.12868 12.6213 5.625 12 5.625C11.3787 5.625 10.875 6.12868 10.875 6.75C10.875 7.37132 11.3787 7.875 12 7.875Z"
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
@prop ariaLabel = 'building library'
@prop ...restProps
-->
