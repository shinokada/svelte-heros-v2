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
    ariaLabel = 'key',
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
      d="M15.75 5.25C17.4069 5.25 18.75 6.59315 18.75 8.25M21.75 8.25C21.75 11.5637 19.0637 14.25 15.75 14.25C15.3993 14.25 15.0555 14.2199 14.7213 14.1622C14.1583 14.0649 13.562 14.188 13.158 14.592L10.5 17.25H8.25V19.5H6V21.75H2.25V18.932C2.25 18.3352 2.48705 17.7629 2.90901 17.341L9.408 10.842C9.81202 10.438 9.93512 9.84172 9.83785 9.2787C9.7801 8.94446 9.75 8.60074 9.75 8.25C9.75 4.93629 12.4363 2.25 15.75 2.25C19.0637 2.25 21.75 4.93629 21.75 8.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 7C8 4.23858 10.2386 2 13 2C15.7614 2 18 4.23858 18 7C18 9.76142 15.7614 12 13 12C12.5177 12 12.0513 11.9317 11.61 11.8042L9.70711 13.7071C9.51957 13.8946 9.26522 14 9 14H8V15C8 15.5523 7.55228 16 7 16H6V17C6 17.5523 5.55228 18 5 18H3C2.44772 18 2 17.5523 2 17V15C2 14.7348 2.10536 14.4804 2.29289 14.2929L8.19576 8.39003C8.0683 7.94874 8 7.48234 8 7ZM13 4C12.5858 4 12.25 4.33579 12.25 4.75C12.25 5.16421 12.5858 5.5 13 5.5C13.8284 5.5 14.5 6.17157 14.5 7C14.5 7.41421 14.8358 7.75 15.25 7.75C15.6642 7.75 16 7.41421 16 7C16 5.34315 14.6569 4 13 4Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 6C14 8.20914 12.2091 10 10 10C9.69101 10 9.39021 9.96497 9.10135 9.89865L7.14645 11.8536C7.05268 11.9473 6.9255 12 6.79289 12H5V13.5C5 13.7761 4.77614 14 4.5 14H2.5C2.22386 14 2 13.7761 2 13.5V11.2071C2 11.0745 2.05268 10.9473 2.14645 10.8536L6.10135 6.89865C6.03503 6.60979 6 6.30899 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6ZM10 4C9.58579 4 9.25 4.33579 9.25 4.75C9.25 5.16421 9.58579 5.5 10 5.5C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.41421 10.8358 6.75 11.25 6.75C11.6642 6.75 12 6.41421 12 6C12 4.89543 11.1046 4 10 4Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.75 1.5C12.0221 1.5 9 4.52208 9 8.25C9 8.64372 9.03379 9.03016 9.0988 9.40639C9.16599 9.79527 9.06678 10.1226 8.87767 10.3117L2.37868 16.8107C1.81607 17.3733 1.5 18.1363 1.5 18.932V21.75C1.5 22.1642 1.83579 22.5 2.25 22.5H6C6.41421 22.5 6.75 22.1642 6.75 21.75V20.25H8.25C8.66421 20.25 9 19.9142 9 19.5V18H10.5C10.6989 18 10.8897 17.921 11.0303 17.7803L13.6883 15.1223C13.8774 14.9332 14.2047 14.834 14.5936 14.9012C14.9698 14.9662 15.3563 15 15.75 15C19.4779 15 22.5 11.9779 22.5 8.25C22.5 4.52208 19.4779 1.5 15.75 1.5ZM15.75 4.5C15.3358 4.5 15 4.83579 15 5.25C15 5.66421 15.3358 6 15.75 6C16.9926 6 18 7.00736 18 8.25C18 8.66421 18.3358 9 18.75 9C19.1642 9 19.5 8.66421 19.5 8.25C19.5 6.17893 17.8211 4.5 15.75 4.5Z"
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
@prop ariaLabel = 'key'
@prop ...restProps
-->
