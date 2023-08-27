<script lang="ts">
  import { onMount } from 'svelte';
  import { loadComponent } from './utils/helper.js';

  export let name: string = '';
  export let width = "24";
  export let height = "24";
  export let color = 'currentColor';
  export let role = 'img';
  export let ariaLabel: string = '';

  let iconName: string = '';
  let iconSvg: string = '';
  let iconBox: number;

  onMount(async () => {
    const { iconName: loadedIconName, iconSvg: loadedIconSvg, iconBox: loadedIconBox } = await loadComponent(name);
    iconName = loadedIconName;
    iconSvg = loadedIconSvg;
    iconBox = loadedIconBox;
  });
  ariaLabel = ariaLabel ? ariaLabel : iconName
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
{width}
{height}
{role}
aria-label={ariaLabel}
fill={color}
{...$$restProps}
class={$$props.class}
on:click
on:keydown
on:keyup
on:focus
on:blur
on:mouseenter
on:mouseleave
on:mouseover
on:mouseout
viewBox="0 0 24 24"
>
{@html iconSvg}
</svg>

<!--
@component
[Go to Document](https://svelte-heros-v2.vercel.app/)
## Props
@ name: string = '';
@ width = "24";
@ height = "24";
@ color = 'currentColor';
@ role = 'img';
@ ariaLabel: string = '';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->