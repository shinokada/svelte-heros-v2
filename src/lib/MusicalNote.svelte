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

  export let ariaLabel = 'musical note';
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
      d="M9 9L19.5 6M19.5 12.5528V16.3028C19.5 17.3074 18.834 18.1903 17.8681 18.4663L16.5481 18.8434C15.3964 19.1724 14.25 18.3077 14.25 17.1099C14.25 16.305 14.7836 15.5975 15.5576 15.3764L17.8681 14.7163C18.834 14.4403 19.5 13.5574 19.5 12.5528ZM19.5 12.5528V2.25L9 5.25V15.5528M9 15.5528V19.3028C9 20.3074 8.33405 21.1903 7.36812 21.4663L6.04814 21.8434C4.89645 22.1724 3.75 21.3077 3.75 20.1099C3.75 19.305 4.2836 18.5975 5.05757 18.3764L7.36812 17.7163C8.33405 17.4403 9 16.5574 9 15.5528Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.721 1.59894C17.8974 1.74132 18 1.95589 18 2.18262V13.4723C18 14.5317 17.261 15.4476 16.2255 15.6715L14.1848 16.1127C12.804 16.4113 11.5 15.3591 11.5 13.9464C11.5 12.9032 12.2275 12.0012 13.247 11.7803L15.9088 11.2035C16.2538 11.1287 16.5 10.8235 16.5 10.4705V6.11212L8.5 7.84185V15.5263C8.5 16.5857 7.76097 17.5016 6.7255 17.7255L4.68397 18.1669C3.30357 18.4654 2 17.4136 2 16.0013C2 14.9574 2.72854 14.0552 3.74894 13.8353L6.408 13.2622C6.7534 13.1878 7 12.8824 7 12.5291V4.23668C7 3.88354 7.24634 3.57825 7.5915 3.50362L17.0915 1.44956C17.3131 1.40165 17.5445 1.45656 17.721 1.59894Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.9516 1.65124C20.1395 1.79297 20.25 2.01466 20.25 2.25001V5.98344C20.2503 5.99476 20.2503 6.00606 20.25 6.01732V16.3028C20.25 17.6423 19.3621 18.8194 18.0742 19.1874L16.7542 19.5645C15.1234 20.0305 13.5 18.806 13.5 17.1099C13.5 15.9701 14.2556 14.9684 15.3515 14.6553L17.6621 13.9951C18.306 13.8111 18.75 13.2225 18.75 12.5528V6.9943L9.75 9.56573V19.3028C9.75 20.6423 8.86207 21.8194 7.57416 22.1874L6.25418 22.5645C4.62337 23.0305 3 21.806 3 20.1099C3 18.9701 3.75559 17.9684 4.85153 17.6553L7.16208 16.9951C7.80603 16.8111 8.25 16.2225 8.25 15.5528V9.01659C8.24974 9.00526 8.24974 8.99395 8.25 8.98268V5.25001C8.25 4.91515 8.47198 4.62086 8.79396 4.52886L19.294 1.52886C19.5202 1.46421 19.7638 1.50952 19.9516 1.65124Z"
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
