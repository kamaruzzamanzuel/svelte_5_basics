<script lang="ts">
	import { createState, ScottState } from './state.svelte';
	import type { Snippet } from 'svelte';

	type TypeProps = {
		name: string;
		age: number;
		derivedName: string;
		statedName?: string;
		children: Snippet;
		secondChild: Snippet<[string, number]>;
	};

	let { name, age, statedName, derivedName, children, secondChild }: TypeProps = $props();

	const myState = createState();
	const myScottState = new ScottState();
</script>

<div>
	<h1>Hello from {name} with age {age} and stated name is {statedName?.replaceAll('t', 'x')}</h1>
	<p>full name is {derivedName}</p>

	{@render children()}

	{@render secondChild('scott', 10)}

	<button onclick={myState.up}>{myState.value}</button>
	<button onclick={() => myScottState.up()}>{myScottState.value}</button>
</div>

<style>
	h1 {
		color: red;
	}
</style>
