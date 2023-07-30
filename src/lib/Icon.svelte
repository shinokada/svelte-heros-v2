<script>
  import icons from './icons.js'

  export let name;
  export let width = "24";
  export let height = "24";
  export let color = 'currentColor';
  export let role = 'img';
  export let ariaLabel = name;
  export let strokeWidth = "1.5";
  
  $: displayIcon = icons[name]
</script>
<svg
xmlns="http://www.w3.org/2000/svg"
{width}
{height}
{role}
aria-label={ariaLabel}
fill="none"
stroke={color}
stroke-width={strokeWidth}
stroke-linecap="round"
stroke-linejoin="round"
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
[Go to Document](https://shinokada.github.io/svelte-radix/)
## Props
@prop name;
@prop width = "24";
@prop height = "24";
@prop role = 'img';
@prop color = 'currentColor'
@prop ariaLabel='icon name'
@prop strokeWidth = "1.5";
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