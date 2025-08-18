<script>
  import { setContext } from 'svelte';
  import { AcademicCap } from 'svelte-heros-v2';
  const iconCtx = {
    size: '50'
  };
  setContext('iconCtx', iconCtx);
</script>

<AcademicCap color="#ff4488" />
