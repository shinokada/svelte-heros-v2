<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'currency bangladeshi';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
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
      d="M8.25 7.49997L8.66459 7.29267C9.16327 7.04333 9.75 7.40596 9.75 7.96349V10.5M9.75 10.5H15.75M9.75 10.5H8.25M9.75 10.5V15.9383C9.75 16.2921 9.91144 16.6351 10.2229 16.803C10.7518 17.0882 11.357 17.25 12 17.25C13.8142 17.25 15.3275 15.9617 15.675 14.25C15.7579 13.8414 15.412 13.5 14.995 13.5H14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75ZM10.5002 7.96345C10.5002 6.84838 9.3267 6.12314 8.32934 6.62181L7.91475 6.82911C7.54427 7.01435 7.3941 7.46485 7.57934 7.83534C7.76459 8.20582 8.21509 8.35599 8.58557 8.17075L9.00016 7.96345V9.74993H8.25016C7.83595 9.74993 7.50016 10.0857 7.50016 10.4999C7.50016 10.9141 7.83595 11.2499 8.25016 11.2499H9.00016V15.9382C9.00016 16.5014 9.25961 17.1356 9.8671 17.4631C10.5027 17.8058 11.2299 18 12.0002 18C14.1781 18 15.9932 16.4535 16.4102 14.3992C16.6086 13.4217 15.7739 12.75 14.9952 12.75H14.2502C13.836 12.75 13.5002 13.0857 13.5002 13.5C13.5002 13.9142 13.836 14.25 14.2502 14.25H14.9058C14.5731 15.544 13.3975 16.5 12.0002 16.5C11.4844 16.5 11.0012 16.3705 10.579 16.1428C10.5674 16.1366 10.5508 16.1239 10.5338 16.0916C10.5155 16.0567 10.5002 16.0036 10.5002 15.9382V11.2499H15.7502C16.1644 11.2499 16.5002 10.9141 16.5002 10.4999C16.5002 10.0857 16.1644 9.74993 15.7502 9.74993H10.5002V7.96345Z"
      fill={color}
    />
  {/if}
</svg>

<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop strokeWidth = "1.5"
  @prop color="currentColor";
  @prop variation: "solid" | "outline" = "outline";
  @prop viewBox: string = '0 0 24 24';
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
