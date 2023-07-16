<script>
let sections = [
	{ id: "education", icon: "./icons/mortarboard-fill.svg", title: "Education"},
	{ id: "github", icon: "./icons/github.svg", title: "GitHub"},
	{ id: "linkedin", icon: "./icons/linkedin.svg", title: "LinkedIn"},
	{ id: "skills", icon: "./icons/braces-asterisk.svg", title: "Skills"},
	{ id: "employment", icon: "./icons/tools.svg", title: "Employment"},
];
</script>

<div class="content">
	<li><div class="hexagon education" id="education"><div class="icon" style="mask-image: url('./icons/mortarboard-fill.svg');"></div>Education</div></li>
	<li><div class="hexagon github" id="github"><div class="icon" style="mask-image: url('./icons/github.svg');"></div>GitHub</div></li>
	<li><div class="hexagon linkedin" id="linkedin"><div class="icon" style="mask-image: url('./icons/linkedin.svg');"></div>LinkedIn</div></li>
	<li></li>
	<li><div class="hexagon skills" id="skills"><div class="icon" style="mask-image: url('./icons/braces-asterisk.svg');"></div>Skills</div></li>
	<li><div class="hexagon employment" id="employment"><div class="icon" style="mask-image: url('./icons/tools.svg');"></div>Employment</div></li>
</div>

<style>
li:nth-child(4n) {
	height: 0px;
	flex-basis: 100%;
}
.content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	list-style: none;
}
.hexagon {
	width: calc(20vw + 2px);
	height: calc(20vw + 2px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: red;
	clip-path: polygon(47.5% 5.66987%, 48.2899% 5.30154%, 49.13176% 5.07596%, 50% 5%, 50.86824% 5.07596%, 51.7101% 5.30154%, 52.5% 5.66987%, 87.14102% 25.66987%, 87.85495% 26.16978%, 88.47124% 26.78606%, 88.97114% 27.5%, 89.33948% 28.2899%, 89.56505% 29.13176%, 89.64102% 30%, 89.64102% 70%, 89.56505% 70.86824%, 89.33948% 71.7101%, 88.97114% 72.5%, 88.47124% 73.21394%, 87.85495% 73.83022%, 87.14102% 74.33013%, 52.5% 94.33013%, 51.7101% 94.69846%, 50.86824% 94.92404%, 50% 95%, 49.13176% 94.92404%, 48.2899% 94.69846%, 47.5% 94.33013%, 12.85898% 74.33013%, 12.14505% 73.83022%, 11.52876% 73.21394%, 11.02886% 72.5%, 10.66052% 71.7101%, 10.43495% 70.86824%, 10.35898% 70%, 10.35898% 30%, 10.43495% 29.13176%, 10.66052% 28.2899%, 11.02886% 27.5%, 11.52876% 26.78606%, 12.14505% 26.16978%, 12.85898% 25.66987%);
	font-size: 2rem;
	font-weight: 900;
	transition: 0.3s ease;
}
.hexagon:hover {
	transform: scale(1.1);
}
.hexagon:before {
	position: absolute;
	content: "";
	width: 20vw;
	height: 20vw;
	background-color: var(--primary);
	clip-path: polygon(47.5% 5.66987%, 48.2899% 5.30154%, 49.13176% 5.07596%, 50% 5%, 50.86824% 5.07596%, 51.7101% 5.30154%, 52.5% 5.66987%, 87.14102% 25.66987%, 87.85495% 26.16978%, 88.47124% 26.78606%, 88.97114% 27.5%, 89.33948% 28.2899%, 89.56505% 29.13176%, 89.64102% 30%, 89.64102% 70%, 89.56505% 70.86824%, 89.33948% 71.7101%, 88.97114% 72.5%, 88.47124% 73.21394%, 87.85495% 73.83022%, 87.14102% 74.33013%, 52.5% 94.33013%, 51.7101% 94.69846%, 50.86824% 94.92404%, 50% 95%, 49.13176% 94.92404%, 48.2899% 94.69846%, 47.5% 94.33013%, 12.85898% 74.33013%, 12.14505% 73.83022%, 11.52876% 73.21394%, 11.02886% 72.5%, 10.66052% 71.7101%, 10.43495% 70.86824%, 10.35898% 70%, 10.35898% 30%, 10.43495% 29.13176%, 10.66052% 28.2899%, 11.02886% 27.5%, 11.52876% 26.78606%, 12.14505% 26.16978%, 12.85898% 25.66987%);
	font-size: 2rem;
	font-weight: 900;
	transition: 0.3s ease;
	z-index: -1;
}
.icon {
	mask-repeat: no-repeat;
	mask-size: contain;
	width: 2rem;
	height: 2rem;
}
</style>
