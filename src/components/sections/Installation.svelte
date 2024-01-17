<script lang="ts">
	import copy from 'copy-to-clipboard';

	let copying = false;

	function onCopy() {
		copying = true;
		copy('npm install svelte-param-store');
		setTimeout(() => {
			copying = false;
		}, 2000);
	}
</script>

<section class="section">
	<h2 class="title title--secondary">Installation</h2>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<code on:click={onCopy} class="code">
		(p)npm install svelte-param-store
		<button aria-label="Copy code" disabled={copying} class="copy">
			{#if copying}
				<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
					<path
						d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
					/>
				</svg>
			{:else}
				<svg
					viewBox="0 0 24 24"
					width="14"
					height="14"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
					shape-rendering="geometricPrecision"
				>
					<path
						d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"
					/>
				</svg>
			{/if}
		</button>
	</code>
</section>

<style scoped>
	.code {
		background-color: var(--muted);
		padding: 1rem;
		border-radius: var(--border-radius);

		position: relative;
	}
</style>
