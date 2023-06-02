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

  export let ariaLabel = 'arrow left circle';
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
      d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <g clip-path="url(#clip0_9_2121)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.25 10.75C13.6642 10.75 14 10.4142 14 10C14 9.58579 13.6642 9.25 13.25 9.25H8.6599L10.7603 7.29959C11.0639 7.01774 11.0814 6.54319 10.7996 6.23966C10.5177 5.93613 10.0432 5.91855 9.73966 6.2004L6.23966 9.4504C6.08684 9.59231 6 9.79145 6 10C6 10.2086 6.08684 10.4077 6.23966 10.5496L9.73966 13.7996C10.0432 14.0814 10.5177 14.0639 10.7996 13.7603C11.0814 13.4568 11.0639 12.9823 10.7603 12.7004L8.6599 10.75H13.25Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_9_2121"> <rect width="20" height="20" fill={color} /> </clipPath>
    </defs>
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM7.71967 11.4697C7.57902 11.6103 7.5 11.8011 7.5 12C7.5 12.1989 7.57902 12.3897 7.71967 12.5303L10.7197 15.5303C11.0126 15.8232 11.4874 15.8232 11.7803 15.5303C12.0732 15.2374 12.0732 14.7626 11.7803 14.4697L10.0607 12.75H15.75C16.1642 12.75 16.5 12.4142 16.5 12C16.5 11.5858 16.1642 11.25 15.75 11.25L10.0607 11.25L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967C11.4874 8.17678 11.0126 8.17678 10.7197 8.46967L7.71967 11.4697Z"
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
