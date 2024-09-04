<script lang="ts">
	import Item from './grid/Item.svelte';
	import Me from './grid/items/Me.svelte';

	let mouseX = 0;
	let mouseY = 0;
	let hovering = true;

	function onMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}
</script>

<main onmousemove={onMouseMove}>
	<Item {mouseX} {mouseY} {hovering}><Me /></Item>
	<Item {mouseX} {mouseY} {hovering}><Me /></Item>
	<Item {mouseX} {mouseY} {hovering}><Me /></Item>
	<Item {mouseX} {mouseY} {hovering}><Me /></Item>
	<Item {mouseX} {mouseY} {hovering}><Me /></Item>
</main>

<style lang="scss">
	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: sans-serif;
		display: flex;
		flex-grow: 1;
		width: 100%;
		height: 100%;
	}

	main {
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
		gap: 8px;
		background-color: black;
		color: white;
	}
</style>
