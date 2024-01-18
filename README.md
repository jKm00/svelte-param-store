# Svelte Param Store

A store helping you synchronize your app state and the URL!

## Acknowledgments

The documentation for this package was heavily inspired by [Svelte Sonner](https://svelte-sonner.vercel.app/)

## Quick start

Install it:

```
npm i svelte-param-store
# or
yarn add svelte-param-store
# or
pnpm add svelte-param-store
```

Create a variable with:

```js
<script>
  import { useParamStore } from 'svelte-param-store' 
  
  let name = useParamStore('name')
</script>
```

Bind it to an input:

```js
<input type='text' bind:value={$name}>
```

## Documentation

You can find a more detailed documentation as well as a full demo at [Svelte Param Store](https://svelte-param-store.vercel.app/)
