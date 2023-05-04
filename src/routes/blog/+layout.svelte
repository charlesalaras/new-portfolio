<script>
	import "../styles.css"
</script>

<div class="header">
	<h1>Charles Alaras - Blog</h1>
</div>
<slot>

</slot>

<style>
.header {
	position: fixed;
	top: 0px;
	left: 0px;
	color: #252525;
	font-weight: 900;
	font-size: 2rem;
	background: linear-gradient(white, 90%, rgba(255,255,255,0));
	padding-bottom: 3rem;
	width: 100vw;
}
</style>
