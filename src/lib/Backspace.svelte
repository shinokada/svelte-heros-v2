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
    ariaLabel = 'backspace',
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
      d="M12 9.75L14.25 12M14.25 12L16.5 14.25M14.25 12L16.5 9.75M14.25 12L12 14.25M9.42051 19.1705L3.04551 12.7955C2.60617 12.3562 2.60617 11.6438 3.04551 11.2045L9.42051 4.82951C9.63149 4.61853 9.91764 4.5 10.216 4.5L19.5 4.5C20.7427 4.5 21.75 5.50736 21.75 6.75V17.25C21.75 18.4926 20.7427 19.5 19.5 19.5H10.216C9.91764 19.5 9.63149 19.3815 9.42051 19.1705Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.21967 3.21967C7.36032 3.07902 7.55109 3 7.75 3H16.75C17.9926 3 19 4.00736 19 5.25V14.75C19 15.9926 17.9926 17 16.75 17H7.75C7.55109 17 7.36032 16.921 7.21967 16.7803L0.96967 10.5303C0.676777 10.2374 0.676777 9.76256 0.96967 9.46967L7.21967 3.21967ZM10.2803 7.21967C9.98744 6.92678 9.51256 6.92678 9.21967 7.21967C8.92678 7.51256 8.92678 7.98744 9.21967 8.28033L10.9393 10L9.21967 11.7197C8.92678 12.0126 8.92678 12.4874 9.21967 12.7803C9.51256 13.0732 9.98744 13.0732 10.2803 12.7803L12 11.0607L13.7197 12.7803C14.0126 13.0732 14.4874 13.0732 14.7803 12.7803C15.0732 12.4874 15.0732 12.0126 14.7803 11.7197L13.0607 10L14.7803 8.28033C15.0732 7.98744 15.0732 7.51256 14.7803 7.21967C14.4874 6.92678 14.0126 6.92678 13.7197 7.21967L12 8.93934L10.2803 7.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.41421 3C5.95008 3 5.50497 3.18437 5.17678 3.51256L1.21967 7.46967C1.07902 7.61032 1 7.80109 1 8C1 8.19891 1.07902 8.38968 1.21967 8.53033L5.17678 12.4874C5.50497 12.8156 5.95009 13 6.41421 13H12.25C13.7688 13 15 11.7688 15 10.25V5.75C15 4.23122 13.7688 3 12.25 3H6.41421ZM8.28033 5.71967C7.98744 5.42678 7.51256 5.42678 7.21967 5.71967C6.92678 6.01256 6.92678 6.48744 7.21967 6.78033L8.43934 8L7.21967 9.21967C6.92678 9.51256 6.92678 9.98744 7.21967 10.2803C7.51256 10.5732 7.98744 10.5732 8.28033 10.2803L9.5 9.06066L10.7197 10.2803C11.0126 10.5732 11.4874 10.5732 11.7803 10.2803C12.0732 9.98744 12.0732 9.51256 11.7803 9.21967L10.5607 8L11.7803 6.78033C12.0732 6.48744 12.0732 6.01256 11.7803 5.71967C11.4874 5.42678 11.0126 5.42678 10.7197 5.71967L9.5 6.93934L8.28033 5.71967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.515 10.6742C1.78276 11.4064 1.78276 12.5936 2.51499 13.3258L8.89 19.7008C9.24163 20.0525 9.71854 20.25 10.2158 20.25H19.4998C21.1567 20.25 22.4998 18.9069 22.4998 17.25V6.75C22.4998 5.09315 21.1567 3.75 19.4998 3.75L10.2158 3.75C9.71854 3.75 9.24163 3.94754 8.89 4.29917L2.515 10.6742ZM12.5303 9.21967C12.2374 8.92678 11.7626 8.92678 11.4697 9.21967C11.1768 9.51256 11.1768 9.98744 11.4697 10.2803L13.1893 12L11.4697 13.7197C11.1768 14.0126 11.1768 14.4874 11.4697 14.7803C11.7626 15.0732 12.2374 15.0732 12.5303 14.7803L14.25 13.0607L15.9697 14.7803C16.2626 15.0732 16.7374 15.0732 17.0303 14.7803C17.3232 14.4874 17.3232 14.0126 17.0303 13.7197L15.3107 12L17.0303 10.2803C17.3232 9.98744 17.3232 9.51256 17.0303 9.21967C16.7374 8.92678 16.2626 8.92678 15.9697 9.21967L14.25 10.9393L12.5303 9.21967Z"
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
@prop ariaLabel = 'backspace'
@prop ...restProps
-->
