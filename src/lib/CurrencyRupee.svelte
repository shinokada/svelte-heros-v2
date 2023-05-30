<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="currency rupee" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none" 
 {viewBox}
  stroke-width={strokeWidth}
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
>
{#if variation === 'outline'}
  <path d="M15 8.25L9 8.25M15 11.25H9M12 17.25L9 14.25H10.5C12.1569 14.25 13.5 12.9069 13.5 11.25C13.5 9.59315 12.1569 8.25 10.5 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 8.58579 9 9 9H10.5C11.4797 9 12.3131 9.62611 12.622 10.5H9C8.58579 10.5 8.25 10.8358 8.25 11.25C8.25 11.6642 8.58579 12 9 12H12.622C12.3131 12.8739 11.4797 13.5 10.5 13.5H9C8.69665 13.5 8.42318 13.6827 8.30709 13.963C8.191 14.2432 8.25517 14.5658 8.46967 14.7803L11.4697 17.7803C11.7626 18.0732 12.2374 18.0732 12.5303 17.7803C12.8232 17.4874 12.8232 17.0126 12.5303 16.7197L10.7989 14.9883C12.4785 14.8558 13.8468 13.6168 14.175 12H15C15.4142 12 15.75 11.6642 15.75 11.25C15.75 10.8358 15.4142 10.5 15 10.5H14.175C14.0625 9.94584 13.8278 9.43606 13.5003 9H15C15.4142 9 15.75 8.66421 15.75 8.25C15.75 7.83579 15.4142 7.5 15 7.5H9Z" fill="{color}"/> 
{/if}
</svg>


<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop variation: "solid" | "outline" = "outline";
  @prop viewBox: string = '0 0 24 24';
-->