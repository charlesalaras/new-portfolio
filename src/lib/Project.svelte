<script>
	export let width;
	export let index;
    export let scrollPos;

	export let title;
	export let date;
	export let header;
	export let type;

	let deg = 0;

	function smoothstep (min, max, value) {
		var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
  		return x*x*(3 - 2*x);
	};


	$: {
	let origin = scrollPos - (index * 0.25 * width); // offset towards zero
	let itemWidth = 0.25 * width;
	/*
	if(scrollPos >= (index * 0.25 * width) - (0.125 * width) && scrollPos <= (index * 0.25 * width) + (0.125 * width)) deg = 0;
	else if(scrollPos < index * 0.25 * width) {
		deg = -45;
	} else if(scrollPos > index * 0.25 * width) {
		deg = 45;
	}
	*/
	if(origin < -itemWidth / 4) { // Curve from 0 to -45 then -90
		if(origin < -itemWidth) deg = -(smoothstep(itemWidth, 2 * itemWidth, Math.abs(origin)) * 45) - 45;
		else deg = -smoothstep(itemWidth / 4, itemWidth, Math.abs(origin)) * 45;
	}
	else if(origin > itemWidth / 4) { // Curve from 0 to 45 then 90
		if(origin > itemWidth) deg = (smoothstep(itemWidth, 2 * itemWidth, origin) * 45) + 45;
		else deg = (smoothstep(itemWidth / 4, itemWidth, origin)) * 45;
		//deg = 45;
	}
	else { // Its in the zero range
		deg = 0;
	}
	}
</script>

<div id="tridiv" style="--color: rgba(50,50,50,1); --size: {(width / 2000) * 200}%">
  <div class="scene" style="transform:rotateX(0deg) rotateY({deg}deg); ">
    <div class="shape cuboid-1 cub-1">
      <div class="face ft">
		<div class="title">{title}</div>
	  </div>
      <div class="face bk">
		<div class="title">{title}</div>
	  </div>
      <div class="face rt"></div>
      <div class="face lt"></div>
      <div class="face bm">
	  <div class="front-title">
	  	<span>{title}</span>
		<span class="date">{date}</span>
	  </div>
	  </div>
      <div class="face tp"></div>
      <div class="cr cr-0">
        <div class="face side s0"></div>
        <div class="face side s1"></div>
        <div class="face side s2"></div>
      </div>
      <div class="cr cr-1">
        <div class="face side s0"></div>
        <div class="face side s1"></div>
        <div class="face side s2"></div>
      </div>
      <div class="cr cr-2">
        <div class="face side s0"></div>
        <div class="face side s1"></div>
        <div class="face side s2"></div>
      </div>
      <div class="cr cr-3">
        <div class="face side s0"></div>
        <div class="face side s1"></div>
        <div class="face side s2"></div>
      </div>
    </div>
  </div>
</div>

<style>
.front-title {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	height: 100%;
	transform: rotate(270deg);
	font-weight: 900;
}
.title {
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 900;
}
.date {
	font-size: 1rem;
	font-weight: 400;
}
#tridiv {
  perspective: 800px;
  overflow: hidden;
  width: 25vw;
  height: 80vh;
  font-size: var(--size);
  user-select: none;
}
.scene, .shape, .face, .face-wrapper, .cr {
  position: absolute;
  transform-style: preserve-3d;
}
.scene {
  width: 80em;
  height: 80em;
  top: 50%;
  left: 50%;
  margin: -40em 0 0 -40em;
}
.shape {
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 50%;
}
.face, .face-wrapper {
  overflow: hidden;
  transform-origin: 0 0;
  backface-visibility: hidden;
}
.face {
  background-size: 100% 100%!important;
  background-position: center;
}
.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%
}
.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}
.side {
  left: 50%;
}
.cr, .cr .side {
  height: 100%;
}
[class*="cuboid"] .ft, [class*="cuboid"] .bk {
  width: 100%;
  height: 100%;
}
[class*="cuboid"] .bk {
  left: 100%;
}
[class*="cuboid"] .rt {
  transform: rotateY(-90deg) translateX(-50%);
}
[class*="cuboid"] .lt {
  transform: rotateY(90deg) translateX(-50%);
}
[class*="cuboid"] .tp {
  transform: rotateX(90deg) translateY(-50%);
}
[class*="cuboid"] .bm {
  transform: rotateX(-90deg) translateY(-50%);
}
[class*="cuboid"] .lt {
  left: 100%;
}
[class*="cuboid"] .bm {
  top: 100%;
}
/* .cub-1 styles */
.cub-1 {
  transform:translate3D(0em, 0em, 0em) rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  opacity:1;
  width:16em;
  height:2em;
  margin:-1em 0 0 -8em;
}
.cub-1 .ft {
  transform:translateZ(6em);
}
.cub-1 .bk {
  transform:translateZ(-6em) rotateY(180deg);
}
.cub-1 .rt, .cub-1 .lt {
  width:12em;
  height:2em;
}
.cub-1 .tp, .cub-1 .bm {
  width:16em;
  height:12em;
}
.cub-1 .face {
  background: var(--color);
}
.cub-1 .ft {
  width:14.5em;
  margin-left:0.75em;
}
.cub-1 .bk {
  width:14.5em;
  margin-left:-0.75em;
}
.cub-1 .rt, .cub-1 .lt {
  width:10.5em;
}
.cub-1 .tp, .cub-1 .bm, .cub-1 .tp .photon-shader, .cub-1 .bm .photon-shader {
  border-radius:0.75em;
}
.cub-1 .cr {
  width:0.75em;
  left:0.375em;
}
.cub-1 .cr-0 {
  transform: translate3D(14.5em, 0, 5.25em);
}
.cub-1 .cr-1 {
  transform: translate3D(14.5em, 0, -5.25em);
}
.cub-1 .cr-2 {
  transform: translate3D(0, 0, -5.25em);
}
.cub-1 .cr-3 {
  transform: translate3D(0, 0, 5.25em);
}
.cub-1 .cr-0 .s0 {
  transform: rotateY(15deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-0 .s1 {
  transform: rotateY(45deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-0 .s2 {
  transform: rotateY(75deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-1 .s0 {
  transform: rotateY(105deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-1 .s1 {
  transform: rotateY(135deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-1 .s2 {
  transform: rotateY(165deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-2 .s0 {
  transform: rotateY(195deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-2 .s1 {
  transform: rotateY(225deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-2 .s2 {
  transform: rotateY(255deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-3 .s0 {
  transform: rotateY(285deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-3 .s1 {
  transform: rotateY(315deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .cr-3 .s2 {
  transform: rotateY(345deg) translate3D(-50%, 0, 0.725em);
}
.cub-1 .side {
  width:0.42692378864668407em;
}
</style>
