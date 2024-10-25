<script>
  import { AcademicCap } from 'svelte-heros-v2';
  let isSolid = false;
</script>

<AcademicCap size="50" withEvents onclick={() => (isSolid = !isSolid)} variation={isSolid ? 'solid' : 'outline'} />