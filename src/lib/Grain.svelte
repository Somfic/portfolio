<script lang="ts">
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;

	onMount(() => {
		document.addEventListener('resize', onResize);
		onResize();
	});

	function onResize() {
		width = window.innerWidth * 1;
		height = window.innerHeight * 1;
	}
</script>

<svg xmlns="http://www.w3.org/2000/svg">
	<filter id="noise" x="0" y="0">
		<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" />
		<feBlend mode="screen" />
	</filter>
	<rect {width} {height} filter="url(#noise)" />
</svg>

<style lang="scss">
	svg {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.1;
		pointer-events: none;
		width: 100vw;
		height: 100vh;
		overflow: hidden;

		z-index: 1;
		// animation: noise 1s infinite linear;
	}

	@keyframes noise {
		0%,
		100% {
			transform: translate(0, 0);
		}
		10% {
			transform: translate(-5%, -10%);
		}
		20% {
			transform: translate(-15%, 5%);
		}
		30% {
			transform: translate(7%, -25%);
		}
		40% {
			transform: translate(-5%, 25%);
		}
		50% {
			transform: translate(-15%, 10%);
		}
		60% {
			transform: translate(15%, 0%);
		}
		70% {
			transform: translate(0%, 15%);
		}
		80% {
			transform: translate(3%, 35%);
		}
		90% {
			transform: translate(-10%, 10%);
		}
	}
</style>
