<script>
export let content;
</script>

<div class="chip">
	<img src="./icons/tag.svg" alt="Tag icon">{content}
</div>

<style>
img {
	width: 1rem;
	height: 1rem;
	margin-right: 0.5rem;
}
.chip {
	width: auto;
	height: 1.5rem;
	border-radius: 12px;
	margin: 0.5rem;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	color: var(--foreground);
	background-color: rgba(0, 0, 0, 0.25);
	transition: .2s ease-in-out;
}
</style>
