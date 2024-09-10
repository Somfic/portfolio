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
	<Item width={1} height={1}><ButtonLink type="github" link="https://github.com/Somfic" /></Item>
	<Item width={1} height={1}
		><ButtonLink type="linkedin" link="https://www.linkedin.com/in/lvdejong/" /></Item
	>
	<Item width={2} height={1}><ButtonLink type="email" link="mailto:lucas@somfic.dev" /></Item>
	<Item width={4} height={1}>
		<Scroller>
			<ScrollerTechItems />
		</Scroller>
	</Item>
	<Item width={2} height={2} padding={0}><Image url="location.png" /></Item>
	<Item width={2} height={3}>
		<Project
			title="EliteAPI"
			description=".NET library voor het communiceren met het ruimte-spel 'Elite: Dangerous'. Populair bij Twitch-streamers om stemcommando's te gebruiken."
			locationEmoji="school.png"
			location="GitHub"
			image="eliteapi.png"
			tags={['C#', 'Open source']}
			github="https://github.com/Somfic/EliteAPI"
			stars="100+"
			downloads="17.000+"
			streamers="10+"
		/>
	</Item>
	<Item width={2} height={3}>
		<Project
			title="Boebot"
			description="Een robot die door middel van meerdere sensoren zelfstandig lijnen kan volgen, obstakels kan ontwijken en vracht kan vervoeren."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="boombot.jpg"
			video="dejavu.mp4"
			tags={['Java', 'Hardware', 'Scrum']}
		/>
	</Item>

	<Item width={2} height={3}>
		<Project
			title="Moviez"
			description="Een webapplicatie met een overzicht van films die in mijn lokale bioscoop draaien, aangestuurd door de Kinepolis API."
			locationEmoji="school.png"
			location="GitHub"
			image="moviez.png"
			video="moviez.mp4"
			tags={['Typescript', 'Svelte', 'SCSS', 'API']}
			github="https://github.com/Somfic/moviez"
		/>
	</Item>
	<Item width={2} height={3}>
		<Project
			title="Schoolplanner"
			description="2D from-scratch grafische applicatie voor het plannen van schoolroosters en het simuleren van drukte op de gangen en in klaslokalen."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="schoolplanner.png"
			video="schoolplanner2.mp4"
			tags={['Java', 'Graphics', 'Scrum']}
			github="https://github.com/Somfic/moviez"
		/>
	</Item>
	<Item width={2} height={3}>
		<Project
			title="Eiland doolhoven"
			description="2.5D from-scratch grafische applicatie voor het genereren van doolhoven op procedureel gegenereerde eilanden."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="maze.png"
			video="maze.mp4"
			github="https://github.com/Somfic/Infinity-Alphine"
			tags={['Java', 'Graphics', 'ECS']}
		/>
	</Item>

	<Item width={2} height={3}>
		<Project
			title="Committer"
			description="CLI tool om consistente commit-berichten te genereren volgens de Gitmoji richtlijnen."
			locationEmoji="avans.png"
			location="GitHub"
			image="committer.png"
			video="committer.mov"
			github="https://github.com/Somfic/Infinity-Alphine"
			tags={['Rust', 'CLI']}
		/>
	</Item>
	<!-- <Item width={2} height={3}>
		<Project
			title="Dice Arcade Game"
			locationEmoji="school.png"
			location="Avans Hogeschool"
			image="moviez.png"
			tags={['C++', 'Hardware', 'Scrum']}
			github="https://github.com/Somfic/2.4-diceARcade"
		/>
	</Item>
	<Item width={2} height={3}>
		<Project
			title="VR Doktor applicatie"
			locationEmoji="school.png"
			location="Avans Hogeschool"
			image="moviez.png"
			tags={['Kotlin', 'Mobiel']}
			github="https://github.com/Somfic/2.2-Mobile-Development"
		/>
	</Item>

	</Item> -->
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

	:global(html, body) {
		padding: 0;
		margin: 0;
		font-family: 'Rubik', sans-serif;
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
		grid-auto-columns: repeat(4, 1fr);
		grid-auto-rows: 1fr;
		gap: 1rem;
		// dense grid
		grid-auto-flow: dense;

		color: white;
		max-width: 999px;

		// When on tablet
		@media (max-width: 800px) {
			grid-auto-columns: 1fr;
		}
	}
</style>
