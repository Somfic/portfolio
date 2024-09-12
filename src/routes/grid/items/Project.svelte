<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectTag from './ProjectTag.svelte';

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
	export let downloads: string | undefined = undefined;
	export let streamers: string | undefined = undefined;
	export let media_position: 'left' | 'right' | 'center' = 'center';

	let unloadTimeout: number;
	let videoElement: HTMLVideoElement | undefined;

	function playVideo() {
		if (videoElement) {
			clearTimeout(unloadTimeout);
			videoElement.src = `/${video}`;
			videoElement.play();
		}
	}

	function stopVideo() {
		if (videoElement) {
			setTimeout(() => {
				videoElement!.pause();
			}, 1000);
		}
	}
</script>

<div class="project" on:mouseenter={playVideo} on:mouseleave={stopVideo}>
	{#if stars}
		<div class="stars">
			{stars} <img src="/star.png" alt="" />
		</div>
	{/if}
	{#if downloads}
		<div class="downloads">
			{downloads} <img src="/people.png" alt="" />
		</div>
	{/if}
	{#if streamers}
		<div class="streamers">
			{streamers} <img src="/twitch.png" alt="" />
		</div>
	{/if}
	<div class="media" class:video>
		{#if video}
			<video
				style:object-position={media_position}
				bind:this={videoElement}
				src={`/${video}`}
				muted
				loop
				autoplay
				playsinline
			>
			</video>
		{/if}
		<img style:object-position={media_position} src={`/${image}`} alt={title} />
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
			<ProjectTag {tag} />
		{/each}
	</div>
</div>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.stars,
	.downloads,
	.streamers {
		position: absolute;
		display: flex;
		align-items: center;
		gap: 5px;
		top: 0;
		right: 0;

		font-weight: bold;
		border-radius: 10px;
		padding: 5px 10px;

		z-index: 10;
		backdrop-filter: blur(10px);

		img {
			height: 1em;
			width: 1em;
		}

		&.stars {
			$accent: rgba(235, 188, 68);

			background-color: transparentize($accent, 0.7);
			color: $accent;
			box-shadow: 0 0 10px transparentize($accent, 0.5);
			border: 2px solid $accent;
			transform: rotate(4deg) translate(10px, -15px);
		}

		&.downloads {
			$accent: rgb(68, 177, 235);

			background-color: transparentize($accent, 0.7);
			color: $accent;
			box-shadow: 0 0 10px transparentize($accent, 0.5);
			border: 2px solid $accent;
			transform: rotate(-2deg) translate(15px, 16px);
		}

		&.streamers {
			$accent: rgb(149, 68, 235);

			background-color: transparentize($accent, 0.7);
			color: $accent;
			box-shadow: 0 0 10px transparentize($accent, 0.5);
			border: 2px solid $accent;
			transform: rotate(2deg) translate(12px, 44px);
		}
	}

	.media {
		position: relative;
		width: 100%;
		height: 250px;

		background-image: url('/spinner.svg');
		background-size: 50px;
		background-position: center;
		background-repeat: no-repeat;

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
	}
</style>
