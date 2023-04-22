<script>
	import { fade } from 'svelte/transition'
	import Nav from '../../lib/Nav.svelte'
	import Background from '../../lib/Background.svelte'
	export let data

	let colors = {
		'/': ["#1CA7EC", "#4ADEDE"],
		'/about': ["red", "#FD007A"],
		'/contact': ["green", "#11FF3E"],
		'/projects': []
	};
	function pageTransition(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					top: ${-1+t}px;
					border-radius: ${t}px ${t}px 0px 0px;
				`
			}
		};
	}
</script>

<Nav />
{#key data.pathname}
<div class="app"
	in:fade={{ duration: 300, delay: 400 }}
	out:fade={{ duration: 300 }}
>
	<Background color1={colors[data.pathname][0]} color2={colors[data.pathname][1]}/>
    <main>
        <slot />
    </main>
</div>
{/key}

<style>
@media (prefers-color-scheme: dark) {
	* {
		color: white;
	}
}
</style>
