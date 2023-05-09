<script>
	export let icon;
	export let title;
	export let date;
	export let tags;
	export let url;
	export let color;

	import Tag from '$lib/Tag.svelte'
</script>

<div class="container" style="--color: {color};">
	<div class="icon">

	</div>
	<div class="frontmatter">
		<h2>{title}</h2>
		<p>{date}</p>
		<div class="tags">
			{#each tags as tag}
				<Tag>{tag}</Tag>
			{/each}
		</div>
	</div>
</div>

<style>
	.container  {
		margin: 4px;
		padding: 8px;
		border: 1px solid var(--color);
		display: flex;
		flex-direction: row;
	}
</style>
