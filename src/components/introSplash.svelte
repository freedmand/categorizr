<script>
	import UploadButton from './uploadButton.svelte';
</script>

<div class="splash">
	<h2>Upload a file to get started!</h2>
	<p>Categorizr helps to sort data into categories.</p>
	<p>
		Upload a .csv file with a header row and at least one column to get started. The first column
		will be the category to sort. Any subsequent columns are optional metadata that will be
		displayed in pills.
	</p>
	<div class="buttonholder">
		<UploadButton />
	</div>
</div>

<style>
	.splash {
		background: var(--white);
		box-shadow: var(--shadow);
		max-width: 600px;
		margin: 20px var(--app-margin);
		padding: 10px var(--app-margin);
		border-radius: var(--radius);
	}

	.buttonholder {
		margin: 20px 0 10px 0;
	}
</style>
