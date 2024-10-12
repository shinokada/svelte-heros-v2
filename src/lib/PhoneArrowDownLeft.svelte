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
    ariaLabel = 'phone arrow down left',
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
      d="M14.25 9.75V5.25M14.25 9.75L18.75 9.75M14.25 9.75L20.25 3.75M17.25 21.75C8.96573 21.75 2.25 15.0343 2.25 6.75V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H5.87163C6.38785 2.25 6.83783 2.60133 6.96304 3.10215L8.06883 7.52533C8.17861 7.96445 8.01453 8.4266 7.65242 8.69818L6.3588 9.6684C5.98336 9.94998 5.81734 10.437 5.97876 10.8777C7.19015 14.1846 9.81539 16.8098 13.1223 18.0212C13.563 18.1827 14.05 18.0166 14.3316 17.6412L15.3018 16.3476C15.5734 15.9855 16.0355 15.8214 16.4747 15.9312L20.8979 17.037C21.3987 17.1622 21.75 17.6121 21.75 18.1284V19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H17.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.5 2C2.67157 2 2 2.67157 2 3.5V5C2 6.14856 2.14913 7.26341 2.42949 8.32576C3.61908 12.8334 7.16665 16.3809 11.6742 17.5705C12.7366 17.8509 13.8514 18 15 18H16.5C17.3284 18 18 17.3284 18 16.5V15.3516C18 14.6486 17.5117 14.0399 16.8254 13.8873L13.6024 13.1711C12.8276 12.999 12.0528 13.4602 11.8348 14.2233L11.5682 15.1561C11.4509 15.5669 11.0134 15.7989 10.6184 15.636C7.79126 14.47 5.53001 12.2087 4.36396 9.38159C4.20107 8.98665 4.4331 8.54913 4.84388 8.43176L5.77667 8.16525C6.53984 7.9472 7.00105 7.17238 6.82887 6.39757L6.11265 3.1746C5.96014 2.4883 5.35142 2 4.64837 2H3.5Z"
      fill={color}
    />
    <path
      d="M16.7197 2.21967C17.0126 1.92678 17.4874 1.92678 17.7803 2.21967C18.0732 2.51256 18.0732 2.98744 17.7803 3.28033L14.5607 6.5L17.25 6.5C17.6642 6.5 18 6.83579 18 7.25C18 7.66421 17.6642 8 17.25 8L12.75 8C12.3358 8 12 7.66421 12 7.25V2.75C12 2.33579 12.3358 2 12.75 2C13.1642 2 13.5 2.33579 13.5 2.75V5.43934L16.7197 2.21967Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M4.92241 6.75232L3.85462 7.28621C4.59083 9.58911 6.4109 11.4092 8.71379 12.1454L9.24768 11.0776C9.44195 10.6891 9.86482 10.4704 10.2942 10.5364L13.1521 10.9761C13.6399 11.0512 14 11.4709 14 11.9645V13C14 13.5523 13.5523 14 13 14H11C10.2912 14 9.60064 13.9179 8.93763 13.7624C5.62265 12.985 3.01505 10.3773 2.23758 7.06237C2.08208 6.39936 2 5.70879 2 5V3C2 2.44772 2.44772 2 3 2H4.03552C4.52909 2 4.94884 2.36011 5.02389 2.84794L5.46357 5.70584C5.52962 6.13518 5.31094 6.55806 4.92241 6.75232Z"
      fill={color}
    />
    <path
      d="M11.5607 5.5L13.7803 3.28033C14.0732 2.98744 14.0732 2.51256 13.7803 2.21967C13.4874 1.92678 13.0126 1.92678 12.7197 2.21967L10.5 4.43934V2.75C10.5 2.33579 10.1642 2 9.75 2C9.33579 2 9 2.33579 9 2.75V6.25C9 6.66421 9.33579 7 9.75 7H13.25C13.6642 7 14 6.66421 14 6.25C14 5.83579 13.6642 5.5 13.25 5.5H11.5607Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 9.75C19.5 10.1642 19.1642 10.5 18.75 10.5L14.25 10.5C13.8358 10.5 13.5 10.1642 13.5 9.75V5.25C13.5 4.83579 13.8358 4.5 14.25 4.5C14.6642 4.5 15 4.83579 15 5.25V7.93934L19.7197 3.21967C20.0126 2.92678 20.4874 2.92678 20.7803 3.21967C21.0732 3.51256 21.0732 3.98744 20.7803 4.28033L16.0607 9L18.75 9C19.1642 9 19.5 9.33579 19.5 9.75Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z"
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
@prop ariaLabel = 'phone arrow down left'
@prop ...restProps
-->
