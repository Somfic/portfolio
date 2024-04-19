<script lang="ts">
	import { queryActivities, type UserActivity } from '$lib/github';
	import GitHub from '$lib/icons/GitHub.svelte';
	import { onMount } from 'svelte';
	import Link from './Link.svelte';

	export let user: string;

	let activities: UserActivity[] = [];

	onMount(async () => {
		activities = await queryActivities(user);

		// Replace text surrounded with `` to a code block
		activities = activities.map((activity) => {
			activity.payload.commits = activity.payload.commits?.map((commit) => {
				commit.message = commit.message.replace(/`([^`]+)`/g, '<code>$1</code>');
				commit.message = commit.message.replace(/'([^']+)'/g, '<code>$1</code>');
				commit.message = commit.message.replace(/ ([^ ]+\.[^ ]+) /g, '<code>$1</code>');
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

	function prettyType(type: string): string {
		switch (type) {
			case 'PushEvent':
				return 'Pushed to';
			case 'PullRequestEvent':
				return 'Opened a pull request on';
		}

		return type;
	}
</script>

<div class="activities">
	{#each activities.filter((x) => x.type == 'PushEvent' || x.type == 'PullRequestEvent') as activity}
		<div class={`activity ${activity.type.toLowerCase().replace('event', '')}`}>
			<div class="header">
				<h3>
					{prettyType(activity.type)}
					<Link href={`https://www.github.com/${activity.repo.name}`} />
				</h3>

				<p>{activity.created_at}</p>
			</div>
			<div class="content">
				{#if activity.type == 'PushEvent'}
					<div class="commits">
						{#each activity.payload.commits! as commit}
							<p class="commit">{@html commit.message}</p>
						{/each}
					</div>
				{:else if activity.type == 'PullRequestEvent'}
					<p>{activity.payload.pull_request?.number}</p>
				{:else}
					<p>{activity.type}</p>
					<p>{JSON.stringify(activity, null, 2)}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	@import '../../styles/theme.scss';

	.activities {
		display: flex;
		flex-direction: column;
	}

	.activity {
		display: flex;
		border-bottom: 2px solid $border-color;
		padding: $gap 0;
	}

	.push .content {
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
		flex-direction: column;
		overflow-x: scroll;
		width: 100%;
		// All same height

		gap: $gap;
		// Slowly fade out the content on the right using a shadow

		box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
	}

	.commits {
		display: flex;
		flex-direction: column;
		border: $border;
		border-radius: $border-radius;
		background-color: $background-frosted;
	}

	.commit {
		display: flex;

		align-items: center;
		color: $foreground;
		text-decoration: none;
		padding: 10px 10px;
		margin: 0;

		transition: all 200ms ease-in-out;
		gap: 0.5em;
		border-bottom: $border;

		&:last-child {
			border-bottom: none;
		}
	}
</style>
