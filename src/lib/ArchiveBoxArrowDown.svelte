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
    ariaLabel = 'archive box arrow down',
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
      d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M12 10.5V17.25M12 17.25L9 14.25M12 17.25L15 14.25M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 3C1.44772 3 1 3.44772 1 4V5C1 5.55228 1.44772 6 2 6H18C18.5523 6 19 5.55228 19 5V4C19 3.44772 18.5523 3 18 3H2ZM2 7.5H18L17.1885 15.2094C17.0813 16.2273 16.223 17 15.1995 17H4.80052C3.77701 17 2.91866 16.2273 2.81151 15.2094L2 7.5ZM10 9C10.4142 9 10.75 9.33579 10.75 9.75V12.2955L11.6925 11.2483C11.9696 10.9404 12.4438 10.9154 12.7517 11.1925C13.0596 11.4696 13.0846 11.9438 12.8075 12.2517L10.5575 14.7517C10.4152 14.9098 10.2126 15 10 15C9.78738 15 9.58476 14.9098 9.44253 14.7517L7.19253 12.2517C6.91543 11.9438 6.94039 11.4696 7.24828 11.1925C7.55616 10.9154 8.03038 10.9404 8.30747 11.2483L9.25 12.2955V9.75C9.25 9.33579 9.58579 9 10 9Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4C14 4.55228 13.5523 5 13 5H3C2.44772 5 2 4.55228 2 4V3Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 6H3V12C3 13.1046 3.89543 14 5 14H11C12.1046 14 13 13.1046 13 12V6ZM8.75 7.75C8.75 7.33579 8.41421 7 8 7C7.58579 7 7.25 7.33579 7.25 7.75V10.4393L6.03033 9.21967C5.73744 8.92678 5.26256 8.92678 4.96967 9.21967C4.67678 9.51256 4.67678 9.98744 4.96967 10.2803L7.46967 12.7803C7.76256 13.0732 8.23744 13.0732 8.53033 12.7803L11.0303 10.2803C11.3232 9.98744 11.3232 9.51256 11.0303 9.21967C10.7374 8.92678 10.2626 8.92678 9.96967 9.21967L8.75 10.4393V7.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM12 10.5C12.4142 10.5 12.75 10.8358 12.75 11.25V16.1893L14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697C8.76256 14.1768 9.23744 14.1768 9.53033 14.4697L11.25 16.1893V11.25C11.25 10.8358 11.5858 10.5 12 10.5Z"
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
@prop ariaLabel = 'archive box arrow down'
@prop ...restProps
-->
