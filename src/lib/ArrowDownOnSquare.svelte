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
    ariaLabel = 'arrow down on square',
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
      d="M9 8.25H7.5C6.25736 8.25 5.25 9.25736 5.25 10.5V19.5C5.25 20.7426 6.25736 21.75 7.5 21.75H16.5C17.7426 21.75 18.75 20.7426 18.75 19.5V10.5C18.75 9.25736 17.7426 8.25 16.5 8.25H15M9 12L12 15M12 15L15 12M12 15L12 2.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M13.75 7H10.75V12.2955L12.6925 10.2483C12.9696 9.94039 13.4438 9.91544 13.7517 10.1925C14.0596 10.4696 14.0846 10.9438 13.8075 11.2517L10.5575 14.7517C10.4152 14.9098 10.2126 15 10 15C9.78739 15 9.58477 14.9098 9.44254 14.7517L6.19254 11.2517C5.91544 10.9438 5.9404 10.4696 6.24828 10.1925C6.55617 9.91544 7.03038 9.94039 7.30748 10.2483L9.25001 12.2955V7H10.75L10.75 1.75C10.75 1.33579 10.4142 1 10 1C9.58579 1 9.25 1.33579 9.25 1.75L9.25001 7H6.25C5.00736 7 4 8.00736 4 9.25V16.75C4 17.9926 5.00736 19 6.25 19H13.75C14.9926 19 16 17.9926 16 16.75V9.25C16 8.00736 14.9926 7 13.75 7Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8 1C8.41421 1 8.75 1.33579 8.75 1.75V5H7.25V1.75C7.25 1.33579 7.58579 1 8 1Z"
      fill={color}
    />
    <path
      d="M7.25 5V9.43934L6.03033 8.21967C5.73744 7.92678 5.26256 7.92678 4.96967 8.21967C4.67678 8.51256 4.67678 8.98744 4.96967 9.28033L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L11.0303 9.28033C11.3232 8.98744 11.3232 8.51256 11.0303 8.21967C10.7374 7.92678 10.2626 7.92678 9.96967 8.21967L8.75 9.43934V5H11C12.1046 5 13 5.89543 13 7V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V7C3 5.89543 3.89543 5 5 5H7.25Z"
      fill={color}
    />
  {:else}
    <path
      d="M12 1.5C12.4142 1.5 12.75 1.83579 12.75 2.25L12.75 7.5H11.25V2.25C11.25 1.83579 11.5858 1.5 12 1.5Z"
      fill={color}
    />
    <path
      d="M11.25 7.5L11.25 13.1893L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697C15.2374 11.1768 14.7626 11.1768 14.4697 11.4697L12.75 13.1893V7.5H16.5C18.1569 7.5 19.5 8.84315 19.5 10.5V19.5C19.5 21.1569 18.1569 22.5 16.5 22.5H7.5C5.84315 22.5 4.5 21.1569 4.5 19.5V10.5C4.5 8.84315 5.84315 7.5 7.5 7.5H11.25Z"
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
@prop ariaLabel = 'arrow down on square'
@prop ...restProps
-->
