<script>
  import { AcademicCap } from 'svelte-heros-v2';
  let isSolid = $state(false);
</script>

<AcademicCap size="30" color="#ff0033" withEvents onclick={() => (isSolid = !isSolid)} variation={isSolid ? 'solid' : 'outline'} />
