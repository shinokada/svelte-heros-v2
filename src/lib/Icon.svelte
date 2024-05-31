<script lang="ts">
  import type { Component } from 'svelte';
  interface Props {
    icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    icon,
    size = '24',
    role = 'img',
    ariaLabel = 'Icon',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svelte:component
  this={icon}
  {...restProps}
  {role}
  {size}
  class={classname}
  aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com/)
## Props
@prop icon
@prop size = '24'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop class: classname
@prop ...restProps
-->
