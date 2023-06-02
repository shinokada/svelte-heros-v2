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

  export let ariaLabel = 'arrow right';
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
      d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 10C3 9.58579 3.33579 9.25 3.75 9.25L14.3879 9.25L10.2302 5.29062C9.93159 5.00353 9.92228 4.52875 10.2094 4.23017C10.4965 3.93159 10.9713 3.92228 11.2698 4.20937L16.7698 9.45937C16.9169 9.60078 17 9.79599 17 10C17 10.204 16.9169 10.3992 16.7698 10.5406L11.2698 15.7906C10.9713 16.0777 10.4965 16.0684 10.2094 15.7698C9.92228 15.4713 9.93159 14.9965 10.2302 14.7094L14.3879 10.75L3.75 10.75C3.33579 10.75 3 10.4142 3 10Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
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
