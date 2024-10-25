import type { Component } from 'svelte';
import {
  type ListType,
  sidebarList,
  ExpandOutline,
  GridPlusOutline,
  CogOutline
} from 'runes-webkit';
import { ChartBar } from '$lib';

const extra: ListType[] = [
  {
    name: 'Outline',
    Icon: ExpandOutline as Component,
    href: '/outline'
  },
  {
    name: 'Solid',
    Icon: CogOutline as Component,
    href: '/solid'
  },
  {
    name: 'Mini',
    Icon: GridPlusOutline as Component,
    href: '/mini'
  },
  {
    name: 'Micro',
    Icon: ChartBar as Component,
    href: '/micro'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];
