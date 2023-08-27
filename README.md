<script lang="ts">
    import type { PageData } from './$types';
  export let data: PageData;
  console.log('data from home', data)
</script>

# Svelte Heros v2

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor" height="25" style="height: 25px !important;" width="102"></a>
<a href="https://www.npmjs.com/package/svelte-heros-v2" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-heros-v2" alt="npm" height="25" style="height: 25px !important;" width="97"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;" width="161"></a>
<a href="http://www.apache.org/licenses/" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-heros-v2" alt="License" height="25" style="height: 25px !important;" width="132"></a>
<a href="https://www.npmjs.com/package/svelte-heros-v2" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-heros-v2.svg" alt="npm" height="25" style="height: 25px !important;" width="152"></a>
</div>

**If you are looking for the version 1, go to [Svelte-Heros](https://github.com/shinokada/svelte-heros)**

Hero Icons v2 uses Heroicon v2 to create Svelte SVG icons. You can select outline and solid icons using the variation props. Svlete-Heros support major CSS framework. You can add additional CSS using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


## Repo

[GitHub Repo](https://github.com/shinokada/svelte-heros-v2)

## Original source

[tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

## License

[Svelte-Heros-V2 License](https://github.com/shinokada/svelte-heros-v2/blob/main/LICENSE)

[tailwindlabs/heroicons LICENSE](https://github.com/tailwindlabs/heroicons/blob/main/LICENSE)


## Installation

```sh
pnpm i -D svelte-heros-v2
```

## Usage

```html
<script>
  import { IconOutline, IconSolid, IconMini } from 'svelte-heros-v2';
</script>

<IconOutline name="AcademicCapOutline" />
<IconSolid name="AcademicCapSolid" />
<IconMini name="AcademicCapMini" />
```

## Props

### IconOutline IconSolid

- @prop name;
- @prop width = "24";
- @prop height = "24";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

### IconMini

- @prop name;
- @prop width = "20";
- @prop height = "20";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<IconOutline name="AcademicCapOutline" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<IconOutline name="AcademicCapOutline" class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<IconOutline name="AcademicCapOutline" color="#c61515" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<IconOutline name="AcademicCapOutline" class="text-red-700 inline m-1" />
```

Bootstrap examples:

```html
<IconOutline name="AcademicCapOutline" class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<IconOutline name="AcademicCapOutline"  class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `AcademicCapOutline` has `aria-label="academic cap outline"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<IconOutline name="AcademicCapOutline" ariaLabel="red academic cap outline" color="#c61515"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<IconOutline name="AcademicCapOutline"  tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<IconOutline name="AcademicCapOutline"  tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{IconOutline}" name="AcademicCapOutline" />
```

## Using onMount

```html
<script>
  import { IconOutline } from 'svelte-heros-v2';
  import { onMount } from 'svelte';
  const props = {
    name: 'AcademicCapOutline',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new IconOutline({ target: document.body, props });
  });
</script>
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
