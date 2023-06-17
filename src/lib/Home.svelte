<script>
import Section from '@lib/Section.svelte';

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
<div class="container" use:verticalDrag>
<div class="content">
	<div class="section landing">Hello! I'm Charles Alaras</div>
	<Section 
		className="programming"
		content="I'm a "
		linkContent="Programmer"
		link="/projects"
		icon="./icons/terminal-fill.svg"
		images={[]}
	/>
	<Section 
		className="engineering"
		content="I'm an "
		linkContent="Engineer"
		link="/projects"
		icon="./icons/cpu-fill.svg"
		images={[]}
	/>
	<Section 
		className="editing"
		content="I'm a "
		linkContent="Video Editor"
		link="/projects"
		icon="./icons/film.svg"
		images={[]}
	/>
	<Section 
		className="production"
		content="I'm an "
		linkContent="Event Producer"
		link="/projects"
		icon="./icons/calendar-day-fill.svg"
		images={[]}
	/>
	<Section 
		className="design"
		content="and I'm a "
		linkContent="Graphic Designer"
		link="/projects"
		icon="./icons/bezier2.svg"
		images={[]}
	/>
	<Section 
		className="contact"
		content="Ready to build together? "
		linkContent="Let's do it."
		link="/contact"
		icon="./icons/rulers.svg"
		images={[]}
	/>
</div>
</div>
<style>
.container {
	width: 100vw;
	height: 100%;
	overflow-x: scroll;
	scrollbar-width: none;
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
