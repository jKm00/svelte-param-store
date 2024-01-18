<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore.js';
	import CodeBlock from '../ui/CodeBlock.svelte';
	import OutputBlock from '../ui/OutputBlock.svelte';
	import { debounce } from './examples.js';

	let title = useParamStore('title', { debounce: 500 });
</script>

<secion class="section" id="debounce">
	<h2 class="title title--secondary">Debounce</h2>
	<p>
		Often you dont want to execute the load function on every keystroke. Setting a debounce value
		will delay the execution of the load function until the user has stopped typing for the given
		amount of time.
	</p>
	<CodeBlock code={debounce} />
	<OutputBlock note="The output looks the same, but pay attention to when the URL updates!">
		<label class="label">
			Title:
			<input class="input" type="text" bind:value={$title} placeholder="Enter a title..." />
		</label>
	</OutputBlock>
</secion>

<style scoped>
	.label {
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}
</style>
