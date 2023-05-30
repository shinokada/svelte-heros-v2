<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'wrench';
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
      d="M21.75 6.75C21.75 9.23528 19.7353 11.25 17.25 11.25C17.1206 11.25 16.9925 11.2445 16.8659 11.2338C15.7904 11.1429 14.6016 11.3052 13.9155 12.1383L6.76432 20.8219C6.28037 21.4096 5.55897 21.75 4.79769 21.75C3.39064 21.75 2.25 20.6094 2.25 19.2023C2.25 18.441 2.59044 17.7196 3.1781 17.2357L11.8617 10.0845C12.6948 9.39841 12.8571 8.20956 12.7662 7.13411C12.7555 7.00749 12.75 6.87938 12.75 6.75C12.75 4.26472 14.7647 2.25 17.25 2.25C17.9103 2.25 18.5375 2.39223 19.1024 2.64774L15.8262 5.92397C16.0823 7.03963 16.9605 7.91785 18.0762 8.17397L21.3524 4.89779C21.6078 5.46268 21.75 6.08973 21.75 6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.86723 19.125H4.87473V19.1325H4.86723V19.125Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6.75C12 3.85051 14.3505 1.5 17.25 1.5C17.7791 1.5 18.2913 1.57852 18.7747 1.72505C19.027 1.80151 19.2206 2.00479 19.2847 2.26048C19.3488 2.51618 19.2739 2.78674 19.0875 2.97313L15.7688 6.29183C15.8305 6.76741 16.0438 7.22581 16.409 7.59099C16.7742 7.95617 17.2326 8.16947 17.7082 8.23117L21.0269 4.91247C21.2133 4.72608 21.4838 4.65122 21.7395 4.7153C21.9952 4.77938 22.1985 4.97299 22.275 5.22526C22.4215 5.7087 22.5 6.22086 22.5 6.75C22.5 9.64949 20.1495 12 17.25 12C17.0995 12 16.9503 11.9936 16.8027 11.9812C15.7855 11.8952 14.9338 12.0816 14.4944 12.6151L7.34327 21.2987C6.71684 22.0593 5.78308 22.5 4.79769 22.5C2.97642 22.5 1.5 21.0236 1.5 19.2023C1.5 18.2169 1.94067 17.2832 2.70132 16.6567L11.3849 9.50557C11.9184 9.06623 12.1048 8.21453 12.0188 7.19728C12.0064 7.04968 12 6.9005 12 6.75ZM4.11723 19.125C4.11723 18.7108 4.45302 18.375 4.86723 18.375H4.87473C5.28895 18.375 5.62473 18.7108 5.62473 19.125V19.1325C5.62473 19.5468 5.28895 19.8825 4.87473 19.8825H4.86723C4.45302 19.8825 4.11723 19.5468 4.11723 19.1325V19.125Z"
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
