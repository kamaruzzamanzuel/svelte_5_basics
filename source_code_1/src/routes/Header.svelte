<script lang="ts">
	type TypeProps = {
		name: string;
	};

	let { name }: TypeProps = $props();
</script>

<h1>Hello from {name}</h1>

<style>
	h1 {
		color: red;
	}
</style>
