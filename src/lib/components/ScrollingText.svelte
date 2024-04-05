<script lang="ts">
	import { onMount } from 'svelte';

	export let words: string[] = [];

	let elements: HTMLElement[] = [];

	let index = 0;

	let previousPreviousIndex = words.length - 2;
	let previousIndex = words.length - 1;
	let activeIndex = 0;
	let nextIndex = 1;
	let nextNextIndex = 2;

	export let fullCycle = false;

	onMount(() => {
		setTimeout(() => {
			advance();
		}, 3500);
	});

	function advance() {
		index++;
		if (index >= words.length) {
			index = 0;
			fullCycle = true;
		}

		previousPreviousIndex = index - 2 < 0 ? words.length + (index - 2) : index - 2;
		previousIndex = index - 1 < 0 ? words.length + (index - 1) : index - 1;
		activeIndex = index;
		nextIndex = (index + 1) % words.length;
		nextNextIndex = (index + 2) % words.length;

		setTimeout(
			() => {
				advance();
			},
			activeIndex == 0 ? 3500 : 1750
		);
	}
</script>

<h1>
	{#each words as word, i}
		<span
			bind:this={elements[i]}
			class="scrolling-text"
			class:previousPrevious={previousPreviousIndex == i}
			class:previous={previousIndex == i}
			class:active={activeIndex == i}
			class:next={nextIndex == i}
			class:nextNext={nextNextIndex == i}
			class:important={activeIndex == 0}
		>
			{word}
		</span>
	{/each}
</h1>

<style lang="scss">
	@import '../../styles/theme.scss';

	.scrolling-text {
		opacity: 0;
		transition:
			transform 1s ease-in-out,
			opacity 1s ease-in-out,
			filter 1s ease-in-out;
		display: flex;
		flex-direction: column;
		position: absolute;
		// italic
		font-style: italic;
	}

	$delta: 2em;

	.previousPrevious {
		transform: translateY(-$delta * 2);
	}

	.previous {
		transform: translateY(-$delta);
	}

	.active {
		transform: translateY(0);
	}

	.next {
		transform: translateY($delta);
	}

	.nextNext {
		transform: translateY($delta * 2);
	}

	.previousPrevious,
	.nextNext {
		opacity: 0;
	}

	.previous,
	.next {
		opacity: 0.25;
	}

	.active {
		opacity: 1;
	}

	.important.active {
		filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.5))
			drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
	}

	h1 {
		font-size: 48px;
		line-height: 60px;
		font-weight: 700;
		margin-bottom: 24px;
	}
</style>
