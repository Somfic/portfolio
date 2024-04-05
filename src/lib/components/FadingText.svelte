<script lang="ts">
	import { onMount } from 'svelte';

	export let words: string[] = [];

	let currentIndex = 0;
	let interval: NodeJS.Timeout;

	let elements: HTMLElement[] = [];

	function fadeOutCurrentElement() {
		elements[currentIndex].style.opacity = '0';
	}

	function fadeInNextElement() {
		currentIndex = (currentIndex + 1) % elements.length;
		elements[currentIndex].style.opacity = '1';
	}

	function startAnimation() {
		interval = setInterval(() => {
			fadeOutCurrentElement();
			fadeInNextElement();
		}, 2000);
	}

	onMount(() => {
		startAnimation();
		fadeInNextElement();
	});
</script>

{#each words as word, i}
	<span class="word-wrapper">
		<span class="scrolling-text" bind:this={elements[i]}>
			{word}
		</span>
	</span>
{/each}

<style lang="scss">
	.word-wrapper {
		display: inline-block;
		overflow: hidden;
		line-height: 1em;
		display: flex;
		align-items: center;
	}

	.scrolling-text {
		opacity: 0;
		transition: opacity 0.5s;
		position: absolute;
		line-height: 1em;
	}
</style>
