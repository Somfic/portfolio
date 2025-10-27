<script>
	import '../styles/reset.scss';
</script>

<div class="scroll-container">
	<slot />
</div>

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		scroll-behavior: smooth;
	}
</style>
