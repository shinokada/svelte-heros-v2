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
    ariaLabel = 'flag',
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
      d="M3 3V4.5M3 21V15M3 15L5.77009 14.3075C7.85435 13.7864 10.0562 14.0281 11.9778 14.9889L12.0856 15.0428C13.9687 15.9844 16.1224 16.2359 18.1718 15.7537L21.2861 15.0209C21.097 13.2899 21 11.5313 21 9.75C21 7.98343 21.0954 6.23914 21.2814 4.52202L18.1718 5.25369C16.1224 5.73591 13.9687 5.48435 12.0856 4.54278L11.9778 4.48892C10.0562 3.52812 7.85435 3.28641 5.77009 3.80748L3 4.5M3 15V4.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.5 2.75C3.5 2.33579 3.16421 2 2.75 2C2.33579 2 2 2.33579 2 2.75V17.25C2 17.6642 2.33579 18 2.75 18C3.16421 18 3.5 17.6642 3.5 17.25V12.8585L5.15742 12.5096C6.60458 12.2049 8.11248 12.407 9.42842 13.0818C11.2723 14.0274 13.4125 14.2155 15.393 13.6061L17.4706 12.9668C17.7853 12.87 18 12.5793 18 12.25V3.75C18 3.52398 17.8981 3.31001 17.7226 3.1676C17.547 3.02519 17.3167 2.96952 17.0955 3.01609L14.7157 3.51709C13.3151 3.81195 11.8585 3.68564 10.5296 3.15406L10.0275 2.95322C8.42359 2.31166 6.66566 2.15921 4.97524 2.51509L3.5 2.82566V2.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M2.75 2C2.33579 2 2 2.33579 2 2.75V13.25C2 13.6642 2.33579 14 2.75 14C3.16421 14 3.5 13.6642 3.5 13.25V10.6255L3.83069 10.5428C5.23054 10.1928 6.7094 10.3552 8 11.0005C9.2906 11.6458 10.7695 11.8081 12.1693 11.4581L13.6498 11.088C13.8556 11.0366 14 10.8517 14 10.6395V3.56111C14 3.27633 13.7324 3.06737 13.4561 3.13644L12.1693 3.45814C10.7695 3.8081 9.2906 3.64576 8 3.00046C6.7094 2.35517 5.23054 2.19283 3.8307 2.54279L3.49012 2.62794C3.43182 2.27178 3.12265 2 2.75 2Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 2.25C3.41421 2.25 3.75 2.58579 3.75 3V3.53942L5.58819 3.07987C7.84613 2.51539 10.2315 2.77724 12.3132 3.8181L12.421 3.87196C14.1472 4.73507 16.1214 4.96567 18 4.52363L21.1096 3.79196C21.3465 3.73622 21.5958 3.79888 21.7781 3.96005C21.9605 4.12121 22.0533 4.36083 22.0271 4.60278C21.844 6.29313 21.75 8.01046 21.75 9.75C21.75 11.504 21.8455 13.2355 22.0317 14.9395C22.0728 15.3161 21.8266 15.6642 21.4579 15.751L18.3436 16.4837C16.1234 17.0062 13.7902 16.7336 11.7501 15.7136L11.6424 15.6597C9.88097 14.779 7.86256 14.5574 5.95199 15.0351L3.75 15.5856V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25Z"
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
@prop ariaLabel = 'flag'
@prop ...restProps
-->
