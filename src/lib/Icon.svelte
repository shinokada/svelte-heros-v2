<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let strokeWidth: string = '1.5';
  export let variation: string = 'outline';
  export let color: string = '';
  export let viewBox: string = '0 0 24 24';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {size}
  {variation}
  {color}
  class={$$props.class}
  {strokeWidth}
  {viewBox}
/>

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com)
## Props
@prop export let icon: ComponentType;
@prop export let size: number = 24;
@prop export let strokeWidth: string = '1.5';
@prop export let variation: string = 'outline';
@prop export let color: string = '';
@prop export let viewBox: string = '0 0 24 24';
-->
