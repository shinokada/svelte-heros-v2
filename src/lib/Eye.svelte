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
  
export let ariaLabel="eye" </script>

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
  <path d="M2.03556 12.3224C1.96648 12.1151 1.96642 11.8907 2.03538 11.6834C3.42374 7.50972 7.3608 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5762 16.4903 16.6391 19.5 11.9991 19.5C7.36121 19.5 3.42565 16.4931 2.03556 12.3224Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9.00001 13.6569 9.00001 12C9.00001 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.664255 10.5904C0.517392 10.2087 0.517518 9.78563 0.66461 9.40408C2.10878 5.65788 5.7433 3 9.99859 3C14.256 3 17.892 5.66051 19.3347 9.40962C19.4816 9.79127 19.4814 10.2144 19.3344 10.5959C17.8902 14.3421 14.2557 17 10.0004 17C5.74298 17 2.10698 14.3395 0.664255 10.5904ZM14.0004 10C14.0004 12.2091 12.2095 14 10.0004 14C7.79123 14 6.00037 12.2091 6.00037 10C6.00037 7.79086 7.79123 6 10.0004 6C12.2095 6 14.0004 7.79086 14.0004 10Z" fill="{color}"/> 
{:else}
  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="{color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.32341 11.4467C2.81066 6.97571 7.02791 3.75 12.0005 3.75C16.9708 3.75 21.1864 6.97271 22.6755 11.4405C22.7959 11.8015 22.796 12.1922 22.6759 12.5533C21.1886 17.0243 16.9714 20.25 11.9988 20.25C7.02847 20.25 2.81284 17.0273 1.32374 12.5595C1.2034 12.1985 1.20328 11.8078 1.32341 11.4467ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C14.8995 6.75 17.25 9.1005 17.25 12Z" fill="{color}"/> 
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
