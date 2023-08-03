<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import Icon from '$lib/IconMini.svelte';
  import icons from '$lib/icons.js';
  import { filterIconsByKeyword, random_tailwind_color, random_hex_color_code} from '../utils.js'
  
  const miniIcons = filterIconsByKeyword(icons, '-mini');
  
  const contentClass = 'rounded-lg dark:bg-neutral-950 mt-4';
  let searchTerm = '';

  $: filteredIconNames = Object.keys(miniIcons).filter(name => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size="20"
</script>
<h1>Svelte Heros v2: Mini Icons</h1>
<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass='relative overflow-x-auto'
>
<div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
  <Label class="text-lg py-4 ">Icon size: {size}</Label>
  <Range id="range1" min="16" max="30" bind:value={size} />
</div>
  <Tabs style="pill" {contentClass} class="p-4">
    <TabItem open>
      <span slot="title" class="text-lg">Mono</span>
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredIconNames as iconName, i}
        <div class="flex gap-4 items-center text-lg">
          <Icon name={iconName} bind:width={size} bind:height={size} class="shrink-0"/>
          {iconName}
        </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Hex Colors</span>
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredIconNames as iconName, i}
        <div class="flex gap-4 items-center text-lg">
          <Icon name={iconName} bind:width={size} bind:height={size} color={random_hex_color_code()} class="shrink-0"/>
          {iconName}
        </div>
        {/each}
      </div>
    </TabItem>
    <TabItem>
      <span slot="title" class="text-lg">Random Tailwind CSS Colors</span>
      <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
        {#each filteredIconNames as iconName, i}
        <div class="flex gap-4 items-center text-lg">
          <Icon name={iconName} bind:width={size} bind:height={size} class={random_tailwind_color()} />
          {iconName}
        </div>
        {/each}
      </div>
    </TabItem>
  </Tabs>
</TableSearch>
