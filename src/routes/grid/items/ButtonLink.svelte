<script lang="ts">
	let { type }: { type: 'github' | 'email' | 'linkedin' } = $props();
</script>

<div class="button">
	{#if type === 'github'}
		<img src="/github.svg" alt="" />
	{:else if type === 'linkedin'}
		<img src="/linkedin.svg" alt="" />
	{:else if type === 'email'}
		<img src="/email.svg" alt="" />
	{/if}
</div>

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
	}

	img {
		display: block;
		display: flex;
		flex-grow: 1;
	}
</style>
