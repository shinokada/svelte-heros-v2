<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props{
    icon: ComponentType;
    size?: number;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {icon, size = 24, role = 'img', ariaLabel = 'Icon', class: classname, ...restProps}: Props = $props()
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size} 
  class={classname} 
  aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com/)
## Props
@prop icon
@prop size = 24
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop class: classname
@prop ...restProps
-->
