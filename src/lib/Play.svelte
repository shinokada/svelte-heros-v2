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

  export let ariaLabel = 'play';
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
      d="M5.25 5.65297C5.25 4.79729 6.1674 4.25486 6.91716 4.66723L18.4577 11.0145C19.2349 11.442 19.2349 12.5586 18.4577 12.986L6.91716 19.3334C6.1674 19.7457 5.25 19.2033 5.25 18.3476V5.65297Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M6.29995 2.84095C5.3011 2.21124 4 2.92906 4 4.10984V15.891C4 17.0718 5.3011 17.7896 6.29995 17.1599L15.6436 11.2693C16.577 10.6809 16.577 9.31997 15.6436 8.73152L6.29995 2.84095Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 5.65306C4.5 4.22693 6.029 3.32288 7.2786 4.01016L18.8192 10.3575C20.1144 11.0698 20.1144 12.9309 18.8192 13.6433L7.2786 19.9906C6.029 20.6779 4.5 19.7738 4.5 18.3477V5.65306Z"
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
