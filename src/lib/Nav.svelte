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
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15px);
    }
</style>
