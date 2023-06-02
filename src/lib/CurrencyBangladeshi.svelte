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

  export let ariaLabel = 'currency bangladeshi';
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
      d="M8.25 7.49997L8.66459 7.29267C9.16327 7.04333 9.75 7.40596 9.75 7.96349V10.5M9.75 10.5H15.75M9.75 10.5H8.25M9.75 10.5V15.9383C9.75 16.2921 9.91144 16.6351 10.2229 16.803C10.7518 17.0882 11.357 17.25 12 17.25C13.8142 17.25 15.3275 15.9617 15.675 14.25C15.7579 13.8414 15.412 13.5 14.995 13.5H14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM5.93934 5.49996C6.88428 4.55502 8.5 5.22426 8.5 6.56062V8H14.25C14.6642 8 15 8.33579 15 8.75C15 9.16421 14.6642 9.5 14.25 9.5H8.5V13.775C8.5 14.0711 8.64363 14.23 8.75926 14.2739C9.1439 14.4198 9.56172 14.5 10 14.5C11.3936 14.5 12.5986 13.6853 13.1616 12.5037H12.75C12.3358 12.5037 12 12.1679 12 11.7537C12 11.3395 12.3358 11.0037 12.75 11.0037H13.2872C13.7494 11.0037 14.1744 11.2149 14.4434 11.5599C14.7206 11.9155 14.8262 12.4125 14.6272 12.8974C13.8806 14.7166 12.091 16 10 16C9.37719 16 8.77933 15.8857 8.22739 15.6764C7.37603 15.3536 7 14.513 7 13.775V9.5H5.75C5.33579 9.5 5 9.16421 5 8.75C5 8.33579 5.33579 8 5.75 8H7V6.56062L6.78033 6.78029C6.48744 7.07319 6.01256 7.07319 5.71967 6.78029C5.42678 6.4874 5.42678 6.01253 5.71967 5.71963L5.93934 5.49996Z"
      fill={color}
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
