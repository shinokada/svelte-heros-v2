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
    ariaLabel = 'arrow trending up',
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
      d="M2.25 17.9999L9 11.2499L13.3064 15.5564C14.5101 13.188 16.5042 11.2022 19.1203 10.0375L21.8609 8.81726M21.8609 8.81726L15.9196 6.53662M21.8609 8.81726L19.5802 14.7585"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.577 4.87834C12.6842 4.47824 13.0955 4.2408 13.4956 4.34801L18.2766 5.6291C18.4688 5.68058 18.6326 5.80628 18.732 5.97854C18.8315 6.1508 18.8585 6.35552 18.807 6.54766L17.5259 11.3287C17.4187 11.7288 17.0074 11.9663 16.6073 11.8591C16.2072 11.7519 15.9698 11.3406 16.077 10.9405L16.8865 7.9195C14.6303 9.30965 12.7541 11.0901 11.2935 13.1222C11.1651 13.3009 10.9646 13.4142 10.7452 13.432C10.5259 13.4499 10.3098 13.3704 10.1542 13.2148L7 10.0607L2.28033 14.7803C1.98744 15.0732 1.51256 15.0732 1.21967 14.7803C0.926777 14.4874 0.926777 14.0126 1.21967 13.7197L6.46967 8.46968C6.76256 8.17679 7.23744 8.17679 7.53033 8.46968L10.6039 11.5433C12.1049 9.63051 13.9633 7.9506 16.1492 6.61197L13.1073 5.7969C12.7072 5.68969 12.4698 5.27844 12.577 4.87834Z"
      fill={color}
    />
  {:else if variation === 'micro'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.80789 4.05656C9.91678 3.65692 10.329 3.42122 10.7287 3.53011L13.8435 4.37883C14.2408 4.48708 14.4765 4.89535 14.3716 5.29351L13.5492 8.41543C13.4437 8.81598 13.0334 9.05515 12.6329 8.94963C12.2324 8.84411 11.9932 8.43386 12.0987 8.03332L12.4363 6.75181C11.1124 7.66161 9.9076 8.68754 8.82741 9.80796C8.6877 9.95287 8.49561 10.0355 8.29433 10.0374C8.09305 10.0392 7.89947 9.96008 7.75714 9.81775L6 8.0606L2.28033 11.7803C1.98744 12.0732 1.51256 12.0732 1.21967 11.7803C0.926777 11.4874 0.926777 11.0125 1.21967 10.7196L5.46967 6.46961C5.76256 6.17672 6.23744 6.17672 6.53033 6.46961L8.28597 8.22526C9.35156 7.18576 10.5223 6.23016 11.7936 5.37495L10.3343 4.97735C9.93469 4.86845 9.69899 4.4562 9.80789 4.05656Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.2194 6.26793C15.3679 5.88122 15.8017 5.68808 16.1884 5.83652L22.1297 8.11716C22.3154 8.18844 22.4651 8.33057 22.546 8.51229C22.627 8.694 22.6324 8.90042 22.5611 9.08612L20.2804 15.0274C20.132 15.4141 19.6982 15.6072 19.3115 15.4588C18.9248 15.3104 18.7316 14.8765 18.8801 14.4898L20.5118 10.239L19.4253 10.7227C16.9721 11.815 15.1036 13.6758 13.975 15.8962C13.8662 16.1104 13.6614 16.2594 13.4241 16.2971C13.1869 16.3348 12.946 16.2566 12.7761 16.0868L9 12.3107L2.78033 18.5303C2.48744 18.8232 2.01256 18.8232 1.71967 18.5303C1.42678 18.2374 1.42678 17.7626 1.71967 17.4697L8.46967 10.7197C8.61032 10.579 8.80109 10.5 9 10.5C9.19891 10.5 9.38968 10.579 9.53033 10.7197L13.1363 14.3257C14.4369 12.2046 16.3711 10.4406 18.8152 9.35239L19.9017 8.86864L15.6508 7.23689C15.2641 7.08845 15.071 6.65463 15.2194 6.26793Z"
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
@prop ariaLabel = 'arrow trending up'
@prop ...restProps
-->
