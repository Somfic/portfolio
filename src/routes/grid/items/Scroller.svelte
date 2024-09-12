<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	let clonedElement: HTMLDivElement;

	onMount(() => {
		// Randomize the order of the elements
		const elements = Array.from(element.children);
		elements.sort(() => Math.random() - 0.5);
		element.innerHTML = '';

		for (const el of elements) {
			element.appendChild(el);
			clonedElement.appendChild(el.cloneNode(true));
		}
	});
</script>

<div class="scroller">
	<div class="content" bind:this={element}>
		<slot />
		<div class="copied" bind:this={clonedElement}></div>
	</div>
</div>

<style lang="scss">
	.scroller {
		display: flex;
		max-width: 100%;
		flex-grow: 1;
		position: relative;
		mask-image: linear-gradient(to right, transparent, black 25%, black 75%, transparent);
	}

	.copied {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 100%;
		z-index: 10;
	}

	.content {
		display: flex;
		position: absolute;
		align-items: center;
		height: 100%;
		animation: 30s slide infinite linear;
	}
	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
