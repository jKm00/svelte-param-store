<div class="page-content">
	<h2 class="title title--tertiary">Page Content</h2>
	<ul class="list">
		<li><a href="#installation">Installation</a></li>
		<li><a href="#usage">Usage</a></li>
		<li><a href="#debounce">Debounce</a></li>
		<li><a href="#multiple">Multiple</a></li>
	</ul>
</div>

<style scoped>
	.page-content {
		position: sticky;
		top: 1rem;
	}

	.title {
		color: var(--foreground-muted);
		text-transform: uppercase;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		column-gap: 2rem;

		list-style: none;
		font-weight: bold;
	}

	a {
		color: var(--color-foreground);
		font-size: 0.9rem;
	}

	@media (min-width: 1200px) {
		.title {
			margin-bottom: 0.5rem;
		}

		.list {
			flex-direction: column;
			font-size: 0.9rem;
			row-gap: 0.5rem;
		}
	}
</style>
