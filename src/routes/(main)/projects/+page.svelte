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

let node;
let innerWidth = 0;
let offset = 0;
let moving = false;

function dragMe(node) {
	node.addEventListener('wheel', (evt) => {
		evt.preventDefault();
		node.scrollLeft += evt.deltaY;
	});
	node.addEventListener('scroll', (evt) => { offset = node.scrollLeft });
}

</script>
<svelte:window bind:innerWidth/>

<p>hello, {offset}, {innerWidth}</p>
<div class="draggable" use:dragMe bind:this={node}>
	{#each project as {name, color}, i}
	{#if i == 0}
	<li style="margin-left: 37.5vw;">
		<Project width={innerWidth} scrollPos={offset} name={name} color={color} index={i}/>
	</li>
	{:else}
		{#if i == project.length - 1}
		<li style="margin-right: 37.5vw;">
			<Project width={innerWidth} scrollPos={offset} name={name} color={color} index={i}/>
		</li>
		{:else}
		<li>
			<Project width={innerWidth} scrollPos={offset} name={name} color={color} index={i}/>
		</li>
		{/if}
	{/if}
	{/each}
</div>

<style>
.draggable {
	position: absolute;
	left: 0px;
	width: 100vw;
	height: 80vh;
	white-space: nowrap;
	scrollbar-width: none;
	overflow-x: scroll;
	overflow-y: hidden;
	list-style-type: none;
}
li {
	display: inline-block;
}
</style>
