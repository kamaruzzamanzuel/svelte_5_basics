<script lang="ts">
	import Header from './Header.svelte';
	let age = 10;
	let statedName = $state('Scott');

	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	const toggleStatus = () => {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	};

	const onclick = () => {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	};
</script>

<Header name="Scott" {age} {statedName} />

<input type="text" bind:value={statedName} />
<!-- <button on:click={toggleStatus}>{status}</button> -->
<button onclick={toggleStatus}>{status}</button>
<button {onclick}>{status}</button>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
