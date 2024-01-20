<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const sections = [
		{
			id: 'installation',
			title: 'Installation'
		},
		{
			id: 'usage',
			title: 'Usage'
		},
		{
			id: 'debounce',
			title: 'Debounce'
		},
		{
			id: 'multiple',
			title: 'Multiple'
		},
		{
			id: 'update-programmatically',
			title: 'Update Programmatically'
		},
		{
			id: 'store-api',
			title: 'Store API'
		}
	];

	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 1
	};

	let elements: Element[] = [];
	let activeElement: string = '';

	onMount(() => {
		elements = getElements(sections.map((section) => section.id));

		let observer = initializeObserver(elements, (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeElement = entry.target.id;
				}
			});
		});

		return () => {
			observer.disconnect();
		};
	});

	function initializeObserver(el: Element[], callback: IntersectionObserverCallback) {
		let observer = new IntersectionObserver(callback, options);

		if (browser) {
			el.forEach((element) => {
				observer.observe(element);
			});
		}

		return observer;
	}

	function getElements(ids: string[]) {
		let result: Element[] = [];
		if (browser) {
			ids.forEach((id) => {
				let element = document.querySelector(`#${id}`);
				if (element) {
					result.push(element);
				}
			});
		}

		return result;
	}
</script>

<div class="page-content">
	<h2 class="title title--tertiary">Page Content</h2>
	<ul class="list">
		{#each sections as section}
			<li>
				<a href={`#${section.id}`} class={activeElement === section.id ? 'active' : ''}
					>{section.title}</a
				>
			</li>
		{/each}
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
		text-decoration: none;
	}

	.active {
		color: var(--secondary);
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
