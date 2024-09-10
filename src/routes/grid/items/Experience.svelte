<script lang="ts">
	export let title: string;
	export let location: string;
	export let image: string;
	export let start: string;
	export let end: string;
</script>

<div class="experience">
	<div class="title">
		{title}
	</div>
	<div class="description">
		<div class="location">
			{location}
		</div>
		<div class="years">
			<div class="start">
				{start}
			</div>
			-
			<div class="end">
				{end}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.experience {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title {
		font-size: 2rem;
		font-weight: 800;
	}

	.description {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: end;
		justify-content: center;
	}

	.location {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
		white-space: nowrap;

		img {
			width: 1.2em;
			height: 1.2em;
			border-radius: 100px;
		}
	}

	.years {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: gray;
	}
</style>
