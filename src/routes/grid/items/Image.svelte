<script lang="ts">
	export let fit: 'cover' | 'contain' = 'cover';
	export let url: string;
</script>

<div style="background-image: url({url})" style:background-size={fit} class="image"></div>

<style lang="scss">
	.image {
		flex-grow: 1;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
