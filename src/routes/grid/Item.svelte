<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;

	let mouseX = 0;
	let mouseY = 0;

	export let padding = 30;
	export let width: number;
	export let width_m: number = width;
	export let width_s: number = 12;

	export let height: number;
	export let height_m: number = height;

	let rotate = (Math.random() - 0.5) * 2;

	onMount(() => {
		window.addEventListener('mousemove', onMouseMove);

		element.style.setProperty('--paddingX', `${padding * 1.15}px`);
		element.style.setProperty('--paddingY', `${padding}px`);

		element.style.setProperty('--x', `-1000px`);
		element.style.setProperty('--y', `-1000px`);

		element.style.setProperty('--width', `${width}`);
		element.style.setProperty('--width-m', `${width_m}`);
		element.style.setProperty('--width-s', `${width_s}`);

		element.style.setProperty('--height', `${height}`);
		element.style.setProperty('--height-m', `${height_m}`);

		element.style.setProperty('--rotate', `${rotate}deg`);
	});

	function onMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;

		const x = mouseX - element.getBoundingClientRect().left;
		const y = mouseY - element.getBoundingClientRect().top;

		element.style.setProperty('--x', `${x}px`);
		element.style.setProperty('--y', `${y}px`);
	}
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
		border-radius: 21px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
		transition: all 200ms ease;

		//backdrop-filter: blur(10px) saturate(180%) contrast(80%) brightness(120%);
		position: relative;

		grid-column: span var(--width, 1);
		grid-row: span var(--height, 1);

		// On tablet
		@media (max-width: 900px) {
			grid-column: span var(--width-m, 1);
			grid-row: span var(--height-m, 1);
		}

		// On mobile
		@media (max-width: 600px) {
			grid-column: span var(--width-s, 1);
		}

		&:hover {
			transform: scale(1.005);

			> .content-wrapper {
				background-color: rgb(22, 22, 22);
			}
		}

		> .content-wrapper {
			display: flex;
			position: relative;
			// background-image: conic-gradient(
			// 	from -45deg at 50% 150%,
			// 	transparent 0deg,
			// 	rgb(16, 7, 30) 15deg,
			// 	transparent 30deg,
			// 	rgb(16, 7, 30) 45deg,
			// 	transparent 60deg,
			// 	rgb(16, 7, 30) 75deg,
			// 	transparent 90deg
			// );
			// background: linear-gradient(to right, blue, transparent),
			// 	url(https://grainy-gradients.vercel.app/noise.svg);
			background-color: rgba(12, 12, 12, 0.6);
			border-radius: 19px;
			margin: 1px;
			height: calc(100% - 2px);
			max-width: calc(100% - 2px);
			z-index: 2;
			overflow: hidden;
			transition: all 500ms;

			.content {
				display: flex;
				flex-grow: 1;
				padding: var(--paddingX) var(--paddingY);
			}
		}

		&::before {
			z-index: 4;
		}
	}

	.border,
	.card::before {
		content: '';
		border-radius: 1rem;
		position: absolute;
		pointer-events: none;
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
