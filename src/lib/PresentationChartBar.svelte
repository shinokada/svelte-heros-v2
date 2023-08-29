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

  export let ariaLabel = 'presentation chart bar';
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
      d="M3.75 3V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M20.25 3H21.75M20.25 3V14.25C20.25 15.4926 19.2426 16.5 18 16.5H15.75M8.25 16.5H15.75M8.25 16.5L7.25 19.5M15.75 16.5L16.75 19.5M16.75 19.5L17.25 21M16.75 19.5H7.25M7.25 19.5L6.75 21M9 11.25V12.75M12 9V12.75M15 6.75V12.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 2.75C1 2.33579 1.33579 2 1.75 2H18.25C18.6642 2 19 2.33579 19 2.75C19 3.16421 18.6642 3.5 18.25 3.5H18V12.25C18 13.7688 16.7688 15 15.25 15H14.1775L14.9759 18.0606C15.0805 18.4614 14.8403 18.8711 14.4395 18.9757C14.0387 19.0802 13.629 18.8401 13.5245 18.4393L13.4099 17.9999H6.5905L6.4759 18.4393C6.37134 18.8401 5.96167 19.0802 5.56087 18.9757C5.16007 18.8711 4.91991 18.4614 5.02447 18.0606L5.82289 15H4.75C3.23122 15 2 13.7688 2 12.25V3.5H1.75C1.33579 3.5 1 3.16421 1 2.75ZM7.37309 15L6.9818 16.4999H13.0186L12.6273 15H7.37309ZM13.25 5C13.6642 5 14 5.33579 14 5.75V11.25C14 11.6642 13.6642 12 13.25 12C12.8358 12 12.5 11.6642 12.5 11.25V5.75C12.5 5.33579 12.8358 5 13.25 5ZM6.75 9C7.16421 9 7.5 9.33579 7.5 9.75V11.25C7.5 11.6642 7.16421 12 6.75 12C6.33579 12 6 11.6642 6 11.25V9.75C6 9.33579 6.33579 9 6.75 9ZM10.75 7.75C10.75 7.33579 10.4142 7 10 7C9.58579 7 9.25 7.33579 9.25 7.75V11.25C9.25 11.6642 9.58579 12 10 12C10.4142 12 10.75 11.6642 10.75 11.25V7.75Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3V14.25C3 15.9069 4.34315 17.25 6 17.25H7.20943L6.03849 20.7628C5.9075 21.1558 6.11987 21.5805 6.51283 21.7115C6.90579 21.8425 7.33053 21.6301 7.46151 21.2372L7.79057 20.25H16.2094L16.5385 21.2372C16.6695 21.6301 17.0942 21.8425 17.4872 21.7115C17.8801 21.5805 18.0925 21.1558 17.9615 20.7628L16.7906 17.25H18C19.6569 17.25 21 15.9069 21 14.25V3.75H21.75C22.1642 3.75 22.5 3.41421 22.5 3C22.5 2.58579 22.1642 2.25 21.75 2.25H2.25ZM8.29057 18.75L8.79057 17.25H15.2094L15.7094 18.75H8.29057ZM15.75 6.75C15.75 6.33579 15.4142 6 15 6C14.5858 6 14.25 6.33579 14.25 6.75V12.75C14.25 13.1642 14.5858 13.5 15 13.5C15.4142 13.5 15.75 13.1642 15.75 12.75V6.75ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9V12.75C11.25 13.1642 11.5858 13.5 12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75V9ZM9.75 11.25C9.75 10.8358 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.8358 8.25 11.25V12.75C8.25 13.1642 8.58579 13.5 9 13.5C9.41421 13.5 9.75 13.1642 9.75 12.75V11.25Z"
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
@prop export let ariaLabel = 'presentation chart bar';
-->
