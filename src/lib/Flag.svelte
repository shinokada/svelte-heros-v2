<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = "24";
  export let strokeWidth = "1.5"
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  export let viewBox: string = '0 0 24 24';
export let ariaLabel="flag" </script>

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
  <path d="M3 3V4.5M3 21V15M3 15L5.77009 14.3075C7.85435 13.7864 10.0562 14.0281 11.9778 14.9889L12.0856 15.0428C13.9687 15.9844 16.1224 16.2359 18.1718 15.7537L21.2861 15.0209C21.097 13.2899 21 11.5313 21 9.75C21 7.98343 21.0954 6.23914 21.2814 4.52202L18.1718 5.25369C16.1224 5.73591 13.9687 5.48435 12.0856 4.54278L11.9778 4.48892C10.0562 3.52812 7.85435 3.28641 5.77009 3.80748L3 4.5M3 15V4.5" stroke="{color}" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/> 
{:else}
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.25C3.41421 2.25 3.75 2.58579 3.75 3V3.53942L5.58819 3.07987C7.84613 2.51539 10.2315 2.77724 12.3132 3.8181L12.421 3.87196C14.1472 4.73507 16.1214 4.96567 18.0001 4.52363L21.1096 3.79196C21.3465 3.73622 21.5958 3.79888 21.7781 3.96005C21.9605 4.12121 22.0533 4.36083 22.0271 4.60278C21.844 6.29313 21.75 8.01046 21.75 9.75C21.75 11.504 21.8455 13.2355 22.0317 14.9395C22.0728 15.3161 21.8266 15.6642 21.4579 15.751L18.3436 16.4837C16.1234 17.0062 13.7902 16.7336 11.7501 15.7136L11.6424 15.6597C9.88097 14.779 7.86256 14.5574 5.95199 15.0351L3.75 15.5856V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25Z" fill="{color}"/> 
{/if}
</svg>
