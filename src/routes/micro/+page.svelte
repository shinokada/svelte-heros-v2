<script lang="ts">
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  icons={keyIcons}
  variation="micro"
  title="Micro Icons - Svelte Heros v2"
  minSize="14"
  maxSize="30"
  defaultSize="16"
  tab1Class="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
/>
