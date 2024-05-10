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
  
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    variation?: "solid" | "outline" | "mini" | "micro";
    strokeWidth?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  
  interface CtxType extends BaseProps {}
  
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }
  
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    variation = ctx.variation || "outline",
    strokeWidth = ctx.strokeWidth || '1.5',
    withEvents = ctx.withEvents || false, 
    title = {}, 
    desc = {}, 
    class: classname, 
    ariaLabel = "bookmark", 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);
  let viewBox: string = $state(''); 

  function updateHasDescription() {
    hasDescription = !!(title.id || desc.id); 
  }
  updateHasDescription();

  $effect(() => {
    updateHasDescription();
 
    if (variation === 'mini') {
      size = size || "20";
      viewBox = '0 0 20 20';
    } else if (variation === 'micro'){
      size = size || "16";
      viewBox = '0 0 16 16';
    } else {
      size = size || "24";
      viewBox = '0 0 24 24';
    }
  })
  
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    {viewBox}
    stroke-width={strokeWidth}
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      {#if variation === 'outline'}
        <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C8.28365 2 6.5916 2.10551 4.93005 2.31046C3.80579 2.44913 3 3.41374 3 4.51661V17.25C3 17.5078 3.13239 17.7475 3.35057 17.8848C3.56875 18.0221 3.84215 18.0377 4.07455 17.9261L10 15.0819L15.9255 17.9261C16.1578 18.0377 16.4312 18.0221 16.6494 17.8848C16.8676 17.7475 17 17.5078 17 17.25V4.51661C17 3.41374 16.1942 2.44913 15.07 2.31046C13.4084 2.10551 11.7163 2 10 2Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path d="M3.75 2C3.33579 2 3 2.33579 3 2.75V13.25C3 13.5533 3.18273 13.8268 3.46299 13.9429C3.74324 14.059 4.06583 13.9948 4.28033 13.7803L8 10.0607L11.7197 13.7803C11.9342 13.9948 12.2568 14.059 12.537 13.9429C12.8173 13.8268 13 13.5533 13 13.25V2.75C13 2.33579 12.6642 2 12.25 2H3.75Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32022 2.57741C8.18374 2.36114 10.079 2.25 12 2.25C13.921 2.25 15.8163 2.36114 17.6798 2.57741C19.1772 2.75119 20.25 4.03722 20.25 5.50699V21C20.25 21.2599 20.1154 21.5013 19.8943 21.638C19.6732 21.7746 19.3971 21.7871 19.1646 21.6708L12 18.0885L4.83541 21.6708C4.60292 21.7871 4.32681 21.7746 4.1057 21.638C3.88459 21.5013 3.75 21.2599 3.75 21V5.50699C3.75 4.03722 4.82283 2.75119 6.32022 2.57741Z" fill="{color}"/> 
      {/if}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    {viewBox}
    stroke-width={strokeWidth}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      {#if variation === 'outline'}
        <path d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C8.28365 2 6.5916 2.10551 4.93005 2.31046C3.80579 2.44913 3 3.41374 3 4.51661V17.25C3 17.5078 3.13239 17.7475 3.35057 17.8848C3.56875 18.0221 3.84215 18.0377 4.07455 17.9261L10 15.0819L15.9255 17.9261C16.1578 18.0377 16.4312 18.0221 16.6494 17.8848C16.8676 17.7475 17 17.5078 17 17.25V4.51661C17 3.41374 16.1942 2.44913 15.07 2.31046C13.4084 2.10551 11.7163 2 10 2Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path d="M3.75 2C3.33579 2 3 2.33579 3 2.75V13.25C3 13.5533 3.18273 13.8268 3.46299 13.9429C3.74324 14.059 4.06583 13.9948 4.28033 13.7803L8 10.0607L11.7197 13.7803C11.9342 13.9948 12.2568 14.059 12.537 13.9429C12.8173 13.8268 13 13.5533 13 13.25V2.75C13 2.33579 12.6642 2 12.25 2H3.75Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32022 2.57741C8.18374 2.36114 10.079 2.25 12 2.25C13.921 2.25 15.8163 2.36114 17.6798 2.57741C19.1772 2.75119 20.25 4.03722 20.25 5.50699V21C20.25 21.2599 20.1154 21.5013 19.8943 21.638C19.6732 21.7746 19.3971 21.7871 19.1646 21.6708L12 18.0885L4.83541 21.6708C4.60292 21.7871 4.32681 21.7746 4.1057 21.638C3.88459 21.5013 3.75 21.2599 3.75 21V5.50699C3.75 4.03722 4.82283 2.75119 6.32022 2.57741Z" fill="{color}"/> 
      {/if}
  </svg>
{/if}


