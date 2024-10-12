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
    ariaLabel = 'map',
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
      d="M9 6.75002V15M15 9.00002V17.25M15.5031 20.7485L20.3781 18.311C20.7592 18.1204 21 17.7309 21 17.3047V4.82031C21 3.98401 20.1199 3.44007 19.3719 3.81408L15.5031 5.74847C15.1864 5.90683 14.8136 5.90683 14.4969 5.74847L9.50312 3.25158C9.1864 3.09322 8.8136 3.09322 8.49688 3.25158L3.62188 5.68908C3.24075 5.87965 3 6.26919 3 6.69531V19.1797C3 20.016 3.8801 20.56 4.62811 20.186L8.49688 18.2516C8.8136 18.0932 9.1864 18.0932 9.50312 18.2516L14.4969 20.7485C14.8136 20.9068 15.1864 20.9068 15.5031 20.7485Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.15686 2.17562C7.78961 2.02365 7.37706 2.02365 7.00981 2.17562L2.92647 3.86528C2.3657 4.09732 2 4.64441 2 5.2513V16.128C2 17.1967 3.08594 17.9226 4.07353 17.514L7.58333 16.0616L11.8431 17.8243C12.2104 17.9763 12.6229 17.9763 12.9902 17.8243L17.0735 16.1347C17.6343 15.9026 18 15.3555 18 14.7486V3.87199C18 2.8032 16.9141 2.07731 15.9265 2.48596L12.4167 3.9383L8.15686 2.17562ZM7.58008 5C7.99429 5 8.33008 5.33579 8.33008 5.75V12.25C8.33008 12.6642 7.99429 13 7.58008 13C7.16586 13 6.83008 12.6642 6.83008 12.25V5.75C6.83008 5.33579 7.16586 5 7.58008 5ZM13.1699 7.75C13.1699 7.33579 12.8341 7 12.4199 7C12.0057 7 11.6699 7.33579 11.6699 7.75V14.25C11.6699 14.6642 12.0057 15 12.4199 15C12.8341 15 13.1699 14.6642 13.1699 14.25V7.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.37005 2.25672C5.73828 2.03011 6.19746 2.0099 6.58419 2.20326L9.96225 3.89229L12.0949 2.5799C12.9277 2.06738 14 2.66657 14 3.64447V10.9703C14 11.4044 13.7748 11.8074 13.4051 12.0349L10.63 13.7427C10.2617 13.9693 9.80254 13.9895 9.41581 13.7961L6.03775 12.1071L3.90512 13.4195C3.07228 13.932 2 13.3328 2 12.3549V5.02909C2 4.59501 2.22519 4.19201 2.59488 3.96451L5.37005 2.25672ZM6 4C6.41421 4 6.75 4.33579 6.75 4.75V9.25C6.75 9.66421 6.41421 10 6 10C5.58579 10 5.25 9.66421 5.25 9.25V4.75C5.25 4.33579 5.58579 4 6 4ZM10.75 6.75C10.75 6.33579 10.4142 6 10 6C9.58579 6 9.25 6.33579 9.25 6.75V11.25C9.25 11.6642 9.58579 12 10 12C10.4142 12 10.75 11.6642 10.75 11.25V6.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.16147 2.58076C8.68934 2.31683 9.31066 2.31683 9.83853 2.58076L14.8323 5.07765C14.9379 5.13043 15.0621 5.13043 15.1677 5.07765L19.0365 3.14326C20.2832 2.51992 21.75 3.42647 21.75 4.82031V17.3047C21.75 18.0149 21.3487 18.6642 20.7135 18.9818L15.8385 21.4193C15.3107 21.6832 14.6893 21.6832 14.1615 21.4193L9.16771 18.9224C9.06213 18.8696 8.93787 18.8696 8.8323 18.9224L4.96353 20.8568C3.71683 21.4801 2.25 20.5736 2.25 19.1797V6.69531C2.25 5.98512 2.65125 5.33587 3.28647 5.01826L8.16147 2.58076ZM9 6.00002C9.41421 6.00002 9.75 6.3358 9.75 6.75002V15C9.75 15.4142 9.41421 15.75 9 15.75C8.58579 15.75 8.25 15.4142 8.25 15V6.75002C8.25 6.3358 8.58579 6.00002 9 6.00002ZM15.75 9.00002C15.75 8.5858 15.4142 8.25002 15 8.25002C14.5858 8.25002 14.25 8.5858 14.25 9.00002V17.25C14.25 17.6642 14.5858 18 15 18C15.4142 18 15.75 17.6642 15.75 17.25V9.00002Z"
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
@prop ariaLabel = 'map'
@prop ...restProps
-->
