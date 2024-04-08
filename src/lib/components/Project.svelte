<script lang="ts">
	import { type Repository, queryRepository } from '$lib/github';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import { onMount } from 'svelte';

	export let repo: string;
	export let languages: string[];
	export let bigImages: string[];
	export let smallImages: string[];

	let expand = false;

	let repository: Repository | undefined = undefined;

	onMount(async () => {
		repository = await queryRepository(repo.split('/')[0], repo.split('/')[1]);
	});
</script>

<div
	class="cards"
	role="link"
	tabindex="0"
	on:mouseenter={() => (expand = true)}
	on:mouseleave={() => (expand = false)}
>
	{#each smallImages as image}
		<img class="card small" src={image} class:expand alt={image} />
	{/each}
	<div class="card big links" class:expand>
		<div class="content">
			<h3>Links</h3>
			<a href={repository?.html_url}><GitHub />repo</a>
			<a href={repository?.homepage}><ExternalLink />docs</a>
		</div>
	</div>
	<div class="card big stats" class:expand>
		<div class="content">
			<h3>Stargazer</h3>
			<p class="pill">{repository?.stargazers_count}</p>
		</div>
	</div>

	<div class="card big description" class:expand>
		<div class="content">
			<div class="name">
				<h1>{repository?.name}</h1>
				<p>{repository?.description}</p>
			</div>
			<div class="languages">
				{#each languages as language}
					<p class="language">{language}</p>
				{/each}
			</div>
		</div>
	</div>

	<img class="card big social" src={bigImages[0]} class:expand alt={repo} />
</div>

<style lang="scss">
	@import '../../styles/theme.scss';

	.cards {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-grow: 1;
		height: 530px;
		//border: 1px solid red;

		.card {
			position: absolute;
			object-fit: cover;
			box-shadow: 0 0 40px rgba(0, 0, 0, 0.43);
			overflow: hidden;
			background-color: rgb(50, 50, 50);
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			transition: all 800ms cubic-bezier(0.05, 0.43, 0.25, 1);

			&.big {
				width: 300px;
				height: 400px;
				border-radius: 40px;
				border: 15px solid rgba(255, 255, 255, 0.05);
				background-color: $background-frosted;
				// blur behind
				backdrop-filter: blur(30px);
			}

			&.small {
				width: 100px;
				height: 100px;
				border-radius: 20px;
				border: 5px solid rgba(255, 255, 255, 0.05);
				padding: 5px;
				background-color: $background-frosted;
				filter: grayscale(60%);
			}

			.content {
				padding: $gap calc($gap * 2);
				padding-right: 30%;
				display: flex;
				flex-direction: column;
				flex-grow: 1;

				h3 {
					margin-left: 1rem;
				}
			}
		}

		.description .content {
			justify-content: space-between;
		}

		.languages {
			display: flex;
			align-items: center;
			gap: $gap;

			.language {
				background-color: $background-frosted;
				border: $border;
				border-radius: $border-radius;
				padding: 3px 10px;
				color: $foreground-muted;
			}
		}

		.links a {
			display: flex;
			align-items: center;
			color: $foreground;
			text-decoration: none;
			padding: 10px 10px;
			border: $border;
			border-radius: $border-radius;
			background-color: $background-frosted;
			margin: 5px;
			transition: all 200ms ease-in-out;
			gap: $gap;

			&:hover {
				background-color: transparentize($accent, 0.6);
			}
		}

		.expand {
			//background-color: $background-frosted;
		}

		// Positioning
		.card.social {
			transform: translate(40px, -10px) rotate(3deg);

			&.expand {
				transform: translate(300px, 0px) rotate(20deg);
			}
		}

		.card.description {
			background-color: rgba(216, 216, 143, 0.2);
			transform: translate(-50px, -10px) rotate(-3deg);

			&.expand {
				transform: translate(100px, -40px) rotate(10deg);
			}
		}

		.card.stats {
			background-color: rgba(93, 209, 238, 0.2);
			transform: translate(-60px, 10px) rotate(-2deg);

			&.expand {
				transform: translate(-120px, -40px) rotate(0deg);
			}
		}

		.card.links {
			background-color: rgba(244, 187, 187, 0.2);
			transform: translate(-85px, -20px) rotate(3deg);

			&.expand {
				transform: translate(-350px, 0px) rotate(-15deg);
			}
		}

		.card.small {
			transform: translate(0px, 0px) rotate(0deg);
		}

		.card.small:nth-child(1).expand {
			transform: translate(420px, -300px) rotate(6deg);
		}

		.card.small:nth-child(2).expand {
			transform: translate(550px, 150px) rotate(5deg);
		}
	}
</style>
