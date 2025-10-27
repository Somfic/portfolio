<script>
	import '../styles/reset.scss';
	import Opener from '$components/sections/Opener.svelte';
	import { onMount } from 'svelte';

	let scrollContainer;

	onMount(() => {
		const handleScroll = () => {
			if (scrollContainer.scrollTop > 50) {
				document.body.classList.add('scrolled');
			} else {
				document.body.classList.remove('scrolled');
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
		return () => scrollContainer.removeEventListener('scroll', handleScroll);
	});
</script>

<Opener />
<div class="scroll-container" bind:this={scrollContainer}>
	<slot />
</div>

<style>
	.scroll-container {
		height: 100vh;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.scroll-container::-webkit-scrollbar {
		width: 8px;
	}

	.scroll-container::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	.scroll-container::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}
</style>
