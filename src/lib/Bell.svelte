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
    ariaLabel = 'bell',
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
      d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99997 2C6.68626 2 3.99997 4.68629 3.99997 8C3.99997 9.88663 3.54624 11.6651 2.7426 13.2343C2.63591 13.4426 2.6326 13.6888 2.73365 13.9C2.83469 14.1111 3.02851 14.2629 3.25769 14.3105C4.32537 14.5322 5.41181 14.7023 6.51426 14.818C6.67494 16.602 8.17421 18 10 18C11.8258 18 13.3251 16.602 13.4857 14.818C14.5882 14.7023 15.6746 14.5322 16.7422 14.3105C16.9714 14.2629 17.1652 14.1111 17.2663 13.9C17.3673 13.6888 17.364 13.4426 17.2573 13.2343C16.4537 11.6651 16 9.88663 16 8C16 4.68629 13.3137 2 9.99997 2ZM8.0493 14.9433C8.69477 14.9809 9.34517 15 9.99997 15C10.6548 15 11.3052 14.9809 11.9507 14.9433C11.749 15.8345 10.9522 16.5 10 16.5C9.04777 16.5 8.25097 15.8345 8.0493 14.9433Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5V7.37868C4 7.7765 3.84197 8.15804 3.56066 8.43934L2.29289 9.70711C2.10536 9.89464 2 10.149 2 10.4142V11C2 11.5523 2.44772 12 3 12H5C5 13.6569 6.34315 15 8 15C9.65685 15 11 13.6569 11 12H13C13.5523 12 14 11.5523 14 11V10.4142C14 10.149 13.8946 9.89464 13.7071 9.70711L12.4393 8.43934C12.158 8.15804 12 7.7765 12 7.37868V5ZM6.5 12C6.5 12.8284 7.17157 13.5 8 13.5C8.82843 13.5 9.5 12.8284 9.5 12H6.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.25001 8.9998C5.25012 5.27197 8.27215 2.25 12 2.25C15.7279 2.25 18.75 5.27208 18.75 9L18.7498 9.04919V9.75C18.7498 11.8731 19.5508 13.8074 20.8684 15.2699C21.0349 15.4547 21.0989 15.71 21.0393 15.9516C20.9797 16.1931 20.8042 16.3893 20.5709 16.4755C19.0269 17.0455 17.4105 17.4659 15.7396 17.7192C15.7465 17.812 15.75 17.9056 15.75 18C15.75 20.0711 14.0711 21.75 12 21.75C9.92894 21.75 8.25001 20.0711 8.25001 18C8.25001 17.9056 8.25351 17.812 8.2604 17.7192C6.58934 17.4659 4.97287 17.0455 3.42875 16.4755C3.19539 16.3893 3.01992 16.1931 2.96033 15.9516C2.90073 15.71 2.96476 15.4547 3.13126 15.2699C4.44879 13.8074 5.24981 11.8731 5.24981 9.75L5.25001 8.9998ZM9.75221 17.8993C9.75075 17.9326 9.75001 17.9662 9.75001 18C9.75001 19.2426 10.7574 20.25 12 20.25C13.2427 20.25 14.25 19.2426 14.25 18C14.25 17.9662 14.2493 17.9326 14.2478 17.8992C13.5072 17.9659 12.7574 18 11.9998 18C11.2424 18 10.4927 17.966 9.75221 17.8993Z"
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
@prop ariaLabel = 'bell'
@prop ...restProps
-->
