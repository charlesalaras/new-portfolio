<script>
	export let color1;
	export let color2;
    let width;
    let height;
	// Outer BG acts as the background gradient
	// Inner BG acts as an SVG mask of repeated bezier curves and gradient masks
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>
<div class="bg" style="--color1: {color1}; --color2: {color2};">
	<div class="inner-bg"></div>
</div>

<style>
.inner-bg {
	width: 100vw;
	height: 100vh;
	background: linear-gradient(var(--color1), var(--color2));
	position: absolute;
	top: 0px;
	left: 0px;
}
.bg {
	width: 100%;
	background: url("bg.svg") center / 100% 100% no-repeat;
	height: 100%
}
</style>
