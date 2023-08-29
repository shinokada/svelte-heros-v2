<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.18
  export let size = '24';
  export let viewBox: string = '0 0 24 24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' = 'outline';

  if (variation === 'mini') {
    size = '20';
    viewBox = '0 0 20 20';
  }

  export let ariaLabel = 'arrow down on square stack';
</script>

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
    <path
      d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5M7.5 11.25L10.5 14.25M10.5 14.25L13.5 11.25M10.5 14.25L10.5 1.5M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00001 1C8.41422 1 8.75001 1.33579 8.75001 1.75V6H7.25001V1.75C7.25001 1.33579 7.58579 1 8.00001 1ZM7.25001 6V9.29553L6.30748 8.24828C6.03038 7.94039 5.55617 7.91543 5.24828 8.19253C4.9404 8.46962 4.91544 8.94384 5.19254 9.25172L7.44254 11.7517C7.58477 11.9098 7.78739 12 8.00001 12C8.21262 12 8.41525 11.9098 8.55748 11.7517L10.8075 9.25172C11.0846 8.94384 11.0596 8.46962 10.7517 8.19253C10.4438 7.91543 9.96963 7.94039 9.69254 8.24828L8.75001 9.29553V6H10.75C11.9926 6 13 7.00736 13 8.25V12.75C13 13.9926 11.9926 15 10.75 15H5.25C4.00736 15 3 13.9926 3 12.75V8.25C3 7.00736 4.00736 6 5.25 6H7.25001ZM7 16.75V16.5H10.75C12.8211 16.5 14.5 14.8211 14.5 12.75V10H14.75C15.9926 10 17 11.0074 17 12.25V16.75C17 17.9926 15.9926 19 14.75 19H9.25C8.00736 19 7 17.9926 7 16.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.75 6.75H6.75C5.09315 6.75 3.75 8.09315 3.75 9.75V17.25C3.75 18.9069 5.09315 20.25 6.75 20.25H14.25C15.9069 20.25 17.25 18.9069 17.25 17.25V9.75C17.25 8.09315 15.9069 6.75 14.25 6.75H11.25L11.25 1.5C11.25 1.08579 10.9142 0.75 10.5 0.75C10.0858 0.75 9.75 1.08579 9.75 1.5V6.75ZM9.75 6.75H11.25V12.4393L12.9697 10.7197C13.2626 10.4268 13.7374 10.4268 14.0303 10.7197C14.3232 11.0126 14.3232 11.4874 14.0303 11.7803L11.0303 14.7803C10.7374 15.0732 10.2626 15.0732 9.96967 14.7803L6.96967 11.7803C6.67678 11.4874 6.67678 11.0126 6.96967 10.7197C7.26256 10.4268 7.73744 10.4268 8.03033 10.7197L9.75 12.4393V6.75Z"
      fill={color}
    />
    <path
      d="M7.15137 21.75C7.67008 22.6467 8.6396 23.25 9.75002 23.25H17.25C18.9069 23.25 20.25 21.9069 20.25 20.25V12.75C20.25 11.6396 19.6467 10.6701 18.75 10.1514V17.25C18.75 19.7353 16.7353 21.75 14.25 21.75H7.15137Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = '24';
@prop export let viewBox: string = '0 0 24 24';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = 'outline';
@prop export let ariaLabel = 'arrow down on square stack';
-->
