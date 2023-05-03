<script>
import Project from '../../../lib/Project.svelte'

let project = [
	{name: 'Project 1', color: 'linear-gradient(#1212FF, #5050FF)'},
	{name: 'Project 2', color: 'linear-gradient(#FF5555, #FF1010)'},
	{name: 'Project 3', color: 'linear-gradient(#33FF33, #77FF77)'},
	{name: 'Project 4', color: 'linear-gradient(#EE00FF, #9000FF)'},
	{name: 'Project 5', color: 'linear-gradient(#DDBB00, #CC5900)'},
	{name: 'Project 1', color: 'linear-gradient(#1212FF, #5050FF)'},
	{name: 'Project 2', color: 'linear-gradient(#FF5555, #FF1010)'},
	{name: 'Project 3', color: 'linear-gradient(#33FF33, #77FF77)'},
	{name: 'Project 4', color: 'linear-gradient(#EE00FF, #9000FF)'},
	{name: 'Project 5', color: 'linear-gradient(#DDBB00, #CC5900)'},
	{name: 'Project 1', color: 'linear-gradient(#1212FF, #5050FF)'},
	{name: 'Project 2', color: 'linear-gradient(#FF5555, #FF1010)'},
	{name: 'Project 3', color: 'linear-gradient(#33FF33, #77FF77)'},
	{name: 'Project 4', color: 'linear-gradient(#EE00FF, #9000FF)'},
	{name: 'Project 5', color: 'linear-gradient(#DDBB00, #CC5900)'},
	{name: 'Project 6', color: 'linear-gradient(#505050, #DDDDFF)'}
];

let offset = 0;
let moving = false;

function dragMe(node) {
	node.addEventListener('wheel', (evt) => {
		evt.preventDefault();
		node.scrollLeft += evt.deltaY;
	});
}

</script>
<p>hello, {offset}</p>
<div class="draggable" use:dragMe>
	<div>TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</div>
	{#each project as {name, color}, i}
	<li>
		<Project deg={offset} name={name} color={color}/>
	</li>
	{/each}
</div>

<style>
.draggable {
	width: 100%;
	height: 80vh;
	/*scrollbar-width: none;*/
	overflow-x: scroll;
	overflow-y: hidden;
	list-style-type: none;
}
</style>
