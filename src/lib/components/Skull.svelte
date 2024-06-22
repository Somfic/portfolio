<script>
	import { Canvas, T } from '@threlte/core';
	import SkullObj from './SkullObj.svelte';
	import { OrbitControls } from '@threlte/extras';
	import { OrthographicCamera } from 'three';

	let size = 0;
	$: zoom = size / 2.25;
</script>

<div class="canvas" bind:clientWidth={size}>
	<Canvas>
		<T.OrthographicCamera
			makeDefault
			position={[10, 0, 0]}
			on:create={({ ref }) => {
				ref.lookAt(0, 0, 0);
			}}
			{zoom}
		>
			<OrbitControls
				enableDamping
				on:create={({ ref }) => {
					ref.dampingFactor = 0.02;
					ref.enableZoom = false;
					ref.enablePan = false;
					ref.autoRotate = true;
				}}
			/>
		</T.OrthographicCamera>
		<SkullObj />
	</Canvas>
</div>

<style lang="scss">
	.canvas {
		flex-grow: 1;
		aspect-ratio: 1;
	}
</style>
