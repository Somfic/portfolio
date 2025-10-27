<script lang="ts">
	import { onMount } from 'svelte';
	let expanded = true;

	onMount(() => {
		document.onscroll = (e) => {
			expanded = window.scrollY < 50;
		};
	});
</script>

<div class="wrapper">
	<nav class:expanded>
		<h1 class="logo item">Lucas</h1>
		<div class="items">
			<a class="item" href="#">1</a>
			<a class="item" href="#">2</a>
			<a class="item" href="#">3</a>
		</div>
		<div class="action">
			<button class="item">Contact</button>
		</div>
	</nav>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		top: 0;
		left: 0;
		padding: 42px;
		width: 100vw;
		display: flex;
		justify-content: center;
		z-index: 200;
	}

	nav {
		display: flex;
		flex-grow: 1;
		max-width: 800px;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(38, 38, 38, 0.8);
		backdrop-filter: blur(10px);
		box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 1px inset;
		border-radius: 14px;
		padding: 16px 32px;
		transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);

		&.expanded {
			max-width: 1312px;
			background-color: rgba(38, 38, 38, 0.4);
		}

		.item {
			margin-bottom: -3px;
		}

		.logo {
			font-size: 18px;
			color: rgb(134, 134, 134);
			font-weight: 300;
			font-family: 'Monocraft', monospace;
		}
	}
</style>
