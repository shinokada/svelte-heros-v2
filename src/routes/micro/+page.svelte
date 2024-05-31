<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
  const filteredIcons = Object.fromEntries(
    Object.entries(keyIcons).filter(([key]) => key !== 'Icon')
  );
</script>

<IconPage
  icons={filteredIcons as Component}
  variation="micro"
  title="Micro Icons - Svelte Heros v2"
  minSize="14"
  maxSize="30"
  defaultSize="16"
/>
