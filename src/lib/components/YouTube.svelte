<script lang="ts">
	export let src: string;
</script>

<iframe
	width="4000"
	height="450"
	{src}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
/>

<style lang="scss">
	iframe {
		border-radius: 25px;
		border: 10px solid rgba(255, 255, 255, 0.05);
		object-fit: cover;
		max-width: 100%;
		opacity: 0.99;
		box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
	}
</style>
