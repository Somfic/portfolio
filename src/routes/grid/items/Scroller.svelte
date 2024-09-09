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
			clonedElement.appendChild(el.cloneNode(true));
		}
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

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
			alt=".NET"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
			alt="Java"
		/>

		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
			alt="MySQL"
		/>

		<div class="copied" bind:this={clonedElement}></div>
	</div>
</div>

<style lang="scss">
	.scroller {
		display: flex;
		max-width: 100%;
		flex-grow: 1;
		position: relative;
		mask-image: linear-gradient(to right, transparent, black 35%, black 65%, transparent);
	}

	.copied {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 100%;
		z-index: 10;
	}

	.content {
		display: flex;
		position: absolute;
		height: 100%;
		animation: 60s slide infinite linear;

		img {
			height: calc(100% - 2rem);
			background-color: rgb(47, 47, 47, 0.6);
			padding: 1rem;
			border-radius: 10px;
			margin-right: 1rem;

			box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
