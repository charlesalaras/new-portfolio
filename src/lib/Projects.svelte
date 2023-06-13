<script>
	import Project from '@lib/Project.svelte'
	import Filter from '@lib/Filter.svelte'

	import { fade } from 'svelte/transition'

	export let projects = [];
	let currProjects = projects;
	let innerWidth;
	let offset = 0;

	let query = "";

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

	const updateProjects = (query) => {
		currProjects = [];
		if(query === "") {
			currProjects = projects;
			return;
		}

		for(var i = 0; i < projects.length; i++) {
			if(fuzzySearch(query.toLowerCase(), projects[i].title.toLowerCase())) {
				currProjects.push(projects[i]);
			}
		}
	}
	// Provided by https://github.com/bevacqua/fuzzysearch
	function fuzzySearch(needle, haystack) {
		var hlen = haystack.length;
		var nlen = needle.length;
		if(nlen > hlen) {
			return false;
		}
		if(nlen === hlen) {
			return needle === haystack;
		}
		outer: for(var i = 0, j = 0; i < nlen; i++) {
			var nch = needle.charCodeAt(i);
			while(j < hlen) {
				if(haystack.charCodeAt(j++) === nch) {
					continue outer;
				}
			}
			return false;
		}
		return true;
	}

	function verticalDrag(node) {
		node.addEventListener('wheel', (evt) => {
			evt.preventDefault();
			node.scrollLeft += evt.deltaY;
		});
		node.addEventListener('scroll', (evt) => { offset = node.scrollLeft });
	}
	$: query, updateProjects(query);
</script>

<svelte:window bind:innerWidth/>

<div class="content">
	<div class="search">
		<input type="text" name="search" placeholder="Search" bind:value={query}>
	</div>
	<div class="filters">
		<Filter content="Programming" />
		<Filter content="Engineering" />
		<Filter content="Video Editing" />
		<Filter content="Event Production" />
		<Filter content="Graphic Design" />
	</div>
	<div class="carousel" use:verticalDrag>
		{#each currProjects as project, i}
			{#if i == 0}
			<li transition:fade style="margin-left: 37.5vw;">
				<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
			</li>
			{:else}
				{#if i == projects.length - 1}
				<li transition:fade style="margin-right: 37.5vw;">
					<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
				</li>
				{:else}
				<li transition:fade><Project width={innerWidth} scrollPos={offset} index={i} {...project}/></li>
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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
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
