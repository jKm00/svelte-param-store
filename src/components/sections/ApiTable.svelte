<section class="section" id="store-api">
	<h2 class="title title--secondary">Store API</h2>
	<!-- Table -->
	<div class="table main-table">
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
			<a href="#options-api">Object</a>
			<p>Explained in the table belove</p>
			<p>No</p>
		</div>
	</div>
	<div id="options-api">
		<h3 class="title title--tertiary">Options API</h3>
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
				<p>Number of milliseconds between keystrokes before the state updated.</p>
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
</section>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: 4.5rem 4.5rem 1fr 4.5rem;
		gap: 0.5rem;
		align-items: center;
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

	.main-table {
		margin-bottom: 1rem;
	}

	.row > p:not(:last-child) {
		border-right: 1px solid var(--muted);
	}
</style>
