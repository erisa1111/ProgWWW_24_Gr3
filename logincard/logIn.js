document.getElementById("loginForm").addEventListener("submit", function (event) {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.style.display = "none";
    usernameError.textContent = "";
    passwordError.style.display = "none";
    passwordError.textContent = "";

    let isValid = true;

    if (username === "") {
        usernameError.style.display = "block";
        usernameError.textContent = "Username is required.";
        isValid = false;
    }

    if (password === "") {
        passwordError.style.display = "block";
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.style.display = "block";
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});


