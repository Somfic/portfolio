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
	import ScrollerTechItems from './grid/items/ScrollerTechItems.svelte';
	import Skull from './grid/items/Skull.svelte';
	import Project from './grid/items/Project.svelte';
	import Experience from './grid/items/Experience.svelte';

	let mouseX = -1000;
	let mouseY = -1000;

	onMount(() => {
		let x = 0;
		let y = 0;

		setInterval(() => {
			mouseX = x;
			mouseY = y;
		}, 25);

		document.onmousemove = (e) => {
			x = e.clientX;
			y = e.clientY;
		};
	});
</script>

<Pattern />
<Godrays />
<Grain />

<main>
	<Item width={6} width_m={8} height={2} {mouseX} {mouseY}>
		<Me />
	</Item>
	<Item width={3} width_m={4} height={1} {mouseX} {mouseY}>
		<ButtonLink type="github" link="https://github.com/Somfic" subtitle="@somfic" />
	</Item>
	<Item width={3} width_m={4} height={1} {mouseX} {mouseY}>
		<ButtonLink type="linkedin" link="https://www.linkedin.com/in/lvdejong/" subtitle="@lvdejong" />
	</Item>
	<Item width={6} width_m={6} height={1} {mouseX} {mouseY}>
		<ButtonLink type="email" link="mailto:lucas@somfic.dev" subtitle="lucas@somfic.dev" />
	</Item>
	<Item width={12} width_m={12} height={1} {mouseX} {mouseY}>
		<Scroller>
			<ScrollerTechItems />
		</Scroller>
	</Item>
	<Item width={9} width_m={8} height={1} {mouseX} {mouseY}>
		<div class="experience">
			<Experience
				title="HBO Technische Informatica"
				location="Avans Hogeschool"
				image="avans.png"
				start="2021"
				end="2024"
			/>
			<Experience
				title="HBO Informatica"
				location="Avans Hogeschool"
				image="avans.png"
				start="2019"
				end="2021"
			/>
		</div>
	</Item>
	<Item width={3} width_m={6} height={1} padding={1} {mouseX} {mouseY}>
		<Image fit="cover" url="kleuter.jpg" />
	</Item>
	<Item width={6} width_m={4} height={2} height_m={1} padding={1} {mouseX} {mouseY}>
		<Image url="location.png" />
	</Item>
	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="EliteAPI"
			description=".NET API voor het communiceren met het ruimte-spel 'Elite: Dangerous'. Populair bij Twitch-streamers om stemcommando's te gebruiken."
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
	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Boebot"
			description="Een robot die door middel van meerdere sensoren zelfstandig lijnen kan volgen, obstakels kan ontwijken en vracht kan vervoeren."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="boombot.jpg"
			video="dejavu.mp4"
			tags={['Java', 'Hardware', 'Scrum']}
			github="https://github.com/Somfic/1.2-AutomatischGeleidVoertuig"
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Moviez"
			description="Een webapplicatie met een overzicht van films die in mijn lokale bioscoop draaien, aangestuurd door de Kinepolis API."
			locationEmoji="school.png"
			location="GitHub"
			image="moviez.png"
			video="compressed_moviez.mp4"
			tags={['TypeScript', 'Svelte', 'SASS']}
			github="https://github.com/Somfic/moviez"
		/>
	</Item>
	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Schoolplanner"
			description="2D from-scratch grafische applicatie voor het plannen van schoolroosters en het simuleren van drukte op de gangen en in klaslokalen."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="schoolplanner.png"
			video="compressed_schoolplanner2.mp4"
			tags={['Java', 'Graphics', 'Scrum']}
			github="https://github.com/Somfic/1.3-SchoolPlanner"
		/>
	</Item>
	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Eiland doolhoven"
			description="2.5D from-scratch grafische applicatie voor het genereren van doolhoven op procedureel gegenereerde eilanden."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="maze.png"
			video="compressed_maze.mp4"
			github="https://github.com/Somfic/Infinity-Alphine"
			tags={['Java', 'Graphics', 'ECS']}
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Committer"
			description="CLI tool om consistente commit-berichten te genereren volgens de Gitmoji richtlijnen."
			locationEmoji="avans.png"
			location="GitHub"
			image="committer.png"
			video="compressed_committer.mp4"
			github="https://github.com/Somfic/committer"
			tags={['Rust', 'CLI']}
			media_position="left"
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Skool Workshop"
			description="Full-stack web applicatie voor het beheren van workshops en inschrijvingen voor 'SkoolWorkshop', een workshop-oraganisatie in Breda."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="skoolworkshop.png"
			github="https://github.com/Somfic/skoolworkshop"
			tags={['JavaScript', 'Node.js', 'MySQL']}
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Elektronische deurbel"
			description="Een elektronische deurbel met een ESP32 microcontroller die audioberichten kan opnemen en afspelen, en via een internetconnectie de radio kan afspelen."
			locationEmoji="avans.png"
			location="Avans Hogeschool"
			image="dingdong.jpg"
			video="compressed_dingdong.mp4"
			github="https://github.com/Somfic/skoolworkshop"
			tags={['C++', 'Hardware', 'Scrum']}
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="ed-journal"
			description="Een EliteAPI rewrite in Rust. Gebruikt om speler-gegevens van het ruimte-spel 'Elite: Dangerous' te analyseren en intressante informatie te extraheren."
			locationEmoji="avans.png"
			location="GitHub"
			image="edjournal.jpg"
			github="https://github.com/rster2002/ed-journals"
			tags={['Rust']}
			stars="2"
		/>
	</Item>

	<Item width={6} width_m={12} height={3} {mouseX} {mouseY}>
		<Project
			title="Spotivibe"
			description="Een webapplicatie die de Spotify API gebruikt om muziek live te visualiseren met lichteffecten gebaseerd op tempo, beats en stemming in een 3D-omgeving met Three.js."
			locationEmoji="avans.png"
			location="GitHub"
			image="spotivibe.png"
			video="compressed_spotivibe.mp4"
			github="https://github.com/Somfic/vibes"
			tags={['Vue', 'JavaScript', 'Three.js']}
			media_position="left"
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
		color: rgba(255, 255, 255, 0.9);
	}

	.experience {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-grow: 1;
	}

	main {
		padding: 10rem 1rem;
		display: grid;

		grid-auto-rows: 1fr;
		grid-template-columns: repeat(12, 1fr);

		gap: 1rem;
		// dense grid
		grid-auto-flow: dense;
		max-width: 999px;

		// When on tablet
		@media (min-width: 999px) {
			grid-auto-columns: 1fr 1fr;
		}
	}
</style>
