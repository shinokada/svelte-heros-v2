<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterIconsByKeyword, filterStringKeys } from 'runes-webkit'
  import * as icons from '$lib'
  const keyIcons = filterStringKeys(icons);
  // Filter entries where key is not "Icon"
  const filteredIcons = Object.fromEntries(
    Object.entries(keyIcons)
      .filter(([key]) => key !== "Icon") 
  );
</script>


<IconPage icons={filteredIcons as ComponentType} title="Svelte Heros v2: Outline" />