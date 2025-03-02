// script.js
document.addEventListener("DOMContentLoaded", function () {
  const newsletterButton = document.getElementById("newsletter-button");
  const newsletterForm = document.getElementById("newsletter-form");

  newsletterButton.addEventListener("click", function () {
    newsletterForm.style.display =
      newsletterForm.style.display === "none" ? "block" : "none";
  });
});
