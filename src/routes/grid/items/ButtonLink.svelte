<script lang="ts">
	export let type: 'github' | 'email' | 'linkedin';
	export let link: string;
</script>

<a class="button" href={link} target="_blank" rel="noopener noreferrer">
	{#if type === 'github'}
		<img src="/github.svg" alt="" />
	{:else if type === 'linkedin'}
		<img src="/linkedin.svg" alt="" />
	{:else if type === 'email'}
		<img src="/email.svg" alt="" />
	{/if}
</a>

<style lang="scss">
	.button {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;

		&:hover {
			cursor: auto;
		}

		z-index: 9999;
	}

	img {
		display: block;
		height: 100%;
	}
</style>
