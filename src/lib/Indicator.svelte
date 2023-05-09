<script>
	export default page;
	let frontmatter = {
		"/": {
			"title": "HOME",
			"icon": "house-fill.svg"
		},
		"/about": {
			"title": "ABOUT",
			"icon": ""
		},
		"/projects": {
			"title": "PROJECTS",
			"icon": ""
		},
		"/contact": {
			"title": "CONTACT",
			"icon": ""
		}
	};
</script>

<div class="indicator">
	<svg class="icon" fill="white" viewBox="0 0 16 16">

	</svg>
	{page}
</div>

<style>
	.indicator {
		background: rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(15px);
	}
	.icon {
		width: 1em;
		height: 1em;
		padding-right: 0.5em;
	}
</style>
