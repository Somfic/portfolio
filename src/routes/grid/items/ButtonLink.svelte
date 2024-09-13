<script lang="ts">
	export let type: 'github' | 'email' | 'linkedin';
	export let link: string;
	export let subtitle: string;
</script>

<a class="button" href={link} target="_blank" rel="noopener noreferrer">
	{#if type === 'github'}
		<img src="/github.svg" style="transform: scale(0.85)" alt="" />
	{:else if type === 'linkedin'}
		<img src="/linkedin.svg" alt="" />
	{:else if type === 'email'}
		<img src="/email.svg" alt="" />
	{/if}
	<div class="subtitle">{subtitle}</div>
</a>

<style lang="scss">
	.button {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		text-decoration: none;

		&:hover {
			cursor: auto;
		}

		z-index: 9999;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.subtitle {
			all: unset;
			color: gray;
			margin-top: 0.5rem;
			font-weight: 600;

			// no underline
		}
	}

	img {
		display: block;
		width: 80px;
	}
</style>
