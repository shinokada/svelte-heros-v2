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
    ariaLabel = 'microphone',
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
      d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10V4Z"
      fill={color}
    />
    <path
      d="M5.5 9.64282C5.5 9.22861 5.16421 8.89282 4.75 8.89282C4.33579 8.89282 4 9.22861 4 9.64282V9.99997C4 13.0597 6.29027 15.5845 9.25 15.9535V17.5H7.75C7.33579 17.5 7 17.8358 7 18.25C7 18.6642 7.33579 19 7.75 19H12.25C12.6642 19 13 18.6642 13 18.25C13 17.8358 12.6642 17.5 12.25 17.5H10.75V15.9535C13.7097 15.5845 16 13.0597 16 9.99997V9.64282C16 9.22861 15.6642 8.89282 15.25 8.89282C14.8358 8.89282 14.5 9.22861 14.5 9.64282V9.99997C14.5 12.4852 12.4853 14.5 10 14.5C7.51472 14.5 5.5 12.4852 5.5 9.99997V9.64282Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M8 1C6.89543 1 6 1.89543 6 3V7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7V3C10 1.89543 9.10457 1 8 1Z"
      fill={color}
    />
    <path
      d="M4.5 7C4.5 6.58579 4.16421 6.25 3.75 6.25C3.33579 6.25 3 6.58579 3 7C3 9.50652 4.84437 11.5823 7.25 11.9441V13.5H5.75C5.33579 13.5 5 13.8358 5 14.25C5 14.6642 5.33579 15 5.75 15H10.25C10.6642 15 11 14.6642 11 14.25C11 13.8358 10.6642 13.5 10.25 13.5H8.75V11.9441C11.1556 11.5823 13 9.50652 13 7C13 6.58579 12.6642 6.25 12.25 6.25C11.8358 6.25 11.5 6.58579 11.5 7C11.5 8.933 9.933 10.5 8 10.5C6.067 10.5 4.5 8.933 4.5 7Z"
      fill={color}
    />
  {:else}
    <path
      d="M8.25 4.5C8.25 2.42893 9.92893 0.75 12 0.75C14.0711 0.75 15.75 2.42893 15.75 4.5V12.75C15.75 14.8211 14.0711 16.5 12 16.5C9.92893 16.5 8.25 14.8211 8.25 12.75V4.5Z"
      fill={color}
    />
    <path
      d="M6 10.5C6.41421 10.5 6.75 10.8358 6.75 11.25V12.75C6.75 15.6495 9.1005 18 12 18C14.8995 18 17.25 15.6495 17.25 12.75V11.25C17.25 10.8358 17.5858 10.5 18 10.5C18.4142 10.5 18.75 10.8358 18.75 11.25V12.75C18.75 16.2244 16.125 19.0857 12.75 19.4588V21.75H15.75C16.1642 21.75 16.5 22.0858 16.5 22.5C16.5 22.9142 16.1642 23.25 15.75 23.25H8.25C7.83579 23.25 7.5 22.9142 7.5 22.5C7.5 22.0858 7.83579 21.75 8.25 21.75H11.25V19.4588C7.87504 19.0857 5.25 16.2244 5.25 12.75V11.25C5.25 10.8358 5.58579 10.5 6 10.5Z"
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
@prop ariaLabel = 'microphone'
@prop ...restProps
-->
