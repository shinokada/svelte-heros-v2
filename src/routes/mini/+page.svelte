<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  icons={keyIcons as Component}
  variation="mini"
  title="Mini Icons - Svelte Heros v2"
  minSize="16"
  maxSize="30"
  defaultSize="20"
/>
