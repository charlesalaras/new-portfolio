<script>
	import { goto } from '$app/navigation';
    let hovered = false
	
</script>

<div class="navbar">
    <div on:click={() => { goto('/') }}>INTRO</div>
    <div on:click={() => { goto('/about') }}>ABOUT</div>
    <div on:click={() => { goto('/projects') }}>PROJECTS</div>
    <div on:click={() => { goto('/contact') }}>CONTACT</div>
    <div on:click={() => { goto('/blog') }}>BLOG</div>
</div>

<style>
    .navbar {
		background: rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(15px);
		color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
    }
</style>
