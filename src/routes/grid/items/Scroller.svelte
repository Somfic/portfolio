<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	let clonedElement: HTMLDivElement;

	onMount(() => {
		// Randomize the order of the elements
		const elements = Array.from(element.children);
		elements.sort(() => Math.random() - 0.5);

		element.innerHTML = '';

		for (const el of elements) {
			element.appendChild(el);
		}

		const clone = element.cloneNode(true) as HTMLDivElement;
		clone.classList.add('cloned');
		clonedElement.appendChild(clone);
	});
</script>

<div class="scroller">
	<div class="content" bind:this={element}>
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
			alt="Svelte"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
			alt="VSCode"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
			alt="C#"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
			alt="Git"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
			alt="GitHub"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
			alt="Sass"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
			alt="TypeScript"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
			alt="JavaScript"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
			alt="HTML5"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
			alt="CSS3"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
			alt="Figma"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
			alt="Rust"
		/>
	</div>
	<div class="content" bind:this={clonedElement}></div>
</div>

<style lang="scss">
	.scroller {
		overflow: hidden;
		padding: 60px 0;
		white-space: nowrap;
		position: relative;

		&:hover .content {
			animation-play-state: paused;
		}
	}

	.content {
		display: inline-block;
		animation: 5s slide infinite linear;

		img {
			height: 50px;
			margin: 0 40px;
			background-color: rgba(255, 255, 255);
			padding: 10px;
			border-radius: 10px;
		}
	}
	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
