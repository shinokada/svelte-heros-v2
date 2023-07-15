# Svelte Heros V2

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor" height="22" width="102"></a>
<a href="https://www.npmjs.com/package/svelte-heros-v2" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-heros-v2" alt="npm" height="22" width="97"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="22" width="161"></a>
<a href="http://www.apache.org/licenses/" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-heros-v2" alt="License" height="22" width="132"></a>
<a href="https://www.npmjs.com/package/svelte-heros-v2" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-heros-v2.svg" alt="npm" height="22" width="152"></a>
</p>

**If you are looking for the version 1, go to [Svelte-Heros](https://github.com/shinokada/svelte-heros)**

Hero Icons v2 uses Heroicon v2 to create Svelte SVG icons. You can select outline and solid icons using the variation props. Svlete-Heros support major CSS framework. You can add additional CSS using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


## Installation

```sh
npm i -D svelte-heros-v2
```

To update

```sh
npm i -D svelte-heros-v2@latest
```

## REPL

[Outline demo](https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c)

[Solid demo](https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d)

## List of icons

[Icons and names](https://svelte.dev/repl/68258cc21f7a4c9891bcb950dc3631b8?version=4.0.5)

## Icon images

[Icon images](/icon-images.md)

## Usage

```html
<script>
  import { AcademicCap } from 'svelte-heros-v2';
</script>

<AcademicCap />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AcademicCap from 'svelte-heros-v2/AcademicCap.svelte';
</script>

<AcademicCap />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is available:

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = "24";
- viewBox: string = '0 0 24 24';
- role = "img";
- strokeWidth = "1.5"
- color="currentColor";
- variation: "solid" | "outline" | "mini"= "outline";
- ariaLabel = 'icon file name';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

![component doc](https://github.com/shinokada/svelte-heros-v2/blob/main/static/images/compo-doc.png?raw=true)

## Variation

The default variation value is outline. Use the `variation` prop to change it to solid or mini.

```html
<AcademicCap variation="solid" /> <AcademicCap variation="mini" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<AcademicCap size="30" />
<AcademicCap size="40" />
<AcademicCap size="50" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<AcademicCap tabindex="-1" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<AcademicCap color="#ff0000" /> <AcademicCap color="#00ffd8" />
```

## Stroke width

Use the `strokeWidth` prop to change the SVG `stroke-width`.

```html
<AcademicCap strokeWidth="4" size="100" />
```

## CSS framework support

Use the `class` prop to change colors and additional CSS.

For example, Tailwind CSS:

```html
<AcademicCap class="text-pink-700 mr-4" />
```

If you use the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AcademicCap class="text-pink-700 dark:text-blue-300" />
```

Bootstrap example:

```html
<AcademicCap class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `AcademicCap` has `aria-label="academic cap"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AcademicCap ariaLabel="red academic cap" class="text-red-500" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AcademicCap tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { AcademicCap } from 'svelte-heros-v2';
</script>

<svelte:component this="{AcademicCap}" size="40" />
```

## Import all

Use `import * as Icon from 'svelte-heros-v2'`.

```html
<script>
  import * as Icon from 'svelte-heros-v2';
</script>

<Icon.ShoppingBag size="30" class="text-red-500" />
<Icon.Sparkles size="40" class="text-blue-700" />
<Icon.Star size="50" class="text-green-700" />
<Icon.User size="60" class="text-purple-500" />
<Icon.Wifi size="100" class="text-purple-500" tabindex="0" />
```

## Dynamically change the variation

```html
<script>
  import { Map } from 'svelte-heros-v2';
  let isSolid = false;
</script>

<Map size="50" on:click={() => (isSolid = !isSolid)} variation={isSolid ? 'solid' : 'outline'} />
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

## Original source

[tailwindlabs/heroicons v2.0.13](https://github.com/tailwindlabs/heroicons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
- [Svelte-Heros v1](https://github.com/shinokada/svelte-heros)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".