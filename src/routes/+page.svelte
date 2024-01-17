<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore';

	export let data;

	$: ({ applications } = data);

	let title = useParamStore('title', { debounce: 500 });
	let company = useParamStore('company');
	let tools = useParamStore('tools', { multiple: true });
</script>

<section class="section">
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</section>

<!-- Demo -->
<section class="section">
	<h1>Demo</h1>
	<!-- Filters -->
	<div class="flex">
		<div>
			<label class="label">
				Title:
				<input type="text" placeholder="Application title" bind:value={$title} />
			</label>
		</div>
		<div>
			<label class="label">
				Company:
				<input type="text" placeholder="Search..." bind:value={$company} />
			</label>
		</div>
		<div class="rows">
			<p>Tools:</p>
			{#each data.tools as tool}
				<label>
					<input type="checkbox" bind:group={$tools} value={tool.toLowerCase()} />
					{tool}
				</label>
			{/each}
		</div>
	</div>
	<!-- Result -->
	<div class="rows gap">
		{#if applications}
			{#each applications as application}
				<div>
					<h2>{application.title}</h2>
					<p>{application.company}</p>
					<p>{application.tools.join(', ')}</p>
				</div>
			{/each}
		{/if}
	</div>
</section>

<style scoped>
	.section {
		margin-bottom: 2rem;
	}

	.flex {
		display: flex;
		gap: 1rem;
	}

	.label {
		display: flex;
		flex-direction: column;
	}

	.rows {
		display: flex;
		flex-direction: column;
	}

	.gap {
		gap: 1rem;
	}
</style>
