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

  export let ariaLabel = 'folder';
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
      d="M2.25 12.75V12C2.25 10.7574 3.25736 9.75 4.5 9.75H19.5C20.7426 9.75 21.75 10.7574 21.75 12V12.75M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.75 3C2.7835 3 2 3.7835 2 4.75V8.01091C2.50515 7.6875 3.10568 7.5 3.75 7.5H16.25C16.8943 7.5 17.4949 7.6875 18 8.01091V6.75C18 5.7835 17.2165 5 16.25 5H11.4142C11.3479 5 11.2843 4.97366 11.2374 4.92678L9.82322 3.51256C9.49503 3.18437 9.04992 3 8.58579 3H3.75Z"
      fill={color}
    />
    <path
      d="M3.75 9C2.7835 9 2 9.7835 2 10.75V15.25C2 16.2165 2.7835 17 3.75 17H16.25C17.2165 17 18 16.2165 18 15.25V10.75C18 9.7835 17.2165 9 16.25 9H3.75Z"
      fill={color}
    />
  {:else}
    <path
      d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V13.5C22.5 11.8431 21.1569 10.5 19.5 10.5H4.5C2.84315 10.5 1.5 11.8431 1.5 13.5V18C1.5 19.6569 2.84315 21 4.5 21H19.5Z"
      fill={color}
    />
    <path
      d="M1.5 10.1458V6C1.5 4.34315 2.84315 3 4.5 3H9.87868C10.4754 3 11.0477 3.23705 11.4697 3.65901L13.591 5.78033C13.7316 5.92098 13.9224 6 14.1213 6H19.5C21.1569 6 22.5 7.34315 22.5 9V10.1458C21.7039 9.43328 20.6525 9 19.5 9H4.5C3.34747 9 2.29613 9.43328 1.5 10.1458Z"
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
