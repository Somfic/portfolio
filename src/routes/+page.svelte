<script lang="ts">
	import Godrays from '$lib/Godrays.svelte';
	import Grain from '$lib/Grain.svelte';
	import Pattern from '$lib/Pattern.svelte';
	import Item from './grid/Item.svelte';
	import ButtonLink from './grid/items/ButtonLink.svelte';
	import Me from './grid/items/Me.svelte';
	import Scroller from './grid/items/Scroller.svelte';
</script>

<Pattern />
<Godrays />
<Grain />

<main>
	<Item width={5} height={5}><Me /></Item>
	<Item width={2} height={2}><ButtonLink type={'github'} /></Item>
	<Item width={2} height={2}><ButtonLink type={'linkedin'} /></Item>
	<Item width={5} height={2}><ButtonLink type={'email'} /></Item>
	<Item width={5} height={2}><Scroller /></Item>
	<Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item width={1} height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item
		width={1}
		height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item
		width={1}
		height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item
		width={1}
		height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item
		width={1}
		height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item><Item
		width={1}
		height={1}
	></Item><Item width={1} height={1}></Item><Item width={1} height={1}></Item>
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
		height: 100%;
		background-color: black;
	}

	main {
		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(11, 1fr);
		grid-auto-rows: 50px;
		gap: 1rem;

		color: white;
		max-width: 999px;
	}
</style>
