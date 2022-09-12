# Svelte-Heros-V2 with Heroicon v2.0.10

**If you are looking for the version 1, go to [Svelte-Heros](https://github.com/shinokada/svelte-heros)**

Hero Icons v2 for Svelte. You can select outline and solid icons using the variation props. Svlete-Heros support major CSS framework. You can add additional CSS using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros-v2/main/static/images/heros-outline1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros-v2/main/static/images/heros-outline2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros-v2/main/static/images/heros-solid1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros-v2/main/static/images/heros-solid2.webp" />
</p>

## Original source

[tailwindlabs/heroicons v2.0.10](https://github.com/tailwindlabs/heroicons)

## List of icons

[Icon names](https://github.com/shinokada/svelte-heros-v2/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-heros-v2
```

To update

```sh
npm i -D svelte-heros-v2@latest
```

## REPL

[Outline demo](https://svelte.dev/repl/1948d7b5157f44709cff380d9783342c?version=3.49.0)

[Solid demo](https://svelte.dev/repl/e26c4ea516a0493cb64797879b1fe46d?version=3.49.0)

## Usage

```html
<script>
	import { AcademicCap } from 'svelte-heros-v2';
</script>

<AcademicCap />
```

## Props

| Name                         | Default   |
| ---------------------------- | --------- |
| size                         | 24        |
| class                        |           |
| ariaLabel                    | file name |
| variation (solid or outline) | outline   |

## Variation

The default variation value is outline. Use the `variation` prop to change it to solid.

```html
<AcademicCap variation="solid" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<AcademicCap size="30" />
<AcademicCap size="40" />
<AcademicCap size="50" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<AcademicCap color="#ff0000" /> <AcademicCap color="#00ffd8" />
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
<AcademicCap ariaLabel="red academic cap" class="text-red-500"></AcademicCap>
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

```md
on:click
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
on:blur
on:focus
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
- [Svelte-Heros v1](https://github.com/shinokada/svelte-heros)
