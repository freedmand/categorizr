<script lang="ts">
	import FileFooter from '../components/fileFooter.svelte';
	import IntroSplash from '../components/introSplash.svelte';
	import SearchBar from '../components/searchBar.svelte';
	import { store } from '../store';

	let loading = true;
	$: data = store.data;
	$: dataEmpty = $data == null;
	// A hack to hide a flash at the beginning
	$: dataEmpty || (loading = false);
</script>

<header>
	<h1>Categorizr</h1>
</header>
{#if !loading}
	{#if dataEmpty}
		<!-- Display the intro splash -->
		<IntroSplash />
	{:else}
		<!-- Main interface -->
		<FileFooter />
		<SearchBar />
	{/if}
{/if}
