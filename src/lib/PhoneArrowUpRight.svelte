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
    ariaLabel = 'phone arrow up right',
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
      d="M20.25 3.75V8.25M20.25 3.75H15.75M20.25 3.75L14.25 9.75M17.25 21.75C8.96573 21.75 2.25 15.0343 2.25 6.75V4.5C2.25 3.25736 3.25736 2.25 4.5 2.25H5.87163C6.38785 2.25 6.83783 2.60133 6.96304 3.10215L8.06883 7.52533C8.17861 7.96445 8.01453 8.4266 7.65242 8.69818L6.3588 9.6684C5.98336 9.94998 5.81734 10.437 5.97876 10.8777C7.19015 14.1846 9.81539 16.8098 13.1223 18.0212C13.563 18.1827 14.05 18.0166 14.3316 17.6412L15.3018 16.3476C15.5734 15.9855 16.0355 15.8214 16.4747 15.9312L20.8979 17.037C21.3987 17.1622 21.75 17.6121 21.75 18.1284V19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H17.25Z"
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
      d="M16.5 4.56066L13.2803 7.78033C12.9874 8.07322 12.5126 8.07322 12.2197 7.78033C11.9268 7.48744 11.9268 7.01256 12.2197 6.71967L15.4393 3.5H12.75C12.3358 3.5 12 3.16421 12 2.75C12 2.33579 12.3358 2 12.75 2H17.25C17.6642 2 18 2.33579 18 2.75V7.25C18 7.66421 17.6642 8 17.25 8C16.8358 8 16.5 7.66421 16.5 7.25V4.56066Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      d="M4.92241 6.75232L3.85462 7.28621C4.59083 9.58911 6.4109 11.4092 8.71379 12.1454L9.24768 11.0776C9.44195 10.6891 9.86482 10.4704 10.2942 10.5364L13.1521 10.9761C13.6399 11.0512 14 11.4709 14 11.9645V13C14 13.5523 13.5523 14 13 14H11C10.2912 14 9.60064 13.9179 8.93763 13.7624C5.62265 12.985 3.01505 10.3773 2.23758 7.06237C2.08208 6.39936 2 5.70879 2 5V3C2 2.44772 2.44772 2 3 2H4.03552C4.52909 2 4.94884 2.36011 5.02389 2.84794L5.46357 5.70584C5.52962 6.13518 5.31094 6.55805 4.92241 6.75232Z"
      fill={color}
    />
    <path
      d="M9.21967 5.71967C8.92678 6.01256 8.92678 6.48744 9.21967 6.78033C9.51256 7.07322 9.98744 7.07322 10.2803 6.78033L12.5 4.56066V6.25C12.5 6.66421 12.8358 7 13.25 7C13.6642 7 14 6.66421 14 6.25V2.75C14 2.33579 13.6642 2 13.25 2H9.75C9.33579 2 9 2.33579 9 2.75C9 3.16421 9.33579 3.5 9.75 3.5L11.4393 3.5L9.21967 5.71967Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 3.75C15 3.33579 15.3358 3 15.75 3H20.25C20.6642 3 21 3.33579 21 3.75V8.25C21 8.66421 20.6642 9 20.25 9C19.8358 9 19.5 8.66421 19.5 8.25V5.56066L14.7803 10.2803C14.4874 10.5732 14.0126 10.5732 13.7197 10.2803C13.4268 9.98744 13.4268 9.51256 13.7197 9.21967L18.4393 4.5H15.75C15.3358 4.5 15 4.16421 15 3.75Z"
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
@prop ariaLabel = 'phone arrow up right'
@prop ...restProps
-->
