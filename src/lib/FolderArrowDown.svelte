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
    ariaLabel = 'folder arrow down',
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
      d="M9 13.5L12 16.5M12 16.5L15 13.5M12 16.5L12 10.5M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 4.75C2 3.7835 2.7835 3 3.75 3H8.58579C9.04992 3 9.49503 3.18437 9.82322 3.51256L11.2374 4.92678C11.2843 4.97366 11.3479 5 11.4142 5H16.25C17.2165 5 18 5.7835 18 6.75V15.25C18 16.2165 17.2165 17 16.25 17H3.75C2.7835 17 2 16.2165 2 15.25V4.75ZM10.75 8.75C10.75 8.33579 10.4142 8 10 8C9.58579 8 9.25 8.33579 9.25 8.75V11.2955L8.30747 10.2483C8.03038 9.94039 7.55616 9.91543 7.24828 10.1925C6.94039 10.4696 6.91544 10.9438 7.19253 11.2517L9.44253 13.7517C9.58476 13.9098 9.78738 14 10 14C10.2126 14 10.4152 13.9098 10.5575 13.7517L12.8075 11.2517C13.0846 10.9438 13.0596 10.4696 12.7517 10.1925C12.4438 9.91543 11.9696 9.94039 11.6925 10.2483L10.75 11.2955V8.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.5C14 4.67157 13.3284 4 12.5 4H9.62132C9.2235 4 8.84196 3.84197 8.56066 3.56066L7.43934 2.43934C7.15804 2.15804 6.7765 2 6.37868 2H3.5ZM8.75 6.75C8.75 6.33579 8.41421 6 8 6C7.58579 6 7.25 6.33579 7.25 6.75V9.43934L6.53033 8.71967C6.23744 8.42678 5.76256 8.42678 5.46967 8.71967C5.17678 9.01256 5.17678 9.48744 5.46967 9.78033L7.46967 11.7803C7.76256 12.0732 8.23744 12.0732 8.53033 11.7803L10.5303 9.78033C10.8232 9.48744 10.8232 9.01256 10.5303 8.71967C10.2374 8.42678 9.76256 8.42678 9.46967 8.71967L8.75 9.43934V6.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V9C22.5 7.34315 21.1569 6 19.5 6H14.1213C13.9224 6 13.7316 5.92098 13.591 5.78033L11.4697 3.65901C11.0477 3.23705 10.4754 3 9.87868 3H4.5C2.84315 3 1.5 4.34315 1.5 6V18C1.5 19.6569 2.84315 21 4.5 21H19.5ZM12.75 10.5C12.75 10.0858 12.4142 9.75 12 9.75C11.5858 9.75 11.25 10.0858 11.25 10.5L11.25 14.6893L9.53033 12.9697C9.23744 12.6768 8.76256 12.6768 8.46967 12.9697C8.17678 13.2626 8.17678 13.7374 8.46967 14.0303L11.4697 17.0303C11.6103 17.171 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.171 12.5303 17.0303L15.5303 14.0303C15.8232 13.7374 15.8232 13.2626 15.5303 12.9697C15.2374 12.6768 14.7626 12.6768 14.4697 12.9697L12.75 14.6893L12.75 10.5Z"
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
@prop ariaLabel = 'folder arrow down'
@prop ...restProps
-->
