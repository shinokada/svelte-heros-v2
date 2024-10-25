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
    ariaLabel = 'server',
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
      d="M21.75 17.25V17.0223C21.75 16.6753 21.7099 16.3294 21.6304 15.9916L19.3622 6.35199C19.0035 4.82745 17.6431 3.75 16.077 3.75H7.92305C6.35688 3.75 4.99648 4.82745 4.63777 6.35199L2.36962 15.9916C2.29014 16.3294 2.25 16.6753 2.25 17.0223V17.25M21.75 17.25C21.75 18.9069 20.4069 20.25 18.75 20.25H5.25C3.59315 20.25 2.25 18.9069 2.25 17.25M21.75 17.25C21.75 15.5931 20.4069 14.25 18.75 14.25H5.25C3.59315 14.25 2.25 15.5931 2.25 17.25M18.75 17.25H18.7575V17.2575H18.75V17.25ZM15.75 17.25H15.7575V17.2575H15.75V17.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.63196 3.53326C4.84778 2.63402 5.65196 2 6.57674 2H13.4231C14.3479 2 15.1521 2.63401 15.3679 3.53325L17.3441 11.7674C16.9303 11.5951 16.4762 11.5 15.9999 11.5H3.99994C3.52368 11.5 3.06963 11.5951 2.65576 11.7674L4.63196 3.53326Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 13C2.89543 13 2 13.8954 2 15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15C18 13.8954 17.1046 13 16 13H4ZM15.2402 15C15.2402 14.5858 15.576 14.25 15.9902 14.25H16.0002C16.4144 14.25 16.7502 14.5858 16.7502 15V15.01C16.7502 15.4242 16.4144 15.76 16.0002 15.76H15.9902C15.576 15.76 15.2402 15.4242 15.2402 15.01V15ZM12.9902 14.25C12.576 14.25 12.2402 14.5858 12.2402 15V15.01C12.2402 15.4242 12.576 15.76 12.9902 15.76H13.0002C13.4144 15.76 13.7502 15.4242 13.7502 15.01V15C13.7502 14.5858 13.4144 14.25 13.0002 14.25H12.9902Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M3.66489 3.58798C3.85973 2.66249 4.67621 2 5.62199 2H10.3764C11.3222 2 12.1387 2.66249 12.3335 3.58798L13.432 8.80576C12.9947 8.60929 12.5097 8.5 11.9992 8.5H3.9992C3.4887 8.5 3.00373 8.60929 2.56641 8.80576L3.66489 3.58798Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10H4ZM12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75ZM9.75 12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25C9.41421 11.25 9.75 11.5858 9.75 12Z"
      fill={color}
    />
  {:else}
    <path
      d="M4.07993 5.22701C4.43013 3.91375 5.61948 3 6.97863 3H17.0214C18.3805 3 19.5699 3.91375 19.9201 5.22701L22.0338 13.1535C21.1346 12.4318 19.9927 12 18.75 12H5.25C4.00727 12 2.86538 12.4318 1.96619 13.1535L4.07993 5.22701Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.25 13.5C3.17893 13.5 1.5 15.1789 1.5 17.25C1.5 19.3211 3.17893 21 5.25 21H18.75C20.8211 21 22.5 19.3211 22.5 17.25C22.5 15.1789 20.8211 13.5 18.75 13.5H5.25ZM15.75 18C16.1642 18 16.5 17.6642 16.5 17.25C16.5 16.8358 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.8358 15 17.25C15 17.6642 15.3358 18 15.75 18ZM19.5 17.25C19.5 17.6642 19.1642 18 18.75 18C18.3358 18 18 17.6642 18 17.25C18 16.8358 18.3358 16.5 18.75 16.5C19.1642 16.5 19.5 16.8358 19.5 17.25Z"
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
@prop ariaLabel = 'server'
@prop ...restProps
-->
