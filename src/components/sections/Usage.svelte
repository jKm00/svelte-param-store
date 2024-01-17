<script lang="ts">
	import CodeBlock from '../ui/CodeBlock.svelte';
	import { usage } from './examples.js';
</script>

<section class="section">
	<h2 class="title title--secondary">Usage</h2>
	<p>Create a new store and then use it as any other state variable.</p>
	<CodeBlock code={usage} />
	<p>
		When the value of the input changes, the store and the URL will reflect this changes. Any load
		function that is depended on the url will re-execute!
	</p>
	<p>This is the URL after the user types in the name Joakim:</p>
	<CodeBlock autodetect={false} language="xml" code={'https://example.com/?name=Joakim'} />
</section>
