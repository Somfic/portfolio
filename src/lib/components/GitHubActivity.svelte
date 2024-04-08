<script lang="ts">
	import { queryActivities, type UserActivity } from '$lib/github';
	import GitHub from '$lib/icons/GitHub.svelte';
	import { onMount } from 'svelte';

	export let user: string;

	let activities: UserActivity[] = [];

	onMount(async () => {
		activities = await queryActivities(user);

		// Replace text surrounded with `` to a code block
		activities = activities.map((activity) => {
			activity.payload.commits = activity.payload.commits?.map((commit) => {
				commit.message = commit.message.replace(/`([^`]+)`/g, '<code>$1</code>');
				commit.message = commit.message.replace(/'([^']+)'/g, '<code>$1</code>');
				commit.message = commit.message.replace(/([^ ]+\.[^ ]+) /g, '<code>$1</code>');
				// Replace GitHub links with just the repo nam	e. (https://github.com/Somfic/EliteVA -> <a href="https://github.com/Somfic/EliteVA">Somfic/EliteVA</a>)
				commit.message = commit.message.replace(
					/https:\/\/(?:www\.)?github\.com\/([^/]+\/[^/]+)/g,
					'<a href="https://www.github.com/$1">$1</a>'
				);
				return commit;
			});
			return activity;
		});
	});
</script>

{#each activities as activity}
	<div class={`activity ${activity.type.toLowerCase().replace('event', '')}`}>
		<div class="header">
			<h3>{activity.type}</h3>
			<p>{activity.created_at}</p>
		</div>
		<div class="content">
			{#if activity.type == 'PushEvent'}
				{#each activity.payload.commits! as commit}
					<a
						class="commit"
						href={`https://www.github.com/${activity.repo.name}/commit/${commit.sha}`}
						><GitHub />{@html commit.message}</a
					>
				{/each}
			{/if}
		</div>
	</div>
{/each}

<style lang="scss">
	@import '../../styles/theme.scss';

	.activity {
		display: flex;
	}

	.push .content {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		overflow-x: scroll;
		// All same height

		gap: $gap;
		// Slowly fade out the content on the right using a shadow

		box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
	}

	.commit {
		display: flex;
		cursor: pointer;
		align-items: center;
		color: $foreground;
		text-decoration: none;
		padding: 10px 10px;
		border: $border;
		border-radius: $border-radius;
		background-color: $background-frosted;
		margin: 5px;
		transition: all 200ms ease-in-out;
		gap: 0.5em;

		&:hover {
			background-color: transparentize($accent, 0.6);
		}
	}
</style>
