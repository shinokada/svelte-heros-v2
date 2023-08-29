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
  
export let ariaLabel="archive box x mark" </script>

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
  <path d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M2 3C1.44772 3 1 3.44772 1 4V5C1 5.55228 1.44772 6 2 6H18C18.5523 6 19 5.55228 19 5V4C19 3.44772 18.5523 3 18 3H2Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.5H18L17.1885 15.2094C17.0813 16.2273 16.223 17 15.1995 17H4.80052C3.77701 17 2.91866 16.2273 2.81151 15.2094L2 7.5ZM7.21967 9.21967C7.51256 8.92678 7.98744 8.92678 8.28033 9.21967L10 10.9393L11.7197 9.21967C12.0126 8.92678 12.4874 8.92678 12.7803 9.21967C13.0732 9.51256 13.0732 9.98744 12.7803 10.2803L11.0607 12L12.7803 13.7197C13.0732 14.0126 13.0732 14.4874 12.7803 14.7803C12.4874 15.0732 12.0126 15.0732 11.7197 14.7803L10 13.0607L8.28033 14.7803C7.98744 15.0732 7.51256 15.0732 7.21967 14.7803C6.92678 14.4874 6.92678 14.0126 7.21967 13.7197L8.93934 12L7.21967 10.2803C6.92678 9.98744 6.92678 9.51256 7.21967 9.21967Z" fill="{color}"/> 
{:else}
  <path d="M3.375 3C2.33947 3 1.5 3.83947 1.5 4.875V5.625C1.5 6.66053 2.33947 7.5 3.375 7.5H20.625C21.6605 7.5 22.5 6.66053 22.5 5.625V4.875C22.5 3.83947 21.6605 3 20.625 3H3.375Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.08679 9L3.62657 18.1762C3.71984 19.7619 5.03296 21 6.62139 21H17.3783C18.9667 21 20.2799 19.7619 20.3731 18.1762L20.9129 9H3.08679ZM9.21967 11.8447C9.51256 11.5518 9.98744 11.5518 10.2803 11.8447L12 13.5643L13.7197 11.8447C14.0126 11.5518 14.4874 11.5518 14.7803 11.8447C15.0732 12.1376 15.0732 12.6124 14.7803 12.9053L13.0607 14.625L14.7803 16.3447C15.0732 16.6376 15.0732 17.1124 14.7803 17.4053C14.4874 17.6982 14.0126 17.6982 13.7197 17.4053L12 15.6857L10.2803 17.4053C9.98744 17.6982 9.51256 17.6982 9.21967 17.4053C8.92678 17.1124 8.92678 16.6376 9.21967 16.3447L10.9393 14.625L9.21967 12.9053C8.92678 12.6124 8.92678 12.1376 9.21967 11.8447Z" fill="{color}"/> 
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
