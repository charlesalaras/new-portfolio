<script>
	import Project from '@lib/Project.svelte'

	export let projects;
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

<div class="content">
	<div class="carousel" use:verticalDrag>
		{#each projects as project, i}
			{#if i == 0}
			<li style="margin-left: 37.5 vw;">
				<Project width={innerWidth} scrollPos={offset} index={i} {...project.data}/>
			</li>
			{:else}
				{#if i == projects.length - 1}
				<li style="margin-right: 37.5 vw;">
					<Project width={innerWidth} scrollPos={offset} index={i} {...project.data}/>
				</li>
				{:else}
				<li><Project width={innerWidth} scrollPos={offset} index={i} {...project.data}/></li>
				{/if}
			{/if}
		{/each}
	</div>
</div>

<style>
.carousel {
	position: absolute;
	left: 0px;
	width: 100vw;
	height:80vh;
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
