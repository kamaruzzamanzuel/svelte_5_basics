<script lang="ts">
	type TypeProps = {
		name: string;
		age: number;
		derivedName: string;
		statedName?: string;
	};

	let { name, age, statedName, derivedName }: TypeProps = $props();
</script>

<h1>Hello from {name} with age {age} and stated name is {statedName?.replaceAll('t', 'x')}</h1>
<p>full name is {derivedName}</p>

<style>
	h1 {
		color: red;
	}
</style>
