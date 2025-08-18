<script>
  import { AcademicCap } from 'svelte-heros-v2';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AcademicCap({ target: document.body, props });
  });
</script>
