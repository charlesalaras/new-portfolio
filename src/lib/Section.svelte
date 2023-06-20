<script>
export let className ="";
export let content;
export let linkContent;
export let link = "#";
export let icon;
export let images = [];
export let center = false;
</script>

<div class="section {className}">
<div class="section-icon" style="background-image: url('{icon}')"></div>
{#if images.length != 0}
{#each images as image}
<div class="image" style="background-image: url('{image}')"></div>
{/each}
{/if}
{content}
<a href="{link}">{linkContent}</a>
</div>
<style>
a {
	text-decoration: underline;
}
.section-icon {
	position: absolute;
	left: 25vw;
	background-size: 100% 100%;
	filter: contrast(0);
	transform: rotate(-25deg);
	width: 60vh;
	height: 60vh;
	opacity: 0.75;
	z-index: -1;
}
.image {
	position: absolute;
	width: 10%;
	height: 30vh;
	background-color: red;
	border-radius: 14px;
}
.section {
	position: relative;
	flex: 0 0 100vw;
	text-align: center;
	font-size: 8rem;
	font-weight: 900;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow-y: hidden;
}
</style>
