<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.18
  export let size = "24";
  export let viewBox: string = '0 0 24 24';
  export let role = "img";
  export let strokeWidth = "1.5";
  export let color = "currentColor";
  export let variation: "solid" | "outline" | "mini"= "outline";

  if(variation === "mini"){
    size = "20"
    viewBox = '0 0 20 20'
  }
  
export let ariaLabel="arrow right circle" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none" 
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
{#if variation === 'outline'}
  <path d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6.75 9.25C6.33579 9.25 6 9.58579 6 10C6 10.4142 6.33579 10.75 6.75 10.75H11.3401L9.23966 12.7004C8.93613 12.9823 8.91855 13.4568 9.20041 13.7603C9.48226 14.0639 9.95681 14.0814 10.2603 13.7996L13.7603 10.5496C13.9132 10.4077 14 10.2086 14 10C14 9.79145 13.9132 9.59231 13.7603 9.4504L10.2603 6.2004C9.95681 5.91855 9.48226 5.93613 9.2004 6.23966C8.91855 6.54319 8.93613 7.01774 9.23966 7.2996L11.3401 9.25H6.75Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM16.2803 12.5303C16.421 12.3897 16.5 12.1989 16.5 12C16.5 11.8011 16.421 11.6103 16.2803 11.4697L13.2803 8.46967C12.9874 8.17678 12.5126 8.17678 12.2197 8.46967C11.9268 8.76256 11.9268 9.23744 12.2197 9.53033L13.9393 11.25L8.25 11.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75L13.9393 12.75L12.2197 14.4697C11.9268 14.7626 11.9268 15.2374 12.2197 15.5303C12.5126 15.8232 12.9874 15.8232 13.2803 15.5303L16.2803 12.5303Z" fill="{color}"/> 
{/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = "24";
@prop export let viewBox: string = '0 0 24 24';
@prop export let role = "img";
@prop export let strokeWidth = "1.5";
@prop export let color = "currentColor";
@prop export let variation: "solid" | "outline" | "mini"= "outline";
-->
