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
  
export let ariaLabel="video camera slash" </script>

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
  <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M12 18.75H4.5C3.25736 18.75 2.25 17.7426 2.25 16.5V9M15.091 18.091L16.5 19.5M15.091 18.091C15.4982 17.6838 15.75 17.1213 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.87868 5.25 3.31618 5.50184 2.90901 5.90901M15.091 18.091L2.90901 5.90901M1.5 4.5L2.90901 5.90901" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M1 13.75V7.18198L9.81802 16H3.25C2.00736 16 1 14.9926 1 13.75Z" fill="{color}"/> <path d="M13 6.25V12.818L4.18198 4H10.75C11.9926 4 13 5.00736 13 6.25Z" fill="{color}"/> <path d="M19 4.75002C19 4.44668 18.8173 4.1732 18.537 4.05711C18.2568 3.94103 17.9342 4.00519 17.7197 4.21969L14.7197 7.21969C14.579 7.36034 14.5 7.55111 14.5 7.75002V12.25C14.5 12.4489 14.579 12.6397 14.7197 12.7804L17.7197 15.7804C17.9342 15.9949 18.2568 16.059 18.537 15.9429C18.8173 15.8268 19 15.5534 19 15.25V4.75002Z" fill="{color}"/> <path d="M2.28033 4.21967C1.98744 3.92678 1.51256 3.92678 1.21967 4.21967C0.926777 4.51256 0.926777 4.98744 1.21967 5.28033L11.7197 15.7803C12.0126 16.0732 12.4874 16.0732 12.7803 15.7803C13.0732 15.4874 13.0732 15.0126 12.7803 14.7197L2.28033 4.21967Z" fill="{color}"/> 
{:else}
  <path d="M3.53033 2.46967C3.23744 2.17678 2.76256 2.17678 2.46967 2.46967C2.17678 2.76256 2.17678 3.23744 2.46967 3.53033L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L3.53033 2.46967Z" fill="{color}"/> <path d="M22.5 17.6893C22.5 18.1614 22.2984 18.5502 21.996 18.814L17.25 14.068V7.93931L19.9393 5.24996C20.8843 4.30501 22.5 4.97427 22.5 6.31063V17.6893Z" fill="{color}"/> <path d="M15.75 7.5V12.568L7.68198 4.5H12.75C14.4069 4.5 15.75 5.84315 15.75 7.5Z" fill="{color}"/> <path d="M1.5 7.5C1.5 6.71787 1.79931 6.00564 2.28963 5.47161L15.1363 18.3183C14.5882 19.0366 13.7232 19.5 12.75 19.5H4.5C2.84315 19.5 1.5 18.1569 1.5 16.5V7.5Z" fill="{color}"/> 
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
