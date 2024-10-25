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
    ariaLabel = 'bars arrow down',
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
      d="M3 4.5H17.25M3 9H12.75M3 13.5H12.75M17.25 9V21M17.25 21L13.5 17.25M17.25 21L21 17.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 3.75C2 3.33579 2.33579 3 2.75 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 7.5C2 7.08579 2.33579 6.75 2.75 6.75H10.2582C10.6724 6.75 11.0082 7.08579 11.0082 7.5C11.0082 7.91421 10.6724 8.25 10.2582 8.25H2.75C2.33579 8.25 2 7.91421 2 7.5ZM14 7C14.4142 7 14.75 7.33579 14.75 7.75L14.75 14.3401L16.7004 12.2397C16.9823 11.9361 17.4568 11.9186 17.7603 12.2004C18.0639 12.4823 18.0814 12.9568 17.7996 13.2603L14.5496 16.7603C14.4077 16.9132 14.2085 17 14 17C13.7914 17 13.5923 16.9132 13.4504 16.7603L10.2004 13.2603C9.91855 12.9568 9.93613 12.4823 10.2397 12.2004C10.5432 11.9186 11.0177 11.9361 11.2996 12.2397L13.25 14.3401L13.25 7.75C13.25 7.33579 13.5858 7 14 7ZM2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H7.31205C7.72626 10.5 8.06205 10.8358 8.06205 11.25C8.06205 11.6642 7.72626 12 7.31205 12H2.75C2.33579 12 2 11.6642 2 11.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 2.75C2 2.33579 2.33579 2 2.75 2H12.25C12.6642 2 13 2.33579 13 2.75C13 3.16421 12.6642 3.5 12.25 3.5H2.75C2.33579 3.5 2 3.16421 2 2.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 6.25C2 5.83579 2.33579 5.5 2.75 5.5H8.25C8.66421 5.5 9 5.83579 9 6.25C9 6.66421 8.66421 7 8.25 7H2.75C2.33579 7 2 6.66421 2 6.25ZM2 9.75C2 9.33579 2.33579 9 2.75 9H6.25C6.66421 9 7 9.33579 7 9.75C7 10.1642 6.66421 10.5 6.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.7803 11.4697C15.0732 11.7626 15.0732 12.2374 14.7803 12.5303L12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L9.21967 12.5303C8.92678 12.2374 8.92678 11.7626 9.21967 11.4697C9.51256 11.1768 9.98744 11.1768 10.2803 11.4697L11.25 12.4393V6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75V12.4393L13.7197 11.4697C14.0126 11.1768 14.4874 11.1768 14.7803 11.4697Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 4.5C2.25 4.08579 2.58579 3.75 3 3.75H17.25C17.6642 3.75 18 4.08579 18 4.5C18 4.91421 17.6642 5.25 17.25 5.25H3C2.58579 5.25 2.25 4.91421 2.25 4.5ZM2.25 9C2.25 8.58579 2.58579 8.25 3 8.25H12.75C13.1642 8.25 13.5 8.58579 13.5 9C13.5 9.41421 13.1642 9.75 12.75 9.75H3C2.58579 9.75 2.25 9.41421 2.25 9ZM17.25 8.25C17.6642 8.25 18 8.58579 18 9V19.1893L20.4697 16.7197C20.7626 16.4268 21.2374 16.4268 21.5303 16.7197C21.8232 17.0126 21.8232 17.4874 21.5303 17.7803L17.7803 21.5303C17.4874 21.8232 17.0126 21.8232 16.7197 21.5303L12.9697 17.7803C12.6768 17.4874 12.6768 17.0126 12.9697 16.7197C13.2626 16.4268 13.7374 16.4268 14.0303 16.7197L16.5 19.1893V9C16.5 8.58579 16.8358 8.25 17.25 8.25ZM2.25 13.5C2.25 13.0858 2.58579 12.75 3 12.75H12.75C13.1642 12.75 13.5 13.0858 13.5 13.5C13.5 13.9142 13.1642 14.25 12.75 14.25H3C2.58579 14.25 2.25 13.9142 2.25 13.5Z"
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
@prop ariaLabel = 'bars arrow down'
@prop ...restProps
-->
