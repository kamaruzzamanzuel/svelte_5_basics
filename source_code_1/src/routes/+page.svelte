<script lang="ts">
	import { fly } from 'svelte/transition';
	import Header from './Header.svelte';

	type TypeFormStepProps = {
		question: string;
		id: string;
		type: string;
	};

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

	// #region form state

	// let formState = $state({
	// 	name: '',
	// 	birthdate: '',
	// 	step: 0,
	// 	error: ''
	// });

	let formState = $state({
		answers: {
			name: '',
			birthdate: ''
		},
		step: 0,
		error: ''
	});
	// #endregion

	const QUESTIONS = [
		{
			question: "What's your name?",
			id: 'name',
			type: 'text'
		},
		{
			question: 'What is your birthdate?',
			id: 'birthdate',
			type: 'date'
		},
		{
			question: 'What is your favorite color?',
			id: 'color',
			type: 'color'
		}
	];

	function nextStep(id: string) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'please fill the form input';
		}
	}

	// will run on mount
	$effect(() => {
		console.log('on mount');

		return () => {
			// runs on unmount or destroyed
			// before effect runs again
			console.log('cleanup');
		};
	});

	// will run when statedName changes
	$effect(() => {
		console.log('formState', formState);

		return () => {
			// before effect runs again
			console.log('before reruns', formState);
		};
	});

	$inspect('formState', formState.step);
</script>

<main>
	<Header name="Scott" {age} {statedName} {derivedName}>
		<h2>Header content</h2>

		{#snippet secondChild(name: string, age: number)}
			<h3>Second Child for {name} aged {age}</h3>
		{/snippet}
	</Header>

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

	<!-- #region form -->
	<h1 class="title">Form</h1>

	{#if formState.step === QUESTIONS.length}
		<p>Form is completed</p>
	{:else}
		<p>Step : {formState.step + 1}</p>

		{#if formState.error}
			<p class="error">{formState.error}</p>
		{/if}

		<!-- {@render formStep({
		question: "What's your name?",
		id: 'name',
		type: 'text'
	})} -->

		<!-- {#each QUESTIONS as question, index (question.id)}
	{@render formStep(question)}
	{/each} -->

		{#each QUESTIONS as { id, question, type }, index (id)}
			{#if formState.step === index}
				<div
					in:fly={{ x: 200, duration: 500, delay: 100 }}
					out:fly={{ x: -200, duration: 500, delay: 100 }}
				>
					{@render formStep({ id, question, type })}
				</div>
				<!-- {:else}
		<p>Step {index + 1} is completed</p>		 -->
			{/if}

			<!-- {@render formStep({ id, question, type })} -->
		{/each}
	{/if}

	<!-- {#if formState.step === 0}
		<div>
			<label for="name">Name</label>
			<input type="text" bind:value={formState.name} />
		</div>

		<button
			onclick={() => {
				if (formState.name) {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Name is required';
				}
			}}>Next</button
		>
	{:else if formState.step === 1}
		<div>
			<label for="birthdate">Birthdate</label>
			<input type="date" bind:value={formState.birthdate} />
		</div>

		<button
			onclick={() => {
				if (formState.birthdate) {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Birthdate is required';
				}
			}}>Next</button
		>
	{/if} -->
	<!-- #endregion -->
</main>

{#snippet formStep({ id, question, type }: TypeFormStepProps)}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} bind:value={formState.answers[id]} />
		</div>

		<button onclick={() => nextStep(id)}>Next</button>
	</article>
{/snippet}

<style>
	:global(div) {
		color: green;
	}
	div {
		background-color: aquamarine;
	}
	.title {
		color: blue;
	}
	.error {
		color: red;
	}
</style>
