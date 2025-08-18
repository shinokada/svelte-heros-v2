<script lang="ts">
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  icons={keyIcons}
  title="Outline Icons - Svelte Heros v2"
  tab1Class="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
  contentClass="rounded-lg dark-bg-theme mt-4"
/>
