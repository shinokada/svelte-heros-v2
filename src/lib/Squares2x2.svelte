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

  export let ariaLabel = 'squares 2x2';
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
      d="M3.75 6C3.75 4.75736 4.75736 3.75 6 3.75H8.25C9.49264 3.75 10.5 4.75736 10.5 6V8.25C10.5 9.49264 9.49264 10.5 8.25 10.5H6C4.75736 10.5 3.75 9.49264 3.75 8.25V6Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.75 15.75C3.75 14.5074 4.75736 13.5 6 13.5H8.25C9.49264 13.5 10.5 14.5074 10.5 15.75V18C10.5 19.2426 9.49264 20.25 8.25 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V15.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5 6C13.5 4.75736 14.5074 3.75 15.75 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V8.25C20.25 9.49264 19.2426 10.5 18 10.5H15.75C14.5074 10.5 13.5 9.49264 13.5 8.25V6Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.5 15.75C13.5 14.5074 14.5074 13.5 15.75 13.5H18C19.2426 13.5 20.25 14.5074 20.25 15.75V18C20.25 19.2426 19.2426 20.25 18 20.25H15.75C14.5074 20.25 13.5 19.2426 13.5 18V15.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.25 2C3.00736 2 2 3.00736 2 4.25V6.75C2 7.99264 3.00736 9 4.25 9H6.75C7.99264 9 9 7.99264 9 6.75V4.25C9 3.00736 7.99264 2 6.75 2H4.25ZM4.25 11C3.00736 11 2 12.0074 2 13.25V15.75C2 16.9926 3.00736 18 4.25 18H6.75C7.99264 18 9 16.9926 9 15.75V13.25C9 12.0074 7.99264 11 6.75 11H4.25ZM13.25 2C12.0074 2 11 3.00736 11 4.25V6.75C11 7.99264 12.0074 9 13.25 9H15.75C16.9926 9 18 7.99264 18 6.75V4.25C18 3.00736 16.9926 2 15.75 2H13.25ZM13.25 11C12.0074 11 11 12.0074 11 13.25V15.75C11 16.9926 12.0074 18 13.25 18H15.75C16.9926 18 18 16.9926 18 15.75V13.25C18 12.0074 16.9926 11 15.75 11H13.25Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C3 4.34315 4.34315 3 6 3H8.25C9.90685 3 11.25 4.34315 11.25 6V8.25C11.25 9.90685 9.90685 11.25 8.25 11.25H6C4.34315 11.25 3 9.90685 3 8.25V6ZM12.75 6C12.75 4.34315 14.0931 3 15.75 3H18C19.6569 3 21 4.34315 21 6V8.25C21 9.90685 19.6569 11.25 18 11.25H15.75C14.0931 11.25 12.75 9.90685 12.75 8.25V6ZM3 15.75C3 14.0931 4.34315 12.75 6 12.75H8.25C9.90685 12.75 11.25 14.0931 11.25 15.75V18C11.25 19.6569 9.90685 21 8.25 21H6C4.34315 21 3 19.6569 3 18V15.75ZM12.75 15.75C12.75 14.0931 14.0931 12.75 15.75 12.75H18C19.6569 12.75 21 14.0931 21 15.75V18C21 19.6569 19.6569 21 18 21H15.75C14.0931 21 12.75 19.6569 12.75 18V15.75Z"
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
