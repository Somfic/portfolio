<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	let scrollWrapper: HTMLDivElement;

	onMount(() => {
		let sections = gsap.utils.toArray(scrollWrapper.children);

		gsap.registerPlugin(ScrollTrigger);

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: scrollWrapper,
				pin: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
				end: `${scrollWrapper.children.length * window.outerWidth * 0.5}px`
			}
		});
	});
</script>

<div
	class="scroll"
	bind:this={scrollWrapper}
	style:width={`${100 * scrollWrapper?.children.length}vw`}
>
	<slot />
</div>

<style lang="scss">
	.scroll {
		display: flex;
	}
</style>
