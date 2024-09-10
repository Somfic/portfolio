<script lang="ts">
	import Godrays from '$lib/Godrays.svelte';
	import Grain from '$lib/Grain.svelte';
	import Pattern from '$lib/Pattern.svelte';
	import { onMount } from 'svelte';
	import Item from './grid/Item.svelte';
	import ButtonLink from './grid/items/ButtonLink.svelte';
	import Image from './grid/items/Image.svelte';
	import Me from './grid/items/Me.svelte';
	import Scroller from './grid/items/Scroller.svelte';
	import ScrollerPortfolioItem from './grid/items/ScrollerPortfolioItem.svelte';
	import ScrollerTechItems from './grid/items/ScrollerTechItems.svelte';
	import Skull from './grid/items/Skull.svelte';
	import Project from './grid/items/Project.svelte';
</script>

<Pattern />
<Godrays />
<Grain />

<main>
	<Item width={2} height={2}><Me /></Item>
	<Item width={1} height={1}><ButtonLink type={'github'} /></Item>
	<Item width={1} height={1}><ButtonLink type={'linkedin'} /></Item>
	<Item width={2} height={1}><ButtonLink type={'email'} /></Item>
	<Item width={4} height={1}>
		<Scroller>
			<ScrollerTechItems />
		</Scroller>
	</Item>
	<Item width={2} height={2} padding={0}><Image url="location.png" /></Item>
	<Item width={2} height={3}>
		<Project
			title="Boombot"
			locationEmoji="school.png"
			location="Avans Hogeschool"
			image="boombot.jpg"
			tags={['Java', 'Hardware']}
		/>
	</Item>

	<Item width={2} height={3}>
		<Project
			title="Moviez"
			locationEmoji="school.png"
			location="Kinepolis"
			image="moviez.png"
			tags={['Svelte', 'API']}
		/>
	</Item>

	<!-- <Item width={10} height={5}>
		<Skull />
	</Item> -->
</main>

<style lang="scss">
	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: sans-serif;
		display: flex;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100%;
		background-color: black;
	}

	main {
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem;
		// dense grid
		grid-auto-flow: dense;

		color: white;
		max-width: 999px;
	}
</style>
