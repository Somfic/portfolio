<script lang="ts">
	import Orb from './Orb.svelte';

	export let horizontal = false;
</script>

<div class="section-wrapper">
	<div class="section" class:horizontal>
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../../styles/theme.scss';

	.section-wrapper {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
	}

	.section {
		position: relative;
		display: flex;
		flex-direction: column;
		z-index: 10;
		flex-grow: 1;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: -0.16px;
		max-width: 800px;

		&.horizontal {
			flex-direction: row;
			justify-content: space-between;
			gap: 40px;
		}

		.split {
			display: flex;
			gap: 40px;
		}

		@keyframes wiggle {
			0% {
				transform: rotate(-2deg);
			}

			100% {
				transform: rotate(2deg);
			}
		}
	}
</style>
