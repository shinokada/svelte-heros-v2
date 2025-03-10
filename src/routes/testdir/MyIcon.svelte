<script lang="ts">
  import { Icon as HeroIcon } from '$lib';
  import { type Component } from 'svelte';
  const config: { size: string, color: string; ariaLabel: string, class: string } = {
    size: "50",
    color: "#44ff88",
    ariaLabel: "my custom icon",
    class: "mx-4"
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<HeroIcon {...config} {Icon} />
