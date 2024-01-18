<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/github.css';
	import copy from 'copy-to-clipboard';

	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('xml', xml);

	let codeElement: HTMLElement;

	function escapeHtml(value: string) {
		return value
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#x27;');
	}

	export let autodetect = true;
	export let language = '';
	export let ignoreIllegals = true;
	export let code: string;

	let copying = false;
	let highlightedCode: string;
	$: cannotDetectLanguage = !autodetect && !hljs.getLanguage(language);

	$: className = cannotDetectLanguage ? '' : `hljs ${language} ${$$props.class ?? ''}`;

	$: {
		if (cannotDetectLanguage) {
			highlightedCode = escapeHtml(code);
		}

		if (autodetect) {
			const result = hljs.highlightAuto(code);
			highlightedCode = result.value;
		} else {
			const result = hljs.highlight(code, {
				language,
				ignoreIllegals
			});
			highlightedCode = result.value;
		}
	}

	$: if (codeElement) {
		codeElement.innerHTML = highlightedCode;
	}

	function onCopy() {
		copying = true;
		copy(code);
		setTimeout(() => {
			copying = false;
		}, 2000);
	}
</script>

<div class={`wrapper ${className}`}>
	<button aria-label="Copy code" disabled={copying} class="copy" on:click={onCopy}>
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
	<code class="code" bind:this={codeElement}></code>
</div>

<style scoped>
	.wrapper {
		display: flex;
		position: relative;
	}

	.code {
		flex-grow: 1;
		background-color: var(--muted);
		border-radius: var(--border-radius);
		padding: 1rem;

		font-size: 0.9rem;

		white-space: pre-wrap;
	}

	.copy {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;

		background-color: var(--background);
		border: 1px solid var(--muted);
		padding: 0.5rem;
		border-radius: var(--border-radius);
	}
</style>
