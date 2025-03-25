const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
   const emailValue = emailInput.value;

   if (!regex.test(emailValue)) {
      e.preventDefault();
      emailInput.style.borderColor = "red";
      errorMessage.textContent = "Valid email required";
   }
});

emailInput.addEventListener("input", () => {
   const emailValue = emailInput.value;

   if (regex.test(emailValue)) {
      emailInput.style.borderColor = "green";
      errorMessage.textContent = "";
   } else {
      emailInput.style.borderColor = "red";
      errorMessage.textContent = "Valid email required";
   }
});
