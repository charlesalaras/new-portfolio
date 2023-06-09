<script>
	import Project from '@lib/Project.svelte'
	import Chip from '@lib/Chip.svelte'
	
	export let projects;
	let innerWidth;
	let offset = 0;

	let query;

	let filters = {
		"programming": false,
		"engineering": false,
		"editing": false,
		"production": false,
		"design": false
	};

	const updateFilter = (filter) => {
		filters[filter] = !filters[filter];
	}

	function verticalDrag(node) {
		node.addEventListener('wheel', (evt) => {
			evt.preventDefault();
			node.scrollLeft += evt.deltaY;
		});
		node.addEventListener('scroll', (evt) => { offset = node.scrollLeft });
	}
	console.log(projects);
</script>

<svelte:window bind:innerWidth/>

<div class="content">
	<div class="search">
		<input type="text" name="search" placeholder="Search" bind:value={query}>
	</div>
	<div class="filters">
		<Chip color="var(--foreground)" content="Reset" />
		<Chip content="Programming" />
		<Chip content="Engineering" />
		<Chip content="Video Editing" />
		<Chip content="Event Production" />
		<Chip content="Graphic Design" />
	</div>
	<div class="carousel" use:verticalDrag>
		{#each projects as project, i}
			{#if i == 0}
			<li style="margin-left: 37.5vw;">
				<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
			</li>
			{:else}
				{#if i == projects.length - 1}
				<li style="margin-right: 37.5vw;">
					<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
				</li>
				{:else}
				<li><Project width={innerWidth} scrollPos={offset} index={i} {...project}/></li>
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
.filters {
	display: flex;
	align-items: center;
	justify-content: center;
}
.content {
	overflow: hidden;
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
