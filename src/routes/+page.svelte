<script>
	import Image from '$lib/components/Image.svelte';
	import Orb from '$lib/components/Orb.svelte';
	import ScrollingText from '$lib/components/ScrollingText.svelte';
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import HorizontalScroll from '$lib/components/HorizontalScroll.svelte';
	import YouTube from '$lib/components/YouTube.svelte';
	import FadingText from '$lib/components/FadingText.svelte';
	import Project from '$lib/components/Project.svelte';
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';

	let fullCycle = $state(false);
	let hasScrolled = $state(false);

	let showHint = $derived(fullCycle && !hasScrolled);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		document.onscroll = (e) => {
			hasScrolled = true;
		};
	});
</script>

<div class="hero">
	<div class="scroll-to-me"></div>
	<div class="nav">
		<a href="#me">me</a>
		<a href="#">projects</a>
		<a href="#">contact</a>
	</div>
	<div class="i-am">
		<h1>Hi, I am</h1>
		<div class="scroll">
			<ScrollingText
				words={['Lucas', 'a developer', 'a maintainer', 'a student', 'a nerd']}
				bind:fullCycle
			/>
		</div>
	</div>
	<div class="hint" class:show={showHint}>
		<svg width="20" viewBox="0 0 45 74" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4 39L18.9636 67.3095C20.4653 70.1506 24.5347 70.1506 26.0364 67.3096L41 39"
				stroke="#FFDFDF"
				stroke-width="7"
				stroke-linecap="round"
			/>
			<path
				d="M4 4L18.9636 32.3095C20.4653 35.1506 24.5347 35.1506 26.0364 32.3096L41 4"
				stroke="#FFDFDF"
				stroke-width="7"
				stroke-linecap="round"
			/>
		</svg>
	</div>
</div>
<div class="content">
	<Section>
		<GitHubActivity user="somfic" />
	</Section>
	<Section horizontal swooshbottom fade>
		<Orb x={40} y={25} width={400} height={300} />
		<Orb x={-50} y={75} width={400} height={200} />
		<div>
			<h2 id="me"><FadingText words={['Hoi!', 'Ciao!', 'Hello!']} /></h2>
			<p>
				I’m Lucas — a software engineer who loves blending code with creative design and artistic
				flair.
			</p>
			<p>
				I am currently finishing up my <i>Bachelor of Science</i> at Avans Hogeschool in Breda, the Netherlands.
			</p>
			<p>
				In my free time I maintain a few open-source hobby projects, such as
				<a href="https://www.github.com/Somfic/vla">Vla</a>
				and
				<a href="https://www.github.com/Somfic/EliteAPI">EliteAPI</a>.
			</p>
		</div>
		<Image size={333} src="/me.jpeg" wiggle />
	</Section>
	<div class="projects">
		<Section>
			<h2 id="projects">My projects</h2>
			<p>I have a few projects that I am proud of.</p>
		</Section>
		<HorizontalScroll>
			<Section>
				<div class="project">
					<Project
						repo="somfic/eliteapi"
						languages={['C#']}
						bigImages={['projects/eliteapi/social.png']}
						smallImages={['projects/eliteapi/elite.png', 'projects/eliteapi/dotnet.png']}
					/>
				</div>
			</Section>
			<Section>
				<div class="project">
					<Project
						repo="somfic/eliteva"
						languages={['C#']}
						bigImages={['projects/eliteva/social.png']}
						smallImages={['projects/eliteva/elite.png']}
					/>
				</div>
			</Section>
		</HorizontalScroll>
		<Section>
			<h1>My GitHub</h1>
		</Section>
	</div>
</div>

<!-- TODO: LAST ACTIVITY PER PROJECT (PUSHED 23 MINUTES AGO) -->
<!-- TODO: GITHUB ACTICITY FEED: CREATED SOMFIC/VLA 3 MINUTES AGO -->

<style lang="scss">
	@import '../styles/theme.scss';

	.hero {
		height: 100vh;
		z-index: 10;
		display: flex;
		flex-direction: column;
		background: linear-gradient(0deg, rgb(0, 0, 0) 0px, rgba(25, 25, 24, 0)),
			linear-gradient(90deg, rgba(171, 156, 61, 0.2), rgba(137, 24, 47, 0.2));

		.nav {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 0px 80px;
			height: 100px;
			gap: 100px;
			font-weight: 700;

			a {
				color: $foreground-muted;
				text-decoration: none;
			}
		}

		.i-am {
			display: flex;
			flex-grow: 1;
			align-items: center;
			justify-content: center;
			gap: 15px;
			margin-right: 300px;

			.scroll {
				display: flex;
				flex-direction: column;
				white-space: nowrap;
				align-items: center;
				justify-content: center;
				position: relative;
				transform: translateY(-1.8rem);
			}

			h1 {
				font-size: 48px;
				line-height: 60px;
				font-weight: 700;
				margin-bottom: 24px;
			}

			h2 {
				font-size: 24px;
				line-height: 36px;
				font-weight: 400;
				color: $foreground-muted;
			}
		}

		.hint {
			display: flex;
			justify-content: center;
			height: 100px;
			opacity: 0;
			transition: opacity 2s ease-in-out;
			//margin-bottom: -200px;

			&.show {
				opacity: 0.5;
			}
		}
	}
</style>
