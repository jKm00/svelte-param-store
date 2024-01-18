<script lang="ts">
	import { useParamStore } from '$lib/composables/paramStore.js';
	import CodeBlock from '../ui/CodeBlock.svelte';
	import OutputBlock from '../ui/OutputBlock.svelte';
	import { multiple } from './examples.js';

	let fruits = useParamStore('fruits', { multiple: true });
</script>

<section class="section" id="multiple">
	<h2 class="title title--secondary">Multiple</h2>
	<p>
		Sometimes you want to allow for multiple values for the same key. For example when working with
		checkboxes:
	</p>
	<CodeBlock code={multiple} />
	<OutputBlock>
		<div class="wrapper">
			<label class="label label--checkbox">
				<input type="checkbox" bind:group={$fruits} value="apple" />
				Apple
			</label>
			<label class="label label--checkbox">
				<input type="checkbox" bind:group={$fruits} value="orange" />
				Orange
			</label>
			<label class="label label--checkbox">
				<input type="checkbox" bind:group={$fruits} value="banana" />
				Banana
			</label>
		</div>
	</OutputBlock>
</section>

<style scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
