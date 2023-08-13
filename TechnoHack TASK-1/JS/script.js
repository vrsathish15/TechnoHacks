const form = document.getElementById("registrationForm");
const user_name = document.getElementById("user_name");
const first_Name = document.getElementById("first_Name");
const Last_name = document.getElementById("Last_name");
const date_of_birth = document.getElementById("date_of_birth");
const contact_number = document.getElementById("contact_number");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

form.addEventListener("submit", function(event) {
  let isValid = true;

  if (user_name.value.trim() === "") {
    isValid = false;
  }

  if (first_Name.value.trim() === "") {
    isValid = false;
  }

  if (Last_name.value.trim() === "") {
    isValid = false;
  }

  if (date_of_birth.value.trim() === "") {
    isValid = false;
  }

  if (contact_number.value.trim() === "") {
    isValid = false;
  }

  if (password.value.trim() === "") {
    isValid = false;
  }

  if (confirm_password.value.trim() === "" || confirm_password.value !== password.value) {
    isValid = false;
    alert("Passwords do not match. Please try again.");
  }

  if (!isValid) {
    event.preventDefault();
  }
  if (!isValid) {
    event.preventDefault();
  } else {
    // Form submitted successfully
    alert("Successfully registered! Thank you.");
    
  }

});

const clearButton = document.getElementById("click");
clearButton.addEventListener("click", function() {
  user_name.value = "";
  first_Name.value = "";
  Last_name.value = "";
  date_of_birth.value = "";
  contact_number.value = "";
  password.value = "";
  confirm_password.value = "";
});
