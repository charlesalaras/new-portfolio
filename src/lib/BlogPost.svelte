<script>
	import Chip from './Chip.svelte'

	export let postTitle;
	export let byline;
	export let date;
	export let tags = [];
</script>

<div class="post">
	<h1 id="post-title">{postTitle}</h1>
	<p id="post-byline">{byline}</p>
	<p id="post-date">Posted on {date}</p>
	<div class="tags">
		{#each tags as tag}
			<Chip content={tag}/>
		{/each}
	</div>
</div>

<style>
.post {
	line-height: 0.5;
	padding: 0.5rem 1rem;
	width: 100%;
	border-radius: 14px;
	background-color: rgba(255, 255, 255, 0.5);
}
h1 {
	font-size: 1.25rem;
}
.tags {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}
</style>
