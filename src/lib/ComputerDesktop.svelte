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
    ariaLabel = 'computer desktop',
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
      d="M9 17.25V18.2574C9 19.053 8.68393 19.8161 8.12132 20.3787L7.5 21H16.5L15.8787 20.3787C15.3161 19.8161 15 19.053 15 18.2574V17.25M21 5.25V15C21 16.2426 19.9926 17.25 18.75 17.25H5.25C4.00736 17.25 3 16.2426 3 15V5.25M21 5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4.25C2 3.00736 3.00736 2 4.25 2H15.75C16.9926 2 18 3.00736 18 4.25V12.75C18 13.9926 16.9926 15 15.75 15H12.6448C12.8417 15.6619 13.2292 16.2418 13.7449 16.6767C13.9856 16.8798 14.0738 17.2116 13.9657 17.5074C13.8576 17.8032 13.5762 18 13.2613 18H6.73881C6.42387 18 6.14248 17.8032 6.03437 17.5074C5.92627 17.2116 6.01449 16.8798 6.25522 16.6767C6.77086 16.2418 7.15838 15.6619 7.35525 15H4.25C3.00736 15 2 13.9926 2 12.75V4.25ZM3.5 4.25C3.5 3.83579 3.83579 3.5 4.25 3.5H15.75C16.1642 3.5 16.5 3.83579 16.5 4.25V11.75C16.5 12.1642 16.1642 12.5 15.75 12.5H4.25C3.83579 12.5 3.5 12.1642 3.5 11.75V4.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4.25C2 3.00736 3.00736 2 4.25 2H11.75C12.9926 2 14 3.00736 14 4.25V9.75C14 10.9926 12.9926 12 11.75 12H10.438C10.5382 12.128 10.6477 12.2485 10.7657 12.3602C10.9153 12.5018 11 12.6988 11 12.9048V13.25C11 13.6642 10.6642 14 10.25 14H5.75C5.33579 14 5 13.6642 5 13.25V12.9048C5 12.6988 5.08472 12.5018 5.23428 12.3602C5.35228 12.2485 5.46184 12.128 5.56197 12H4.25C3.00736 12 2 10.9926 2 9.75V4.25ZM4.25 3.5C3.83579 3.5 3.5 3.83579 3.5 4.25V8.75C3.5 9.16421 3.83579 9.5 4.25 9.5H11.75C12.1642 9.5 12.5 9.16421 12.5 8.75V4.25C12.5 3.83579 12.1642 3.5 11.75 3.5H4.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 5.25C2.25 3.59315 3.59315 2.25 5.25 2.25H18.75C20.4069 2.25 21.75 3.59315 21.75 5.25V15C21.75 16.6569 20.4069 18 18.75 18H15.75V18.2574C15.75 18.8541 15.9871 19.4264 16.409 19.8483L17.0303 20.4697C17.2448 20.6842 17.309 21.0068 17.1929 21.287C17.0768 21.5673 16.8033 21.75 16.5 21.75H7.5C7.19665 21.75 6.92318 21.5673 6.80709 21.287C6.691 21.0068 6.75517 20.6842 6.96967 20.4697L7.59099 19.8484C8.01295 19.4264 8.25 18.8541 8.25 18.2574V18H5.25C3.59315 18 2.25 16.6569 2.25 15V5.25ZM3.75 5.25V12.75C3.75 13.5784 4.42157 14.25 5.25 14.25H18.75C19.5784 14.25 20.25 13.5784 20.25 12.75V5.25C20.25 4.42157 19.5784 3.75 18.75 3.75H5.25C4.42157 3.75 3.75 4.42157 3.75 5.25Z"
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
@prop ariaLabel = 'computer desktop'
@prop ...restProps
-->
