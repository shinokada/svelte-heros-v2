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
  
export let ariaLabel="arrows right left" </script>

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
  <path d="M7.5 21L3 16.5M3 16.5L7.5 12M3 16.5H16.5M16.5 3L21 7.5M21 7.5L16.5 12M21 7.5L7.5 7.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2004 2.23966C12.9186 2.5432 12.9361 3.01775 13.2397 3.2996L15.3401 5.25L6.75 5.25C6.33579 5.25 6 5.58579 6 6C6 6.41422 6.33579 6.75 6.75 6.75L15.3401 6.75L13.2397 8.70041C12.9361 8.98226 12.9186 9.45681 13.2004 9.76034C13.4823 10.0639 13.9568 10.0815 14.2603 9.7996L17.7603 6.5496C17.9132 6.40769 18 6.20855 18 6C18 5.79145 17.9132 5.59232 17.7603 5.45041L14.2603 2.20041C13.9568 1.91856 13.4823 1.93613 13.2004 2.23966ZM6.79959 10.2397C6.51774 9.93613 6.04319 9.91856 5.73966 10.2004L2.23966 13.4504C2.08684 13.5923 2 13.7915 2 14C2 14.2086 2.08684 14.4077 2.23966 14.5496L5.73966 17.7996C6.04319 18.0815 6.51774 18.0639 6.79959 17.7603C7.08145 17.4568 7.06387 16.9823 6.76034 16.7004L4.6599 14.75H13.25C13.6642 14.75 14 14.4142 14 14C14 13.5858 13.6642 13.25 13.25 13.25H4.6599L6.76034 11.2996C7.06387 11.0177 7.08145 10.5432 6.79959 10.2397Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9697 2.46967C16.2626 2.17678 16.7374 2.17678 17.0303 2.46967L21.5303 6.96967C21.671 7.11032 21.75 7.30109 21.75 7.5C21.75 7.69891 21.671 7.88968 21.5303 8.03033L17.0303 12.5303C16.7374 12.8232 16.2626 12.8232 15.9697 12.5303C15.6768 12.2374 15.6768 11.7626 15.9697 11.4697L19.1893 8.25L7.5 8.25C7.08579 8.25 6.75 7.91421 6.75 7.5C6.75 7.08579 7.08579 6.75 7.5 6.75L19.1893 6.75L15.9697 3.53033C15.6768 3.23744 15.6768 2.76256 15.9697 2.46967ZM8.03033 11.4697C8.32322 11.7626 8.32322 12.2374 8.03033 12.5303L4.81066 15.75H16.5C16.9142 15.75 17.25 16.0858 17.25 16.5C17.25 16.9142 16.9142 17.25 16.5 17.25H4.81066L8.03033 20.4697C8.32322 20.7626 8.32322 21.2374 8.03033 21.5303C7.73744 21.8232 7.26256 21.8232 6.96967 21.5303L2.46967 17.0303C2.17678 16.7374 2.17678 16.2626 2.46967 15.9697L6.96967 11.4697C7.26256 11.1768 7.73744 11.1768 8.03033 11.4697Z" fill="{color}"/> 
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
