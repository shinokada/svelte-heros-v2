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

  export let ariaLabel = 'square 3 stack 3d';
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
      d="M6.42857 9.75L2.25 12L6.42857 14.25M6.42857 9.75L12 12.75L17.5714 9.75M6.42857 9.75L2.25 7.5L12 2.25L21.75 7.5L17.5714 9.75M17.5714 9.75L21.75 12L17.5714 14.25M17.5714 14.25L21.75 16.5L12 21.75L2.25 16.5L6.42857 14.25M17.5714 14.25L12 17.25L6.42857 14.25"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M3.19569 12.8694L2.37071 13.353C2.14108 13.4876 2 13.7338 2 14C2 14.2662 2.14108 14.5124 2.37071 14.647L9.62071 18.897C9.85493 19.0343 10.1451 19.0343 10.3793 18.897L17.6293 14.647C17.8589 14.5124 18 14.2662 18 14C18 13.7338 17.8589 13.4876 17.6293 13.353L16.8043 12.8694L11.1379 16.1911C10.4352 16.603 9.56479 16.603 8.86213 16.1911L3.19569 12.8694Z"
      fill={color}
    />
    <path
      d="M3.19569 8.86937L2.37071 9.35298C2.14108 9.48759 2 9.73382 2 10C2 10.2662 2.14108 10.5124 2.37071 10.647L9.62071 14.897C9.85493 15.0343 10.1451 15.0343 10.3793 14.897L17.6293 10.647C17.8589 10.5124 18 10.2662 18 10C18 9.73382 17.8589 9.48759 17.6293 9.35298L16.8043 8.86937L11.1379 12.1911C10.4352 12.603 9.56479 12.603 8.86213 12.1911L3.19569 8.86937Z"
      fill={color}
    />
    <path
      d="M10.3793 1.10298C10.1451 0.965675 9.85493 0.965675 9.62071 1.10298L2.37071 5.35298C2.14108 5.48759 2 5.73382 2 6C2 6.26618 2.14108 6.51241 2.37071 6.64702L9.62071 10.897C9.85493 11.0343 10.1451 11.0343 10.3793 10.897L17.6293 6.64702C17.8589 6.51241 18 6.26618 18 6C18 5.73382 17.8589 5.48759 17.6293 5.35298L10.3793 1.10298Z"
      fill={color}
    />
  {:else}
    <path
      d="M11.6444 1.58965C11.8664 1.47012 12.1336 1.47012 12.3556 1.58965L22.1056 6.83965C22.3485 6.97046 22.5 7.22409 22.5 7.5C22.5 7.77591 22.3485 8.02954 22.1056 8.16035L12.3556 13.4104C12.1336 13.5299 11.8664 13.5299 11.6444 13.4104L1.89443 8.16035C1.65149 8.02954 1.5 7.77591 1.5 7.5C1.5 7.22409 1.65149 6.97046 1.89443 6.83965L11.6444 1.58965Z"
      fill={color}
    />
    <path
      d="M3.26468 10.6018L10.9333 14.731C11.5992 15.0896 12.4008 15.0896 13.0667 14.7311L20.7353 10.6018L22.1056 11.3396C22.3485 11.4704 22.5 11.7241 22.5 12C22.5 12.2759 22.3485 12.5295 22.1056 12.6603L12.3556 17.9103C12.1336 18.0299 11.8664 18.0299 11.6444 17.9103L1.89443 12.6603C1.65149 12.5295 1.5 12.2759 1.5 12C1.5 11.7241 1.65149 11.4704 1.89443 11.3396L3.26468 10.6018Z"
      fill={color}
    />
    <path
      d="M10.9333 19.231L3.26468 15.1018L1.89443 15.8396C1.65149 15.9704 1.5 16.2241 1.5 16.5C1.5 16.7759 1.65149 17.0295 1.89443 17.1603L11.6444 22.4103C11.8664 22.5299 12.1336 22.5299 12.3556 22.4103L22.1056 17.1603C22.3485 17.0295 22.5 16.7759 22.5 16.5C22.5 16.2241 22.3485 15.9704 22.1056 15.8396L20.7353 15.1018L13.0667 19.2311C12.4008 19.5896 11.5992 19.5896 10.9333 19.231Z"
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
