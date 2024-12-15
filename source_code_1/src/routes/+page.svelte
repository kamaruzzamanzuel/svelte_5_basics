<script>
	import Header from './Header.svelte';
	let age = 10;
	let statedName = $state('Scott');
</script>

<Header name="Scott" {age} {statedName} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
