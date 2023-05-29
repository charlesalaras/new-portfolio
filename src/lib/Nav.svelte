<script>
export let pathname;
</script>

<div class="bar hc">
    <a href='/'>INTRO</a>
    <a href='/about'>ABOUT</a>
    <a href='/projects'>PROJECTS</a>
    <a href='/contact'>CONTACT</a>
    <a href='/blog'>BLOG</a>
</div>

<style>
	.bar {
		border-radius: calc(2rem / 3);
		gap: 2rem;
		box-sizing: border-box;
	}
	.bar:after {
		content: "";
		height: 1px;
		width: 20%;
		position: absolute;
		top: 100%;
		transition: left, opacity;
		transition-duration: 600ms;
		transition-timing-function: ease;
		opacity: 0;
	}
	.bar:after {
		left: 65%;
		opacity: 0;
	}
	.bar:hover:after {
		left: 15%;
		opacity: 1;
	}
	.bar:before {
		content: "";
		height: 1px;
		width: 20%;
		position: absolute;
		top: -1px;
		transition: left, opacity;
		transition-duration: 600ms;
		transition-timing-function: ease;
		opacity: 0;
	}
	.bar:before {
		left: 15%;
		opacity: 0;
	}
	.bar:hover:before {
		left: 65%;
		opacity: 1;
	}
</style>
