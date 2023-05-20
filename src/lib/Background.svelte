<script>
	export let color1;
	export let color2;
    let width;
    let height;
	// Outer BG acts as the background gradient
	// Inner BG acts as an SVG mask of repeated bezier curves and gradient masks
	// If dark: filter: brightness(7%);
</script>

<div class="bg" style="--color1: {color1}; --color2: {color2};">
	<div class="inner-bg" id="bg-mask"></div>
</div>

<style>
@keyframes Gradient {
	0% {background-position: 0% 33%}
	50% {background-position: 100% 66%}
	100% {background-position: 0% 33%}
}
.bg {
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0px;
	left: 0px;
	background: repeating-linear-gradient(45deg, var(--color1) 0%, var(--color2) 10%, var(--color1) 20%);
	background-size: 400% 400%;
	animation: Gradient 60s ease infinite;
	z-index: -2;
}
.inner-bg {
	width: 100%;
	background: url("bg.svg") center / 100% 100% no-repeat;
	height: 100%;
	z-index: -1;
}
</style>
