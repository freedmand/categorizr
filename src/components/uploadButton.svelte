<script lang="ts">
	import UploadIcon from '../assets/upload.svg?component';
	import { csvParseRows } from 'd3-dsv';
	import { store, type Data } from '../store';

	let file: HTMLInputElement;

	function upload() {
		file.click();
	}

	async function handleFiles() {
		const files = file.files;
		if (files?.length === 1) {
			// Handle file
			const fileContents = await files[0].text();
			const csvData = csvParseRows(fileContents);
			if (csvData.length > 1) {
				// Set data
				const data: Data = {
					filename: files[0].name,
					headers: csvData[0],
					rows: csvData.slice(1)
				};
				store.data.set(data);
			}
		}
	}
</script>

<button on:click={upload}
	><input bind:this={file} type="file" accept=".csv" on:change={handleFiles} /><UploadIcon /> Upload
	.csv</button
>

<style>
	button {
		position: relative;
	}

	input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		visibility: hidden;
	}

	button :global(svg) {
		margin-right: 5px;
		vertical-align: text-top;
	}
</style>
