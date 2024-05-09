<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    strokeWidth: '2',
    size: '100', // Icon size in pixels
    color: '#ff4488', // Icon color in hexadecimal or CSS color name
    role: 'svg icon image' // Accessible role for the icon
  };
  setContext('iconCtx', iconCtx);
</script>