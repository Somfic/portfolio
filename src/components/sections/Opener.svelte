<script lang="ts">
	import Godrays from '$components/effects/Godrays.svelte';
	import Grain from '$components/effects/Grain.svelte';
	import Lines from '$components/effects/Lines.svelte';
</script>

<div class="wrapper">
	<article>
		<div class="inner">
			<main>
				<h1>Hi, I'm Lucas,</h1>
				<h2>a software engineer</h2>
			</main>
			<footer>
				<p>Scroll to explore</p>
			</footer>
		</div>
		<Lines />
		<Godrays />
		<Grain />
	</article>
</div>

<style lang="scss">
	.wrapper {
		height: 100vh;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 0;
		pointer-events: none;
		perspective: 1000px;
	}

	article {
		display: flex;
		margin: 32px;
		flex-grow: 1;
		max-width: 1536px;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		transition: transform 0.3s ease-out;
		pointer-events: none;
	}

	:global(body.scrolled) .wrapper article {
		transform: scale(0.95) rotateX(5deg);
	}

	.inner {
		opacity: 0.9;
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 100;
	}

	main {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0;

		h1 {
			font-size: 48px;
			text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
			line-height: 48px;
		}

		h2 {
			font-size: 24px;
			text-shadow: 0 0 15px rgba(255, 255, 255, 1);
			line-height: 24px;
		}

		h1,
		h2 {
			font-weight: 400;
			margin: 0;
		}
	}

	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		width: 100%;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		padding: 24px;
		opacity: 0.5;
	}
</style>
