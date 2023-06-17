<script>
export let className ="";
export let content;
export let linkContent;
export let link = "#";
export let icon;
export let images = [];
</script>

<div class="section {className}">
<div class="icon" style="background-image: url('{icon}')"></div>
{content}
<a href="{link}">{linkContent}</a>
</div>
<style>
a {
	text-decoration: underline;
}
.icon {

}
.section {
	flex: 0 0 100vw;
	text-align: center;
	font-size: 8rem;
	font-weight: 900;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
