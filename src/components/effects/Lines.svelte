<svg id="svg-templates" style="position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict" aria-hidden="true">
	<svg viewBox="0 0 1440 1" overflow="visible" id="svg-775814207_222">
		<path d="M 0 0 L 1440 0" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
	<svg viewBox="0 0 1920 1" overflow="visible" id="svg1451014607_222">
		<path d="M 0 0 L 1920 0" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
	<svg viewBox="0 0 514 514" overflow="visible" id="svg-933350988_342">
		<path d="M 257 0 C 398.937 0 514 115.063 514 257 C 514 398.937 398.937 514 257 514 C 115.063 514 0 398.937 0 257 C 0 115.063 115.063 0 257 0 Z" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
	<svg viewBox="0 0 954 954" overflow="visible" id="svg755675776_334">
		<path d="M 477 0 C 740.44 0 954 213.56 954 477 C 954 740.44 740.44 954 477 954 C 213.56 954 0 740.44 0 477 C 0 213.56 213.56 0 477 0 Z" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
	<svg viewBox="0 0 700 700" overflow="visible" id="svg-circle-medium">
		<path d="M 350 0 C 543.3 0 700 156.7 700 350 C 700 543.3 543.3 700 350 700 C 156.7 700 0 543.3 0 350 C 0 156.7 156.7 0 350 0 Z" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
	<svg viewBox="0 0 1200 1" overflow="visible" id="svg-line-short">
		<path d="M 0 0 L 1200 0" fill="transparent" stroke="rgb(255, 255, 255)" stroke-width="2"></path>
	</svg>
</svg>

<div class="bg-lines">
	<div class="line line-1">
		<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%">
			<use href="#svg-775814207_222"></use>
		</svg>
	</div>
	<div class="line line-2">
		<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%">
			<use href="#svg1451014607_222"></use>
		</svg>
	</div>
	<div class="line line-3">
		<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%">
			<use href="#svg-933350988_342"></use>
		</svg>
	</div>
	<div class="line line-4">
		<svg style="width:100%;height:100%;overflow: visible;" preserveAspectRatio="none" width="100%" height="100%">
			<use href="#svg755675776_334"></use>
		</svg>
	</div>
</div>

<style lang="scss">
	.bg-lines {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		opacity: 0.02;
		z-index: 50;
		overflow: visible;
	}

	.line {
		position: absolute;
	}

	.line-1 {
		width: 1440px;
		height: 1px;
		top: 20%;
		left: -200px;
		transform: rotate(-15deg);
	}

	.line-2 {
		width: 1920px;
		height: 1px;
		top: 60%;
		right: -400px;
		transform: rotate(-35deg);
	}

	.line-3 {
		width: 514px;
		height: 514px;
		bottom: 10%;
		left: -100px;
	}

	.line-4 {
		width: 954px;
		height: 954px;
		top: -200px;
		right: -300px;
	}
</style>
