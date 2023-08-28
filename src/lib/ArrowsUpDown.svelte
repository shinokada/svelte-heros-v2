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
  
export let ariaLabel="arrows up down" </script>

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
  <path d="M3 7.5L7.5 3M7.5 3L12 7.5M7.5 3V16.5M21 16.5L16.5 21M16.5 21L12 16.5M16.5 21L16.5 7.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.23966 6.7996C2.5432 7.08145 3.01775 7.06387 3.2996 6.76034L5.25 4.6599L5.25 13.25C5.25 13.6642 5.58579 14 6 14C6.41422 14 6.75 13.6642 6.75 13.25V4.6599L8.70041 6.76034C8.98226 7.06387 9.45681 7.08145 9.76034 6.79959C10.0639 6.51774 10.0815 6.04319 9.7996 5.73966L6.5496 2.23966C6.40769 2.08684 6.20855 2 6 2C5.79145 2 5.59232 2.08684 5.45041 2.23966L2.20041 5.73966C1.91856 6.04319 1.93613 6.51774 2.23966 6.7996ZM10.2397 13.2004C9.93613 13.4823 9.91856 13.9568 10.2004 14.2603L13.4504 17.7603C13.5923 17.9132 13.7915 18 14 18C14.2086 18 14.4077 17.9132 14.5496 17.7603L17.7996 14.2603C18.0815 13.9568 18.0639 13.4823 17.7603 13.2004C17.4568 12.9186 16.9823 12.9361 16.7004 13.2397L14.75 15.3401V6.75C14.75 6.33579 14.4142 6 14 6C13.5858 6 13.25 6.33579 13.25 6.75V15.3401L11.2996 13.2397C11.0177 12.9361 10.5432 12.9186 10.2397 13.2004Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96967 2.46967C7.26256 2.17678 7.73744 2.17678 8.03033 2.46967L12.5303 6.96967C12.8232 7.26256 12.8232 7.73744 12.5303 8.03033C12.2374 8.32322 11.7626 8.32322 11.4697 8.03033L8.25 4.81066V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25C7.08579 17.25 6.75 16.9142 6.75 16.5V4.81066L3.53033 8.03033C3.23744 8.32322 2.76256 8.32322 2.46967 8.03033C2.17678 7.73744 2.17678 7.26256 2.46967 6.96967L6.96967 2.46967ZM16.5 6.75C16.9142 6.75 17.25 7.08579 17.25 7.5L17.25 19.1893L20.4697 15.9697C20.7626 15.6768 21.2374 15.6768 21.5303 15.9697C21.8232 16.2626 21.8232 16.7374 21.5303 17.0303L17.0303 21.5303C16.8897 21.671 16.6989 21.75 16.5 21.75C16.3011 21.75 16.1103 21.671 15.9697 21.5303L11.4697 17.0303C11.1768 16.7374 11.1768 16.2626 11.4697 15.9697C11.7626 15.6768 12.2374 15.6768 12.5303 15.9697L15.75 19.1893L15.75 7.5C15.75 7.08579 16.0858 6.75 16.5 6.75Z" fill="{color}"/> 
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
