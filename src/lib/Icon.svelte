<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let strokeWidth: string = '1.5';
  export let variation: string = 'outline';
  export let color: string = '';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'Icon.svelte';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {size}
  {variation}
  {color}
  class={$$props.class}
  {strokeWidth}
  fill="none"
  {viewBox}
  aria-label={ariaLabel}
/>
