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

  export let ariaLabel = 'chevron double right';
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
      d="M11.25 4.5L18.75 12L11.25 19.5M5.25 4.5L12.75 12L5.25 19.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.2094 14.7698C9.92228 14.4713 9.93159 13.9965 10.2302 13.7094L14.1679 10L10.2302 6.29062C9.93159 6.00353 9.92228 5.52875 10.2094 5.23017C10.4965 4.93159 10.9713 4.92228 11.2698 5.20937L15.7698 9.45937C15.9169 9.60078 16 9.79599 16 10C16 10.204 15.9169 10.3992 15.7698 10.5406L11.2698 14.7906C10.9713 15.0777 10.4965 15.0684 10.2094 14.7698Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.20938 14.7698C3.92228 14.4713 3.93159 13.9965 4.23017 13.7094L8.16792 10L4.23017 6.29062C3.93159 6.00353 3.92228 5.52875 4.20938 5.23017C4.49647 4.93159 4.97125 4.92228 5.26983 5.20937L9.76983 9.45937C9.91689 9.60078 10 9.79599 10 10C10 10.204 9.91689 10.3992 9.76983 10.5406L5.26983 14.7906C4.97125 15.0777 4.49647 15.0684 4.20938 14.7698Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.71967 3.96967C5.01256 3.67678 5.48744 3.67678 5.78033 3.96967L13.2803 11.4697C13.5732 11.7626 13.5732 12.2374 13.2803 12.5303L5.78033 20.0303C5.48744 20.3232 5.01256 20.3232 4.71967 20.0303C4.42678 19.7374 4.42678 19.2626 4.71967 18.9697L11.6893 12L4.71967 5.03033C4.42678 4.73744 4.42678 4.26256 4.71967 3.96967ZM10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967L19.2803 11.4697C19.5732 11.7626 19.5732 12.2374 19.2803 12.5303L11.7803 20.0303C11.4874 20.3232 11.0126 20.3232 10.7197 20.0303C10.4268 19.7374 10.4268 19.2626 10.7197 18.9697L17.6893 12L10.7197 5.03033C10.4268 4.73744 10.4268 4.26256 10.7197 3.96967Z"
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
