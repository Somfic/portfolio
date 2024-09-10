<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener('scroll', onScroll);
	});

	let element: HTMLDivElement;

	function onScroll() {
		const scroll = window.scrollY;
		element.style.setProperty('--bgPosition', `${-scroll / 3}px`);
	}
</script>

<div class="halftone" bind:this={element}></div>

<style lang="scss">
	.halftone {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		pointer-events: none;

		--color: white;

		--dotSize: 1px;
		--bgSize: 50px;
		--bgColor: rgba(255, 255, 255, 0.1);

		background-image: radial-gradient(
			circle at center,
			var(--bgColor) var(--dotSize),
			transparent 0
		);
		background-size: var(--bgSize) var(--bgSize);
		background-position: 0 var(--bgPosition);
	}
</style>
