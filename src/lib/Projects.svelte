<script>
	export let projects;
	let innerWidth;

	function verticalDrag(node) {
		node.addEventListener('wheel', (evt) => {
			evt.preventDefault();
			node.scrollLeft += evt.deltaY;
		}};
		node.addEventListener('scroll', (evt) => { offset = node.scrollLeft }});
	}
</script>

<svelte:window bind:innerWidth/>

<div class="content">
	<div class="carousel" use:verticalDrag>
		{#each projects as project, i}
			{#if i == 0}
			<li style="margin-left: 37.5 vw;">
				<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
			</li>
			{:else}
				{#if i == project.length - 1}
				<li style="margin-right: 37.5 vw;">
					<Project width={innerWidth} scrollPos={offset} index={i} {...project}/>
				</li>
				{:else}
				<li><Project width={innerWidth} scrollPos={offset} index={i} {...project}/></li>
				{/if}
			{/if}
		{/each}
	</div>
</div>
