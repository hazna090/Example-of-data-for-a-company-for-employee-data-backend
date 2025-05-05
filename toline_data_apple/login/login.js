// confrim from sederhana
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", validateForm);
  }
});

function validateForm(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Clear any previous error messages
  document.getElementById("usernameError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  let isValid = true;

  // Validate username
  if (username.trim() === "") {
    isValid = false;
  }

  // Validate password
  if (password.trim() === "") {
    isValid = false;
  }

  // Check for admin credentials (you can replace this with a more secure method)
  if ((isValid && username !== "apple") || password !== "data123") {
    alert("masukan password");
    isValid = false;
  }

  if (isValid) {
    // If validation passes, you can redirect to a dashboard or perform other actions
    alert("Login sukses");
    window.location.href = "/index.html"; // Uncomment to redirect
  }
}
