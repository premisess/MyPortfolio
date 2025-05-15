window.addEventListener("DOMContentLoaded", () => {
  // Greeting based on time of day
  const hour = new Date().getHours();
  let greetingText = "Welcome, Apprentice!";
  if (hour < 12) greetingText = "Good Morning, Hacker!";
  else if (hour < 18) greetingText = "Good Afternoon, Coder!";
  else greetingText = "Good Evening, Master!";

  // Insert greeting into the page
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) greetingEl.textContent = greetingText;

  // Dark/Light mode toggle button (add button dynamically or create in HTML)
  const btn = document.createElement("button");
  btn.textContent = "Toggle Dark/Light Mode";
  btn.style.margin = "1em";
  btn.style.padding = "0.5em 1em";
  document.body.insertBefore(btn, document.body.firstChild);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Form validation for contact form (if present)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = contactForm.elements["email"].value.trim();
      const phone = contactForm.elements["phone"]?.value.trim() || "";

      // Simple regex patterns
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{7,15}$/; // Accept + and 7-15 digits

      let errors = [];
      if (!emailRegex.test(email)) errors.push("Invalid email address.");
      if (phone && !phoneRegex.test(phone)) errors.push("Invalid phone number.");

      if (errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        alert("Form submitted successfully!");
        contactForm.submit(); // or do AJAX submission here
      }
    });
  }

  // Show/hide project details handled separately in projects page JS
  // This script assumes separate code for projects page toggling

});
