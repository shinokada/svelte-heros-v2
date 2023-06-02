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

  export let ariaLabel = 'arrow long right';
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
      d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 10C2 9.58579 2.33579 9.25 2.75 9.25L15.3401 9.25L13.2397 7.2996C12.9361 7.01775 12.9186 6.5432 13.2004 6.23966C13.4823 5.93613 13.9568 5.91856 14.2603 6.20041L17.7603 9.45041C17.9132 9.59232 18 9.79145 18 10C18 10.2086 17.9132 10.4077 17.7603 10.5496L14.2603 13.7996C13.9568 14.0815 13.4823 14.0639 13.2004 13.7603C12.9186 13.4568 12.9361 12.9823 13.2397 12.7004L15.3401 10.75L2.75 10.75C2.33579 10.75 2 10.4142 2 10Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.7197 7.71967C17.0126 7.42678 17.4874 7.42678 17.7803 7.71967L21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L17.7803 16.2803C17.4874 16.5732 17.0126 16.5732 16.7197 16.2803C16.4268 15.9874 16.4268 15.5126 16.7197 15.2197L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L16.7197 8.78033C16.4268 8.48744 16.4268 8.01256 16.7197 7.71967Z"
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
