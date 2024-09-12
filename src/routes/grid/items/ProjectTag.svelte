<script lang="ts">
	import languageIcons from '$lib/languageIcons';

	export let tag: string;

	let languageKeys = Object.keys(languageIcons);
	let languageValues = Object.values(languageIcons);
	let languageSvg: string | undefined = languageValues[languageKeys.indexOf(tag)];
</script>

<div class="tag">
	{#if languageSvg}
		<img src={languageSvg} alt={tag} />
	{/if}
	<p>{tag}</p>
</div>

<style lang="scss">
	.tag {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		padding: 5px 10px;
		font-size: 0.8rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

		display: flex;
		align-items: center;
		gap: 8px;

		img {
			height: 1.5em;
			width: 1.5em;
			border-radius: 2px;
		}

		p {
			margin: 0;
			color: rgb(203, 203, 203);
			font-weight: 600;
		}
	}
</style>
