<script lang="ts">
	let element: HTMLDivElement;

	let { mouseX, mouseY, hovering }: { mouseX: number; mouseY: number; hovering: boolean } =
		$props();

	$effect(() => {
		const x = mouseX - element.getBoundingClientRect().left;
		const y = mouseY - element.getBoundingClientRect().top;

		element.style.setProperty('--x', `${x}px`);
		element.style.setProperty('--y', `${y}px`);
	});

	$effect(() => {
		if (hovering) {
			element.classList.add('hovering');
		} else {
			element.classList.remove('hovering');
		}
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card" bind:this={element}>
	<div class="border"></div>
	<div class="content-wrapper">
		<div class="content">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 20px;

		backdrop-filter: blur(10px) saturate(180%) contrast(80%) brightness(120%);
		position: relative;

		> .content-wrapper {
			position: relative;
			background-color: rgba(23, 23, 23);
			border-radius: 19px;
			margin: 1px;
			height: calc(100% - 2px);
			width: calc(100% - 2px);
			z-index: 2;
			overflow: hidden;

			.content {
				padding: 1rem 2rem;
			}
		}

		&::before {
			z-index: 4;
		}
	}

	.card.hovering::before,
	.card.hovering > .border {
		opacity: 1;
	}

	.border,
	.card::before {
		content: '';
		border-radius: 1rem;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			800px circle at var(--x) var(--y),
			rgba(255, 255, 255, 0.05) 0%,
			transparent 40%
		);
		transition: opacity 500ms;
		opacity: 1;
	}

	.border {
		z-index: 1;
		background: radial-gradient(
			400px circle at var(--x) var(--y),
			rgba(255, 255, 255, 0.3) 0%,
			transparent 40%
		);
	}
</style>
