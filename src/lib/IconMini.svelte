<script>
  import icons from './icons.js'

  export let name;
  export let width = "20";
  export let height = "20";
  export let color = 'currentColor';
  export let role = 'img';
  export let ariaLabel = name;
  
  $: displayIcon = icons[name]
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
viewBox="0 0 {displayIcon.box} {displayIcon.box}"
>
  {@html displayIcon.svg}
</svg>

<!--
@component
[Go to Document](https://svelte-heros-v2.vercel.app/)
## Props
@prop name;
@prop width = "20";
@prop height = "20";
@prop role = 'img';
@prop color = 'currentColor'
@prop ariaLabel='icon name'
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