<script lang="ts">
	import Godrays from '$lib/Godrays.svelte';
	import Grain from '$lib/Grain.svelte';
	import BackgroundLines from '$lib/BackgroundLines.svelte';
</script>

<div class="frame">
	<article>
		<div id="opener">
			<main>
				<h1>Hi, I'm Lucas,</h1>
				<h2>a software engineer</h2>
			</main>
			<footer>
				<p>Scroll to explore</p>
			</footer>
		</div>
		<BackgroundLines />
		<Godrays />
		<Grain />
	</article>
</div>

<style lang="scss">
	@font-face {
		font-family: 'Times Now Semi Light';
		src: url('/fonts/times-now-semi-light.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(head) {
		display: none;
	}

	:global(html body) {
		background-color: black;
		color: rgb(254, 254, 255);
		font-family: 'Times Now Semi Light', serif;
		letter-spacing: -0.05em;
		font-weight: 400;
	}

	:global(h1, h2, p) {
		display: block;
	}

	.frame {
		min-height: 100vh;
		display: flex;
		justify-content: center;

		article {
			display: flex;
			margin: 32px;
			flex-grow: 1;
			max-width: 1536px;
			border-radius: 16px;
			position: relative;
			overflow: hidden;
		}
	}

	#opener {
		opacity: 0.9;
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 100;

		main {
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 0;

			h1 {
				font-size: 48px;
				text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
			}

			h2 {
				font-size: 24px;
				text-shadow: 0 0 15px rgba(255, 255, 255, 1);
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
			padding: 16px;
		}
	}
</style>
