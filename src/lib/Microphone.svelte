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

  export let ariaLabel = 'microphone';
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
      d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10V4Z"
      fill={color}
    />
    <path
      d="M5.5 9.64282C5.5 9.22861 5.16421 8.89282 4.75 8.89282C4.33579 8.89282 4 9.22861 4 9.64282V9.99997C4 13.0597 6.29027 15.5845 9.25 15.9535V17.5H7.75C7.33579 17.5 7 17.8358 7 18.25C7 18.6642 7.33579 19 7.75 19H12.25C12.6642 19 13 18.6642 13 18.25C13 17.8358 12.6642 17.5 12.25 17.5H10.75V15.9535C13.7097 15.5845 16 13.0597 16 9.99997V9.64282C16 9.22861 15.6642 8.89282 15.25 8.89282C14.8358 8.89282 14.5 9.22861 14.5 9.64282V9.99997C14.5 12.4852 12.4853 14.5 10 14.5C7.51472 14.5 5.5 12.4852 5.5 9.99997V9.64282Z"
      fill={color}
    />
  {:else}
    <path
      d="M8.25 4.5C8.25 2.42893 9.92893 0.75 12 0.75C14.0711 0.75 15.75 2.42893 15.75 4.5V12.75C15.75 14.8211 14.0711 16.5 12 16.5C9.92893 16.5 8.25 14.8211 8.25 12.75V4.5Z"
      fill={color}
    />
    <path
      d="M6 10.5C6.41421 10.5 6.75 10.8358 6.75 11.25V12.75C6.75 15.6495 9.1005 18 12 18C14.8995 18 17.25 15.6495 17.25 12.75V11.25C17.25 10.8358 17.5858 10.5 18 10.5C18.4142 10.5 18.75 10.8358 18.75 11.25V12.75C18.75 16.2244 16.125 19.0857 12.75 19.4588V21.75H15.75C16.1642 21.75 16.5 22.0858 16.5 22.5C16.5 22.9142 16.1642 23.25 15.75 23.25H8.25C7.83579 23.25 7.5 22.9142 7.5 22.5C7.5 22.0858 7.83579 21.75 8.25 21.75H11.25V19.4588C7.87504 19.0857 5.25 16.2244 5.25 12.75V11.25C5.25 10.8358 5.58579 10.5 6 10.5Z"
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
@prop export let ariaLabel = 'microphone';
-->
