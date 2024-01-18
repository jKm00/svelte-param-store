<script lang="ts">
	export let note: string | undefined = undefined;
</script>

<div>
	<h3>Output:</h3>
	<div class="inner-wrapper">
		<slot />
	</div>
	{#if note}
		<p class="note">{note}</p>
	{/if}
</div>

<style scoped>
	.inner-wrapper {
		background-color: var(--muted);
		padding: 1rem;
		border-radius: var(--border-radius);
	}

	h3 {
		margin-bottom: 0.5rem;
		font-weight: normal;
		font-size: 1rem;
	}

	.note {
		font-style: italic;
		margin-top: 0.5rem;
	}
</style>
