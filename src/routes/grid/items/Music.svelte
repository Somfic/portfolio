<script lang="ts">
	import { onMount } from 'svelte';

	let playing = {
		title: '',
		artist: '',
		image: '#',
		audio: '#',
		fit: 'cover'
	};

	let audio: HTMLAudioElement;
	let audioWantsToPlay = false;
	let rotation = 0;

	onMount(async () => {
		setInterval(() => {
			handleAudio();
		}, 50);

		setInterval(() => {
			loadLatestSong();
		}, 1000 * 60);

		loadLatestSong();
	});

	async function loadLatestSong() {
		let res = await fetch('https://api.stats.fm/api/v1/users/somfic/streams/recent');
		let data = await res.json();
		let track = data['items'][0]['track'];

		playing.image = track['albums'][0]['image'];
		playing.audio = track['spotifyPreview'];
		playing.title = track['name'];
		playing.artist = track['artists']
			.map((artist: { [x: string]: string }) => artist['name'])
			.join(', ');
	}

	// Smoothly transition to the wantedAudio level based on if the audio wants to play
	function handleAudio() {
		if (!audio) {
			return;
		}

		if (!audio.paused) {
			rotation += audio.volume * 5;
		}

		if (audioWantsToPlay && audio.paused) {
			audio.volume = 0;
			audio.play();
		}

		if (audioWantsToPlay) {
			if (audio.volume <= 0.98) {
				audio.volume += 0.01;
			} else {
				audio.volume = 1;
			}
		} else {
			if (audio.volume >= 0.01) {
				audio.volume -= 0.01;
			} else {
				audio.volume = 0;
				audio.pause();
			}
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="player"
	on:mouseenter={() => (audioWantsToPlay = true)}
	on:mouseleave={() => (audioWantsToPlay = false)}
>
	<div
		style="background-image: url({playing.image})"
		style:background-size={playing.fit}
		style:transform={`rotate(${rotation}deg)`}
		class="image"
	></div>
	<div class="track-info">
		<h1>{playing.title}</h1>
		<h2>{playing.artist}</h2>
	</div>
</div>

<audio bind:this={audio} loop volume={0} src={playing.audio}></audio>

<style lang="scss">
	.player {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px;
		position: relative;

		.track-info {
			position: absolute;
			display: flex;
			flex-direction: column;
			bottom: 0;
			left: 0;

			padding: 30px;

			h1,
			h2 {
				margin: 0;
			}
		}
	}

	.image {
		flex-grow: 1;
		aspect-ratio: 1;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 1000px;
		transition: transform 0.1s;
		opacity: 0.7;
	}
</style>
