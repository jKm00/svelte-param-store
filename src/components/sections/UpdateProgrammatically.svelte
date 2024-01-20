<script>
	import { useParamStore } from '$lib';
	import Button from '../ui/Button.svelte';
	import CodeBlock from '../ui/CodeBlock.svelte';
	import OutputBlock from '../ui/OutputBlock.svelte';
	import { updateProgrammatically } from './examples';

	let company = useParamStore('company');

	function clearFilter() {
		company.set('');
	}
</script>

<section class="section" id="update-programmatically">
	<h2 class="title title--secondary">Update Programmatically</h2>
	<p>You can update the value of the store programmatically as you would with any other store:</p>
	<CodeBlock code={updateProgrammatically} />
	<OutputBlock>
		<div class="flex">
			<label class="label grow">
				Company:
				<input class="input" type="text" bind:value={$company} placeholder="Enter company..." />
			</label>
			<Button on:click={clearFilter}>Clear</Button>
		</div>
	</OutputBlock>
</section>

<style scoped>
	.flex {
		display: flex;
		align-items: end;
		gap: 0.5rem;
	}

	.grow {
		flex-grow: 1;
	}
</style>
