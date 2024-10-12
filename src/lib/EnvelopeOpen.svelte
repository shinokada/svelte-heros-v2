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
    ariaLabel = 'envelope open',
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
      d="M21.75 8.99997V9.90606C21.75 10.7338 21.2955 11.4947 20.5667 11.8871L14.0893 15.375M2.25 8.99997V9.90606C2.25 10.7338 2.70448 11.4947 3.43328 11.8871L9.91074 15.375M18.75 17.8846L14.0893 15.375M14.0893 15.375L13.0667 14.8244C12.4008 14.4658 11.5992 14.4658 10.9333 14.8244L9.91074 15.375M9.91074 15.375L5.25 17.8846M21.75 19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5L2.25 8.84388C2.25 8.01614 2.70448 7.25525 3.43328 6.86282L10.9333 2.82436C11.5992 2.46577 12.4008 2.46577 13.0667 2.82436L20.5667 6.86282C21.2955 7.25525 21.75 8.01615 21.75 8.84388V19.5Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.10557 6.44723C1.428 6.78601 1 7.47854 1 8.23608V16C1 17.1046 1.89543 18 3 18H17C18.1046 18 19 17.1046 19 16V8.23608C19 7.47854 18.572 6.78601 17.8944 6.44723L10.8944 2.94723C10.3314 2.6657 9.66863 2.6657 9.10557 2.94723L2.10557 6.44723ZM3.58541 10.4542C3.21493 10.269 2.76442 10.4191 2.57918 10.7896C2.39394 11.1601 2.54411 11.6106 2.91459 11.7958L8.77016 14.7236C9.54436 15.1107 10.4556 15.1107 11.2298 14.7236L17.0823 11.7974C17.4528 11.6122 17.6029 11.1617 17.4177 10.7912C17.2325 10.4207 16.7819 10.2705 16.4115 10.4558L10.559 13.382C10.2071 13.5579 9.79289 13.5579 9.44098 13.382L3.58541 10.4542Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.75579 4.56815C1.28843 4.83522 1 5.33223 1 5.87052V12.5C1 13.3285 1.67157 14 2.5 14H13.5C14.3284 14 15 13.3285 15 12.5V5.87052C15 5.33223 14.7116 4.83522 14.2442 4.56815L8.74421 1.4253C8.28306 1.16178 7.71694 1.16178 7.25579 1.4253L1.75579 4.56815ZM3.57526 7.53085C3.20224 7.35077 2.75386 7.50718 2.57378 7.8802C2.3937 8.25322 2.55011 8.7016 2.92313 8.88168L7.02205 10.8605C7.64005 11.1588 8.36042 11.1588 8.97842 10.8605L13.0773 8.88168C13.4504 8.7016 13.6068 8.25322 13.4267 7.8802C13.2466 7.50718 12.7982 7.35077 12.4252 7.53085L8.3263 9.50963C8.1203 9.60908 7.88017 9.60908 7.67417 9.50963L3.57526 7.53085Z"
      fill={color}
    />
  {:else}
    <path
      d="M19.5 22.5C21.1569 22.5 22.5 21.1568 22.5 19.5V11.3262L15.6212 15.3481L19.1056 17.2243C19.4703 17.4206 19.6067 17.8755 19.4104 18.2402C19.214 18.6049 18.7591 18.7413 18.3944 18.545L12.7112 15.4847C12.2672 15.2457 11.7328 15.2457 11.2889 15.4847L5.60558 18.545C5.24087 18.7413 4.78603 18.6049 4.58965 18.2402C4.39327 17.8755 4.52972 17.4206 4.89442 17.2243L8.37878 15.3481L1.5 11.3262V19.5C1.5 21.1568 2.84315 22.5 4.5 22.5L19.5 22.5Z"
      fill={color}
    />
    <path
      d="M1.5 9.58861V8.84388C1.5 7.74023 2.10597 6.72571 3.0777 6.20247L10.5777 2.16401C11.4656 1.68589 12.5344 1.68589 13.4223 2.16401L20.9223 6.20247C21.894 6.72571 22.5 7.74024 22.5 8.84388V9.58861L14.0742 14.515L13.4223 14.164C12.5344 13.6859 11.4656 13.6859 10.5777 14.164L9.92585 14.515L1.5 9.58861Z"
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
@prop ariaLabel = 'envelope open'
@prop ...restProps
-->
