<div class="godrays"></div>

<style lang="scss">
	.godrays {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		pointer-events: none;

		--stripes: repeating-linear-gradient(
			100deg,
			#fff 0%,
			#fff 7%,
			transparent 10%,
			transparent 12%,
			#fff 16%
		);
		--stripesDark: repeating-linear-gradient(
			100deg,
			#000 0%,
			#000 7%,
			transparent 10%,
			transparent 12%,
			#000 16%
		);
		--rainbow: repeating-linear-gradient(
			100deg,
			#60a5fa 10%,
			#e879f9 15%,
			#60a5fa 20%,
			#5eead4 25%,
			#60a5fa 30%
		);
		background-image: var(--stripesDark), var(--rainbow);
		background-size: 300%, 200%;
		background-position:
			50% 50%,
			50% 50%;

		filter: blur(10px) invert(100%) saturate(110%);

		mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);

		pointer-events: none;

		opacity: 0.3;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-image: var(--stripes), var(--rainbow);
			background-size: 200%, 100%;
			animation: jumbo 80s linear infinite;
			background-attachment: fixed;
			mix-blend-mode: difference;
		}
	}

	@keyframes jumbo {
		from {
			background-position:
				50% 50%,
				50% 50%;
		}
		to {
			background-position:
				350% 50%,
				350% 50%;
		}
	}
</style>
