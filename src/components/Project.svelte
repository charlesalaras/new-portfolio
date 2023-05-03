<script>
	export let name;
	export let color;
    export let deg = 0;
</script>

<div id="tridiv" style="--color: {color}">
  <div class="scene" style="transform:rotateX(0deg) rotateY({deg}deg); ">
    <div class="shape cuboid-1 cub-1">
      <div class="face ft">front</div>
      <div class="face bk">back</div>
      <div class="face rt">right</div>
      <div class="face lt">left</div>
      <div class="face bm">{name}</div>
      <div class="face tp">top</div>
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
#tridiv {
  perspective: 800px;
  overflow: hidden;
  width: 500px;
  height: 1000px;
  font-size: 200%;
  user-select: none;
}
.face {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0);
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
  /* hidden by default, prevent blinking and other weird rendering glitchs */
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
