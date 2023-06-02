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

  export let ariaLabel = 'arrow up left';
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
      d="M19.5 19.5L4.5 4.5M4.5 4.5L4.5 15.75M4.5 4.5L15.75 4.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L6.5 7.56066V13.25C6.5 13.6642 6.16421 14 5.75 14C5.33579 14 5 13.6642 5 13.25V5.75C5 5.33579 5.33579 5 5.75 5H13.25C13.6642 5 14 5.33579 14 5.75C14 6.16421 13.6642 6.5 13.25 6.5H7.56066L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.25 6.31066L5.25 15.75C5.25 16.1642 4.91421 16.5 4.5 16.5C4.08579 16.5 3.75 16.1642 3.75 15.75L3.75 4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75L15.75 3.75C16.1642 3.75 16.5 4.08579 16.5 4.5C16.5 4.91421 16.1642 5.25 15.75 5.25L6.31066 5.25L20.0303 18.9697C20.3232 19.2626 20.3232 19.7374 20.0303 20.0303C19.7374 20.3232 19.2626 20.3232 18.9697 20.0303L5.25 6.31066Z"
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
