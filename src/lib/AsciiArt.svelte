<script>
// If a text box is focused with a changing value (set via a 0.5s time delay), draw the writing animation
// If a text box has no writing, draw the idle thinking animation
// When submitting, start the running animation
// When finished, send into the mailbox animation.
let asciiString;
</script>

<div class="ascii-art">
{asciiString}
</div>

<style>
.ascii-art {
	font-size: 0.5rem;
}
</style>
