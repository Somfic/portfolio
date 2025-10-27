<div class="godrays"></div>

<style lang="scss">
	.godrays {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		z-index: 0;

		--stripes1: repeating-linear-gradient(
			92deg,
			#ff0011 0%,
			#ff1122 2%,
			transparent 3%,
			transparent 14%,
			#ff0011 18%,
			transparent 20%
		);
		--stripes2: repeating-linear-gradient(
			108deg,
			transparent 0%,
			#ff0011 5%,
			transparent 7%,
			transparent 16%,
			#ff1122 20%,
			transparent 22%
		);
		--stripesDark: repeating-linear-gradient(
			100deg,
			#550000 0%,
			transparent 2%,
			transparent 18%,
			#770011 22%,
			transparent 24%
		);
		--rainbow: repeating-linear-gradient(
			100deg,
			#cc0000 0%,
			#ff0011 10%,
			#ff1122 20%,
			#ff2233 30%,
			#ff1133 40%,
			#ee0022 50%,
			#dd0011 60%
		);
		background-image: var(--stripesDark), var(--rainbow);
		background-size: 250%, 180%;
		background-position:
			50% 50%,
			50% 50%;

		filter: blur(10px) saturate(180%) brightness(110%);

		mask-image: radial-gradient(
			ellipse at 100% 0%,
			black 45%,
			rgba(0, 0, 0, 0.7) 70%,
			transparent 85%
		);

		pointer-events: none;

		opacity: 0.75;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-image: var(--stripes2);
			background-size: 280%, 160%;
			animation: drift 25s ease-in-out infinite reverse;
			mix-blend-mode: screen;
			opacity: 0.4;
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-image: var(--stripes1), var(--rainbow);
			background-size: 300%, 200%;
			animation: jumbo 20s ease-in-out infinite;
			background-attachment: fixed;
			mix-blend-mode: screen;
			opacity: 0.6;
		}
	}

	@keyframes jumbo {
		0% {
			background-position:
				0% 30%,
				0% 40%;
		}
		25% {
			background-position:
				100% 70%,
				80% 60%;
		}
		50% {
			background-position:
				200% 30%,
				160% 40%;
		}
		75% {
			background-position:
				100% 70%,
				80% 60%;
		}
		100% {
			background-position:
				0% 30%,
				0% 40%;
		}
	}

	@keyframes drift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 180% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
