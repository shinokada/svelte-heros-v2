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
  
export let ariaLabel="chart bar square" </script>

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
  <path d="M7.5 14.25V16.5M10.5 12V16.5M13.5 9.75V16.5M16.5 7.5V16.5M6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V6C20.25 4.75736 19.2426 3.75 18 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 19.2426 4.75736 20.25 6 20.25Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2C3.00736 2 2 3.00736 2 4.25V15.75C2 16.9926 3.00736 18 4.25 18H15.75C16.9926 18 18 16.9926 18 15.75V4.25C18 3.00736 16.9926 2 15.75 2H4.25ZM15 5.75C15 5.33579 14.6642 5 14.25 5C13.8358 5 13.5 5.33579 13.5 5.75V14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V5.75ZM6.5 11.75C6.5 11.3358 6.16421 11 5.75 11C5.33579 11 5 11.3358 5 11.75V14.25C5 14.6642 5.33579 15 5.75 15C6.16421 15 6.5 14.6642 6.5 14.25V11.75ZM8.5835 9C8.99771 9 9.3335 9.33579 9.3335 9.75V14.25C9.3335 14.6642 8.99771 15 8.5835 15C8.16928 15 7.8335 14.6642 7.8335 14.25V9.75C7.8335 9.33579 8.16928 9 8.5835 9ZM12.1636 7.75C12.1636 7.33579 11.8278 7 11.4136 7C10.9994 7 10.6636 7.33579 10.6636 7.75V14.25C10.6636 14.6642 10.9994 15 11.4136 15C11.8278 15 12.1636 14.6642 12.1636 14.25V7.75Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM7.5 13.5C7.91421 13.5 8.25 13.8358 8.25 14.25V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25C7.08579 17.25 6.75 16.9142 6.75 16.5V14.25C6.75 13.8358 7.08579 13.5 7.5 13.5ZM11.25 12C11.25 11.5858 10.9142 11.25 10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12V16.5C9.75 16.9142 10.0858 17.25 10.5 17.25C10.9142 17.25 11.25 16.9142 11.25 16.5V12ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V16.5C14.25 16.9142 13.9142 17.25 13.5 17.25C13.0858 17.25 12.75 16.9142 12.75 16.5V9.75C12.75 9.33579 13.0858 9 13.5 9ZM17.25 7.5C17.25 7.08579 16.9142 6.75 16.5 6.75C16.0858 6.75 15.75 7.08579 15.75 7.5V16.5C15.75 16.9142 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5V7.5Z" fill="{color}"/> 
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
