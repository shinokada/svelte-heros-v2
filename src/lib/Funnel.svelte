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
    ariaLabel = 'funnel',
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
      d="M12.0001 3C14.7548 3 17.4552 3.23205 20.0831 3.67767C20.6159 3.76803 21 4.23355 21 4.77402V5.81802C21 6.41476 20.7629 6.98705 20.341 7.40901L14.909 12.841C14.4871 13.2629 14.25 13.8352 14.25 14.432V17.3594C14.25 18.2117 13.7685 18.9908 13.0062 19.3719L9.75 21V14.432C9.75 13.8352 9.51295 13.2629 9.09099 12.841L3.65901 7.40901C3.23705 6.98705 3 6.41476 3 5.81802V4.77404C3 4.23357 3.38408 3.76805 3.91694 3.67769C6.54479 3.23206 9.24533 3 12.0001 3Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.62803 1.60102C5.02718 1.2056 7.48986 1 10 1C12.5101 1 14.9728 1.2056 17.372 1.60102C17.7342 1.66072 18 1.97389 18 2.34103V4.62868C18 5.22542 17.7629 5.79771 17.341 6.21967L12.659 10.9017C12.2371 11.3236 12 11.8959 12 12.4926V15.5291C12 16.2126 11.6893 16.859 11.1556 17.286L9.21852 18.8357C8.99339 19.0158 8.68496 19.0509 8.42511 18.926C8.16526 18.8011 8 18.5383 8 18.25V12.4926C8 11.8959 7.76295 11.3236 7.34099 10.9017L2.65901 6.21967C2.23705 5.79771 2 5.22542 2 4.62868V2.34103C2 1.97389 2.26578 1.66072 2.62803 1.60102Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M14 2C14 1.44772 13.5523 1 13 1H3C2.44772 1 2 1.44772 2 2V4.17157C2 4.70201 2.21071 5.21071 2.58579 5.58579L5.41421 8.41421C5.78929 8.78929 6 9.29799 6 9.82843V14.191C6 14.5627 6.39116 14.8044 6.72361 14.6382L8.89443 13.5528C9.572 13.214 10 12.5215 10 11.7639V9.82843C10 9.29799 10.2107 8.78929 10.5858 8.41421L13.4142 5.58579C13.7893 5.21071 14 4.70201 14 4.17157V2Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.79154 2.93825C6.46066 2.48562 9.20314 2.25 12.0001 2.25C14.7969 2.25 17.5394 2.48561 20.2085 2.93822C21.1108 3.09125 21.75 3.87676 21.75 4.77402V5.81802C21.75 6.61367 21.4339 7.37673 20.8713 7.93934L14.6893 14.1213C14.408 14.4026 14.25 14.7842 14.25 15.182V18.1094C14.25 19.2457 13.608 20.2845 12.5916 20.7927L10.8354 21.6708C10.6029 21.7871 10.3268 21.7746 10.1057 21.638C9.88459 21.5013 9.75 21.2599 9.75 21V15.182C9.75 14.7842 9.59196 14.4026 9.31066 14.1213L3.12868 7.93934C2.56607 7.37673 2.25 6.61367 2.25 5.81802V4.77404C2.25 3.87678 2.88917 3.09127 3.79154 2.93825Z"
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
@prop ariaLabel = 'funnel'
@prop ...restProps
-->
