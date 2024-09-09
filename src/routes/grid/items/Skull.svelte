<script>
	import { Canvas, T } from '@threlte/core';
	import SkullObj from './SkullObj.svelte';
	import { OrbitControls } from '@threlte/extras';
	import { OrthographicCamera } from 'three';

	let size = 0;
	$: zoom = size / 2.5;
</script>

<div class="canvas" bind:clientHeight={size}>
	<Canvas>
		<T.OrthographicCamera
			makeDefault
			position={[0, 4, 10]}
			on:create={({ ref }) => {
				ref.lookAt(0, 0, 0);
				ref.zoom = zoom;
			}}
		>
			<OrbitControls
				on:create={({ ref }) => {
					ref.dampingFactor = 0.02;
					ref.enableZoom = false;
					ref.enablePan = false;
					ref.autoRotate = true;
					ref.autoRotateSpeed = 10;
				}}
			/>
		</T.OrthographicCamera>

		<SkullObj />
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#ffaa00"
			position={[3.33, 4.93, -1.64]}
			rotation={[-1.89, 0.57, 0.14]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#6200ff"
			position={[-2.81, 1.9, -2.89]}
			rotation={[-2.56, -0.67, -0.83]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#ff3000"
			position={[4.58, 2.6, 0.15]}
			rotation={[-1.51, 1.06, 0]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#ff00db"
			position={[-6.87, 0.18, -0.04]}
			rotation={[-1.79, -1.54, -0.3]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#0400ff"
			position={[-3.27, 5.36, 1.02]}
			rotation={[-1.38, -0.53, 0.02]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#ff0000"
			position={[7.76, -0.28, 0.71]}
			rotation={[0.36, 1.47, 1.11]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={25}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			color="#00ff0d"
			position={[1.06, 5.96, 0.17]}
			rotation={[-1.54, 0.18, -0.19]}
			scale={[0.5, 10, 1.86]}
		/>
		<T.SpotLight
			intensity={2}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			position={[-1.88, 0.34, -0.94]}
			rotation={[-2.79, -1.07, -0.57]}
			scale={5.34}
		/>
		<T.SpotLight
			intensity={2}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			position={[1.99, 0.31, -0.51]}
			rotation={[0.56, -1.28, 2.8]}
			scale={-3.09}
		/>
		<T.SpotLight
			intensity={2}
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			position={[0, 0.17, -2.37]}
			rotation={[-3.06, 0.02, 0.02]}
			scale={1.66}
		/>
		<T.SpotLight
			intensity={10}
			color="#ffff55"
			angle={Math.PI / 8}
			penumbra={0.15}
			decay={2}
			position={[0, 1, 2]}
			scale={1.66}
		/>
	</Canvas>
</div>

<style lang="scss">
	.canvas {
		flex-grow: 1;
		aspect-ratio: 1;
	}
</style>
