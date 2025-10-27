<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import Opener from '$components/sections/Opener.svelte';
	import Placeholder from '$components/sections/Placeholder.svelte';
</script>

<div class="page-wrapper">
	<Navbar />
	<div class="spacer"></div>
	<div class="content">
		<Placeholder />
		<Placeholder />
		<Placeholder />
	</div>
</div>

<style>
	.page-wrapper {
		min-height: 400vh;
	}

	.spacer {
		height: 100vh;
		pointer-events: none;
		position: relative;
	}

	.spacer::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 300px;
		background: linear-gradient(to bottom, transparent, black);
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease-out;
	}

	:global(body.scrolled) .spacer::after {
		opacity: 1;
	}

	.content {
		position: relative;
		z-index: 1;
		background: black;
	}
</style>
