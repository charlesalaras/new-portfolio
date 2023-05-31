<script>
export let pathname;
</script>

<div class="bar hc">
<ul>
    <li class="one">
		<a href='/'>INTRO</a>
	</li>
    <li class="two">
		<a href='/about'>ABOUT</a>
	</li>
    <li class="three">
		<a href='/projects'>PROJECTS</a>
	</li>
    <li class="four">
		<a href='/contact'>CONTACT</a>
	</li>
    <li class="five">
		<a href='/blog'>BLOG<span class="icon bi-box-arrow-up-right"></span></a>
	</li>
	<hr/>
</ul>
</div>

<style>
	ul {
		padding: 0;
	}
	ul li {
		display: inline;
		text-align: center;
	}
	a {
		display: inline-block;
		width: 20%;
		margin: 0;
	}
	hr {
		height: .25rem;
		width: 20%;
		margin: 0;
		background: linear-gradient(
			to right,
			transparent,
			transparent 25%,
			red 25%,
			red 75%,
			transparent 75%,
			transparent
		);
		border: none;
		transition: .3s ease-in-out;
	}
	/* Text Decorations */
	.bi-box-arrow-up-right {
		display: inline-block;
		margin-left: 0.5rem;
		mask: url("box-arrow-up-right.svg") no-repeat 50% 50%;
	}
	.icon {
		width: 16px;
		height: 16px;
	}
	.bar {
		width: auto;
		border-radius: calc(2rem / 3);
		gap: 2rem;
		box-sizing: border-box;
	}
	/* Bar Decorations */
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
