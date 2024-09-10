<script lang="ts">
	export let title: string;
	export let description: string;
	export let image: string;
	export let video: string | undefined = undefined;
	export let location: string;
	export let locationEmoji: string;
	export let tags: string[];
	export let github: string | undefined = undefined;
	export let link: string | undefined = undefined;
	export let stars: string | undefined = undefined;
</script>

<div class="project">
	{#if stars}
		<div class="stars">
			{stars} <img src="/star.png" alt="" />
		</div>
	{/if}
	<div class="media" class:video>
		{#if video}
			<video autoplay muted loop playsinline>
				<source src={`/${video}`} />
			</video>
		{/if}
		<img src={`/${image}`} alt={title} />
	</div>
	<div class="subtitle">
		{#if location != 'GitHub'}
			<span>Project bij</span>
			<img src={`/${locationEmoji}`} alt="" />
			<span>{location}</span>
		{:else}
			<span>Open source project op</span>
			<img src={`/github.svg`} alt="" />
			<span>GitHub</span>
		{/if}
	</div>
	<div class="title">
		{title}
	</div>
	<div class="description">
		{description}
	</div>
	{#if github}
		<a href={github} target="_blank" rel="noopener noreferrer">Github</a>
	{/if}

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
		position: relative;
	}

	.stars {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 5px;
		top: 0;
		right: 0;
		background-color: rgba(235, 188, 68, 0.3);
		font-weight: bold;
		color: rgb(236, 166, 25);
		box-shadow: 0 0 10px rgba(255, 227, 45, 0.5);
		border-radius: 10px;
		padding: 5px 10px;
		transform: rotate(4deg) translate(15px, -15px);
		z-index: 10;
		backdrop-filter: blur(10px);
		border: 2px solid rgb(236, 166, 25);

		img {
			height: 1em;
			width: 1em;
		}
	}

	.media {
		position: relative;
		width: 100%;
		height: 250px;

		img,
		video {
			position: absolute;
			width: 100%;
			height: 100%;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
			border-radius: 1.1rem;
			object-fit: cover;
			transition: opacity 500ms;
		}
	}

	.project:hover .media.video img {
		opacity: 0;
	}

	.subtitle {
		margin: 20px 0;
		font-size: 0.8rem;
		text-transform: uppercase;
		color: gray;
		display: flex;
		align-items: center;
		gap: 8px;

		img {
			height: 1.2em;
			width: auto;
			border-radius: 100px;
		}
	}

	.title {
		font-size: 2rem;
		font-weight: 800;
	}

	.description {
		margin: 10px 0;
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
