<script lang="ts">
	import Header from './Header.svelte';
	let age = 10;

	let statedName = $state('Scott');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	let fisrtName = $state('Scott');
	let lastName = $state('Smith');

	let derivedName = $derived(`${fisrtName} ${lastName}`);

	const toggleStatus = () => {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	};

	const onclick = () => {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	};
</script>

<Header name="Scott" {age} {statedName} {derivedName} />

<input type="text" bind:value={statedName} />
<!-- <button on:click={toggleStatus}>{status}</button> -->
<button onclick={toggleStatus}>{status}</button>
<button {onclick}>{status}</button>

<!-- #region derived state -->
<label aria-label="First Name" for="firstName">First Name</label>
<input type="text" bind:value={fisrtName} />

<label aria-label="Last Name" for="lastName">Last Name</label>
<input type="text" bind:value={lastName} />

<p>{derivedName}</p>

<!-- #endregion -->

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
