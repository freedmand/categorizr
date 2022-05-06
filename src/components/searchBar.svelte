<script lang="ts">
	import SearchIcon from '../assets/search.svg?component';
</script>

<div>
	<input placeholder="Filter data..." />
	<SearchIcon />
</div>

<style>
	div {
		position: relative;
		max-width: 382px;
		width: 100%;
		margin: 20px var(--app-margin);
		--height: 38px;
		height: var(--height);
	}

	input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: var(--height);
		line-height: var(--height);
		padding-left: 40px;
	}

	div :global(svg) {
		position: absolute;
		top: 8px;
		left: 10px;
	}
</style>
