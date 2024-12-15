<script lang="ts">
	type TypeProps = {
		name: string;
		age: number;
		statedName?: string;
	};

	let { name, age, statedName }: TypeProps = $props();
</script>

<h1>Hello from {name} with age {age} and stated name is {statedName}</h1>

<style>
	h1 {
		color: red;
	}
</style>
