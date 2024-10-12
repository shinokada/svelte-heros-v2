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
    ariaLabel = 'document chart bar',
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
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 3.5C3 2.67157 3.67157 2 4.5 2H11.3787C11.7765 2 12.158 2.15804 12.4393 2.43934L16.5607 6.56066C16.842 6.84197 17 7.2235 17 7.62132V16.5C17 17.3284 16.3284 18 15.5 18H4.5C3.67157 18 3 17.3284 3 16.5V3.5ZM13.25 9C13.6642 9 14 9.33579 14 9.75V14.25C14 14.6642 13.6642 15 13.25 15C12.8358 15 12.5 14.6642 12.5 14.25V9.75C12.5 9.33579 12.8358 9 13.25 9ZM6.75 13C7.16421 13 7.5 13.3358 7.5 13.75V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33579 15 6 14.6642 6 14.25V13.75C6 13.3358 6.33579 13 6.75 13ZM10.75 11.75C10.75 11.3358 10.4142 11 10 11C9.58579 11 9.25 11.3358 9.25 11.75V14.25C9.25 14.6642 9.58579 15 10 15C10.4142 15 10.75 14.6642 10.75 14.25V11.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 2C3.17157 2 2.5 2.67157 2.5 3.5V12.5C2.5 13.3284 3.17157 14 4 14H12C12.8284 14 13.5 13.3284 13.5 12.5V6.62132C13.5 6.2235 13.342 5.84197 13.0607 5.56066L9.93934 2.43934C9.65804 2.15804 9.2765 2 8.87868 2H4ZM10 7.75C10 7.33579 10.3358 7 10.75 7C11.1642 7 11.5 7.33579 11.5 7.75V11.25C11.5 11.6642 11.1642 12 10.75 12C10.3358 12 10 11.6642 10 11.25V7.75ZM7.25 9.25C7.25 8.83579 7.58579 8.5 8 8.5C8.41421 8.5 8.75 8.83579 8.75 9.25V11.25C8.75 11.6642 8.41421 12 8 12C7.58579 12 7.25 11.6642 7.25 11.25V9.25ZM5.25 10C4.83579 10 4.5 10.3358 4.5 10.75V11.25C4.5 11.6642 4.83579 12 5.25 12C5.66421 12 6 11.6642 6 11.25V10.75C6 10.3358 5.66421 10 5.25 10Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.625 1.5H9C11.0711 1.5 12.75 3.17893 12.75 5.25V7.125C12.75 8.16053 13.5895 9 14.625 9H16.5C18.5711 9 20.25 10.6789 20.25 12.75V20.625C20.25 21.6605 19.4105 22.5 18.375 22.5H5.625C4.58947 22.5 3.75 21.6605 3.75 20.625V3.375C3.75 2.33947 4.58947 1.5 5.625 1.5ZM9.75 17.25C9.75 16.8358 9.41421 16.5 9 16.5C8.58579 16.5 8.25 16.8358 8.25 17.25V18C8.25 18.4142 8.58579 18.75 9 18.75C9.41421 18.75 9.75 18.4142 9.75 18V17.25ZM12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25ZM15.75 12.75C15.75 12.3358 15.4142 12 15 12C14.5858 12 14.25 12.3358 14.25 12.75V18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18V12.75Z"
      fill={color}
    />
    <path
      d="M14.25 5.25C14.25 3.93695 13.768 2.73648 12.9712 1.8159C16.3701 2.70377 19.0462 5.37988 19.9341 8.77881C19.0135 7.98204 17.8131 7.5 16.5 7.5H14.625C14.4179 7.5 14.25 7.33211 14.25 7.125V5.25Z"
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
@prop ariaLabel = 'document chart bar'
@prop ...restProps
-->
