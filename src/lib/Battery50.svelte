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
    ariaLabel = 'battery 50',
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
      d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M4.5 10.5H11.25V15H4.5V10.5ZM3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.75 8C4.33579 8 4 8.33579 4 8.75V11.25C4 11.6642 4.33579 12 4.75 12H9.5C9.91421 12 10.25 11.6642 10.25 11.25V8.75C10.25 8.33579 9.91421 8 9.5 8H4.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.25 5C2.00736 5 1 6.00736 1 7.25V12.75C1 13.9926 2.00736 15 3.25 15H15.75C16.9926 15 18 13.9926 18 12.75V11.6646C18.5826 11.4587 19 10.9031 19 10.25V9.75C19 9.09689 18.5826 8.54127 18 8.33535V7.25C18 6.00736 16.9926 5 15.75 5H3.25ZM2.5 7.25C2.5 6.83579 2.83579 6.5 3.25 6.5H15.75C16.1642 6.5 16.5 6.83579 16.5 7.25V12.75C16.5 13.1642 16.1642 13.5 15.75 13.5H3.25C2.83579 13.5 2.5 13.1642 2.5 12.75V7.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 6.25C1 5.00736 2.00736 4 3.25 4H11.75C12.9926 4 14 5.00736 14 6.25V6.33535C14.5826 6.54127 15 7.09689 15 7.75V8.25C15 8.90311 14.5826 9.45873 14 9.66465V9.75C14 10.9926 12.9926 12 11.75 12H3.25C2.00736 12 1 10.9926 1 9.75V6.25ZM3.25 5.5C2.83579 5.5 2.5 5.83579 2.5 6.25V9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H11.75C12.1642 10.5 12.5 10.1642 12.5 9.75V6.25C12.5 5.83579 12.1642 5.5 11.75 5.5H3.25Z"
      fill={color}
    />
    <path
      d="M4.75 7C4.33579 7 4 7.33579 4 7.75V8.25C4 8.66421 4.33579 9 4.75 9H6.75C7.16421 9 7.5 8.66421 7.5 8.25V7.75C7.5 7.33579 7.16421 7 6.75 7H4.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M4.5 9.75C4.08579 9.75 3.75 10.0858 3.75 10.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H11.25C11.6642 15.75 12 15.4142 12 15V10.5C12 10.0858 11.6642 9.75 11.25 9.75H4.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 6.75C2.09315 6.75 0.75 8.09315 0.75 9.75V15.75C0.75 17.4069 2.09315 18.75 3.75 18.75H18.75C20.4069 18.75 21.75 17.4069 21.75 15.75V15.7125C22.6058 15.5388 23.25 14.7821 23.25 13.875V11.625C23.25 10.7179 22.6058 9.96123 21.75 9.78751V9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H3.75ZM18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V15.75C20.25 16.5784 19.5784 17.25 18.75 17.25H3.75C2.92157 17.25 2.25 16.5784 2.25 15.75V9.75C2.25 8.92157 2.92157 8.25 3.75 8.25H18.75Z"
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
@prop ariaLabel = 'battery 50'
@prop ...restProps
-->
