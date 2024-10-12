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
    ariaLabel = 'musical note',
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
      d="M9 9L19.5 6M19.5 12.5528V16.3028C19.5 17.3074 18.834 18.1903 17.8681 18.4663L16.5481 18.8434C15.3964 19.1724 14.25 18.3077 14.25 17.1099C14.25 16.305 14.7836 15.5975 15.5576 15.3764L17.8681 14.7163C18.834 14.4403 19.5 13.5574 19.5 12.5528ZM19.5 12.5528V2.25L9 5.25V15.5528M9 15.5528V19.3028C9 20.3074 8.33405 21.1903 7.36812 21.4663L6.04814 21.8434C4.89645 22.1724 3.75 21.3077 3.75 20.1099C3.75 19.305 4.2836 18.5975 5.05757 18.3764L7.36812 17.7163C8.33405 17.4403 9 16.5574 9 15.5528Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.721 1.5987C17.8974 1.74108 18 1.95564 18 2.18238V13.472C18 14.5314 17.261 15.4473 16.2255 15.6712L14.1848 16.1125C12.804 16.411 11.5 15.3589 11.5 13.9461C11.5 12.9029 12.2275 12.0009 13.247 11.78L15.9088 11.2032C16.2538 11.1285 16.5 10.8232 16.5 10.4702V6.11187L8.5 7.8416V15.5261C8.5 16.5855 7.76097 17.5014 6.7255 17.7253L4.68397 18.1667C3.30357 18.4652 2 17.4133 2 16.001C2 14.9572 2.72854 14.0549 3.74894 13.835L6.408 13.262C6.7534 13.1876 7 12.8822 7 12.5288V4.23643C7 3.8833 7.24634 3.578 7.5915 3.50337L17.0915 1.44932C17.3131 1.4014 17.5445 1.45631 17.721 1.5987Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M13.9997 1.75001C13.9997 1.52652 13.9 1.31467 13.7278 1.17219C13.5557 1.02971 13.3289 0.971435 13.1094 1.01325L5.60771 2.44214C5.25397 2.50952 4.99805 2.81879 4.99805 3.17889V5.67889C4.99805 5.69702 4.9987 5.71507 5 5.73302V9.73045C5 10.2106 4.65876 10.6229 4.18711 10.7128L3.60783 10.8231C2.67494 11.0008 2 11.8165 2 12.7661C2 14.0069 3.12916 14.9413 4.34802 14.7091L4.9509 14.5943C5.85043 14.4229 6.50123 13.6365 6.50123 12.7208V11.1783C6.50123 11.164 6.50082 11.1496 6.5 11.1354V6.29915L12.5 5.15629V8.30188C12.5 8.78201 12.1588 9.19438 11.6871 9.28421L11.103 9.39547C10.1701 9.57317 9.49518 10.3888 9.49518 11.3385C9.49518 12.5792 10.6243 13.5136 11.8432 13.2815L12.169 13.2194C13.2314 13.017 14 12.0882 14 11.0068L13.9997 1.75001Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.9516 1.65124C20.1395 1.79297 20.25 2.01466 20.25 2.25001V5.98344C20.2503 5.99476 20.2503 6.00606 20.25 6.01732V16.3028C20.25 17.6423 19.3621 18.8194 18.0742 19.1874L16.7542 19.5645C15.1234 20.0305 13.5 18.806 13.5 17.1099C13.5 15.9701 14.2556 14.9684 15.3515 14.6553L17.6621 13.9951C18.306 13.8111 18.75 13.2225 18.75 12.5528V6.9943L9.75 9.56573V19.3028C9.75 20.6423 8.86207 21.8194 7.57416 22.1874L6.25418 22.5645C4.62337 23.0305 3 21.806 3 20.1099C3 18.9701 3.75559 17.9684 4.85153 17.6553L7.16208 16.9951C7.80603 16.8111 8.25 16.2225 8.25 15.5528V9.01659C8.24974 9.00526 8.24974 8.99395 8.25 8.98268V5.25001C8.25 4.91515 8.47198 4.62086 8.79396 4.52886L19.294 1.52886C19.5202 1.46421 19.7638 1.50952 19.9516 1.65124Z"
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
@prop ariaLabel = 'musical note'
@prop ...restProps
-->
