<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'rss';
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
      d="M12.75 19.5V18.75C12.75 14.6079 9.39214 11.25 5.25 11.25H4.5M4.5 4.5H5.25C13.1201 4.5 19.5 10.8799 19.5 18.75V19.5M6 18.75C6 19.1642 5.66421 19.5 5.25 19.5C4.83579 19.5 4.5 19.1642 4.5 18.75C4.5 18.3358 4.83579 18 5.25 18C5.66421 18 6 18.3358 6 18.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75H5.25C13.5343 3.75 20.25 10.4657 20.25 18.75V19.5C20.25 19.9142 19.9142 20.25 19.5 20.25H18.75C18.3358 20.25 18 19.9142 18 19.5V18.75C18 11.7084 12.2916 6 5.25 6H4.5C4.08579 6 3.75 5.66421 3.75 5.25V4.5ZM3.75 11.25C3.75 10.8358 4.08579 10.5 4.5 10.5H5.25C9.80635 10.5 13.5 14.1937 13.5 18.75V19.5C13.5 19.9142 13.1642 20.25 12.75 20.25H12C11.5858 20.25 11.25 19.9142 11.25 19.5V18.75C11.25 15.4363 8.56371 12.75 5.25 12.75H4.5C4.08579 12.75 3.75 12.4142 3.75 12V11.25ZM3.75 18.75C3.75 17.9216 4.42157 17.25 5.25 17.25C6.07843 17.25 6.75 17.9216 6.75 18.75C6.75 19.5784 6.07843 20.25 5.25 20.25C4.42157 20.25 3.75 19.5784 3.75 18.75Z"
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
