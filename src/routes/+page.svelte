<script lang="ts">
	import Debounce from '../components/sections/Debounce.svelte';
	import Header from '../components/sections/Header.svelte';
	import Installation from '../components/sections/Installation.svelte';
	import Usage from '../components/sections/Usage.svelte';
	import Multiple from '../components/sections/Multiple.svelte';
	import PageContent from '../components/sections/PageContent.svelte';
	import ApiTable from '../components/sections/ApiTable.svelte';
	import Footer from '../components/sections/Footer.svelte';
	import UpdateProgrammatically from '../components/sections/UpdateProgrammatically.svelte';
</script>

<main class="main">
	<div class="header">
		<Header />
	</div>
	<div class="page-content">
		<PageContent />
	</div>
	<div class="installation">
		<Installation />
	</div>
	<div class="usage">
		<Usage />
	</div>
	<div class="debounce">
		<Debounce />
	</div>
	<div class="multiple">
		<Multiple />
	</div>
	<div class="update-programmatically">
		<UpdateProgrammatically />
	</div>
	<div class="api-table">
		<ApiTable />
	</div>
	<div class="footer">
		<Footer />
	</div>
</main>

<style scoped>
	.main {
		display: grid;
		grid-template-columns: minmax(1rem, 1fr) minmax(auto, 800px) minmax(1rem, 2fr);
		grid-template-areas:
			'. header .'
			'. page-content .'
			'. installation .'
			'. usage .'
			'. debounce .'
			'. multiple .'
			'. update-programmatically .'
			'. api-table .'
			'. footer .';
		row-gap: 4rem;

		margin-top: 20dvh;
	}

	.header {
		grid-area: header;
	}

	.page-content {
		grid-area: page-content;
	}

	.installation {
		grid-area: installation;
	}

	.usage {
		grid-area: usage;
	}

	.debounce {
		grid-area: debounce;
	}

	.multiple {
		grid-area: multiple;
	}

	.update-programmatically {
		grid-area: update-programmatically;
	}

	.api-table {
		grid-area: api-table;
	}

	.footer {
		grid-area: footer;
	}

	@media (min-width: 1200px) {
		.main {
			grid-template-areas:
				'. header page-content'
				'. installation page-content'
				'. usage page-content'
				'. debounce page-content'
				'. multiple page-content'
				'. update-programmatically page-content'
				'. api-table page-content'
				'. footer .';
		}

		.page-content {
			border-left: 1px solid var(--muted);
			padding-left: 1rem;
			margin-left: 1rem;
		}
	}
</style>
