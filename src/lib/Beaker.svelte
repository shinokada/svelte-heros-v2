<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'beaker';
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
      d="M9.75001 3.10408V8.81802C9.75001 9.41476 9.51295 9.98705 9.091 10.409L5.00001 14.5M9.75001 3.10408C9.49886 3.12743 9.24884 3.15465 9.00001 3.18568M9.75001 3.10408C10.4908 3.03521 11.2413 3 12 3C12.7587 3 13.5093 3.03521 14.25 3.10408M14.25 3.10408V8.81802C14.25 9.41476 14.4871 9.98705 14.909 10.409L19.8 15.3M14.25 3.10408C14.5011 3.12743 14.7512 3.15465 15 3.18568M19.8 15.3L18.2299 15.6925C16.1457 16.2136 13.9216 15.9608 12 15C10.0784 14.0392 7.85435 13.7864 5.7701 14.3075L5.00001 14.5M19.8 15.3L21.2022 16.7022C22.4341 17.9341 21.8527 20.0202 20.1354 20.3134C17.4911 20.7649 14.773 21 12 21C9.227 21 6.50891 20.7649 3.86459 20.3134C2.14728 20.0202 1.56591 17.9341 2.7978 16.7022L5.00001 14.5"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 3.79758V8.81802C10.5 9.61367 10.1839 10.3767 9.62131 10.9393L7.24427 13.3164C8.99161 13.192 10.7578 13.5404 12.3354 14.3292C14.0988 15.2109 16.1395 15.442 18.048 14.9649L18.333 14.8937L14.3787 10.9393C13.8161 10.3767 13.5 9.61367 13.5 8.81802V3.79758C13.0041 3.76602 12.504 3.75 12 3.75C11.496 3.75 10.9958 3.76602 10.5 3.79758ZM15 3.93576C15.3732 3.93623 15.6969 3.65833 15.7442 3.27849C15.7955 2.86745 15.5038 2.4927 15.0928 2.44144C14.8362 2.40945 14.5784 2.38138 14.3194 2.3573C13.5556 2.28628 12.7819 2.25 12 2.25C11.218 2.25 10.4444 2.28628 9.68055 2.3573C9.4216 2.38138 9.16378 2.40945 8.90718 2.44144C8.49615 2.4927 8.2045 2.86746 8.25575 3.27849C8.30312 3.65833 8.62676 3.93623 8.99999 3.93576V8.81802C8.99999 9.21584 8.84195 9.59738 8.56065 9.87868L2.26745 16.1719C0.646313 17.793 1.36446 20.6474 3.73836 21.0527C6.42419 21.5112 9.1845 21.75 12 21.75C14.8155 21.75 17.5758 21.5112 20.2616 21.0527C22.6355 20.6474 23.3537 17.793 21.7325 16.1719L15.4393 9.87868C15.158 9.59738 15 9.21584 15 8.81802V3.93576Z"
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
