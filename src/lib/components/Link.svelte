<script lang="ts">
	import GitHub from '$lib/icons/GitHub.svelte';

	export let href: string;

	$: githubRepo = href.match(/github.com\/([^/]+\/[^/]+)/)?.[1];
</script>

{#if href.includes('github')}
	<a {href}><GitHub />{githubRepo}</a>
{:else}
	<a {href}>{href}</a>
{/if}

<style lang="scss">
	@import '../../styles/theme.scss';

	a {
		height: 1em;
		display: inline-flex;
		align-items: center;
		color: $foreground;
		text-decoration: none;
		padding: 10px;
		padding-left: 5px;
		padding-right: 12px;
		border-radius: 200px;
		background-color: $background-frosted;
		transition: all 200ms ease-in-out;
		gap: 10px;
		color: $accent;

		&:hover {
			background-color: transparentize($accent, 0.6);
			color: $accent-muted;
		}
	}
</style>
