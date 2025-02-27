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
    ariaLabel = 'calendar days',
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
      d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75M12 12.75H12.0075V12.7575H12V12.75ZM12 15H12.0075V15.0075H12V15ZM12 17.25H12.0075V17.2575H12V17.25ZM9.75 15H9.7575V15.0075H9.75V15ZM9.75 17.25H9.7575V17.2575H9.75V17.25ZM7.5 15H7.5075V15.0075H7.5V15ZM7.5 17.25H7.5075V17.2575H7.5V17.25ZM14.25 12.75H14.2575V12.7575H14.25V12.75ZM14.25 15H14.2575V15.0075H14.25V15ZM14.25 17.25H14.2575V17.2575H14.25V17.25ZM16.5 12.75H16.5075V12.7575H16.5V12.75ZM16.5 15H16.5075V15.0075H16.5V15Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H6.01C6.42421 11.25 6.76 11.5858 6.76 12V12.01C6.76 12.4242 6.42421 12.76 6.01 12.76H6C5.58579 12.76 5.25 12.4242 5.25 12.01V12Z"
      fill={color}
    />
    <path
      d="M6 13.25C5.58579 13.25 5.25 13.5858 5.25 14V14.01C5.25 14.4242 5.58579 14.76 6 14.76H6.01C6.42421 14.76 6.76 14.4242 6.76 14.01V14C6.76 13.5858 6.42421 13.25 6.01 13.25H6Z"
      fill={color}
    />
    <path
      d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H8.01C8.42421 11.25 8.76 11.5858 8.76 12V12.01C8.76 12.4242 8.42421 12.76 8.01 12.76H8C7.58579 12.76 7.25 12.4242 7.25 12.01V12Z"
      fill={color}
    />
    <path
      d="M8 13.25C7.58579 13.25 7.25 13.5858 7.25 14V14.01C7.25 14.4242 7.58579 14.76 8 14.76H8.01C8.42421 14.76 8.76 14.4242 8.76 14.01V14C8.76 13.5858 8.42421 13.25 8.01 13.25H8Z"
      fill={color}
    />
    <path
      d="M9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H10.01C10.4242 9.25 10.76 9.58579 10.76 10V10.01C10.76 10.4242 10.4242 10.76 10.01 10.76H10C9.58579 10.76 9.25 10.4242 9.25 10.01V10Z"
      fill={color}
    />
    <path
      d="M10 11.25C9.58579 11.25 9.25 11.5858 9.25 12V12.01C9.25 12.4242 9.58579 12.76 10 12.76H10.01C10.4242 12.76 10.76 12.4242 10.76 12.01V12C10.76 11.5858 10.4242 11.25 10.01 11.25H10Z"
      fill={color}
    />
    <path
      d="M9.25 14C9.25 13.5858 9.58579 13.25 10 13.25H10.01C10.4242 13.25 10.76 13.5858 10.76 14V14.01C10.76 14.4242 10.4242 14.76 10.01 14.76H10C9.58579 14.76 9.25 14.4242 9.25 14.01V14Z"
      fill={color}
    />
    <path
      d="M12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.01C11.25 10.4242 11.5858 10.76 12 10.76H12.01C12.4242 10.76 12.76 10.4242 12.76 10.01V10C12.76 9.58579 12.4242 9.25 12.01 9.25H12Z"
      fill={color}
    />
    <path
      d="M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H12.01C12.4242 11.25 12.76 11.5858 12.76 12V12.01C12.76 12.4242 12.4242 12.76 12.01 12.76H12C11.5858 12.76 11.25 12.4242 11.25 12.01V12Z"
      fill={color}
    />
    <path
      d="M12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V14.01C11.25 14.4242 11.5858 14.76 12 14.76H12.01C12.4242 14.76 12.76 14.4242 12.76 14.01V14C12.76 13.5858 12.4242 13.25 12.01 13.25H12Z"
      fill={color}
    />
    <path
      d="M13.25 10C13.25 9.58579 13.5858 9.25 14 9.25H14.01C14.4242 9.25 14.76 9.58579 14.76 10V10.01C14.76 10.4242 14.4242 10.76 14.01 10.76H14C13.5858 10.76 13.25 10.4242 13.25 10.01V10Z"
      fill={color}
    />
    <path
      d="M14 11.25C13.5858 11.25 13.25 11.5858 13.25 12V12.01C13.25 12.4242 13.5858 12.76 14 12.76H14.01C14.4242 12.76 14.76 12.4242 14.76 12.01V12C14.76 11.5858 14.4242 11.25 14.01 11.25H14Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4H13.5V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4H15.25C16.7688 4 18 5.23122 18 6.75V15.25C18 16.7688 16.7688 18 15.25 18H4.75C3.23122 18 2 16.7688 2 15.25V6.75C2 5.23122 3.23122 4 4.75 4H5V2.75C5 2.33579 5.33579 2 5.75 2ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75V15.25C3.5 15.9404 4.05964 16.5 4.75 16.5H15.25C15.9404 16.5 16.5 15.9404 16.5 15.25V8.75C16.5 8.05964 15.9404 7.5 15.25 7.5H4.75Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M5.75 7.5C5.33579 7.5 5 7.83579 5 8.25C5 8.66421 5.33579 9 5.75 9C6.16421 9 6.5 8.66421 6.5 8.25C6.5 7.83579 6.16421 7.5 5.75 7.5Z"
      fill={color}
    />
    <path
      d="M5 10.25C5 9.83579 5.33579 9.5 5.75 9.5C6.16421 9.5 6.5 9.83579 6.5 10.25C6.5 10.6642 6.16421 11 5.75 11C5.33579 11 5 10.6642 5 10.25Z"
      fill={color}
    />
    <path
      d="M10.25 7.5C9.83579 7.5 9.5 7.83579 9.5 8.25C9.5 8.66421 9.83579 9 10.25 9C10.6642 9 11 8.66421 11 8.25C11 7.83579 10.6642 7.5 10.25 7.5Z"
      fill={color}
    />
    <path
      d="M7.25 8.25C7.25 7.83579 7.58579 7.5 8 7.5C8.41421 7.5 8.75 7.83579 8.75 8.25C8.75 8.66421 8.41421 9 8 9C7.58579 9 7.25 8.66421 7.25 8.25Z"
      fill={color}
    />
    <path
      d="M8 9.5C7.58579 9.5 7.25 9.83579 7.25 10.25C7.25 10.6642 7.58579 11 8 11C8.41421 11 8.75 10.6642 8.75 10.25C8.75 9.83579 8.41421 9.5 8 9.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.75 1C4.33579 1 4 1.33579 4 1.75V3C2.89543 3 2 3.89543 2 5V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V5C14 3.89543 13.1046 3 12 3V1.75C12 1.33579 11.6642 1 11.25 1C10.8358 1 10.5 1.33579 10.5 1.75V3H5.5V1.75C5.5 1.33579 5.16421 1 4.75 1ZM3.5 7C3.5 6.44772 3.94772 6 4.5 6H11.5C12.0523 6 12.5 6.44772 12.5 7V11.5C12.5 12.0523 12.0523 12.5 11.5 12.5H4.5C3.94772 12.5 3.5 12.0523 3.5 11.5V7Z"
      fill={color}
    />
  {:else}
    <path
      d="M12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75C11.25 12.3358 11.5858 12 12 12C12.4142 12 12.75 12.3358 12.75 12.75Z"
      fill={color}
    />
    <path
      d="M7.5 15.75C7.91421 15.75 8.25 15.4142 8.25 15C8.25 14.5858 7.91421 14.25 7.5 14.25C7.08579 14.25 6.75 14.5858 6.75 15C6.75 15.4142 7.08579 15.75 7.5 15.75Z"
      fill={color}
    />
    <path
      d="M8.25 17.25C8.25 17.6642 7.91421 18 7.5 18C7.08579 18 6.75 17.6642 6.75 17.25C6.75 16.8358 7.08579 16.5 7.5 16.5C7.91421 16.5 8.25 16.8358 8.25 17.25Z"
      fill={color}
    />
    <path
      d="M9.75 15.75C10.1642 15.75 10.5 15.4142 10.5 15C10.5 14.5858 10.1642 14.25 9.75 14.25C9.33579 14.25 9 14.5858 9 15C9 15.4142 9.33579 15.75 9.75 15.75Z"
      fill={color}
    />
    <path
      d="M10.5 17.25C10.5 17.6642 10.1642 18 9.75 18C9.33579 18 9 17.6642 9 17.25C9 16.8358 9.33579 16.5 9.75 16.5C10.1642 16.5 10.5 16.8358 10.5 17.25Z"
      fill={color}
    />
    <path
      d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z"
      fill={color}
    />
    <path
      d="M12.75 17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.8358 12.75 17.25Z"
      fill={color}
    />
    <path
      d="M14.25 15.75C14.6642 15.75 15 15.4142 15 15C15 14.5858 14.6642 14.25 14.25 14.25C13.8358 14.25 13.5 14.5858 13.5 15C13.5 15.4142 13.8358 15.75 14.25 15.75Z"
      fill={color}
    />
    <path
      d="M15 17.25C15 17.6642 14.6642 18 14.25 18C13.8358 18 13.5 17.6642 13.5 17.25C13.5 16.8358 13.8358 16.5 14.25 16.5C14.6642 16.5 15 16.8358 15 17.25Z"
      fill={color}
    />
    <path
      d="M16.5 15.75C16.9142 15.75 17.25 15.4142 17.25 15C17.25 14.5858 16.9142 14.25 16.5 14.25C16.0858 14.25 15.75 14.5858 15.75 15C15.75 15.4142 16.0858 15.75 16.5 15.75Z"
      fill={color}
    />
    <path
      d="M15 12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75C13.5 12.3358 13.8358 12 14.25 12C14.6642 12 15 12.3358 15 12.75Z"
      fill={color}
    />
    <path
      d="M16.5 13.5C16.9142 13.5 17.25 13.1642 17.25 12.75C17.25 12.3358 16.9142 12 16.5 12C16.0858 12 15.75 12.3358 15.75 12.75C15.75 13.1642 16.0858 13.5 16.5 13.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z"
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
@prop ariaLabel = 'calendar days'
@prop ...restProps
-->
