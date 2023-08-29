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

  export let ariaLabel = 'hashtag';
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
      d="M5.25 8.25H20.25M3.75 15.75H18.75M16.95 2.25L13.05 21.75M10.9503 2.25L7.05029 21.75"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.49306 2.85257C9.54965 2.44224 9.2629 2.06372 8.85257 2.00713C8.44224 1.95053 8.06372 2.23728 8.00712 2.64761L7.54471 6.00009H4.19831C3.7841 6.00009 3.44831 6.33588 3.44831 6.75009C3.44831 7.16431 3.7841 7.50009 4.19831 7.50009H7.33782L6.64816 12.5001H3.30176C2.88754 12.5001 2.55176 12.8359 2.55176 13.2501C2.55176 13.6643 2.88754 14.0001 3.30176 14.0001H6.44127L6.00713 17.1476C5.95053 17.5579 6.23728 17.9365 6.64761 17.9931C7.05794 18.0497 7.43646 17.7629 7.49306 17.3526L7.95547 14.0001H10.9413L10.5071 17.1476C10.4505 17.5579 10.7373 17.9365 11.1476 17.9931C11.5579 18.0497 11.9365 17.7629 11.9931 17.3526L12.4555 14.0001H15.8018C16.216 14.0001 16.5518 13.6643 16.5518 13.2501C16.5518 12.8359 16.216 12.5001 15.8018 12.5001H12.6624L13.352 7.50009H16.6983C17.1125 7.50009 17.4483 7.16431 17.4483 6.75009C17.4483 6.33588 17.1125 6.00009 16.6983 6.00009H13.5589L13.9931 2.85257C14.0497 2.44224 13.7629 2.06372 13.3526 2.00713C12.9422 1.95053 12.5637 2.23728 12.5071 2.64761L12.0447 6.00009H9.05892L9.49306 2.85257ZM8.85202 7.50009L8.16236 12.5001H11.1482L11.8378 7.50009H8.85202Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0974 1.51471C11.5035 1.59594 11.767 1.99106 11.6857 2.39723L10.6651 7.50015H15.1351L16.2146 2.10306C16.2958 1.69689 16.6909 1.43348 17.0971 1.51471C17.5033 1.59594 17.7667 1.99106 17.6854 2.39723L16.6649 7.50015H20.25C20.6642 7.50015 21 7.83593 21 8.25015C21 8.66436 20.6642 9.00015 20.25 9.00015H16.3649L15.1649 15.0001H18.75C19.1642 15.0001 19.5 15.3359 19.5 15.7501C19.5 16.1644 19.1642 16.5001 18.75 16.5001H14.8649L13.7854 21.8972C13.7042 22.3034 13.3091 22.5668 12.9029 22.4856C12.4967 22.4043 12.2333 22.0092 12.3146 21.6031L13.3351 16.5001H8.86515L7.78573 21.8972C7.70449 22.3034 7.30938 22.5668 6.90321 22.4856C6.49704 22.4043 6.23362 22.0092 6.31486 21.6031L7.33544 16.5001H3.75C3.33579 16.5001 3 16.1644 3 15.7501C3 15.3359 3.33579 15.0001 3.75 15.0001H7.63544L8.83544 9.00015H5.25C4.83579 9.00015 4.5 8.66436 4.5 8.25015C4.5 7.83593 4.83579 7.50015 5.25 7.50015H9.13544L10.2149 2.10306C10.2961 1.69689 10.6912 1.43348 11.0974 1.51471ZM10.3651 9.00015L9.16515 15.0001H13.6351L14.8351 9.00015H10.3651Z"
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
@prop export let ariaLabel = 'hashtag';
-->
