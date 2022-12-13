<script lang="ts">
  // https://github.com/shinokada/svelte-heros-v2
  // heroicons v2.0.10
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M6.42857 9.75L2.25 12L6.42857 14.25M6.42857 9.75L12 12.75L17.5714 9.75M6.42857 9.75L2.25 7.5L12 2.25L21.75 7.5L17.5714 9.75M17.5714 9.75L21.75 12L17.5714 14.25M17.5714 14.25L21.75 16.5L12 21.75L2.25 16.5L6.42857 14.25M17.5714 14.25L12 17.25L6.42857 14.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M11.6444 1.58965C11.8664 1.47012 12.1336 1.47012 12.3556 1.58965L22.1056 6.83965C22.3485 6.97046 22.5 7.22409 22.5 7.5C22.5 7.77591 22.3485 8.02954 22.1056 8.16035L12.3556 13.4104C12.1336 13.5299 11.8664 13.5299 11.6444 13.4104L1.89443 8.16035C1.65149 8.02954 1.5 7.77591 1.5 7.5C1.5 7.22409 1.65149 6.97046 1.89443 6.83965L11.6444 1.58965Z" fill="${color}"/> <path d="M3.26468 10.6018L10.9333 14.731C11.5992 15.0896 12.4008 15.0896 13.0667 14.7311L20.7353 10.6018L22.1056 11.3396C22.3485 11.4704 22.5 11.7241 22.5 12C22.5 12.2759 22.3485 12.5295 22.1056 12.6603L12.3556 17.9103C12.1336 18.0299 11.8664 18.0299 11.6444 17.9103L1.89443 12.6603C1.65149 12.5295 1.5 12.2759 1.5 12C1.5 11.7241 1.65149 11.4704 1.89443 11.3396L3.26468 10.6018Z" fill="${color}"/> <path d="M10.9333 19.231L3.26468 15.1018L1.89443 15.8396C1.65149 15.9704 1.5 16.2241 1.5 16.5C1.5 16.7759 1.65149 17.0295 1.89443 17.1603L11.6444 22.4103C11.8664 22.5299 12.1336 22.5299 12.3556 22.4103L22.1056 17.1603C22.3485 17.0295 22.5 16.7759 22.5 16.5C22.5 16.2241 22.3485 15.9704 22.1056 15.8396L20.7353 15.1018L13.0667 19.2311C12.4008 19.5896 11.5992 19.5896 10.9333 19.231Z" fill="${color}"/> `;
  $: switch (variation) {
    case 'outline':
      svgpath = svgoutline;
      viewBox = '0 0 24 24';
      break;
    case 'solid':
      svgpath = svgsolid;
      viewBox = '0 0 24 24';
      break;
    default:
      svgpath = svgoutline;
      viewBox = '0 0 24 24';
  }
  export let ariaLabel = 'square 3 stack 3d';
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
  stroke-width="2"
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
>
  {@html svgpath}
</svg>
