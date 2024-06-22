<script lang="ts">
	import { inview } from 'svelte-inview';

	export let horizontal = false;

	export let swooshbottom = false;
	export let fade = false;

	let hidden = true;
</script>

<div class="section-wrapper">
	<div
		class="section"
		class:horizontal
		class:swooshbottom
		class:fade
		use:inview={{ threshold: 0 }}
		on:inview_enter={() => (hidden = false)}
		on:inview_leave={() => (hidden = true)}
		class:visible={!hidden}
	>
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../../styles/theme.scss';

	.section-wrapper {
		position: relative;
		min-height: 100vh;
		min-width: 100vw;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		padding-top: 80px;
		padding-bottom: 80px;
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
		max-width: 900px;

		&.horizontal {
			flex-direction: row;
			justify-content: space-between;
			gap: 40px;
		}

		.split {
			display: flex;
			gap: 40px;
		}
	}

	.section-wrapper,
	.section {
		transition:
			opacity 1s ease-out,
			transform 1s ease-out;

		&.visible {
			opacity: 1;
			transform: none;
		}
	}

	.swooshbottom {
		transform: translateY(100px);
	}

	.fade {
		opacity: 0;
	}
</style>
