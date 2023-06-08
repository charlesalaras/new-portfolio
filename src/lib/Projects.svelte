<script>
	import Project from '@lib/Project.svelte'

	
	export let projects;
	let innerWidth;
	let offset = 0;

	let query;

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
	<div class="search">
		<input type="text" name="search" placeholder="Search" bind:value={query}>
	</div>
	<div class="filters">
		FILTERS GO HERE
	</div>
	<div class="carousel" use:verticalDrag>
		{#each projects as project, i}
			{#if i == 0}
			<li style="margin-left: 37.5vw;">
				<Project width={innerWidth} scrollPos={offset} index={i} {...project.data}/>
			</li>
			{:else}
				{#if i == projects.length - 1}
				<li style="margin-right: 37.5vw;">
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
input[type=text] {
	border-radius: 1rem;
	border: none;
	height: 2rem;
	padding-left: 2rem;
	background-image: url('./search.svg');
	background-repeat: no-repeat;
	background-position: 0.5rem 0.5rem;
	background-size: 1rem;
}
.content {
	position: absolute;
	left: 0px;
	top: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
}
.carousel {
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
