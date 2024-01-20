<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore.js';
	import Footer from '../../components/sections/Footer.svelte';
	import Button from '../../components/ui/Button.svelte';

	const TOOLS = [
		'React',
		'TypeScript',
		'Sass',
		'Node.js',
		'Express',
		'MongoDB',
		'Vue.js',
		'Docker',
		'Python',
		'Unity',
		'C#',
		'Figma',
		'Selenium'
	];

	export let data;

	$: ({ applications } = data);

	let title = useParamStore('title', { debounce: 500 });
	let company = useParamStore('company', { debounce: 500 });
	let tools = useParamStore('tools', { multiple: true });

	function clearFilters() {
		title.set('');
		company.set('');
		tools.set([]);
	}
</script>

<!-- Demo -->
<main class="main">
	<header class="header">
		<h1 class="title title--secondary">Demo</h1>
		<p>
			This is a full demo showing how this library can be used. Open the dev tools and see how this
			package works with automatically fetching new data when the filters change. <a
				target="_blank"
				href="https://github.com/jKm00/svelte-param-store/tree/main/src/routes/demo"
				>View the demo source code here.</a
			>
		</p>
		<a class="icon-link home-page-link" href="/"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
				><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
				/></svg
			>Back to landing page</a
		>
	</header>
	<!-- Filters-->
	<aside class="filters">
		<h2 class="title title--secondary">Job Applications</h2>
		<label class="label">
			Title:
			<input type="text" bind:value={$title} placeholder="Enter job title..." class="input" />
		</label>
		<label class="label">
			Company:
			<input type="text" bind:value={$company} placeholder="Enter company name..." class="input" />
		</label>
		<div>
			<p class="tools-label">Tools / Languages:</p>
			<div class="tools">
				{#each TOOLS as tool}
					<label class="checkbox">
						<input type="checkbox" bind:group={$tools} value={tool} />
						{tool}
					</label>
				{/each}
			</div>
		</div>
		<Button on:click={clearFilters}>Clear all</Button>
	</aside>
	<!-- Results -->
	<section class="applications">
		<p class="counter"><span class="underline">Results:</span> {applications?.length}</p>
		{#if !applications || applications.length === 0}
			<p class="error">No results...</p>
		{:else}
			{#each applications as application}
				<article class="card">
					<h3>{application.title}</h3>
					<p>{application.company}</p>
					<p>{application.tools.join(', ')}</p>
				</article>
			{/each}
		{/if}
	</section>
</main>
<div class="footer">
	<Footer />
</div>

<style scoped>
	.underline {
		text-decoration: underline;
	}

	.main {
		display: grid;
		grid-template-columns: 15rem 1fr;

		width: min(100%, 800px);
		margin: auto;
		padding-top: 4rem;
		padding-inline: 1rem;
	}

	.header {
		grid-column: 1 / -1;
		margin-bottom: 3rem;
	}

	.header p,
	.header a {
		font-size: 0.9rem;
	}

	.header p {
		font-style: italic;
		margin-bottom: 1rem;
	}

	.header a {
		color: var(--accent);
		fill: var(--accent);
	}

	.icon-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.icon-link svg {
		width: 0.8rem;
		height: 0.8rem;
	}

	.home-page-link {
		margin-top: 2rem;
	}

	.filters {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		padding-right: 1rem;
		margin-right: 1rem;
		border-right: 1px solid var(--muted);
	}

	.tools {
		display: flex;
		flex-direction: column;
	}

	.applications {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.counter {
		font-size: 0.9rem;
	}

	.error {
		font-size: 0.9rem;
	}

	.card {
		display: flex;
		flex-direction: column;

		border-radius: var(--border-radius);
		border: 2px solid var(--accent);

		padding: 1rem;
	}

	.footer {
		width: min(100%, 800px);
		margin: auto;
		padding-inline: 1rem;
	}

	@media (max-width: 800px) {
		.main {
			grid-template-columns: 1fr;
		}

		.filters {
			padding-right: 0;
			margin-right: 0;
			margin-bottom: 2rem;
			border-right: none;
		}

		.tools {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.25rem 1rem;
		}
	}
</style>
