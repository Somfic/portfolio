<div>
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
	div {
		display: flex;
		flex-direction: column;
	}

	.header {
		display: flex;
		flex-direction: row;
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
		}
	}
</style>
