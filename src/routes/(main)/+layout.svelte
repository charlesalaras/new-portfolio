<script>
	import { fade } from 'svelte/transition'
	import Nav from '../../lib/Nav.svelte'
	
	export let data
</script>

<Nav />
{#key data.pathname}
<div class="app"
	in:fade={{ duration: 300, delay: 400 }}
	out:fade={{ duration: 300 }}
>

    <main>
        <slot />
    </main>
</div>
{/key}
