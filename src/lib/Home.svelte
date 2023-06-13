<script>
let innerWidth;
let offset;

function verticalDrag(node) {
	node.addEventListener('wheel', (evt) => {
		evt.preventDefault();
		node.scrollLeft += evt.deltaY;
	});
	node.addEventListener('scroll', (evt) => { offset = node.scrollLeft });
}

</script>

<svelte:window bind:innerWidth/>
<div class="container">
<div class="content">
	<div class="section landing">Hello! I'm Charles Alaras</div>
	<div class="section programming">I'm a <a href="/projects">Programmer</a></div>
	<div class="section engineering">I'm an <a href="/projects">Engineer</a></div>
	<div class="section editing">I'm a <a href="/projects">Video Editor</a></div>
	<div class="section production">I'm an <a href="/projects">Event Producer</a></div>
	<div class="section design">and I'm a <a href="/projects">Graphic Designer</a></div>
	<div class="section contact">Ready to build together? <a href="/contact">Let's do it.</a></div>
</div>
</div>
<style>
.container {
	width: 100vw;
	height: 100%;
	overflow-x: scroll;
}
.content {
	display: flex;
	width: fit-content;
	height: 100%;

}
.section {
	flex: 0 0 100vw;
	text-align: center;
	font-size: 8rem;
	font-weight: 900;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
