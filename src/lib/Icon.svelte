<script lang="ts">
  import type { Component } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGElement> {
    Icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
  }
  let {
    Icon,
    size = '24',
    color = 'currentColor',
    role = 'img',
    ariaLabel = 'Icon',
    ...restProps
  }: Props = $props();
</script>

<Icon {...restProps} {role} {size} {color} {ariaLabel} />

<!--
@component
[Go to docs](https://svelte-heros-v2.codewithshin.com/)
## Props
@prop Icon
@prop size = '24'
@prop color = 'currentColor'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop ...restProps
-->
