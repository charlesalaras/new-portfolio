<script>
	export let color1;
	export let color2;
    let width;
    let height;
	// Inner BG acts as the background gradient
	// Outer BG acts as an SVG mask of repeated bezier curves and gradient masks
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>
<div class="inner-bg" style="--color1: {color1}; --color2: {color2};">
	<div class="bg">

	</div>
</div>

<style>
.inner-bg {

}
.bg {

}
</style>
