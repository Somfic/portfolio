<div class="me">
	<div class="header">
		<img src="/me.jpeg" alt="" />
		<h1><span>Lucas de Jong</span></h1>
	</div>

	<p>
		Hoi! Ik ben een gepassioneerde full-stack software-developer geintresseerd in mooie interfaces
		met goedwerkende backend-systemen.
	</p>
	<p>Momenteel op zoek naar een leuke baan.</p>
</div>

<style lang="scss">
	.me {
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		align-items: center;
		flex-grow: 1;
		justify-content: space-between;

		h1 {
			font-weight: 800;
			font-size: 2rem;
			display: flex;
			flex-grow: 1;
			text-align: center;
			justify-content: center;
		}

		img {
			border-radius: 50%;
			width: 100px;
			height: 100px;
			z-index: 20;
			box-shadow:
				inset 1px 4px 6px rgba(0, 0, 0, 0.4),
				inset 0px -2px 16px -3px rgba(0, 0, 0, 0.2);
			margin-right: 0.75rem;
			border: 2px solid rgba(255, 255, 255, 0.25);
		}

		p {
			margin: 0;
		}
	}
</style>
