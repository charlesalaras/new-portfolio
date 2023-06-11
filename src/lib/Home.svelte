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
<div class="content" use:verticalDrag>
	<div class="section landing"><span>Hello! I'm Charles Alaras</span></div>
	<div class="section programming"><span>I'm a <a href="/projects">Programmer</a></span></div>
	<div class="section engineering"><span>I'm an Engineer</span></div>
	<div class="section editing"><span>I'm a Video Editor</span></div>
	<div class="section production"><span>I'm an Event Producer</span></div>
	<div class="section design"><span>and I'm a Graphic Designer</span></div>
	<div class="section contact"><span>Ready to build together? <a href="/contact">Let's do it.</a></span></div>

</div>

<style>
.content {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	overflow-x: auto;
	white-space: nowrap;

}
span {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.section {
	display: inline-block;
	text-align: center;
	font-size: 8rem;
	font-weight: 900;
	width: 100vw;
	height: 100vh;
}
</style>
