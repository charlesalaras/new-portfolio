<script>
	
function getRandomRadiusModifier() {
	let num = Math.floor(Math.random() * 10) + 1;
	num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
	return num;
}
	
function bezier() {
    
  let d = "";
	let pathCoordinates = [];
	let radius = Math.floor(Math.random() * 600) + 200;
	// If left, x: [250, 500]
	// If right, x: [500, 750]
	let centerX = 240;
	let centerY = 500;
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
	let dPath = bezier();
</script>

<div class="background">
	<svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="contain: strict; stroke-width: 1px;">
		<path class="gradient" d={dPath}/>
	</svg>
</div>

<style>
	.background {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		filter: blur(20px);
		z-index: 1;
	}
	.gradient {
		transition all 15s;
	}
</style>
