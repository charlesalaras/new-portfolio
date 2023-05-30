<script>
export let pathname;
</script>

<div class="bar hc">
<ul>
    <li>
		<a href='/'>INTRO</a>
	</li>
    <li>
		<a href='/about'>ABOUT</a>
	</li>
    <li>
		<a href='/projects'>PROJECTS</a>
	</li>
    <li>
		<a href='/contact'>CONTACT</a>
	</li>
    <li>
		<a href='/blog'>BLOG<div class="icon bi-box-arrow-up-right"></div></a>
	</li>
</ul>
<div class="underbar"></div>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	.bi-box-arrow-up-right {
		mask: url("box-arrow-up-right.svg") no-repeat 50% 50%;
	}
	.icon {
		width: 1rem;
		height: 1rem;
	}
	.underbar {
		transition: width;
		transition-duration: 500ms;
		transition-timing-function: ease;
	}
	.bar .underbar {
		width: 50%;
		height: 0.1rem;
	}
	.bar:hover .underbar {
		width: 100%;
	}
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
