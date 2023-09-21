<script>
  import { setContext } from 'svelte';
  import { Wifi, Star } from '$lib';
  const iconCtx = {
    size: '100', // Icon size in pixels
    color: '#00ff00', // Icon color in hexadecimal or CSS color name
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
</script>

<Wifi />
<Star />
