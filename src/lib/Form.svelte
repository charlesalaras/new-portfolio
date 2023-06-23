<script>
	function submitForm() {
		// Use SMTP server-side to send the form to my email, and send a confirmation email to the user.
		// Ideally, we should run some captcha validation / rate limiting from a single IP as well.
	}
</script>

<form on:submit|preventDefault={submitForm}>
	<label for="name">Name:</label>
	<input type="text" id="name" name="name" required>

	<label for="company">Company:</label>
	<input type="text" id="company" name="company">

	<label for="email">Email:</label>
	<input type="email" id="email" name="email" required>
	
	<label for="subject">Subject:</label>
	<select id="subject" name="subject" required>
		<option value="programming">Programming</option>
		<option value="engineering">Engineering</option>
		<option value="editing">Video Editing</option>
		<option value="production">Event Production</option>
		<option value="design">Graphic Design</option>
		<option value="other">Other</option>
	</select>

	<label for="message">Message:</label>
	<input type="textarea" id="message" name="message" required>

	<button type="submit">Submit</button>
</form>

<style>
form {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
}
label {
	width: 90%;
}
input, select {
	width: 100%;
	border: none;
	border-radius: 1rem;
	height: 2rem;
	padding: 0px 1rem;
}
button[type="submit"] {
	display: inline-block;
	color: var(--foreground);
	background-color: var(--primary);
	border: none;
	border-radius: 1rem;
	height: 2rem;
	padding: 0px 1rem;
}
label {
	font-weight: 600;
}
.send-fill {
	width: 2rem;
	height: 2rem;
	background-color: red;
}
</style>
