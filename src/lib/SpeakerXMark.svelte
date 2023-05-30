<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'speaker x mark';
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
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
>
  {#if variation === 'outline'}
    <path
      d="M17.25 9.75041L19.5 12.0004M19.5 12.0004L21.75 14.2504M19.5 12.0004L21.75 9.75041M19.5 12.0004L17.25 14.2504M6.75 8.25041L11.4697 3.53074C11.9421 3.05827 12.75 3.3929 12.75 4.06107V19.9398C12.75 20.6079 11.9421 20.9426 11.4697 20.4701L6.75 15.7504H4.50905C3.62971 15.7504 2.8059 15.2439 2.57237 14.3962C2.36224 13.6334 2.25 12.83 2.25 12.0004C2.25 11.1708 2.36224 10.3675 2.57237 9.60465C2.8059 8.75689 3.62971 8.25041 4.50905 8.25041H6.75Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M13.5 4.06063C13.5 2.72427 11.8843 2.05501 10.9393 2.99996L6.43934 7.49997H4.50905C3.36772 7.49997 2.19106 8.1644 1.8493 9.40502C1.62147 10.2321 1.5 11.1024 1.5 12C1.5 12.8975 1.62147 13.7678 1.8493 14.5949C2.19106 15.8355 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.9449 13.5 21.2757 13.5 19.9393V4.06063Z"
      fill={color}
    />
    <path
      d="M17.7803 9.21962C17.4874 8.92673 17.0126 8.92673 16.7197 9.21962C16.4268 9.51252 16.4268 9.98739 16.7197 10.2803L18.4393 12L16.7197 13.7196C16.4268 14.0125 16.4268 14.4874 16.7197 14.7803C17.0126 15.0732 17.4874 15.0732 17.7803 14.7803L19.5 13.0606L21.2197 14.7803C21.5126 15.0732 21.9874 15.0732 22.2803 14.7803C22.5732 14.4874 22.5732 14.0125 22.2803 13.7196L20.5607 12L22.2803 10.2803C22.5732 9.98739 22.5732 9.51252 22.2803 9.21962C21.9874 8.92673 21.5126 8.92673 21.2197 9.21962L19.5 10.9393L17.7803 9.21962Z"
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
  - on:mouseenter 
  - on:mouseleave 
  - on:mouseover 
  - on:mouseout 
  - on:blur 
  - on:focus 
-->
