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
  
export let ariaLabel="code bracket" </script>

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
  <path d="M17.25 6.75L22.5 12L17.25 17.25M6.75 17.25L1.5 12L6.75 6.75M14.25 3.75L9.75 20.25" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28033 5.21979C6.57322 5.51269 6.57322 5.98756 6.28033 6.28045L2.56066 10.0001L6.28033 13.7198C6.57322 14.0127 6.57322 14.4876 6.28033 14.7805C5.98744 15.0733 5.51256 15.0733 5.21967 14.7805L0.96967 10.5305C0.676777 10.2376 0.676777 9.76269 0.96967 9.46979L5.21967 5.21979C5.51256 4.9269 5.98744 4.9269 6.28033 5.21979ZM13.7197 5.21979C14.0126 4.9269 14.4874 4.9269 14.7803 5.21979L19.0303 9.46979C19.3232 9.76269 19.3232 10.2376 19.0303 10.5305L14.7803 14.7805C14.4874 15.0733 14.0126 15.0733 13.7197 14.7805C13.4268 14.4876 13.4268 14.0127 13.7197 13.7198L17.4393 10.0001L13.7197 6.28045C13.4268 5.98756 13.4268 5.51269 13.7197 5.21979Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3774 2.01103C11.7856 2.0814 12.0595 2.46936 11.9891 2.87755L9.48909 17.3776C9.41872 17.7857 9.03076 18.0596 8.62257 17.9892C8.21438 17.9188 7.94053 17.5309 8.0109 17.1227L10.5109 2.62269C10.5813 2.2145 10.9692 1.94065 11.3774 2.01103Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4473 3.02662C14.847 3.1356 15.0826 3.54791 14.9736 3.94753L10.4736 20.4475C10.3646 20.8471 9.95228 21.0827 9.55266 20.9738C9.15304 20.8648 8.91744 20.4525 9.02643 20.0529L13.5264 3.55285C13.6354 3.15323 14.0477 2.91763 14.4473 3.02662ZM16.7197 6.21986C17.0126 5.92696 17.4874 5.92696 17.7803 6.21986L23.0303 11.4699C23.3232 11.7628 23.3232 12.2376 23.0303 12.5305L17.7803 17.7805C17.4874 18.0734 17.0126 18.0734 16.7197 17.7805C16.4268 17.4876 16.4268 17.0128 16.7197 16.7199L21.4393 12.0002L16.7197 7.28052C16.4268 6.98762 16.4268 6.51275 16.7197 6.21986ZM7.28033 6.21986C7.57322 6.51275 7.57322 6.98763 7.28033 7.28052L2.56066 12.0002L7.28033 16.7199C7.57322 17.0128 7.57322 17.4876 7.28033 17.7805C6.98744 18.0734 6.51256 18.0734 6.21967 17.7805L0.96967 12.5305C0.676777 12.2376 0.676777 11.7628 0.96967 11.4699L6.21967 6.21986C6.51256 5.92697 6.98744 5.92697 7.28033 6.21986Z" fill="{color}"/> 
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
