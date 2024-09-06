<div class="me">
	<div class="header">
		<img src="/me.jpeg" alt="" />
		<h1>Lucas Valerio de Jong</h1>
	</div>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perferendis optio inventore
		ipsam tempore, assumenda iusto eaque quia repellat possimus molestiae voluptatem deserunt dolor!
		Error a inventore porro eos nobis.
	</p>
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
		}

		img {
			border-radius: 50%;
			width: 100px;
			height: 100px;
			z-index: 20;
			box-shadow:
				inset 1px 4px 6px rgba(0, 0, 0, 0.4),
				inset 0px -2px 16px -3px rgba(0, 0, 0, 0.2);
		}
	}
</style>
