<script lang="ts">
	import { store } from '../store';

	$: data = store.data;

	function clear() {
		const shouldClear = confirm('Are you sure? You will lose any existing table data');
		if (shouldClear) {
			store.data.set(null);
		}
	}
</script>

{#if $data != null}
	<footer>
		<div class="filename">{data.value?.filename}</div>

		<button on:click={clear}>× Clear</button>
	</footer>
{/if}

<style>
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px var(--app-margin);
		background: var(--black);
		color: var(--white);
		box-sizing: border-box;
	}

	button {
		margin-left: 10px;
	}

	.filename {
		position: relative;
		font-weight: bold;
		position: relative;
		display: inline-block;
	}

	.filename::after {
		position: absolute;
		content: '';
		bottom: -5px;
		left: 0;
		right: 0;
		border: dotted 1px var(--blue);
	}
</style>
