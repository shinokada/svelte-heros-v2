<script lang="ts">
  export let size = '';
  export let viewBox = '';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' = 'outline';

  if (variation === 'mini') {
    size = size || '20';
    viewBox = viewBox || '0 0 20 20';
  } else {
    size = size || '24';
    viewBox = viewBox || '0 0 24 24';
  }

  export let ariaLabel = 'chevron up down';
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
      d="M8.25 15L12 18.75L15.75 15M8.25 9L12 5.25L15.75 9"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 3C10.2086 3 10.4077 3.08684 10.5496 3.23966L13.7996 6.73966C14.0815 7.0432 14.0639 7.51774 13.7603 7.7996C13.4568 8.08145 12.9823 8.06387 12.7004 7.76034L10 4.85221L7.2996 7.76034C7.01775 8.06387 6.5432 8.08145 6.23966 7.79959C5.93613 7.51774 5.91856 7.04319 6.20041 6.73966L9.45041 3.23966C9.59232 3.08684 9.79145 3 10 3ZM6.23967 12.2004C6.5432 11.9186 7.01775 11.9361 7.2996 12.2397L10 15.1478L12.7004 12.2397C12.9823 11.9361 13.4568 11.9186 13.7603 12.2004C14.0639 12.4823 14.0815 12.9568 13.7996 13.2603L10.5496 16.7603C10.4077 16.9132 10.2086 17 10 17C9.79145 17 9.59232 16.9132 9.45041 16.7603L6.20041 13.2603C5.91856 12.9568 5.93613 12.4823 6.23967 12.2004Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4697 4.71967C11.7626 4.42678 12.2374 4.42678 12.5303 4.71967L16.2803 8.46967C16.5732 8.76256 16.5732 9.23744 16.2803 9.53033C15.9874 9.82322 15.5126 9.82322 15.2197 9.53033L12 6.31066L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L11.4697 4.71967ZM7.71967 14.4697C8.01256 14.1768 8.48744 14.1768 8.78033 14.4697L12 17.6893L15.2197 14.4697C15.5126 14.1768 15.9874 14.1768 16.2803 14.4697C16.5732 14.7626 16.5732 15.2374 16.2803 15.5303L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L7.71967 15.5303C7.42678 15.2374 7.42678 14.7626 7.71967 14.4697Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = '';
@prop export let viewBox = '';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = 'outline';
@prop export let ariaLabel = 'chevron up down';
-->
