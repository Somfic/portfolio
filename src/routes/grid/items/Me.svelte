<div class="me">
	<div class="header">
		<img src="/me.jpeg" alt="" />
		<h1>Lucas de Jong</h1>
	</div>

	<div>
		<p>
			Hoi! Ik ben een gepassioneerde full-stack software-developer geintresseerd in mooie interfaces
			en goedwerkende backend-systemen.
		</p>
	</div>
</div>

<style lang="scss">
	.me {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.header {
		display: flex;
		align-items: center;
		flex-grow: 1;
		justify-content: space-between;

		// When the screen is small
		@media (max-width: 900px) {
			flex-direction: column;
			align-items: center;
		}

		h1 {
			font-weight: 800;
			font-size: 2.5rem;
			display: flex;
			flex-grow: 1;
			text-align: center;
			justify-content: center;
			align-items: center;
		}

		img {
			border-radius: 50%;
			width: 200px;
			height: 200px;
			z-index: 20;
			box-shadow:
				inset 1px 4px 6px rgba(0, 0, 0, 0.4),
				inset 0px -2px 16px -3px rgba(0, 0, 0, 0.2);
			margin-right: 0.75rem;
			border: 2px solid rgba(255, 255, 255, 0.25);
		}
	}
</style>
