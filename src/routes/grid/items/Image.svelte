<script lang="ts">
	export let url: string;
</script>

<div style="background-image: url({url})" class="image"></div>

<style lang="scss">
	.image {
		flex-grow: 1;
		background-size: cover;
		background-position: center;
	}
</style>
