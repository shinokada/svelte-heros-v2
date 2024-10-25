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
    ariaLabel = 'camera',
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
      d="M6.82689 6.1749C6.46581 6.75354 5.86127 7.13398 5.186 7.22994C4.80655 7.28386 4.42853 7.34223 4.05199 7.40497C2.99912 7.58042 2.25 8.50663 2.25 9.57402V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9.57403C21.75 8.50664 21.0009 7.58043 19.948 7.40498C19.5715 7.34223 19.1934 7.28387 18.814 7.22995C18.1387 7.13398 17.5342 6.75354 17.1731 6.17491L16.3519 4.85889C15.9734 4.25237 15.3294 3.85838 14.6155 3.82005C13.7496 3.77355 12.8775 3.75 12 3.75C11.1225 3.75 10.2504 3.77355 9.3845 3.82005C8.6706 3.85838 8.02658 4.25237 7.64809 4.85889L6.82689 6.1749Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 12.75C16.5 15.2353 14.4853 17.25 12 17.25C9.51472 17.25 7.5 15.2353 7.5 12.75C7.5 10.2647 9.51472 8.25 12 8.25C14.4853 8.25 16.5 10.2647 16.5 12.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.75 10.5H18.7575V10.5075H18.75V10.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 8C1 6.89543 1.89543 6 3 6H3.92963C4.59834 6 5.2228 5.6658 5.59373 5.1094L6.40627 3.8906C6.7772 3.3342 7.40166 3 8.07037 3H11.9296C12.5983 3 13.2228 3.3342 13.5937 3.8906L14.4063 5.1094C14.7772 5.6658 15.4017 6 16.0704 6H17C18.1046 6 19 6.89543 19 8V15C19 16.1046 18.1046 17 17 17H3C1.89543 17 1 16.1046 1 15V8ZM14.5 11C14.5 13.4853 12.4853 15.5 10 15.5C7.51472 15.5 5.5 13.4853 5.5 11C5.5 8.51472 7.51472 6.5 10 6.5C12.4853 6.5 14.5 8.51472 14.5 11ZM10 14C11.6569 14 13 12.6569 13 11C13 9.34315 11.6569 8 10 8C8.34315 8 7 9.34315 7 11C7 12.6569 8.34315 14 10 14Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M9.5 8.5C9.5 9.32843 8.82843 10 8 10C7.17157 10 6.5 9.32843 6.5 8.5C6.5 7.67157 7.17157 7 8 7C8.82843 7 9.5 7.67157 9.5 8.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.5 5C1.67157 5 1 5.67157 1 6.5V11.5C1 12.3284 1.67157 13 2.5 13H13.5C14.3284 13 15 12.3284 15 11.5V6.5C15 5.67157 14.3284 5 13.5 5H12.6213C12.2235 5 11.842 4.84197 11.5607 4.56066L10.4393 3.43934C10.158 3.15804 9.7765 3 9.37868 3H6.62132C6.2235 3 5.84197 3.15803 5.56066 3.43934L4.43934 4.56066C4.15804 4.84196 3.7765 5 3.37868 5H2.5ZM11 8.5C11 10.1569 9.65685 11.5 8 11.5C6.34315 11.5 5 10.1569 5 8.5C5 6.84315 6.34315 5.5 8 5.5C9.65685 5.5 11 6.84315 11 8.5Z"
      fill={color}
    />
  {:else}
    <path
      d="M12 9C9.92893 9 8.25 10.6789 8.25 12.75C8.25 14.8211 9.92893 16.5 12 16.5C14.0711 16.5 15.75 14.8211 15.75 12.75C15.75 10.6789 14.0711 9 12 9Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.34429 3.07113C10.2236 3.02391 11.109 3 12 3C12.891 3 13.7764 3.02391 14.6557 3.07113C15.6233 3.12309 16.4854 3.65612 16.9882 4.46184L17.8094 5.77786C18.0485 6.16099 18.4544 6.42131 18.9195 6.48741C19.3049 6.54218 19.6888 6.60145 20.0713 6.66518C21.5031 6.90378 22.5 8.15785 22.5 9.57403V18C22.5 19.6569 21.1569 21 19.5 21H4.5C2.84315 21 1.5 19.6569 1.5 18V9.57402C1.5 8.15784 2.49686 6.90377 3.92872 6.66517C4.31116 6.60144 4.6951 6.54217 5.08048 6.4874C5.54556 6.42131 5.95152 6.16099 6.19061 5.77785L7.01181 4.46184C7.5146 3.65612 8.37667 3.12309 9.34429 3.07113ZM6.75 12.75C6.75 9.8505 9.1005 7.5 12 7.5C14.8995 7.5 17.25 9.8505 17.25 12.75C17.25 15.6495 14.8995 18 12 18C9.1005 18 6.75 15.6495 6.75 12.75ZM18.75 11.25C19.1642 11.25 19.5 10.9142 19.5 10.5C19.5 10.0858 19.1642 9.75 18.75 9.75C18.3358 9.75 18 10.0858 18 10.5C18 10.9142 18.3358 11.25 18.75 11.25Z"
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
@prop ariaLabel = 'camera'
@prop ...restProps
-->
