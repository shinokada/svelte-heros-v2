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
    ariaLabel = 'shield check',
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
      d="M9 12.7498L11.25 14.9998L15 9.74985M12 2.71411C9.8495 4.75073 6.94563 5.99986 3.75 5.99986C3.69922 5.99986 3.64852 5.99955 3.59789 5.99892C3.2099 7.17903 3 8.43995 3 9.74991C3 15.3414 6.82432 20.0397 12 21.3719C17.1757 20.0397 21 15.3414 21 9.74991C21 8.43995 20.7901 7.17903 20.4021 5.99892C20.3515 5.99955 20.3008 5.99986 20.25 5.99986C17.0544 5.99986 14.1505 4.75073 12 2.71411Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.66109 2.23657C9.85709 2.07381 10.1429 2.07381 10.3389 2.23657C12.2777 3.84642 14.7315 4.85747 17.4166 4.98601C17.658 4.99756 17.8641 5.17189 17.8957 5.41143C17.9645 5.93129 18 6.46164 18 7.00028C18 12.1627 14.7401 16.5637 10.1665 18.2572C10.0593 18.2969 9.94102 18.2969 9.83378 18.2572C5.26004 16.5638 2 12.1627 2 7.00016C2 6.46156 2.03548 5.93125 2.10424 5.41144C2.13593 5.17189 2.34202 4.99756 2.58337 4.98601C5.2685 4.85748 7.72231 3.84643 9.66109 2.23657ZM13.8566 8.19113C14.1002 7.85614 14.0261 7.38708 13.6911 7.14345C13.3561 6.89982 12.8871 6.97388 12.6434 7.30887L9.15969 12.099L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.71967 13.7803C8.87477 13.9354 9.08999 14.0149 9.30867 13.9977C9.52734 13.9805 9.72754 13.8685 9.85655 13.6911L13.8566 8.19113Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.50019 1.70873C8.21543 1.45386 7.78457 1.45386 7.49981 1.70873C6.1781 2.89169 4.50633 3.6889 2.65985 3.92627C2.29508 3.97316 2.01813 4.27764 2.0059 4.64521C2.00198 4.7631 2 4.88145 2 5.00023C2 9.05223 4.29542 12.5669 7.65336 14.317C7.87059 14.4302 8.12941 14.4302 8.34664 14.317C11.7046 12.5669 14 9.05223 14 5.00023C14 4.88145 13.998 4.7631 13.9941 4.64522C13.9819 4.27764 13.7049 3.97316 13.3401 3.92627C11.4937 3.6889 9.8219 2.89169 8.50019 1.70873ZM10.8398 7.21337C11.0957 6.88766 11.0391 6.41617 10.7134 6.16026C10.3877 5.90435 9.91618 5.96093 9.66027 6.28664L7.39384 9.17119L6.23811 8.18056C5.92361 7.91099 5.45014 7.94741 5.18057 8.26191C4.911 8.5764 4.94743 9.04988 5.26192 9.31944L7.01192 10.8194C7.16716 10.9525 7.36999 11.0164 7.57347 10.9964C7.77695 10.9764 7.96343 10.8741 8.08975 10.7134L10.8398 7.21337Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5157 2.1698C12.2265 1.89587 11.7735 1.89587 11.4843 2.1698C9.46752 4.07977 6.74624 5.25011 3.75 5.25011C3.70233 5.25011 3.65473 5.24981 3.60721 5.24922C3.27984 5.24515 2.98767 5.4539 2.88541 5.76491C2.47287 7.01968 2.25 8.35963 2.25 9.75015C2.25 15.6922 6.31406 20.6831 11.8131 22.0984C11.9357 22.13 12.0643 22.13 12.1869 22.0984C17.6859 20.6831 21.75 15.6922 21.75 9.75015C21.75 8.35963 21.5271 7.01968 21.1146 5.76491C21.0123 5.4539 20.7202 5.24515 20.3928 5.24922C20.3453 5.24981 20.2977 5.25011 20.25 5.25011C17.2538 5.25011 14.5325 4.07977 12.5157 2.1698ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z"
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
@prop ariaLabel = 'shield check'
@prop ...restProps
-->
