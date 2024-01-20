<script lang="ts">
	export let href: string | undefined = undefined;
	export let variant: 'primary' | 'outline' = 'primary';
	export let blank: boolean = false;

	$: classes = variant === 'primary' ? 'btn' : 'btn btn--outline';
</script>

{#if href}
	<a {href} class={classes} target={blank ? '_blank' : '_self'}><slot /></a>
{:else}
	<button on:click class={classes}><slot /></button>
{/if}

<style scoped>
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		background: var(--accent);
		color: var(--accent-foreground);
		fill: var(--accent-foreground);

		padding: 0.5rem 1rem;
		border-radius: var(--border-radius);
		border: 2px solid var(--accent);

		font-size: 0.9rem;
		text-decoration: none;

		transition: background-color 150ms ease-in-out;
	}

	.btn:hover {
		background-color: var(--accent-hover);
	}

	.btn--outline {
		background: var(--background);
		color: var(--foreground);
		fill: var(--foreground);

		border-color: var(--muted);
	}

	.btn--outline:hover {
		background-color: var(--muted-hover);
	}
</style>
