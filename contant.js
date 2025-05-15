document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop default submission for validation

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;

    let errors = [];

    if (!emailRegex.test(email)) {
      errors.push("Invalid email format.");
    }

    if (phone && !phoneRegex.test(phone)) {
      errors.push("Invalid phone number. Use digits, +, or -.");
    }

    if (message.length < 10) {
      errors.push("Message is too short. Please write at least 10 characters.");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors:\n\n" + errors.join("\n"));
    } else {
      alert("Message sent successfully! The wizard has been summoned. 🧙‍♂️");
      form.reset();
    }
  });
});
