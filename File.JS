function handleForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  document.getElementById("formResult").textContent = `Thanks, ${name}! Your message has been received.`;

  // Clear form
  event.target.reset();
}
