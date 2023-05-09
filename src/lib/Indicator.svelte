<script>
	export default page;
	let frontmatter = {
		"/": {
			"title": "HOME",
			"icon": "house-fill.svg"
		},
		"/about": {
			"title": "ABOUT",
			"icon": "person-fill.svg"
		},
		"/projects": {
			"title": "PROJECTS",
			"icon": "wrench-adjustable.svg"
		},
		"/contact": {
			"title": "CONTACT",
			"icon": "envelope-at-fill.svg"
		}
	};
</script>

<div class="indicator">
	<div class="icon" style="background: url({frontmatter["page"]["icon"]})"/>
	{frontmatter["page"]["title"]}
</div>

<style>
	.indicator {
		background: rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(15px);
		font-weight: 900;
	}
	.icon {
		width: 1em;
		height: 1em;
		padding-right: 0.5em;
	}
</style>
