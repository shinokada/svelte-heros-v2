# Svelte Heros V2

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
<AcademicCap variation="solid" /> 
<AcademicCap variation="mini" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<AcademicCap size="30" />
<AcademicCap size="40" />
<AcademicCap size="50" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<AcademicCap class="shrink-0 h-20 w-20" />
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

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<AcademicCap tabindex="-1" />
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
<AcademicCap tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { AcademicCap } from 'svelte-heros-v2';
</script>

<svelte:component this="{AcademicCap}" size="40" />
```

# Using onMount

```html
<script>
  import { Cib500px } from 'svelte-coreui-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Cib500px({ target: document.body, props });
  });
</script>
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

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
