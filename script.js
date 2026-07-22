const password = document.getElementById("password");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        button.textContent = "Hide Password";
    } else {
        password.type = "password";
        button.textContent = "Show Password";
    }

});