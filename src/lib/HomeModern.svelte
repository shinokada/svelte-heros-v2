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

  export let ariaLabel = 'home modern';
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
      d="M8.25 21V16.125C8.25 15.5037 8.75368 15 9.375 15H11.625C12.2463 15 12.75 15.5037 12.75 16.125V21M12.75 21H17.25V3.54545M12.75 21H20.25V10.75M2.25 21H3.75M21.75 21H3.75M2.25 9L6.75 7.36364M18.75 3L17.25 3.54545M17.25 9.75L20.25 10.75M21.75 11.25L20.25 10.75M6.75 7.36364V3H3.75V21M6.75 7.36364L17.25 3.54545"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M14.9156 2.40414C15.1067 2.77164 14.9637 3.22447 14.5962 3.41557L14 3.72558V17.0002C14 17.5524 13.5523 18.0002 13 18.0002H10.74C10.3258 18.0002 9.99 17.6644 9.99 17.2502V13.7502C9.99 13.3359 9.65421 13.0002 9.24 13.0002H6.75C6.33579 13.0002 6 13.3359 6 13.7502V17.2502C6 17.6644 5.66421 18.0002 5.25 18.0002H1.75C1.33579 18.0002 1 17.6644 1 17.2502C1 16.8359 1.33579 16.5002 1.75 16.5002H2V9.95741C1.65296 10.0805 1.25946 9.93216 1.08474 9.59617C0.893644 9.22867 1.03664 8.77584 1.40414 8.58474L2 8.27489V5.75015C2 5.33594 2.33579 5.00015 2.75 5.00015C3.16421 5.00015 3.5 5.33594 3.5 5.75015V7.49489L13.9041 2.08474C14.2716 1.89364 14.7245 2.03664 14.9156 2.40414Z"
      fill={color}
    />
    <path
      d="M15.8615 8.56938C16.0854 8.4334 16.3642 8.42419 16.5967 8.54508L18.596 9.58475C18.9635 9.77584 19.1065 10.2287 18.9154 10.5962C18.7407 10.9321 18.3473 11.0805 18.0003 10.9575V16.5002H18.25C18.6642 16.5002 19 16.8359 19 17.2502C19 17.6644 18.6642 18.0002 18.25 18.0002H16.25C16.0511 18.0002 15.8603 17.9211 15.7196 17.7805C15.579 17.6398 15.5 17.449 15.5 17.2501L15.5006 9.21043C15.5007 8.94839 15.6375 8.70536 15.8615 8.56938Z"
      fill={color}
    />
  {:else}
    <path
      d="M19.0061 3.70505C19.3954 3.56349 19.5962 3.13317 19.4547 2.7439C19.3131 2.35462 18.8828 2.1538 18.4935 2.29536L6 6.83846V3.00021C6 2.58599 5.66421 2.25021 5.25 2.25021H3.75C3.33579 2.25021 3 2.58599 3 3.00021V7.92937L1.99353 8.29536C1.60426 8.43691 1.40344 8.86724 1.54499 9.25651C1.68655 9.64579 2.11687 9.8466 2.50615 9.70505L19.0061 3.70505Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.01896 11.1147L18 5.66708V9.08858L22.0061 10.5454C22.3954 10.6869 22.5962 11.1172 22.4547 11.5065C22.3131 11.8958 21.8828 12.0966 21.4935 11.955L20.9998 11.7755V20.2502H21.75C22.1642 20.2502 22.5 20.586 22.5 21.0002C22.5 21.4144 22.1642 21.7502 21.75 21.7502H2.25C1.83579 21.7502 1.5 21.4144 1.5 21.0002C1.5 20.586 1.83579 20.2502 2.25 20.2502H3V11.1215L3.01896 11.1147ZM18 20.2502V10.6847L19.4998 11.2301V20.2502H18ZM9 14.2502C8.58579 14.2502 8.25 14.586 8.25 15.0002V19.5002C8.25 19.9144 8.58579 20.2502 9 20.2502H12C12.4142 20.2502 12.75 19.9144 12.75 19.5002V15.0002C12.75 14.586 12.4142 14.2502 12 14.2502H9Z"
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
@prop export let ariaLabel = 'home modern';
-->
