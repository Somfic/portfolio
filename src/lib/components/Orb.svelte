<script lang="ts">
	import { inview } from 'svelte-inview';

	let colors = ['#663a6d', '#24425e', '#18665c', '#345a7f'];

	export let x: number;
	export let y: number;
	export let width: number;
	export let height: number;

	let hidden = true;

	$: xPx = x + '%';
	$: yPx = y + '%';
	$: widthPx = width + 'px';
	$: heightPx = height + 'px';
</script>

<div
	class="orb-wrapper"
	style:--top={yPx}
	style:left={xPx}
	style:--height={heightPx}
	use:inview={{ threshold: 0.5 }}
	on:inview_enter={() => (hidden = false)}
	on:inview_leave={() => (hidden = true)}
	class:visible={!hidden}
>
	<div
		class="orb"
		style:--color1={colors[0]}
		style:--color2={colors[1]}
		style:--color3={colors[2]}
		style:--color4={colors[3]}
		style:width={widthPx}
		style:height={heightPx}
	/>
</div>

<style lang="scss">
	.orb-wrapper {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		top: calc(var(--top, 0) - var(--height) / 2);

		opacity: 0;
		transition: opacity 1s ease-in-out;
		transition-delay: 0.5s;

		pointer-events: none;

		&.visible {
			opacity: 1;
		}
	}

	.orb {
		z-index: -1;
		border-radius: 50%;
		background: conic-gradient(
			var(--color1) 0% 25%,
			var(--color2) 25% 50%,
			var(--color3) 50% 75%,
			var(--color4) 75% 100%
		);
		opacity: 0.5;

		// Slowly pulsate and rotate the orb
		animation:
			pulse 1s ease infinite alternate,
			rotate 60s linear infinite;

		filter: blur(106px) saturate(0.8) contrast(1.2);
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(100);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
