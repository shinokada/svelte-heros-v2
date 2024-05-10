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
    variation?: "solid" | "outline" | "mini" | "micro";
    strokeWidth?: string;
    withEvents?: boolean;
  }
  
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: "solid" | "outline" | "mini" | "micro" = ctx.variation || "outline";
  export let strokeWidth: string = ctx.strokeWidth || '1.5'
  export let withEvents: boolean = ctx.withEvents || false;
  export let title: TitleType = {};
  export let desc: DescType = {};
  export let ariaLabel: string = "academic cap";

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
      size = size || "20";
      viewBox = '0 0 20 20';
    } else if (variation === 'micro'){
      size = size || "16";
      viewBox = '0 0 16 16';
    } else {
      size = size || "24";
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
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      {#if variation === 'outline'}
        <path d="M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L6.5 7.56066V13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V5.75C5 5.33579 5.33579 5 5.75 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H7.56066L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L6.56066 5.5H10.25C10.6642 5.5 11 5.16421 11 4.75C11 4.33579 10.6642 4 10.25 4H4.75C4.33579 4 4 4.33579 4 4.75V10.25C4 10.6642 4.33579 11 4.75 11C5.16421 11 5.5 10.6642 5.5 10.25V6.56066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 6.31066L5.25 15.75C5.25 16.1642 4.91421 16.5 4.5 16.5C4.08579 16.5 3.75 16.1642 3.75 15.75L3.75 4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75L15.75 3.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25L6.31066 5.25L20.0303 18.9697C20.3232 19.2626 20.3232 19.7374 20.0303 20.0303C19.7374 20.3232 19.2626 20.3232 18.9697 20.0303L5.25 6.31066Z" fill="{color}"/> 
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
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      {#if variation === 'outline'}
        <path d="M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L6.5 7.56066V13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V5.75C5 5.33579 5.33579 5 5.75 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H7.56066L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L6.56066 5.5H10.25C10.6642 5.5 11 5.16421 11 4.75C11 4.33579 10.6642 4 10.25 4H4.75C4.33579 4 4 4.33579 4 4.75V10.25C4 10.6642 4.33579 11 4.75 11C5.16421 11 5.5 10.6642 5.5 10.25V6.56066L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 6.31066L5.25 15.75C5.25 16.1642 4.91421 16.5 4.5 16.5C4.08579 16.5 3.75 16.1642 3.75 15.75L3.75 4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75L15.75 3.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25L6.31066 5.25L20.0303 18.9697C20.3232 19.2626 20.3232 19.7374 20.0303 20.0303C19.7374 20.3232 19.2626 20.3232 18.9697 20.0303L5.25 6.31066Z" fill="{color}"/> 
      {/if}
  </svg>
{/if}