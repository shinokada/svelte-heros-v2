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
    ariaLabel = 'map pin',
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
      d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.69008 18.933L9.69288 18.9342C9.89 19.02 10 19 10 19C10 19 10.11 19.02 10.3079 18.9339L10.3099 18.933L10.3157 18.9304L10.3338 18.922C10.3488 18.915 10.3697 18.9052 10.3959 18.8926C10.4484 18.8673 10.5225 18.8306 10.6153 18.7822C10.8008 18.6855 11.0612 18.5419 11.3717 18.3495C11.9912 17.9655 12.8174 17.3826 13.6455 16.5844C15.3022 14.9876 17 12.4925 17 9C17 5.13401 13.866 2 10 2C6.13401 2 3 5.13401 3 9C3 12.4925 4.69783 14.9876 6.35452 16.5844C7.18264 17.3826 8.00877 17.9655 8.62834 18.3495C8.93879 18.5419 9.19922 18.6855 9.38467 18.7822C9.47745 18.8306 9.55163 18.8673 9.60409 18.8926C9.63033 18.9052 9.65116 18.915 9.66619 18.922L9.68435 18.9304L9.69008 18.933ZM10 11.25C11.2426 11.25 12.25 10.2426 12.25 9C12.25 7.75736 11.2426 6.75 10 6.75C8.75736 6.75 7.75 7.75736 7.75 9C7.75 10.2426 8.75736 11.25 10 11.25Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.53854 14.8413L7.54225 14.8441L7.54402 14.8455C7.81 15.05 8.19 15.05 8.45647 14.8451L8.45775 14.8441L8.46146 14.8413L8.47342 14.832C8.48058 14.8264 8.48976 14.8192 8.50087 14.8104C8.50524 14.8069 8.5099 14.8032 8.51485 14.7993C8.54997 14.7713 8.59982 14.7311 8.66228 14.6791C8.78713 14.5752 8.96279 14.4243 9.17232 14.2312C9.59046 13.8459 10.1484 13.2881 10.7079 12.5969C11.8105 11.2349 13 9.25535 13 7C13 4.23858 10.7614 2 8 2C5.23858 2 3 4.23858 3 7C3 9.25535 4.18946 11.2349 5.29207 12.5969C5.8516 13.2881 6.40954 13.8459 6.82768 14.2312C7.03721 14.4243 7.21286 14.5752 7.33772 14.6791C7.40018 14.7311 7.45003 14.7713 7.48515 14.7993C7.50272 14.8133 7.51661 14.8242 7.52658 14.832L7.53854 14.8413ZM8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5397 22.351C11.57 22.3685 11.5937 22.3821 11.6105 22.3915L11.6384 22.4071C11.8613 22.5294 12.1378 22.5285 12.3608 22.4075L12.3895 22.3915C12.4063 22.3821 12.43 22.3685 12.4603 22.351C12.5207 22.316 12.607 22.265 12.7155 22.1982C12.9325 22.0646 13.2388 21.8676 13.6046 21.6091C14.3351 21.0931 15.3097 20.3274 16.2865 19.3273C18.2307 17.3368 20.25 14.3462 20.25 10.5C20.25 5.94365 16.5563 2.25 12 2.25C7.44365 2.25 3.75 5.94365 3.75 10.5C3.75 14.3462 5.76932 17.3368 7.71346 19.3273C8.69025 20.3274 9.66491 21.0931 10.3954 21.6091C10.7612 21.8676 11.0675 22.0646 11.2845 22.1982C11.393 22.265 11.4793 22.316 11.5397 22.351ZM12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
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
@prop ariaLabel = 'map pin'
@prop ...restProps
-->
