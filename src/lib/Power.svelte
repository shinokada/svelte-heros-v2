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
    ariaLabel = 'power',
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
      d="M5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604M12 3V12"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 2C10.4142 2 10.75 2.33579 10.75 2.75V10.25C10.75 10.6642 10.4142 11 10 11C9.58579 11 9.25 10.6642 9.25 10.25V2.75C9.25 2.33579 9.58579 2 10 2ZM5.40381 4.34315C5.6967 4.63604 5.6967 5.11091 5.40381 5.40381C2.8654 7.94221 2.8654 12.0578 5.40381 14.5962C7.94221 17.1346 12.0578 17.1346 14.5962 14.5962C17.1346 12.0578 17.1346 7.94221 14.5962 5.40381C14.3033 5.11091 14.3033 4.63604 14.5962 4.34315C14.8891 4.05025 15.364 4.05025 15.6569 4.34315C18.781 7.46734 18.781 12.5327 15.6569 15.6569C12.5327 18.781 7.46734 18.781 4.34315 15.6569C1.21895 12.5327 1.21895 7.46734 4.34315 4.34315C4.63604 4.05025 5.11091 4.05025 5.40381 4.34315Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 1C8.41421 1 8.75 1.33579 8.75 1.75V8.25C8.75 8.66421 8.41421 9 8 9C7.58579 9 7.25 8.66421 7.25 8.25V1.75C7.25 1.33579 7.58579 1 8 1ZM4.11091 3.05025C4.40381 3.34315 4.40381 3.81802 4.11091 4.11091C1.96303 6.2588 1.96303 9.7412 4.11091 11.8891C6.2588 14.037 9.7412 14.037 11.8891 11.8891C14.037 9.7412 14.037 6.2588 11.8891 4.11091C11.5962 3.81802 11.5962 3.34315 11.8891 3.05025C12.182 2.75736 12.6569 2.75736 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316582 10.2161 0.316583 5.78392 3.05025 3.05025C3.34315 2.75736 3.81802 2.75736 4.11091 3.05025Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V3C11.25 2.58579 11.5858 2.25 12 2.25ZM6.16637 5.10571C6.45926 5.3986 6.45926 5.87348 6.16637 6.16637C2.94454 9.38819 2.94454 14.6118 6.16637 17.8336C9.38819 21.0555 14.6118 21.0555 17.8336 17.8336C21.0555 14.6118 21.0555 9.38819 17.8336 6.16637C17.5407 5.87348 17.5407 5.3986 17.8336 5.10571C18.1265 4.81282 18.6014 4.81282 18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571C5.3986 4.81282 5.87348 4.81282 6.16637 5.10571Z"
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
@prop ariaLabel = 'power'
@prop ...restProps
-->
