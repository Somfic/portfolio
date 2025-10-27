<script lang="ts">
	import { onMount } from 'svelte';

	let width = 10000;
	let height = 10000;
</script>

<svg xmlns="http://www.w3.org/2000/svg" on:resize={onresize}>
	<filter id="noise" x="0" y="0">
		<feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" />
		<feBlend mode="screen" />
	</filter>
	<rect {width} {height} filter="url(#noise)" />
</svg>

<style lang="scss">
	svg {
		position: absolute;
		top: -5%;
		left: -5%;
		opacity: 0.1;
		pointer-events: none;
		width: 110%;
		height: 110%;
		overflow: hidden;

		z-index: 0;
		animation: noise 1s infinite linear;
	}

	@keyframes noise {
		0%,
		100% {
			transform: translate(0px, 0px);
		}
		10% {
			transform: translate(-1px, -2px);
		}
		20% {
			transform: translate(-3px, 1px);
		}
		30% {
			transform: translate(2px, -3px);
		}
		40% {
			transform: translate(-1px, 3px);
		}
		50% {
			transform: translate(-2px, 2px);
		}
		60% {
			transform: translate(3px, 0px);
		}
		70% {
			transform: translate(0px, 2px);
		}
		80% {
			transform: translate(1px, 3px);
		}
		90% {
			transform: translate(-2px, 1px);
		}
	}
</style>
