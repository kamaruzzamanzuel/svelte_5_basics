<script lang="ts">
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
</script>

<div>
	<h1>Hello from {name} with age {age} and stated name is {statedName?.replaceAll('t', 'x')}</h1>
	<p>full name is {derivedName}</p>

	{@render children()}

	{@render secondChild("scott", 10)}
</div>

<style>
	h1 {
		color: red;
	}
</style>
