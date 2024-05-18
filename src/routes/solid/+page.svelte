<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
  const filteredIcons = Object.fromEntries(
    Object.entries(keyIcons).filter(([key]) => key !== 'Icon')
  );
</script>

<IconPage icons={filteredIcons as ComponentType} variation="solid" title="Svelte Heros v2: Solid" />
