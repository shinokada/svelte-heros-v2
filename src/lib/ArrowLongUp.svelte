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
        <path d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C9.58579 18 9.25 17.6642 9.25 17.25L9.25 4.6599L7.2996 6.76034C7.01775 7.06387 6.5432 7.08145 6.23966 6.7996C5.93613 6.51774 5.91856 6.0432 6.20041 5.73966L9.45041 2.23966C9.59232 2.08684 9.79145 2 10 2C10.2086 2 10.4077 2.08684 10.5496 2.23966L13.7996 5.73966C14.0815 6.04319 14.0639 6.51774 13.7603 6.79959C13.4568 7.08145 12.9823 7.06387 12.7004 6.76034L10.75 4.6599L10.75 17.25C10.75 17.6642 10.4142 18 10 18Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8.41421 14 8.75 13.6642 8.75 13.25V4.56066L9.96967 5.78033C10.2626 6.07322 10.7374 6.07322 11.0303 5.78033C11.3232 5.48744 11.3232 5.01256 11.0303 4.71967L8.53033 2.21967C8.23744 1.92678 7.76256 1.92678 7.46967 2.21967L4.96967 4.71967C4.67678 5.01256 4.67678 5.48744 4.96967 5.78033C5.26256 6.07322 5.73744 6.07322 6.03033 5.78033L7.25 4.56066V13.25C7.25 13.6642 7.58579 14 8 14Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L16.2803 6.21967C16.5732 6.51256 16.5732 6.98744 16.2803 7.28033C15.9874 7.57322 15.5126 7.57322 15.2197 7.28033L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L8.78033 7.28033C8.48744 7.57322 8.01256 7.57322 7.71967 7.28033C7.42678 6.98744 7.42678 6.51256 7.71967 6.21967L11.4697 2.46967Z" fill="{color}"/> 
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
        <path d="M8.25 6.75L12 3M12 3L15.75 6.75M12 3V21" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C9.58579 18 9.25 17.6642 9.25 17.25L9.25 4.6599L7.2996 6.76034C7.01775 7.06387 6.5432 7.08145 6.23966 6.7996C5.93613 6.51774 5.91856 6.0432 6.20041 5.73966L9.45041 2.23966C9.59232 2.08684 9.79145 2 10 2C10.2086 2 10.4077 2.08684 10.5496 2.23966L13.7996 5.73966C14.0815 6.04319 14.0639 6.51774 13.7603 6.79959C13.4568 7.08145 12.9823 7.06387 12.7004 6.76034L10.75 4.6599L10.75 17.25C10.75 17.6642 10.4142 18 10 18Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8.41421 14 8.75 13.6642 8.75 13.25V4.56066L9.96967 5.78033C10.2626 6.07322 10.7374 6.07322 11.0303 5.78033C11.3232 5.48744 11.3232 5.01256 11.0303 4.71967L8.53033 2.21967C8.23744 1.92678 7.76256 1.92678 7.46967 2.21967L4.96967 4.71967C4.67678 5.01256 4.67678 5.48744 4.96967 5.78033C5.26256 6.07322 5.73744 6.07322 6.03033 5.78033L7.25 4.56066V13.25C7.25 13.6642 7.58579 14 8 14Z" fill="{color}"/> 
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 2.46967C11.7626 2.17678 12.2374 2.17678 12.5303 2.46967L16.2803 6.21967C16.5732 6.51256 16.5732 6.98744 16.2803 7.28033C15.9874 7.57322 15.5126 7.57322 15.2197 7.28033L12.75 4.81066V21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21V4.81066L8.78033 7.28033C8.48744 7.57322 8.01256 7.57322 7.71967 7.28033C7.42678 6.98744 7.42678 6.51256 7.71967 6.21967L11.4697 2.46967Z" fill="{color}"/> 
      {/if}
  </svg>
{/if}