<script>

export let color1;
export let color2;

function getRandomRadiusModifier() {
	let num = Math.floor(Math.random() * 10) + 1;
	num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	return num;
}
	
function bezier(pos) {
    
  let d = "";
	let pathCoordinates = [];
	// radius can be between 50 and 100
	let radius = Math.random() * (100 - 50) + 50;
	// If left, x: [25, 40]
	// If right, x: [50, 75]
	//let centerX = pos === 0 ? Math.random() * (50 - 25) + 25 : Math.random() * (75 - 50) + 50;
	let centerX = pos === 0 ? 10 : 90;
	let centerY = 50;
	for(let i = 0; i < 2 * Math.PI; i+= 0.6) {
		let x = Math.floor(Math.random() * radius) * Math.cos(i) + centerX + getRandomRadiusModifier();
		let y = Math.floor(Math.random() * radius) * Math.sin(i) + centerY + getRandomRadiusModifier();
		pathCoordinates.push({x,y});
		if(i + 0.6 >= 2* Math.PI) {
			pathCoordinates.push(pathCoordinates[0]);
		}
	}
	
  pathCoordinates.forEach((coord,index, array) => {
    let p = [];
    if (index === 0) {
      d += `M${coord.x},${coord.y} `;
      p.push(array[array.length - 3]);
      p.push(array[index]);
      p.push(array[index+1]);
      p.push(array[index+2]);
    } else if (index === array.length - 2) {
      p.push(array[index-1]);
      p.push(array[index]);
      p.push(array[index+1]);
      p.push(array[0]);
    } else if (index === array.length - 1) {
      return
    } else {
      p.push(array[index-1]);
      p.push(array[index]);
      p.push(array[index+1]);
      p.push(array[index+2]);
    }
    let bp = [];
    bp.push( { x: p[1].x,  y: p[1].y } );
    bp.push( { x: ((-p[0].x + 6*p[1].x + p[2].x) / 6), y: ((-p[0].y + 6*p[1].y + p[2].y) / 6)} );
    bp.push( { x: ((p[1].x + 6*p[2].x - p[3].x) / 6),  y: ((p[1].y + 6*p[2].y - p[3].y) / 6) } );
    bp.push( { x: p[2].x,  y: p[2].y } );
    d += "C" + bp[1].x + "," + bp[1].y + " " + bp[2].x + "," + bp[2].y + " " + bp[3].x + "," + bp[3].y + " ";
    
  })

  return d;
};

let vwWidth;
let vwHeight;

let dPath0 = bezier(0);
let dPath1 = bezier(1);

let count = 15;
setInterval(() => { count--; }, 1000);

$: if(count <= 0) {
	dPath0 = bezier(0);
	dPath1 = bezier(1);
	count = 15;
}

// FIXME: Define a radial gradient fill for both colors with the reflect property
</script>

<svelte:window bind:innerWidth={vwWidth} bind:innerHeight={vwHeight}/>
<div class="background">
	<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="contain: strict; stroke-width: 1px;">
		<path class="gradient" fill={color1} d={dPath0}/>
		<path class="gradient" fill={color2} d={dPath1}/>
	</svg>
</div>

<style>
	.background {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		filter: blur(50px);
		z-index: -1;
	}
	.gradient {
		transition: all 30s;
	}
</style>
