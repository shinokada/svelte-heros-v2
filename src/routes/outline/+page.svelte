<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);

</script>

<IconPage icons={keyIcons as Component} title="Outline Icons - Svelte Heros v2" />
