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
    ariaLabel = 'shield exclamation',
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
      d="M12 9V12.75M12 2.71426C9.8495 4.75089 6.94563 6.00001 3.75 6.00001C3.69922 6.00001 3.64852 5.9997 3.59789 5.99907C3.2099 7.17918 3 8.44011 3 9.75006C3 15.3416 6.82432 20.0399 12 21.372C17.1757 20.0399 21 15.3416 21 9.75006C21 8.44011 20.7901 7.17918 20.4021 5.99907C20.3515 5.9997 20.3008 6.00001 20.25 6.00001C17.0544 6.00001 14.1505 4.75089 12 2.71426ZM12 15.75H12.0075V15.7575H12V15.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.3389 2.23663C10.1429 2.07387 9.85709 2.07387 9.66109 2.23663C7.72231 3.84649 5.2685 4.85754 2.58337 4.98607C2.34202 4.99762 2.13593 5.17195 2.10424 5.4115C2.03548 5.93131 2 6.46162 2 7.00022C2 12.1628 5.26004 16.5639 9.83378 18.2573C9.94102 18.297 10.0593 18.297 10.1665 18.2573C14.7401 16.5638 18 12.1628 18 7.00035C18 6.4617 17.9645 5.93135 17.8957 5.41149C17.8641 5.17195 17.658 4.99762 17.4166 4.98607C14.7315 4.85754 12.2777 3.84649 10.3389 2.23663ZM10 6C10.4142 6 10.75 6.33579 10.75 6.75V10.25C10.75 10.6642 10.4142 11 10 11C9.58579 11 9.25 10.6642 9.25 10.25L9.25 6.75C9.25 6.33579 9.58579 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.49981 1.70873C7.78457 1.45386 8.21543 1.45386 8.50019 1.70873C9.8219 2.89169 11.4937 3.6889 13.3401 3.92627C13.7049 3.97316 13.9819 4.27764 13.9941 4.64522C13.998 4.7631 14 4.88145 14 5.00023C14 9.05223 11.7046 12.5669 8.34664 14.317C8.12941 14.4302 7.87059 14.4302 7.65336 14.317C4.29542 12.5669 2 9.05223 2 5.00023C2 4.88145 2.00198 4.7631 2.0059 4.64521C2.01813 4.27764 2.29508 3.97316 2.65985 3.92627C4.50633 3.6889 6.1781 2.89169 7.49981 1.70873ZM8 5C8.41421 5 8.75 5.33579 8.75 5.75V7.75C8.75 8.16421 8.41421 8.5 8 8.5C7.58579 8.5 7.25 8.16421 7.25 7.75V5.75C7.25 5.33579 7.58579 5 8 5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4843 2.16971C11.7735 1.89578 12.2265 1.89578 12.5157 2.16971C14.5325 4.07968 17.2538 5.25001 20.25 5.25001C20.2977 5.25001 20.3453 5.24972 20.3928 5.24913C20.7202 5.24506 21.0123 5.45381 21.1146 5.76482C21.5271 7.01958 21.75 8.35954 21.75 9.75006C21.75 15.6921 17.6859 20.683 12.1869 22.0983C12.0643 22.1299 11.9357 22.1299 11.8131 22.0983C6.31406 20.683 2.25 15.6921 2.25 9.75006C2.25 8.35954 2.47287 7.01958 2.88541 5.76482C2.98767 5.45381 3.27984 5.24506 3.60721 5.24913C3.65473 5.24972 3.70233 5.25001 3.75 5.25001C6.74624 5.25001 9.46752 4.07968 11.4843 2.16971ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V9C11.25 8.58579 11.5858 8.25 12 8.25ZM12 15C11.5858 15 11.25 15.3358 11.25 15.75V15.7575C11.25 16.1717 11.5858 16.5075 12 16.5075H12.0075C12.4217 16.5075 12.7575 16.1717 12.7575 15.7575V15.75C12.7575 15.3358 12.4217 15 12.0075 15H12Z"
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
@prop ariaLabel = 'shield exclamation'
@prop ...restProps
-->
