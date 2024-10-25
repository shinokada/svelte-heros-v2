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
    ariaLabel = 'arrow trending down',
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
      d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.21967 5.22211C1.51256 4.92922 1.98744 4.92922 2.28033 5.22211L7 9.94178L10.7685 6.17329C10.9187 6.02306 11.1256 5.94359 11.3378 5.95463C11.55 5.96568 11.7475 6.06619 11.8813 6.23121C13.5732 8.31739 14.888 10.7612 15.6939 13.4849L17.2685 10.7576C17.4756 10.3989 17.9343 10.276 18.293 10.4831C18.6517 10.6902 18.7747 11.1489 18.5675 11.5076L16.0927 15.7942C15.8856 16.153 15.4269 16.2759 15.0682 16.0688L10.7815 13.5939C10.4228 13.3868 10.2999 12.9281 10.507 12.5694C10.7141 12.2106 11.1728 12.0877 11.5315 12.2949L14.2401 13.8586C13.5741 11.6301 12.5419 9.60646 11.2278 7.83529L7.53033 11.5328C7.38968 11.6734 7.19891 11.7524 7 11.7524C6.80109 11.7524 6.61032 11.6734 6.46967 11.5328L1.21967 6.28277C0.926777 5.98988 0.926777 5.515 1.21967 5.22211Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.21967 4.21967C1.51256 3.92678 1.98744 3.92678 2.28033 4.21967L6 7.93934L8.76114 5.17821C8.92079 5.01855 9.14387 4.93932 9.36846 4.9625C9.59305 4.98568 9.79525 5.1088 9.91893 5.29769C11.0325 6.99835 11.9516 8.85818 12.6372 10.854L13.3655 9.59253C13.5726 9.23381 14.0313 9.1109 14.39 9.31801C14.7488 9.52512 14.8717 9.98381 14.6646 10.3425L13.0736 13.0982C12.9741 13.2705 12.8103 13.3962 12.6182 13.4476C12.426 13.4991 12.2213 13.4722 12.049 13.3727L9.29337 11.7817C8.93465 11.5746 8.81175 11.1159 9.01885 10.7572C9.22596 10.3985 9.68465 10.2756 10.0434 10.4827L11.1398 11.1157C10.611 9.62542 9.94346 8.21817 9.1561 6.90456L6.53033 9.53033C6.23744 9.82322 5.76256 9.82322 5.46967 9.53033L1.21967 5.28033C0.926777 4.98744 0.926777 4.51256 1.21967 4.21967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.71967 5.46967C2.01256 5.17678 2.48744 5.17678 2.78033 5.46967L9 11.6893L12.7558 7.9335C13.0214 7.66793 13.4425 7.63974 13.7411 7.86752C15.9037 9.51731 17.5581 11.8701 18.3164 14.7L18.6242 15.8488L20.9009 11.9056C21.108 11.5468 21.5667 11.4239 21.9254 11.631C22.2841 11.8381 22.407 12.2968 22.1999 12.6556L19.0179 18.1669C18.9185 18.3392 18.7546 18.4649 18.5625 18.5164C18.3704 18.5678 18.1657 18.5409 17.9934 18.4414L12.482 15.2595C12.1233 15.0523 12.0004 14.5937 12.2075 14.2349C12.4146 13.8762 12.8733 13.7533 13.232 13.9604L17.1753 16.2371L16.8675 15.0882C16.2588 12.8165 14.9977 10.8956 13.3392 9.47141L9.53033 13.2803C9.23744 13.5732 8.76256 13.5732 8.46967 13.2803L1.71967 6.53033C1.42678 6.23744 1.42678 5.76256 1.71967 5.46967Z"
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
@prop ariaLabel = 'arrow trending down'
@prop ...restProps
-->
