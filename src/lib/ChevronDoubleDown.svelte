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
  
export let ariaLabel="chevron double down" </script>

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
  <path d="M19.5 5.25L12 12.75L4.5 5.25M19.5 11.25L12 18.75L4.5 11.25" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7698 4.20938C15.0684 4.49647 15.0777 4.97125 14.7906 5.26983L10.5406 9.76983C10.3992 9.91689 10.204 10 10 10C9.79599 10 9.60078 9.91689 9.45937 9.76983L5.20937 5.26983C4.92228 4.97125 4.93159 4.49647 5.23017 4.20938C5.52875 3.92228 6.00353 3.93159 6.29062 4.23017L10 8.16792L13.7094 4.23017C13.9965 3.93159 14.4713 3.92228 14.7698 4.20938ZM14.7698 10.2094C15.0684 10.4965 15.0777 10.9713 14.7906 11.2698L10.5406 15.7698C10.3992 15.9169 10.204 16 10 16C9.79599 16 9.60078 15.9169 9.45937 15.7698L5.20937 11.2698C4.92228 10.9713 4.93159 10.4965 5.23017 10.2094C5.52875 9.92228 6.00353 9.93159 6.29062 10.2302L10 14.1679L13.7094 10.2302C13.9965 9.93159 14.4713 9.92228 14.7698 10.2094Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0303 4.71967C20.3232 5.01256 20.3232 5.48744 20.0303 5.78033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803L3.96967 5.78033C3.67678 5.48744 3.67678 5.01256 3.96967 4.71967C4.26256 4.42678 4.73744 4.42678 5.03033 4.71967L12 11.6893L18.9697 4.71967C19.2626 4.42678 19.7374 4.42678 20.0303 4.71967ZM20.0303 10.7197C20.3232 11.0126 20.3232 11.4874 20.0303 11.7803L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L3.96967 11.7803C3.67678 11.4874 3.67678 11.0126 3.96967 10.7197C4.26256 10.4268 4.73744 10.4268 5.03033 10.7197L12 17.6893L18.9697 10.7197C19.2626 10.4268 19.7374 10.4268 20.0303 10.7197Z" fill="{color}"/> 
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
