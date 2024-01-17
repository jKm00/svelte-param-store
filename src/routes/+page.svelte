<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore';

	let name = useParamStore<string>('name', '', { debounce: 500 });
	let search = useParamStore<string>('search', '');
	let fruits = useParamStore<string>('fruits', []);

	$: console.log($fruits);
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Demo -->
<section>
	<h1>Demo</h1>
	<div class="flex">
		<div>
			<input type="text" placeholder="File name..." bind:value={$name} />
			<p>{$name}</p>
		</div>
		<div>
			<input type="text" placeholder="Search..." bind:value={$search} />
			<p>{$search}</p>
		</div>
		<div>
			<label>
				<input type="checkbox" bind:group={$fruits} value="apples" />
				Apples
			</label>
			<label>
				<input type="checkbox" bind:group={$fruits} value="oranges" />
				Oranges
			</label>
			<label>
				<input type="checkbox" bind:group={$fruits} value="bananas" />
				Bananas
			</label>
		</div>
	</div>
</section>

<style scoped>
	.flex {
		display: flex;
		gap: 1rem;
	}
</style>
