<script>
	export let content;
	export let callback;
	let toggle = false;
</script>

<div on:click={() => { toggle = !toggle; }} class="chip {toggle ? "on" : ""}">
{#if toggle}
<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="bi bi-check-lg" fill="var(--foreground)" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
{/if}
{content}
</div>

<style>
svg {
	width: 1rem;
	height: 1rem;
}
.chip {
	height: 1.5rem;
	border-radius: 12px;
	margin: 0.5rem;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	color: var(--chip-color);
	border: 1px solid var(--chip-color);
	background-color: transparent;
	transition: .2s ease-in-out;
}
.chip:hover:not(.on) {
	transform: scale(1.1);
	background-color: var(--chip-hover);
}
.on {
	color: inherit;
	background-color: var(--chip-color);
}
</style>
