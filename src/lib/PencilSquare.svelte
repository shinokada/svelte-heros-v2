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
    ariaLabel = 'pencil square',
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
      d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M5.43306 13.9168L6.69485 10.7623C6.89603 10.2593 7.19728 9.80249 7.58033 9.41945L14.4995 2.50071C15.3279 1.67229 16.6711 1.67229 17.4995 2.50072C18.3279 3.32914 18.3279 4.67229 17.4995 5.50072L10.5803 12.4194C10.1973 12.8025 9.74042 13.1037 9.23746 13.3049L6.08299 14.5667C5.67484 14.73 5.2698 14.3249 5.43306 13.9168Z"
      fill={color}
    />
    <path
      d="M3.5 5.75C3.5 5.05964 4.05964 4.5 4.75 4.5H10C10.4142 4.5 10.75 4.16421 10.75 3.75C10.75 3.33579 10.4142 3 10 3H4.75C3.23122 3 2 4.23122 2 5.75V15.25C2 16.7688 3.23122 18 4.75 18H14.25C15.7688 18 17 16.7688 17 15.25V10C17 9.58579 16.6642 9.25 16.25 9.25C15.8358 9.25 15.5 9.58579 15.5 10V15.25C15.5 15.9404 14.9404 16.5 14.25 16.5H4.75C4.05964 16.5 3.5 15.9404 3.5 15.25V5.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M13.4875 2.51256C12.804 1.82915 11.696 1.82915 11.0126 2.51256L6.75098 6.77417C6.49563 7.02951 6.29308 7.33265 6.15488 7.66628L5.30712 9.71282C5.19103 9.99307 5.25519 10.3157 5.46968 10.5302C5.68417 10.7447 6.00676 10.8088 6.28702 10.6928L8.33382 9.84501C8.66748 9.70681 8.97066 9.50423 9.22604 9.24886L13.4875 4.98744C14.1709 4.30402 14.1709 3.19598 13.4875 2.51256Z"
      fill={color}
    />
    <path
      d="M4.75 3.5C4.05964 3.5 3.5 4.05964 3.5 4.75V11.25C3.5 11.9404 4.05964 12.5 4.75 12.5H11.25C11.9404 12.5 12.5 11.9404 12.5 11.25V9C12.5 8.58579 12.8358 8.25 13.25 8.25C13.6642 8.25 14 8.58579 14 9V11.25C14 12.7688 12.7688 14 11.25 14H4.75C3.23122 14 2 12.7688 2 11.25V4.75C2 3.23122 3.23122 2 4.75 2H7C7.41421 2 7.75 2.33579 7.75 2.75C7.75 3.16421 7.41421 3.5 7 3.5H4.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M21.7312 2.26884C20.706 1.24372 19.044 1.24372 18.0188 2.26884L16.8617 3.42599L20.574 7.1383L21.7312 5.98116C22.7563 4.95603 22.7563 3.29397 21.7312 2.26884Z"
      fill={color}
    />
    <path
      d="M19.5133 8.19896L15.801 4.48665L7.40019 12.8875C6.78341 13.5043 6.33002 14.265 6.081 15.101L5.28122 17.7859C5.2026 18.0498 5.27494 18.3356 5.46967 18.5303C5.6644 18.725 5.95019 18.7974 6.21412 18.7188L8.89901 17.919C9.73498 17.67 10.4957 17.2166 11.1125 16.5998L19.5133 8.19896Z"
      fill={color}
    />
    <path
      d="M5.25 5.24999C3.59315 5.24999 2.25 6.59314 2.25 8.24999V18.75C2.25 20.4068 3.59315 21.75 5.25 21.75H15.75C17.4069 21.75 18.75 20.4068 18.75 18.75V13.5C18.75 13.0858 18.4142 12.75 18 12.75C17.5858 12.75 17.25 13.0858 17.25 13.5V18.75C17.25 19.5784 16.5784 20.25 15.75 20.25H5.25C4.42157 20.25 3.75 19.5784 3.75 18.75V8.24999C3.75 7.42156 4.42157 6.74999 5.25 6.74999H10.5C10.9142 6.74999 11.25 6.41421 11.25 5.99999C11.25 5.58578 10.9142 5.24999 10.5 5.24999H5.25Z"
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
@prop ariaLabel = 'pencil square'
@prop ...restProps
-->
