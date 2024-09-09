<script lang="ts">
	export let type: 'github' | 'email' | 'linkedin';
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
		height: 100%;
	}
</style>
