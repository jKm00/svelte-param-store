export const usage = `<script lang="ts">
  import { useParamStore } from 'svelte-param-store';

  let name = useParamStore('name');
</script>

<label>
  Name:
  <input type="text" bind:value={$name} />
</label>`;

export const test = `<script>
  import { Toaster, toast } from 'svelte-sonner'
</script>

<!-- ... -->

<Toaster />
<button on:click={() => toast('My first toast')}>
  Give me a toast
</button>`;
