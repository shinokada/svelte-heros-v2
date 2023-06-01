<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'shield exclamation';
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
      d="M12 9.00009V12.7501M12 2.71436C9.8495 4.75098 6.94563 6.00011 3.75 6.00011C3.69922 6.00011 3.64852 5.99979 3.59789 5.99916C3.2099 7.17927 3 8.4402 3 9.75015C3 15.3417 6.82432 20.04 12 21.3721C17.1757 20.04 21 15.3417 21 9.75015C21 8.4402 20.7901 7.17927 20.4021 5.99916C20.3515 5.99979 20.3008 6.00011 20.25 6.00011C17.0544 6.00011 14.1505 4.75098 12 2.71436ZM12 15.7501H12.0075V15.7576H12V15.7501Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.4843 2.1698C11.7735 1.89587 12.2265 1.89587 12.5157 2.1698C14.5325 4.07977 17.2538 5.25011 20.25 5.25011C20.2977 5.25011 20.3453 5.24981 20.3928 5.24922C20.7202 5.24515 21.0123 5.4539 21.1146 5.76491C21.5271 7.01968 21.75 8.35963 21.75 9.75015C21.75 15.6922 17.6859 20.6831 12.1869 22.0984C12.0643 22.13 11.9357 22.13 11.8131 22.0984C6.31406 20.6831 2.25 15.6922 2.25 9.75015C2.25 8.35963 2.47287 7.01968 2.88541 5.76491C2.98767 5.4539 3.27984 5.24515 3.60721 5.24922C3.65473 5.24981 3.70233 5.25011 3.75 5.25011C6.74624 5.25011 9.46752 4.07977 11.4843 2.1698ZM12 8.25009C12.4142 8.25009 12.75 8.58588 12.75 9.00009V12.7501C12.75 13.1643 12.4142 13.5001 12 13.5001C11.5858 13.5001 11.25 13.1643 11.25 12.7501V9.00009C11.25 8.58588 11.5858 8.25009 12 8.25009ZM12 15.0001C11.5858 15.0001 11.25 15.3359 11.25 15.7501V15.7576C11.25 16.1718 11.5858 16.5076 12 16.5076H12.0075C12.4217 16.5076 12.7575 16.1718 12.7575 15.7576V15.7501C12.7575 15.3359 12.4217 15.0001 12.0075 15.0001H12Z"
      fill={color}
    />
  {/if}
</svg>

<!--
  @component
  [Go to Document](https://svelte-heros-v2.codewithshin.com/)

  ## Props
  @prop size = "24";
  @prop role = "img";
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
