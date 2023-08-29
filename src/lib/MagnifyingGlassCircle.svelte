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

  export let ariaLabel = 'magnifying glass circle';
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
      d="M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9C11.5 9.69056 11.221 10.3145 10.7678 10.7678C10.3145 11.221 9.69056 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13C9.8332 13 10.6076 12.7447 11.2481 12.3088L12.7197 13.7803C13.0126 14.0732 13.4874 14.0732 13.7803 13.7803C14.0732 13.4874 14.0732 13.0126 13.7803 12.7197L12.3088 11.2481C12.7447 10.6076 13 9.8332 13 9C13 6.79086 11.2091 5 9 5Z"
      fill={color}
    />
  {:else}
    <path
      d="M8.25 10.875C8.25 9.42525 9.42525 8.25 10.875 8.25C12.3247 8.25 13.5 9.42525 13.5 10.875C13.5 11.6001 13.207 12.2553 12.7312 12.7312C12.2553 13.207 11.6001 13.5 10.875 13.5C9.42525 13.5 8.25 12.3247 8.25 10.875Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM10.875 6.75C8.59683 6.75 6.75 8.59683 6.75 10.875C6.75 13.1532 8.59683 15 10.875 15C11.7428 15 12.5487 14.7315 13.2131 14.2737L15.2197 16.2803C15.5126 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L14.2737 13.2131C14.7315 12.5487 15 11.7428 15 10.875C15 8.59683 13.1532 6.75 10.875 6.75Z"
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
@prop export let ariaLabel = 'magnifying glass circle';
-->
