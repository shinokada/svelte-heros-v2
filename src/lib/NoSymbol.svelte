<script lang="ts">
  import { getContext } from 'svelte';

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline' | 'mini' | 'micro';
    strokeWidth?: string;
    withEvents?: boolean;
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
  export let strokeWidth: string = ctx.strokeWidth || '1.5';
  export let withEvents: boolean = ctx.withEvents || false;
  export let title: TitleType = {};
  export let desc: DescType = {};
  export let ariaLabel: string = 'academic cap';

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  let hasDescription = false;
  let viewBox: string = '';

  function updateHasDescription() {
    hasDescription = !!(title?.id || desc?.id);
  }
  updateHasDescription();

  $: {
    updateHasDescription();

    if (variation === 'mini') {
      size = size || '20';
      viewBox = '0 0 20 20';
    } else if (variation === 'micro') {
      size = size || '16';
      viewBox = '0 0 16 16';
    } else {
      size = size || '24';
      viewBox = '0 0 24 24';
    }
  }
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    {viewBox}
    stroke-width={strokeWidth}
    on:click
    on:keydown
    on:keyup
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:mouseout
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    {#if variation === 'outline'}
      <path
        d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.96461 4.90395L15.096 14.0354C15.9755 12.9265 16.5 11.525 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C8.475 3.5 7.07353 4.02446 5.96461 4.90395ZM14.0354 15.096L4.90395 5.96461C4.02446 7.07353 3.5 8.475 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C11.525 16.5 12.9265 15.9755 14.0354 15.096ZM4.34315 4.34315C5.79004 2.89625 7.79107 2 10 2C14.4183 2 18 5.58172 18 10C18 12.2089 17.1037 14.21 15.6569 15.6569C14.21 17.1037 12.2089 18 10 18C5.58172 18 2 14.4183 2 10C2 7.79107 2.89625 5.79004 4.34315 4.34315Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.05025 3.05025C5.78392 0.316582 10.2161 0.316582 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316582 10.2161 0.316582 5.78392 3.05025 3.05025ZM4.6771 3.61644L12.3836 11.3229C14.0219 9.16724 13.8571 6.07891 11.8891 4.11091C9.92109 2.14292 6.83276 1.9781 4.6771 3.61644ZM11.3229 12.3836L3.61644 4.6771C1.9781 6.83276 2.14292 9.92109 4.11091 11.8891C6.07891 13.8571 9.16724 14.0219 11.3229 12.3836Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.72048 5.65982L18.3402 17.2795C21.0455 14.0383 20.8767 9.20943 17.8336 6.16637C14.7906 3.12331 9.96171 2.95446 6.72048 5.65982ZM17.2795 18.3402L5.65982 6.72048C2.95446 9.96171 3.12331 14.7906 6.16637 17.8336C9.20943 20.8767 14.0383 21.0455 17.2795 18.3402ZM5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571Z"
        fill={color}
      />
    {/if}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...$$restProps}
    {role}
    width={size}
    height={size}
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
        d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {:else if variation === 'mini'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.96461 4.90395L15.096 14.0354C15.9755 12.9265 16.5 11.525 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C8.475 3.5 7.07353 4.02446 5.96461 4.90395ZM14.0354 15.096L4.90395 5.96461C4.02446 7.07353 3.5 8.475 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C11.525 16.5 12.9265 15.9755 14.0354 15.096ZM4.34315 4.34315C5.79004 2.89625 7.79107 2 10 2C14.4183 2 18 5.58172 18 10C18 12.2089 17.1037 14.21 15.6569 15.6569C14.21 17.1037 12.2089 18 10 18C5.58172 18 2 14.4183 2 10C2 7.79107 2.89625 5.79004 4.34315 4.34315Z"
        fill={color}
      />
    {:else if variation === 'micro'}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.05025 3.05025C5.78392 0.316582 10.2161 0.316582 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316582 10.2161 0.316582 5.78392 3.05025 3.05025ZM4.6771 3.61644L12.3836 11.3229C14.0219 9.16724 13.8571 6.07891 11.8891 4.11091C9.92109 2.14292 6.83276 1.9781 4.6771 3.61644ZM11.3229 12.3836L3.61644 4.6771C1.9781 6.83276 2.14292 9.92109 4.11091 11.8891C6.07891 13.8571 9.16724 14.0219 11.3229 12.3836Z"
        fill={color}
      />
    {:else}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.72048 5.65982L18.3402 17.2795C21.0455 14.0383 20.8767 9.20943 17.8336 6.16637C14.7906 3.12331 9.96171 2.95446 6.72048 5.65982ZM17.2795 18.3402L5.65982 6.72048C2.95446 9.96171 3.12331 14.7906 6.16637 17.8336C9.20943 20.8767 14.0383 21.0455 17.2795 18.3402ZM5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571Z"
        fill={color}
      />
    {/if}
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' | 'micro' = ctx.variation || 'outline';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let withEvents: boolean = ctx.withEvents || false;
@prop export let title: TitleType = {};
@prop export let desc: DescType = {};
@prop export let ariaLabel: string = 'academic cap';
-->
