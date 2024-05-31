<script context="module" lang="ts">
  const extra: ListType[] = [
    {
      name: 'Outline',
      icon: ExpandOutline as Component,
      href: '/outline'
    },
    {
      name: 'Solid',
      icon: CogOutline as Component,
      href: '/solid'
    },
    {
      name: 'Mini',
      icon: GridPlusOutline as Component,
      href: '/mini'
    },
    {
      name: 'Micro',
      icon: ChartLineUpOutline as Component,
      href: '/micro'
    }
  ];
  export const newSidebarList: ListType[] = [...sidebarList, ...extra];
</script>

<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import type { Component } from 'svelte';
  import type { ListType } from 'runes-webkit';
  import {
    Footer,
    OnThisPage,
    extract,
    Sidebar,
    removeHyphensAndCapitalize,
    sidebarList,
    ExpandOutline,
    GridPlusOutline,
    CogOutline,
    ChartLineUpOutline
  } from 'runes-webkit';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';

  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID_TWO;
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  });
  const lis = [
    { name: 'Guide', href: '/guide/svelte-4/getting-started' },
    { name: 'Outline', href: '/outline' },
    { name: 'Solid', href: '/solid' },
    { name: 'Mini', href: '/mini' },
    { name: 'Micro', href: '/micro' },
    { name: 'Icon sets', href: 'https://svelte-svg-icons.codewithshin.com/' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use', '/quick-start'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
</script>

<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav
  {lis}
  {siteName}
  {twitterUrl}
  {githubUrl}
  urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}
/>
<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar
      sidebarList={newSidebarList}
      s_b_aside="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden"
      s_b_div="fixed top-20 px-2 w-60"
    />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  {@render children()}
</div>
<Footer {brand} {lis} />
