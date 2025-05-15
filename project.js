document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      const isHidden = details.style.display === "none";

      details.style.display = isHidden ? "block" : "none";
      button.textContent = isHidden ? "Hide Details" : "Show Details";
    });
  });
});
