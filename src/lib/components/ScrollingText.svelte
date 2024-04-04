<script lang="ts">
	export let words: string[] = [];

	let elements: HTMLElement[] = [];

	let index = 0;

	let previousPreviousIndex = words.length - 2;
	let previousIndex = words.length - 1;
	let activeIndex = 0;
	let nextIndex = 1;
	let nextNextIndex = 2;

	export let fullCycle = false;

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
	}

	setInterval(advance, 2500);
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
			opacity 1s ease-in-out;
		display: flex;
		flex-direction: column;
		position: absolute;
		// italic
		font-style: italic;
	}

	$delta: 2em;

	.previousPrevious {
		opacity: 0;
		transform: translateY(-$delta * 2);
	}

	.previous {
		opacity: 0.25;
		transform: translateY(-$delta);
	}

	.active {
		opacity: 1;
		transform: translateY(0);
	}

	.next {
		opacity: 0.25;
		transform: translateY($delta);
	}

	.nextNext {
		opacity: 0;
		transform: translateY($delta * 2);
	}

	h1 {
		font-size: 48px;
		line-height: 60px;
		font-weight: 700;
		margin-bottom: 24px;
	}
</style>
