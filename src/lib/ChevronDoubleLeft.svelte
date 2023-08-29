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

  export let ariaLabel = 'chevron double left';
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
      d="M18.75 19.5L11.25 12L18.75 4.5M12.75 19.5L5.25 12L12.75 4.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.7906 14.7698C15.5035 15.0684 15.0287 15.0777 14.7302 14.7906L10.2302 10.5406C10.0831 10.3992 10 10.204 10 10C10 9.79599 10.0831 9.60078 10.2302 9.45938L14.7302 5.20937C15.0287 4.92228 15.5035 4.93159 15.7906 5.23017C16.0777 5.52875 16.0684 6.00353 15.7698 6.29062L11.8321 10L15.7698 13.7094C16.0684 13.9965 16.0777 14.4713 15.7906 14.7698ZM9.79062 14.7698C9.50353 15.0684 9.02875 15.0777 8.73017 14.7906L4.23017 10.5406C4.08311 10.3992 4 10.204 4 10C4 9.79599 4.08311 9.60078 4.23017 9.45938L8.73017 5.20938C9.02875 4.92228 9.50353 4.93159 9.79062 5.23017C10.0777 5.52875 10.0684 6.00353 9.76983 6.29062L5.83208 10L9.76983 13.7094C10.0684 13.9965 10.0777 14.4713 9.79062 14.7698Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.2803 3.96967C13.5732 4.26256 13.5732 4.73744 13.2803 5.03033L6.31066 12L13.2803 18.9697C13.5732 19.2626 13.5732 19.7374 13.2803 20.0303C12.9874 20.3232 12.5126 20.3232 12.2197 20.0303L4.71967 12.5303C4.42678 12.2374 4.42678 11.7626 4.71967 11.4697L12.2197 3.96967C12.5126 3.67678 12.9874 3.67678 13.2803 3.96967ZM19.2803 3.96967C19.5732 4.26256 19.5732 4.73744 19.2803 5.03033L12.3107 12L19.2803 18.9697C19.5732 19.2626 19.5732 19.7374 19.2803 20.0303C18.9874 20.3232 18.5126 20.3232 18.2197 20.0303L10.7197 12.5303C10.4268 12.2374 10.4268 11.7626 10.7197 11.4697L18.2197 3.96967C18.5126 3.67678 18.9874 3.67678 19.2803 3.96967Z"
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
@prop export let ariaLabel = 'chevron double left';
-->
