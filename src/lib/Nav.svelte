<script>
export let pathname;

const percents = {
	"/": "0%",
	"/about": "20%",
	"/projects": "40%",
	"/contact": "60%",
	"/blog": "80%"
}

const margin = percents[pathname] 
</script>

<div class="bar hc">
<ul>
    <li class="one"><a href='/'>INTRO</a></li><!--
 --><li class="two"><a href='/about'>ABOUT</a></li><!--
 --><li class="three"><a href='/projects'>PROJECTS</a></li><!--
 --><li class="four"><a href='/contact'>CONTACT</a></li><!--
 --><li class="five"><a href='/blog'>BLOG<span class="icon bi-box-arrow-up-right"></span></a></li>
	<hr style="margin-left: {margin}"/>
</ul>
</div>

<style>
	/* List Stylings */
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
		padding: 0.25rem 0;
		margin: 0;
	}
	hr {
		height: .1rem;
		width: 20%;
		margin: 0;
		border: none;
		transition: .3s ease-in-out;
	}
	/* Link Animations */
	.bar hr {
		transform: scaleX(0.25);
	}
	.bar:hover hr {
		transform: scaleX(1);
	}
	.one:hover ~ hr { margin-left: 0% !important; }
	.two:hover ~ hr { margin-left: 20% !important; }
	.three:hover ~ hr { margin-left: 40% !important; }
	.four:hover ~ hr { margin-left: 60% !important; }
	.five:hover ~ hr { margin-left: 80% !important; }

	/* Text Decorations */
	.bi-box-arrow-up-right {
		display: inline-block;
		margin-left: 0.5rem;
		mask: url("./icons/box-arrow-up-right.svg") no-repeat 50% 50%;
	}
	.icon {
		width: 16px;
		height: 16px;
	}
	/* Bar Markup */
	.bar {
		align-self: center;
		justify-self: center;
		width: 50%;
		border-radius: calc(2rem / 3);
		box-sizing: border-box;
		padding: 0 1rem;
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
