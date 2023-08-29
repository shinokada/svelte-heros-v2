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

  export let ariaLabel = 'moon';
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
      d="M21.7519 15.0019C20.597 15.4839 19.3296 15.75 18 15.75C12.6152 15.75 8.25 11.3848 8.25 5.99999C8.25 4.67039 8.51614 3.40296 8.99806 2.24805C5.47566 3.71785 3 7.19481 3 11.25C3 16.6348 7.36522 21 12.75 21C16.8052 21 20.2821 18.5243 21.7519 15.0019Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.45519 2.00383C7.68518 2.18752 7.78646 2.48878 7.71414 2.77411C7.57443 3.32534 7.5 3.90336 7.5 4.49984C7.5 8.36583 10.634 11.4998 14.5 11.4998C15.6435 11.4998 16.721 11.2262 17.6724 10.7415C17.9347 10.6079 18.2509 10.6401 18.4809 10.8238C18.7109 11.0075 18.8122 11.3088 18.7399 11.5941C17.8069 15.2754 14.4725 17.9998 10.5 17.9998C5.80558 17.9998 2 14.1943 2 9.49984C2 6.19127 3.89048 3.32555 6.64671 1.92156C6.909 1.78795 7.22519 1.82013 7.45519 2.00383Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.52839 1.71774C9.74339 1.93274 9.80731 2.25628 9.69021 2.53689C9.2458 3.60192 9 4.77131 9 6.00001C9 10.9706 13.0294 15 18 15C19.2287 15 20.3981 14.7542 21.4631 14.3098C21.7437 14.1927 22.0673 14.2566 22.2823 14.4716C22.4973 14.6866 22.5612 15.0102 22.4441 15.2908C20.8618 19.0827 17.1183 21.75 12.75 21.75C6.95101 21.75 2.25 17.049 2.25 11.25C2.25 6.88172 4.91735 3.13817 8.70924 1.55591C8.98985 1.43882 9.31338 1.50274 9.52839 1.71774Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = '24';
@prop export let viewBox: string = '0 0 24 24';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = 'outline';
@prop export let ariaLabel = 'moon';
-->
