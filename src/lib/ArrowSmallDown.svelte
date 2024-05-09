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
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }
  
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
    ariaLabel = "arrow small down", 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);
  let viewBox: string = $state(''); 

  function updateHasDescription() {
    // Double negation converts truthy values to true, falsy to false
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
        <path d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10.4142 5 10.75 5.33579 10.75 5.75V12.3879L12.7094 10.2302C12.9965 9.93159 13.4713 9.92228 13.7698 10.2094C14.0684 10.4965 14.0777 10.9713 13.7906 11.2698L10.5406 14.7698C10.3992 14.9169 10.204 15 10 15C9.79599 15 9.60078 14.9169 9.45938 14.7698L6.20938 11.2698C5.92228 10.9713 5.93159 10.4965 6.23017 10.2094C6.52875 9.92228 7.00353 9.93159 7.29063 10.2302L9.25 12.3879V5.75C9.25 5.33579 9.58579 5 10 5Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        replace_svg_micro
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5L12.75 17.6893L18.2197 12.2197C18.5126 11.9268 18.9874 11.9268 19.2803 12.2197C19.5732 12.5126 19.5732 12.9874 19.2803 13.2803L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L4.71967 13.2803C4.42678 12.9874 4.42678 12.5126 4.71967 12.2197C5.01256 11.9268 5.48744 11.9268 5.78033 12.2197L11.25 17.6893L11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75Z" fill="{color}"/> 
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
        <path d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
      {:else if variation === 'mini'}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10.4142 5 10.75 5.33579 10.75 5.75V12.3879L12.7094 10.2302C12.9965 9.93159 13.4713 9.92228 13.7698 10.2094C14.0684 10.4965 14.0777 10.9713 13.7906 11.2698L10.5406 14.7698C10.3992 14.9169 10.204 15 10 15C9.79599 15 9.60078 14.9169 9.45938 14.7698L6.20938 11.2698C5.92228 10.9713 5.93159 10.4965 6.23017 10.2094C6.52875 9.92228 7.00353 9.93159 7.29063 10.2302L9.25 12.3879V5.75C9.25 5.33579 9.58579 5 10 5Z" fill="{color}"/> 
      {:else if variation === 'micro'}
        replace_svg_micro
      {:else}
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5L12.75 17.6893L18.2197 12.2197C18.5126 11.9268 18.9874 11.9268 19.2803 12.2197C19.5732 12.5126 19.5732 12.9874 19.2803 13.2803L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L4.71967 13.2803C4.42678 12.9874 4.42678 12.5126 4.71967 12.2197C5.01256 11.9268 5.48744 11.9268 5.78033 12.2197L11.25 17.6893L11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75Z" fill="{color}"/> 
      {/if}
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com/)
## Props
@props: 
-->
