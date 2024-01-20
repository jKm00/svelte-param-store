export const usage = `<script lang="ts">
  import { useParamStore } from 'svelte-param-store';

  let name = useParamStore('name');
</script>

<label>
  Name:
  <input type="text" bind:value={$name} />
</label>`;

export const debounce = `<script lang="ts">
  import { useParamStore } from 'svelte-param-store';

  let title = useParamStore('title', { debounce: 500 });
</script>

<label>
  Title:
  <input type="text" bind:value={$title} />
</label>`;

export const multiple = `<script lang="ts">
  import { useParamStore } from 'svelte-param-store';

  let fruits = useParamStore('fruits', { multiple: true });
</script>

<label>
  <input type="checkbox" bind:group={$fruits} value="apple" />
  Apple
</label>
<label>
  <input type="checkbox" bind:group={$fruits} value="orange" />
  Orange
</label>
<label>
  <input type="checkbox" bind:group={$fruits} value="banan" />
  Banan
</label>`;

export const updateProgrammatically = `<script lang="ts">
  import { useParamStore } from 'svelte-param-store';
  
  let company = useParamStore('company');
  
  function clearFilter() {
    $company = '';
    // or
    // company.set('');
    // or, if you want to omit the debounce if it is enabled
    // company.setImmediate('')
  }
</script>

<label>
  Company:
  <input type="text" bind:value={$company} />
</label>
<button on:click={clearFilter}>Clear</button>`;
