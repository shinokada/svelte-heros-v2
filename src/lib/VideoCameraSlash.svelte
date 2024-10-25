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
    ariaLabel = 'video camera slash',
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
      d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M12 18.75H4.5C3.25736 18.75 2.25 17.7426 2.25 16.5V9M15.091 18.091L16.5 19.5M15.091 18.091C15.4982 17.6838 15.75 17.1213 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.87868 5.25 3.31618 5.50184 2.90901 5.90901M15.091 18.091L2.90901 5.90901M1.5 4.5L2.90901 5.90901"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path d="M1 13.75V7.18198L9.81802 16H3.25C2.00736 16 1 14.9926 1 13.75Z" fill={color} />
    <path d="M13 6.25V12.818L4.18198 4H10.75C11.9926 4 13 5.00736 13 6.25Z" fill={color} />
    <path
      d="M19 4.75002C19 4.44668 18.8173 4.1732 18.537 4.05711C18.2568 3.94103 17.9342 4.00519 17.7197 4.21969L14.7197 7.21969C14.579 7.36034 14.5 7.55111 14.5 7.75002V12.25C14.5 12.4489 14.579 12.6397 14.7197 12.7804L17.7197 15.7804C17.9342 15.9949 18.2568 16.059 18.537 15.9429C18.8173 15.8268 19 15.5534 19 15.25V4.75002Z"
      fill={color}
    />
    <path
      d="M2.28033 4.21967C1.98744 3.92678 1.51256 3.92678 1.21967 4.21967C0.926777 4.51256 0.926777 4.98744 1.21967 5.28033L11.7197 15.7803C12.0126 16.0732 12.4874 16.0732 12.7803 15.7803C13.0732 15.4874 13.0732 15.0126 12.7803 14.7197L2.28033 4.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path d="M1 10V6.68198L6.31802 12H3C1.89543 12 1 11.1046 1 10Z" fill={color} />
    <path d="M10 6V9.31802L4.68198 4H8C9.10457 4 10 4.89543 10 6Z" fill={color} />
    <path
      d="M14.537 4.05711C14.8173 4.1732 15 4.44668 15 4.75002V11.25C15 11.5534 14.8173 11.8268 14.537 11.9429C14.2568 12.059 13.9342 11.9949 13.7197 11.7804L11.7197 9.78035C11.579 9.6397 11.5 9.44893 11.5 9.25002V6.75002C11.5 6.55111 11.579 6.36034 11.7197 6.21969L13.7197 4.21969C13.9342 4.00519 14.2568 3.94103 14.537 4.05711Z"
      fill={color}
    />
    <path
      d="M2.78033 4.21967C2.48744 3.92678 2.01256 3.92678 1.71967 4.21967C1.42678 4.51256 1.42678 4.98744 1.71967 5.28033L8.21967 11.7803C8.51256 12.0732 8.98744 12.0732 9.28033 11.7803C9.57322 11.4874 9.57322 11.0126 9.28033 10.7197L2.78033 4.21967Z"
      fill={color}
    />
  {:else}
    <path
      d="M0.96967 3.96967C1.26256 3.67678 1.73744 3.67678 2.03033 3.96967L17.0303 18.9697C17.3232 19.2626 17.3232 19.7374 17.0303 20.0303C16.7374 20.3232 16.2626 20.3232 15.9697 20.0303L0.96967 5.03033C0.676777 4.73744 0.676777 4.26256 0.96967 3.96967Z"
      fill={color}
    />
    <path
      d="M17.25 16.0606L19.9393 18.75C20.8843 19.6949 22.5 19.0257 22.5 17.6893V6.31063C22.5 4.97427 20.8843 4.30501 19.9393 5.24996L17.25 7.93931V16.0606Z"
      fill={color}
    />
    <path
      d="M15.75 7.5V15.568L4.68198 4.5H12.75C14.4069 4.5 15.75 5.84315 15.75 7.5Z"
      fill={color}
    />
    <path
      d="M1.5 16.5V7.68198L13.2727 19.4546C13.1029 19.4845 12.9283 19.5 12.75 19.5H4.5C2.84315 19.5 1.5 18.1569 1.5 16.5Z"
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
@prop ariaLabel = 'video camera slash'
@prop ...restProps
-->
