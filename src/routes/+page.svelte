<script>
	import * as Icons from '$lib';
</script>

<div class="container">
	{#each Object.entries(Icons) as [name, component]}
		<div class="icon">
			<svelte:component this={component} />
			{name}
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 8px;
	}

	.icon {
		display: flex;
		gap: 4px;
		align-items: center;
	}
</style>