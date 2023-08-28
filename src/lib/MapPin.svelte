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
  
export let ariaLabel="map pin" </script>

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
  <path d="M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5 10.5C19.5 17.6421 12 21.75 12 21.75C12 21.75 4.5 17.6421 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else if variation === 'mini'}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69008 18.933L9.69288 18.9342C9.89 19.02 10 19 10 19C10 19 10.11 19.02 10.3079 18.9339L10.3099 18.933L10.3157 18.9304L10.3338 18.922C10.3488 18.915 10.3697 18.9052 10.3959 18.8926C10.4484 18.8673 10.5225 18.8306 10.6153 18.7822C10.8008 18.6855 11.0612 18.5419 11.3717 18.3495C11.9912 17.9655 12.8174 17.3826 13.6455 16.5844C15.3022 14.9876 17 12.4925 17 9C17 5.13401 13.866 2 10 2C6.13401 2 3 5.13401 3 9C3 12.4925 4.69783 14.9876 6.35452 16.5844C7.18264 17.3826 8.00877 17.9655 8.62834 18.3495C8.93879 18.5419 9.19922 18.6855 9.38467 18.7822C9.47745 18.8306 9.55163 18.8673 9.60409 18.8926C9.63033 18.9052 9.65116 18.915 9.66619 18.922L9.68435 18.9304L9.69008 18.933ZM10 11.25C11.2426 11.25 12.25 10.2426 12.25 9C12.25 7.75736 11.2426 6.75 10 6.75C8.75736 6.75 7.75 7.75736 7.75 9C7.75 10.2426 8.75736 11.25 10 11.25Z" fill="{color}"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5397 22.351C11.57 22.3686 11.5937 22.3821 11.6105 22.3915L11.6384 22.4071C11.8613 22.5294 12.1378 22.5285 12.3608 22.4075L12.3895 22.3915C12.4063 22.3821 12.43 22.3686 12.4603 22.351C12.5207 22.316 12.607 22.265 12.7155 22.1982C12.9325 22.0646 13.2388 21.8676 13.6046 21.6091C14.3351 21.0931 15.3097 20.3274 16.2865 19.3273C18.2307 17.3368 20.25 14.3462 20.25 10.5C20.25 5.94365 16.5563 2.25 12 2.25C7.44365 2.25 3.75 5.94365 3.75 10.5C3.75 14.3462 5.76932 17.3368 7.71346 19.3273C8.69025 20.3274 9.66491 21.0931 10.3954 21.6091C10.7612 21.8676 11.0675 22.0646 11.2845 22.1982C11.393 22.265 11.4793 22.316 11.5397 22.351ZM12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" fill="{color}"/> 
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
