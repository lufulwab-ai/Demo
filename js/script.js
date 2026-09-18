document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form-card");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;

    button.textContent = "Message noted";
    button.disabled = true;

    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
});
