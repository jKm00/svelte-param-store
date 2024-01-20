<script lang="ts">
	import InlineCodeBlock from '../ui/InlineCodeBlock.svelte';
</script>

<section class="section" id="store-api">
	<h2 class="title title--secondary">Store API</h2>
	<!-- Attributes -->
	<div class="inner-section">
		<h3 class="title title--tertiary">Attributes</h3>
		<!-- Table -->
		<div class="table">
			<!-- Headers -->
			<div class="grid header">
				<p>Name</p>
				<p>Type</p>
				<p>Description</p>
				<p>Required</p>
			</div>
			<!-- Rows -->
			<div class="grid row">
				<p>Key</p>
				<p>string</p>
				<p>The name of the key. This is what will be displayed as the key in the URL.</p>
				<p>Yes</p>
			</div>
			<div class="grid row">
				<p>Options</p>
				<a href="#options-attributes">Object</a>
				<p>Explained in the table belove</p>
				<p>No</p>
			</div>
		</div>
	</div>
	<!-- Options attributes -->
	<div class="inner-section" id="options-attributes">
		<h3 class="title title--tertiary">Options Attributes</h3>
		<!-- Table -->
		<div class="table">
			<!-- Headers -->
			<div class="grid header">
				<p>Name</p>
				<p>Type</p>
				<p>Description</p>
				<p>Default</p>
			</div>
			<!-- Rows -->
			<div class="grid row">
				<p>Deboune</p>
				<p>number</p>
				<p>Number of milliseconds between keystrokes before the state and the URL updates.</p>
				<p>undefined</p>
			</div>
			<div class="grid row">
				<p>Multiple</p>
				<p>boolean</p>
				<p>Wether or not it should accept multiple values for the same key.</p>
				<p>false</p>
			</div>
		</div>
	</div>
	<!-- Functions exposed -->
	<div class="inner-section">
		<h3 class="title title--tertiary">Exposed function</h3>
		<p>
			<InlineCodeBlock>useParamStore</InlineCodeBlock> expose all the default store functions such as;
			<InlineCodeBlock>.subscribe()</InlineCodeBlock>, <InlineCodeBlock>.update()</InlineCodeBlock>,
			and <InlineCodeBlock>.set()</InlineCodeBlock>. These works the same as the default store
			functions. The table belove descripts additional functions exposed by <InlineCodeBlock
				>useParamStore</InlineCodeBlock
			>.
		</p>
		<!-- Table -->
		<div class="table">
			<!-- Headers -->
			<div class="grid grid--variation header">
				<p>Signature</p>
				<p>Description</p>
			</div>
			<!-- Rows -->
			<div class="grid grid--variation row">
				<p>.setImmediate(value: string)</p>
				<p>
					Sets the value of the store immediately, omitting the debounce timer if debounce is
					enabled.
				</p>
			</div>
		</div>
	</div>
</section>

<style scoped>
	.inner-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		margin-bottom: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 4.5rem 4.5rem 1fr 4.5rem;
		gap: 0.5rem;
		align-items: center;
	}

	.grid--variation {
		grid-template-columns: 12rem 1fr;
	}

	.table {
		font-size: 0.9rem;
	}

	.header {
		background-color: var(--muted);
		padding: 0.5rem;
		border-radius: var(--border-radius);
		font-weight: bold;
	}

	.row {
		padding: 0.5rem;
	}

	.row > p:not(:last-child) {
		border-right: 1px solid var(--muted);
	}
</style>
