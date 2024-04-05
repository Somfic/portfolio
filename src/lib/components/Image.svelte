<script lang="ts">
	export let src: string;
	export let alt: string = '';
	export let size: number = 333;

	export let wiggle: boolean = false;

	$: sizePx = size + 'px';
</script>

<img class:wiggle height="100%" width={sizePx} {src} {alt} />

<style lang="scss">
	@import '../../styles/theme.scss';

	img {
		border-radius: 40px;
		border: 15px solid rgba(255, 255, 255, 0.05);

		object-fit: cover;
		max-width: 100%;
		box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);

		&.wiggle {
			animation: wiggle 10s ease-in-out infinite alternate;
		}
	}

	@keyframes wiggle {
		0% {
			transform: rotate(-2deg);
		}

		100% {
			transform: rotate(2deg);
		}
	}
</style>
