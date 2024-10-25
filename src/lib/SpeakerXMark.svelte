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
    ariaLabel = 'speaker x mark',
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
      d="M17.25 9.74999L19.5 12M19.5 12L21.75 14.25M19.5 12L21.75 9.74999M19.5 12L17.25 14.25M6.75 8.24999L11.4697 3.53032C11.9421 3.05784 12.75 3.39247 12.75 4.06065V19.9393C12.75 20.6075 11.9421 20.9421 11.4697 20.4697L6.75 15.75H4.50905C3.62971 15.75 2.8059 15.2435 2.57237 14.3957C2.36224 13.6329 2.25 12.8296 2.25 12C2.25 11.1704 2.36224 10.367 2.57237 9.60423C2.8059 8.75646 3.62971 8.24999 4.50905 8.24999H6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M10.0475 3.06153C10.3221 3.18021 10.5 3.4508 10.5 3.75002V16.25C10.5 16.5492 10.3221 16.8198 10.0475 16.9385C9.7728 17.0572 9.45387 17.0012 9.23598 16.7962L5.20257 13H2.66724C2.35725 13 2.0792 12.8093 1.96756 12.5201C1.66534 11.7372 1.5 10.887 1.5 10C1.5 9.11302 1.66534 8.26287 1.96756 7.47993C2.0792 7.19074 2.35725 7.00002 2.66724 7.00002H5.20257L9.23598 3.20387C9.45387 2.99879 9.7728 2.94286 10.0475 3.06153Z"
      fill={color}
    />
    <path
      d="M13.7803 7.2197C13.4874 6.92681 13.0126 6.92681 12.7197 7.2197C12.4268 7.51259 12.4268 7.98747 12.7197 8.28036L14.4393 10L12.7197 11.7197C12.4268 12.0126 12.4268 12.4875 12.7197 12.7804C13.0126 13.0733 13.4874 13.0733 13.7803 12.7804L15.5 11.0607L17.2197 12.7804C17.5126 13.0733 17.9874 13.0733 18.2803 12.7804C18.5732 12.4875 18.5732 12.0126 18.2803 11.7197L16.5607 10L18.2803 8.28036C18.5732 7.98747 18.5732 7.51259 18.2803 7.2197C17.9874 6.92681 17.5126 6.92681 17.2197 7.2197L15.5 8.93937L13.7803 7.2197Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M7.55724 2.06583C7.82667 2.18682 8 2.45467 8 2.75001V13.25C8 13.5454 7.82667 13.8132 7.55724 13.9342C7.28782 14.0552 6.97247 14.0068 6.75173 13.8106L3.58984 11H2C1.44772 11 1 10.5523 1 10V6C1 5.44772 1.44772 5 2 5H3.58987L6.75173 2.18946C6.97247 1.99324 7.28782 1.94484 7.55724 2.06583Z"
      fill={color}
    />
    <path
      d="M11.2803 5.71967C10.9874 5.42678 10.5126 5.42678 10.2197 5.71967C9.92678 6.01256 9.92678 6.48744 10.2197 6.78033L11.4393 8L10.2197 9.21967C9.92678 9.51256 9.92678 9.98744 10.2197 10.2803C10.5126 10.5732 10.9874 10.5732 11.2803 10.2803L12.5 9.06066L13.7197 10.2803C14.0126 10.5732 14.4874 10.5732 14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967L13.5607 8L14.7803 6.78033C15.0732 6.48744 15.0732 6.01256 14.7803 5.71967C14.4874 5.42678 14.0126 5.42678 13.7197 5.71967L12.5 6.93934L11.2803 5.71967Z"
      fill={color}
    />
  {:else}
    <path
      d="M13.5 4.06069C13.5 2.72433 11.8843 2.05508 10.9393 3.00003L6.43934 7.50003H4.50905C3.36772 7.50003 2.19106 8.16447 1.8493 9.40508C1.62147 10.2322 1.5 11.1025 1.5 12C1.5 12.8975 1.62147 13.7679 1.8493 14.595C2.19106 15.8356 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.945 13.5 21.2757 13.5 19.9394V4.06069Z"
      fill={color}
    />
    <path
      d="M17.7803 9.21969C17.4874 8.92679 17.0126 8.92679 16.7197 9.21969C16.4268 9.51258 16.4268 9.98745 16.7197 10.2803L18.4393 12L16.7197 13.7197C16.4268 14.0126 16.4268 14.4875 16.7197 14.7803C17.0126 15.0732 17.4874 15.0732 17.7803 14.7803L19.5 13.0607L21.2197 14.7803C21.5126 15.0732 21.9874 15.0732 22.2803 14.7803C22.5732 14.4875 22.5732 14.0126 22.2803 13.7197L20.5607 12L22.2803 10.2803C22.5732 9.98745 22.5732 9.51258 22.2803 9.21969C21.9874 8.92679 21.5126 8.92679 21.2197 9.21969L19.5 10.9394L17.7803 9.21969Z"
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
@prop ariaLabel = 'speaker x mark'
@prop ...restProps
-->
