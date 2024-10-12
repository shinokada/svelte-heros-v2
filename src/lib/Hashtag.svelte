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
    ariaLabel = 'hashtag',
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
      d="M5.25 8.25H20.25M3.75 15.75H18.75M16.95 2.25L13.05 21.75M10.9503 2.25L7.05029 21.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.49306 2.85248C9.54965 2.44215 9.2629 2.06363 8.85257 2.00703C8.44224 1.95044 8.06372 2.23719 8.00712 2.64752L7.54471 6H4.19831C3.7841 6 3.44831 6.33579 3.44831 6.75C3.44831 7.16421 3.7841 7.5 4.19831 7.5H7.33782L6.64816 12.5H3.30176C2.88754 12.5 2.55176 12.8358 2.55176 13.25C2.55176 13.6642 2.88754 14 3.30176 14H6.44127L6.00713 17.1475C5.95053 17.5578 6.23728 17.9364 6.64761 17.993C7.05794 18.0496 7.43646 17.7628 7.49306 17.3525L7.95547 14H10.9413L10.5071 17.1475C10.4505 17.5578 10.7373 17.9364 11.1476 17.993C11.5579 18.0496 11.9365 17.7628 11.9931 17.3525L12.4555 14H15.8018C16.216 14 16.5518 13.6642 16.5518 13.25C16.5518 12.8358 16.216 12.5 15.8018 12.5H12.6624L13.352 7.5H16.6983C17.1125 7.5 17.4483 7.16421 17.4483 6.75C17.4483 6.33579 17.1125 6 16.6983 6H13.5589L13.9931 2.85248C14.0497 2.44215 13.7629 2.06363 13.3526 2.00703C12.9422 1.95044 12.5637 2.23719 12.5071 2.64752L12.0447 6H9.05892L9.49306 2.85248ZM8.85202 7.5L8.16236 12.5H11.1482L11.8378 7.5H8.85202Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.48677 2.89033C7.56427 2.48344 7.29725 2.09075 6.89035 2.01325C6.48345 1.93574 6.09077 2.20277 6.01326 2.60967L5.55827 4.99835H3.60963C3.19542 4.99835 2.85963 5.33414 2.85963 5.74835C2.85963 6.16257 3.19542 6.49835 3.60963 6.49835H5.27256L4.7016 9.49589H2.74963C2.33542 9.49589 1.99963 9.83168 1.99963 10.2459C1.99963 10.6601 2.33542 10.9959 2.74963 10.9959H4.41588L4.01326 13.1097C3.93576 13.5166 4.20278 13.9092 4.60968 13.9868C5.01658 14.0643 5.40926 13.7972 5.48677 13.3903L5.94285 10.9959H8.91589L8.51326 13.1097C8.43576 13.5166 8.70278 13.9092 9.10968 13.9868C9.51658 14.0643 9.90927 13.7972 9.98677 13.3903L10.4429 10.9959H12.3896C12.8038 10.9959 13.1396 10.6601 13.1396 10.2459C13.1396 9.83168 12.8038 9.49589 12.3896 9.49589H10.7286L11.2995 6.49835H13.2496C13.6638 6.49835 13.9996 6.16257 13.9996 5.74835C13.9996 5.33414 13.6638 4.99835 13.2496 4.99835H11.5852L11.9868 2.89033C12.0643 2.48344 11.7972 2.09075 11.3903 2.01325C10.9835 1.93574 10.5908 2.20277 10.5133 2.60967L10.0583 4.99835H7.08524L7.48677 2.89033ZM6.79953 6.49835L6.22857 9.49589H9.2016L9.77256 6.49835H6.79953Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0974 1.51457C11.5035 1.59581 11.767 1.99092 11.6857 2.39709L10.6651 7.50001H15.1351L16.2146 2.10292C16.2958 1.69675 16.6909 1.43334 17.0971 1.51457C17.5033 1.59581 17.7667 1.99092 17.6854 2.39709L16.6649 7.50001H20.25C20.6642 7.50001 21 7.83579 21 8.25001C21 8.66422 20.6642 9.00001 20.25 9.00001H16.3649L15.1649 15H18.75C19.1642 15 19.5 15.3358 19.5 15.75C19.5 16.1642 19.1642 16.5 18.75 16.5H14.8649L13.7854 21.8971C13.7042 22.3033 13.3091 22.5667 12.9029 22.4854C12.4967 22.4042 12.2333 22.0091 12.3146 21.6029L13.3351 16.5H8.86515L7.78573 21.8971C7.70449 22.3033 7.30938 22.5667 6.90321 22.4854C6.49704 22.4042 6.23362 22.0091 6.31486 21.6029L7.33544 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75C3 15.3358 3.33579 15 3.75 15H7.63544L8.83544 9.00001H5.25C4.83579 9.00001 4.5 8.66422 4.5 8.25001C4.5 7.83579 4.83579 7.50001 5.25 7.50001H9.13544L10.2149 2.10292C10.2961 1.69675 10.6912 1.43334 11.0974 1.51457ZM10.3651 9.00001L9.16515 15H13.6351L14.8351 9.00001H10.3651Z"
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
@prop ariaLabel = 'hashtag'
@prop ...restProps
-->
