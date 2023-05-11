<script>
	import { onMount } from 'svelte';
    let width;
    let height;
    
    let canvasElement;
    const COLORS = [
		'#0020FF', // blue
		'#00CCFF', // cyan
		'#121212', // black
	];

    function draw(ctx) {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);

    }
    
	onMount(() => {
        canvasElement.width = width;
    	canvasElement.height = height;
		const ctx = canvasElement.getContext("2d");
        draw(ctx);
	})

    $: {
        if(canvasElement) {
			canvasElement.width = width;
			canvasElement.height = height;
			const ctx = canvasElement.getContext("2d");
			draw(ctx);
        }
    }
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>
<canvas bind:this={canvasElement}>

</canvas>

<style>
canvas {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
	z-index: 2;
}
</style>
