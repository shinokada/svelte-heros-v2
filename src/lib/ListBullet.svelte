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
    ariaLabel = 'list bullet',
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
      d="M8.25 6.75H20.25M8.25 12H20.25M8.25 17.25H20.25M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75ZM3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12ZM3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75ZM6 10C6 9.58579 6.33579 9.25 6.75 9.25H17.25C17.6642 9.25 18 9.58579 18 10C18 10.4142 17.6642 10.75 17.25 10.75H6.75C6.33579 10.75 6 10.4142 6 10ZM6 15.25C6 14.8358 6.33579 14.5 6.75 14.5H17.25C17.6642 14.5 18 14.8358 18 15.25C18 15.6642 17.6642 16 17.25 16H6.75C6.33579 16 6 15.6642 6 15.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.98999 4.75C1.98999 4.19772 2.43771 3.75 2.98999 3.75H2.99999C3.55228 3.75 3.99999 4.19772 3.99999 4.75V4.76C3.99999 5.31228 3.55228 5.76 2.99999 5.76H2.98999C2.43771 5.76 1.98999 5.31228 1.98999 4.76V4.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.98999 15.25C1.98999 14.6977 2.43771 14.25 2.98999 14.25H2.99999C3.55228 14.25 3.99999 14.6977 3.99999 15.25V15.26C3.99999 15.8123 3.55228 16.26 2.99999 16.26H2.98999C2.43771 16.26 1.98999 15.8123 1.98999 15.26V15.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.98999 10C1.98999 9.44772 2.43771 9 2.98999 9H2.99999C3.55228 9 3.99999 9.44772 3.99999 10V10.01C3.99999 10.5623 3.55228 11.01 2.99999 11.01H2.98999C2.43771 11.01 1.98999 10.5623 1.98999 10.01V10Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3 4.75C3.55228 4.75 4 4.30228 4 3.75C4 3.19772 3.55228 2.75 3 2.75C2.44772 2.75 2 3.19772 2 3.75C2 4.30228 2.44772 4.75 3 4.75Z"
      fill={color}
    />
    <path
      d="M6.25 3C5.83579 3 5.5 3.33579 5.5 3.75C5.5 4.16421 5.83579 4.5 6.25 4.5H13.25C13.6642 4.5 14 4.16421 14 3.75C14 3.33579 13.6642 3 13.25 3H6.25Z"
      fill={color}
    />
    <path
      d="M6.25 7.25C5.83579 7.25 5.5 7.58579 5.5 8C5.5 8.41421 5.83579 8.75 6.25 8.75H13.25C13.6642 8.75 14 8.41421 14 8C14 7.58579 13.6642 7.25 13.25 7.25H6.25Z"
      fill={color}
    />
    <path
      d="M6.25 11.5C5.83579 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.83579 13 6.25 13H13.25C13.6642 13 14 12.6642 14 12.25C14 11.8358 13.6642 11.5 13.25 11.5H6.25Z"
      fill={color}
    />
    <path
      d="M4 12.25C4 12.8023 3.55228 13.25 3 13.25C2.44772 13.25 2 12.8023 2 12.25C2 11.6977 2.44772 11.25 3 11.25C3.55228 11.25 4 11.6977 4 12.25Z"
      fill={color}
    />
    <path
      d="M3 9C3.55228 9 4 8.55229 4 8C4 7.44772 3.55228 7 3 7C2.44772 7 2 7.44772 2 8C2 8.55229 2.44772 9 3 9Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.625 6.75C2.625 6.12868 3.12868 5.625 3.75 5.625C4.37132 5.625 4.875 6.12868 4.875 6.75C4.875 7.37132 4.37132 7.875 3.75 7.875C3.12868 7.875 2.625 7.37132 2.625 6.75ZM7.5 6.75C7.5 6.33579 7.83579 6 8.25 6H20.25C20.6642 6 21 6.33579 21 6.75C21 7.16421 20.6642 7.5 20.25 7.5H8.25C7.83579 7.5 7.5 7.16421 7.5 6.75ZM2.625 12C2.625 11.3787 3.12868 10.875 3.75 10.875C4.37132 10.875 4.875 11.3787 4.875 12C4.875 12.6213 4.37132 13.125 3.75 13.125C3.12868 13.125 2.625 12.6213 2.625 12ZM7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12ZM2.625 17.25C2.625 16.6287 3.12868 16.125 3.75 16.125C4.37132 16.125 4.875 16.6287 4.875 17.25C4.875 17.8713 4.37132 18.375 3.75 18.375C3.12868 18.375 2.625 17.8713 2.625 17.25ZM7.5 17.25C7.5 16.8358 7.83579 16.5 8.25 16.5H20.25C20.6642 16.5 21 16.8358 21 17.25C21 17.6642 20.6642 18 20.25 18H8.25C7.83579 18 7.5 17.6642 7.5 17.25Z"
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
@prop ariaLabel = 'list bullet'
@prop ...restProps
-->
