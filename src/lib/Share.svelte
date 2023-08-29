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

  export let ariaLabel = 'share';
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
      d="M7.21721 10.9071C6.83295 10.2169 6.096 9.75 5.25 9.75C4.00736 9.75 3 10.7574 3 12C3 13.2426 4.00736 14.25 5.25 14.25C6.096 14.25 6.83295 13.7831 7.21721 13.0929M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071M16.7828 18.4071C16.6026 18.7307 16.5 19.1034 16.5 19.5C16.5 20.7426 17.5074 21.75 18.75 21.75C19.9926 21.75 21 20.7426 21 19.5C21 18.2574 19.9926 17.25 18.75 17.25C17.904 17.25 17.1671 17.7169 16.7828 18.4071ZM16.7828 5.5929C17.1671 6.28309 17.904 6.75 18.75 6.75C19.9926 6.75 21 5.74264 21 4.5C21 3.25736 19.9926 2.25 18.75 2.25C17.5074 2.25 16.5 3.25736 16.5 4.5C16.5 4.89664 16.6026 5.26931 16.7828 5.5929Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5C18 5.88071 16.8807 7 15.5 7C14.7943 7 14.1569 6.70762 13.7024 6.23739L6.96884 9.60415C6.98935 9.73308 7 9.8653 7 10C7 10.1347 6.98934 10.267 6.96882 10.3959L13.7023 13.7627C14.1569 13.2924 14.7943 13 15.5 13C16.8807 13 18 14.1193 18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5C13 15.3653 13.0107 15.2331 13.0312 15.1041L6.29764 11.7374C5.84307 12.2076 5.20568 12.5 4.5 12.5C3.11929 12.5 2 11.3807 2 10C2 8.61929 3.11929 7.5 4.5 7.5C5.20571 7.5 5.84312 7.79241 6.29769 8.26267L13.0312 4.89593C13.0107 4.76697 13 4.63473 13 4.5Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.75 4.5C15.75 2.84315 17.0931 1.5 18.75 1.5C20.4069 1.5 21.75 2.84315 21.75 4.5C21.75 6.15685 20.4069 7.5 18.75 7.5C17.8933 7.5 17.1212 7.14074 16.5751 6.56624L8.15392 11.2447C8.21665 11.4863 8.25 11.7395 8.25 12C8.25 12.2605 8.21665 12.5137 8.15392 12.7553L16.5751 17.4338C17.1212 16.8593 17.8933 16.5 18.75 16.5C20.4069 16.5 21.75 17.8431 21.75 19.5C21.75 21.1569 20.4069 22.5 18.75 22.5C17.0931 22.5 15.75 21.1569 15.75 19.5C15.75 19.2395 15.7833 18.9863 15.8461 18.7447L7.42488 14.0662C6.87885 14.6407 6.10667 15 5.25 15C3.59315 15 2.25 13.6569 2.25 12C2.25 10.3431 3.59315 9 5.25 9C6.10667 9 6.87885 9.35926 7.42488 9.93377L15.8461 5.25532C15.7833 5.01367 15.75 4.76045 15.75 4.5Z"
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
@prop export let ariaLabel = 'share';
-->
