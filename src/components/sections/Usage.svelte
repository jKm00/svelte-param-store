<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore.js';
	import CodeBlock from '../ui/CodeBlock.svelte';
	import OutputBlock from '../ui/OutputBlock.svelte';
	import { usage } from './examples.js';

	let name = useParamStore('name');
</script>

<section class="section" id="usage">
	<h2 class="title title--secondary">Usage</h2>
	<p>Create a new store and then use it as any other state variable.</p>
	<CodeBlock code={usage} />
	<OutputBlock note="Notice the URL when you enter a value in the input!">
		<label class="label">
			Name:
			<input class="input" type="text" bind:value={$name} placeholder="Enter name..." />
		</label>
	</OutputBlock>
	<p>
		Since the URL is updated, the load function is re-executed with the new query params. This can
		then be used to fetch new data from an API. Take a look at the <a href="/demo">full demo</a> to see
		this in action.
	</p>
</section>

<style scoped>
	.label {
		font-size: 0.9rem;
	}
</style>
