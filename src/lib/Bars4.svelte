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
  
export let ariaLabel="bars 4" </script>

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
  <path d="M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.75C2 3.33579 2.33579 3 2.75 3H17.25C17.6642 3 18 3.33579 18 3.75C18 4.16421 17.6642 4.5 17.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 7.91667C2 7.50245 2.33579 7.16667 2.75 7.16667H17.25C17.6642 7.16667 18 7.50245 18 7.91667C18 8.33088 17.6642 8.66667 17.25 8.66667H2.75C2.33579 8.66667 2 8.33088 2 7.91667ZM2 12.0833C2 11.6691 2.33579 11.3333 2.75 11.3333H17.25C17.6642 11.3333 18 11.6691 18 12.0833C18 12.4975 17.6642 12.8333 17.25 12.8333H2.75C2.33579 12.8333 2 12.4975 2 12.0833ZM2 16.25C2 15.8358 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.8358 18 16.25C18 16.6642 17.6642 17 17.25 17H2.75C2.33579 17 2 16.6642 2 16.25Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM3 9.75C3 9.33579 3.33579 9 3.75 9H20.25C20.6642 9 21 9.33579 21 9.75C21 10.1642 20.6642 10.5 20.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H20.25C20.6642 13.5 21 13.8358 21 14.25C21 14.6642 20.6642 15 20.25 15H3.75C3.33579 15 3 14.6642 3 14.25ZM3 18.75C3 18.3358 3.33579 18 3.75 18H20.25C20.6642 18 21 18.3358 21 18.75C21 19.1642 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.1642 3 18.75Z" fill="{color}"/> 
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
