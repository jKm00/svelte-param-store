<script lang="ts">
	import Header from '../components/sections/Header.svelte';
	import Installation from '../components/sections/Installation.svelte';
	import Usage from '../components/sections/Usage.svelte';
</script>

<main class="main">
	<Header />
	<Installation />
	<Usage />
</main>

<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		gap: 4rem;

		width: min(100%, 800px);
		margin: auto;

		padding: 1rem;
		padding-top: 20dvh;
	}
</style>
