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

  export let ariaLabel = 'device tablet';
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
      d="M10.5 19.5H13.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.5C19.5 3.25736 18.4926 2.25 17.25 2.25H6.75C5.50736 2.25 4.5 3.25736 4.5 4.5V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 1C3.34315 1 2 2.34315 2 4V16C2 17.6569 3.34315 19 5 19H15C16.6569 19 18 17.6569 18 16V4C18 2.34315 16.6569 1 15 1H5ZM3.5 4C3.5 3.17157 4.17157 2.5 5 2.5H15C15.8284 2.5 16.5 3.17157 16.5 4V16C16.5 16.8284 15.8284 17.5 15 17.5H5C4.17157 17.5 3.5 16.8284 3.5 16V4ZM8.75 15.5C8.33579 15.5 8 15.8358 8 16.25C8 16.6642 8.33579 17 8.75 17H11.25C11.6642 17 12 16.6642 12 16.25C12 15.8358 11.6642 15.5 11.25 15.5H8.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M10.5 18C10.0858 18 9.75 18.3358 9.75 18.75C9.75 19.1642 10.0858 19.5 10.5 19.5H13.5C13.9142 19.5 14.25 19.1642 14.25 18.75C14.25 18.3358 13.9142 18 13.5 18H10.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.125 1.5C5.26104 1.5 3.75 3.01104 3.75 4.875V19.125C3.75 20.989 5.26104 22.5 7.125 22.5H16.875C18.739 22.5 20.25 20.989 20.25 19.125V4.875C20.25 3.01104 18.739 1.5 16.875 1.5H7.125ZM6 4.875C6 4.25368 6.50368 3.75 7.125 3.75H16.875C17.4963 3.75 18 4.25368 18 4.875V19.125C18 19.7463 17.4963 20.25 16.875 20.25H7.125C6.50368 20.25 6 19.7463 6 19.125V4.875Z"
      fill={color}
    />
  {/if}
</svg>

<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop viewBox: string = '0 0 24 24';
  @prop role = "img";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop variation: "solid" | "outline" | "mini"= "outline";
  @prop ariaLabel = 'icon file name';
  ## Event
  - on:click
  - on:keydown
  - on:keyup
  - on:focus
  - on:blur
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
  - on:mouseout
-->
