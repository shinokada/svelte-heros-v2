<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline' | 'mini';
    viewBox?: string;
    strokeWidth?: string;
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' = ctx.variation || 'outline';
  export let viewBox: string = ctx.viewBox || '0 0 24 24';
  export let strokeWidth: string = ctx.strokeWidth || '1.5';

  if (variation === 'mini') {
    size = size || '20';
    viewBox = viewBox || '0 0 20 20';
  } else {
    size = size || '24';
    viewBox = viewBox || '0 0 24 24';
  }

  export let ariaLabel = 'server stack';
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
      d="M5.25 14.25H18.75M5.25 14.25C3.59315 14.25 2.25 12.9069 2.25 11.25M5.25 14.25C3.59315 14.25 2.25 15.5931 2.25 17.25C2.25 18.9069 3.59315 20.25 5.25 20.25H18.75C20.4069 20.25 21.75 18.9069 21.75 17.25C21.75 15.5931 20.4069 14.25 18.75 14.25M2.25 11.25C2.25 9.59315 3.59315 8.25 5.25 8.25H18.75C20.4069 8.25 21.75 9.59315 21.75 11.25M2.25 11.25C2.25 10.2763 2.5658 9.32893 3.15 8.55L5.7375 5.1C6.37488 4.25016 7.37519 3.75 8.4375 3.75H15.5625C16.6248 3.75 17.6251 4.25016 18.2625 5.1L20.85 8.55C21.4342 9.32893 21.75 10.2763 21.75 11.25M21.75 11.25C21.75 12.9069 20.4069 14.25 18.75 14.25M18.75 17.25H18.7575V17.2575H18.75V17.25ZM18.75 11.25H18.7575V11.2575H18.75V11.25ZM15.75 17.25H15.7575V17.2575H15.75V17.25ZM15.75 11.25H15.7575V11.2575H15.75V11.25Z"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      d="M4.46363 3.16188C4.79054 2.45358 5.49945 2 6.27955 2H13.7202C14.5003 2 15.2092 2.45358 15.5361 3.16188L16.69 5.66188C16.7567 5.80652 16.8047 5.9534 16.8352 6.1003C16.5675 6.03476 16.2878 6 15.9999 6H3.99989C3.712 6 3.43223 6.03476 3.16455 6.10031C3.19509 5.9534 3.24303 5.80653 3.30979 5.66188L4.46363 3.16188Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 9.5C2 8.39543 2.89543 7.5 4 7.5H16C17.1046 7.5 18 8.39543 18 9.5C18 10.6046 17.1046 11.5 16 11.5H4C2.89543 11.5 2 10.6046 2 9.5ZM15.2402 9.5C15.2402 9.08579 15.576 8.75 15.9902 8.75H16.0002C16.4144 8.75 16.7502 9.08579 16.7502 9.5V9.51C16.7502 9.92421 16.4144 10.26 16.0002 10.26H15.9902C15.576 10.26 15.2402 9.92421 15.2402 9.51V9.5ZM12.9902 8.75C12.576 8.75 12.2402 9.08579 12.2402 9.5V9.51C12.2402 9.92421 12.576 10.26 12.9902 10.26H13.0002C13.4144 10.26 13.7502 9.92421 13.7502 9.51V9.5C13.7502 9.08579 13.4144 8.75 13.0002 8.75H12.9902Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 15C2 13.8954 2.89543 13 4 13H16C17.1046 13 18 13.8954 18 15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15ZM15.2402 15C15.2402 14.5858 15.576 14.25 15.9902 14.25H16.0002C16.4144 14.25 16.7502 14.5858 16.7502 15V15.01C16.7502 15.4242 16.4144 15.76 16.0002 15.76H15.9902C15.576 15.76 15.2402 15.4242 15.2402 15.01V15ZM12.9902 14.25C12.576 14.25 12.2402 14.5858 12.2402 15V15.01C12.2402 15.4242 12.576 15.76 12.9902 15.76H13.0002C13.4144 15.76 13.7502 15.4242 13.7502 15.01V15C13.7502 14.5858 13.4144 14.25 13.0002 14.25H12.9902Z"
      fill={color}
    />
  {:else}
    <path
      d="M5.50701 4.04763C6.07695 3.38269 6.909 3 7.78478 3H16.2151C17.0908 3 17.9229 3.38269 18.4928 4.04763L20.2147 6.05645C19.9819 6.0193 19.7432 6 19.4999 6H4.49992C4.25668 6 4.01794 6.0193 3.78516 6.05645L5.50701 4.04763Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 10.5C1.5 8.84315 2.84315 7.5 4.5 7.5H19.5C21.1569 7.5 22.5 8.84315 22.5 10.5C22.5 12.1569 21.1569 13.5 19.5 13.5H4.5C2.84315 13.5 1.5 12.1569 1.5 10.5ZM16.5 10.5C16.5 10.9142 16.1642 11.25 15.75 11.25C15.3358 11.25 15 10.9142 15 10.5C15 10.0858 15.3358 9.75 15.75 9.75C16.1642 9.75 16.5 10.0858 16.5 10.5ZM18.75 11.25C19.1642 11.25 19.5 10.9142 19.5 10.5C19.5 10.0858 19.1642 9.75 18.75 9.75C18.3358 9.75 18 10.0858 18 10.5C18 10.9142 18.3358 11.25 18.75 11.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.5 15C2.84315 15 1.5 16.3431 1.5 18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18C22.5 16.3431 21.1569 15 19.5 15H4.5ZM15.75 18.75C16.1642 18.75 16.5 18.4142 16.5 18C16.5 17.5858 16.1642 17.25 15.75 17.25C15.3358 17.25 15 17.5858 15 18C15 18.4142 15.3358 18.75 15.75 18.75ZM19.5 18C19.5 18.4142 19.1642 18.75 18.75 18.75C18.3358 18.75 18 18.4142 18 18C18 17.5858 18.3358 17.25 18.75 17.25C19.1642 17.25 19.5 17.5858 19.5 18Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let strokeWidth: string = ctx.strokeWidth || '1.5';
@prop export let ariaLabel = 'server stack';
-->
