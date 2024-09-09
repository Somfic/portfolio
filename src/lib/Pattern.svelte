<div class="halftone"></div>

<style lang="scss">
	.halftone {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;

		pointer-events: none;

		--color: white;

		--dotSize: 1px;
		--bgSize: 50px;
		--bgPosition: calc(var(--bgSize) / 2);
		--bgColor: rgba(255, 255, 255, 0.1);

		background-image: radial-gradient(
				circle at center,
				var(--bgColor) var(--dotSize),
				transparent 0
			),
			radial-gradient(circle at center, var(--bgColor) var(--dotSize), transparent 0);
		background-size: var(--bgSize) var(--bgSize);
		background-position:
			0 0,
			var(--bgPosition) var(--bgPosition);
	}
</style>
