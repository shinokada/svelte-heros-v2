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
    ariaLabel = 'code bracket',
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
      d="M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.28033 5.21979C6.57322 5.51269 6.57322 5.98756 6.28033 6.28045L2.56066 10.0001L6.28033 13.7198C6.57322 14.0127 6.57322 14.4876 6.28033 14.7805C5.98744 15.0733 5.51256 15.0733 5.21967 14.7805L0.96967 10.5305C0.676777 10.2376 0.676777 9.76269 0.96967 9.46979L5.21967 5.21979C5.51256 4.9269 5.98744 4.9269 6.28033 5.21979ZM13.7197 5.21979C14.0126 4.9269 14.4874 4.9269 14.7803 5.21979L19.0303 9.46979C19.3232 9.76269 19.3232 10.2376 19.0303 10.5305L14.7803 14.7805C14.4874 15.0733 14.0126 15.0733 13.7197 14.7805C13.4268 14.4876 13.4268 14.0127 13.7197 13.7198L17.4393 10.0001L13.7197 6.28045C13.4268 5.98756 13.4268 5.51269 13.7197 5.21979Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.3774 2.01103C11.7856 2.0814 12.0595 2.46936 11.9891 2.87755L9.48909 17.3776C9.41872 17.7857 9.03076 18.0596 8.62257 17.9892C8.21438 17.9188 7.94053 17.5309 8.0109 17.1227L10.5109 2.62269C10.5813 2.2145 10.9692 1.94065 11.3774 2.01103Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.78033 4.96977C5.07322 5.26266 5.07322 5.73753 4.78033 6.03043L2.81066 8.0001L4.78033 9.96977C5.07322 10.2627 5.07322 10.7375 4.78033 11.0304C4.48744 11.3233 4.01256 11.3233 3.71967 11.0304L1.21967 8.53043C0.926777 8.23753 0.926777 7.76266 1.21967 7.46977L3.71967 4.96977C4.01256 4.67687 4.48744 4.67687 4.78033 4.96977Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.2197 4.96977C10.9268 5.26266 10.9268 5.73753 11.2197 6.03043L13.1893 8.0001L11.2197 9.96977C10.9268 10.2627 10.9268 10.7375 11.2197 11.0304C11.5126 11.3233 11.9874 11.3233 12.2803 11.0304L14.7803 8.53043C15.0732 8.23753 15.0732 7.76266 14.7803 7.46977L12.2803 4.96977C11.9874 4.67687 11.5126 4.67687 11.2197 4.96977Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.85607 2.00763C9.26612 2.06621 9.55104 2.44611 9.49246 2.85616L7.99246 13.3562C7.93388 13.7662 7.55398 14.0511 7.14393 13.9926C6.73388 13.934 6.44896 13.5541 6.50754 13.144L8.00754 2.64403C8.06612 2.23398 8.44602 1.94905 8.85607 2.00763Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.4473 3.02637C14.847 3.13536 15.0826 3.54766 14.9736 3.94728L10.4736 20.4473C10.3646 20.8469 9.95228 21.0825 9.55266 20.9735C9.15304 20.8645 8.91744 20.4522 9.02643 20.0526L13.5264 3.55261C13.6354 3.15299 14.0477 2.91738 14.4473 3.02637ZM16.7197 6.21961C17.0126 5.92672 17.4874 5.92672 17.7803 6.21961L23.0303 11.4696C23.3232 11.7625 23.3232 12.2374 23.0303 12.5303L17.7803 17.7803C17.4874 18.0732 17.0126 18.0732 16.7197 17.7803C16.4268 17.4874 16.4268 17.0125 16.7197 16.7196L21.4393 11.9999L16.7197 7.28027C16.4268 6.98738 16.4268 6.51251 16.7197 6.21961ZM7.28033 6.21961C7.57322 6.51251 7.57322 6.98738 7.28033 7.28027L2.56066 11.9999L7.28033 16.7196C7.57322 17.0125 7.57322 17.4874 7.28033 17.7803C6.98744 18.0732 6.51256 18.0732 6.21967 17.7803L0.96967 12.5303C0.676777 12.2374 0.676777 11.7625 0.96967 11.4696L6.21967 6.21961C6.51256 5.92672 6.98744 5.92672 7.28033 6.21961Z"
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
@prop ariaLabel = 'code bracket'
@prop ...restProps
-->
