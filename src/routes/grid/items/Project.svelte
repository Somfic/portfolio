<script lang="ts">
	export let title: string;
	export let image: string;
	export let location: string;
	export let locationEmoji: string;
	export let tags: string[];
</script>

<div class="project">
	<img src={`/${image}`} alt={title} />
	<div class="subtitle">
		<span>Project bij</span>
		<img src={`/${locationEmoji}`} alt="" />
		<span>{location}</span>
	</div>
	<div class="title">
		{title}
	</div>

	<div class="tags">
		{#each tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</div>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		//@debugborder: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 1.1rem;
	}

	.subtitle {
		margin: 20px 0;
		font-size: 0.8rem;
		text-transform: uppercase;
		color: gray;
		display: flex;
		gap: 10px;

		img {
			height: 1em;
			width: auto;
		}
	}

	.title {
		font-size: 2rem;
		font-weight: 800;
	}

	.tags {
		display: flex;
		gap: 10px;
		padding-top: 20px;
		margin-top: auto;

		.tag {
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 10px;
			padding: 5px 10px;
			font-size: 0.8rem;
		}
	}
</style>
