// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.querySelector(".navbar ul");
  menu.classList.toggle("active");
}

// Smooth Scroll to Contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Handle Contact Form
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your message has been received.`);
  event.target.reset();
}
A