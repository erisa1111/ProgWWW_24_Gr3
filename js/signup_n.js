document.getElementById("signUpForm").addEventListener("submit", function (event) {
    // Get all input fields
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const location = document.getElementById("location").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const avgWage = document.getElementById("avgWage").value.trim();
    const schedule = document.getElementById("schedule").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const surnameError = document.getElementById("surnameError");
    const locationError = document.getElementById("locationError");
    const genderError = document.getElementById("genderError");
    const avgWageError = document.getElementById("avgWageError");
    const scheduleError = document.getElementById("scheduleError");
    const emailError = document.getElementById("emailError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    [nameError, surnameError, locationError, genderError, avgWageError, scheduleError, emailError, usernameError, passwordError].forEach(err => {
        err.textContent = "";
        err.style.display = "none";
    });

    let isValid = true;

    // Validate personal details
    if (name === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }
    if (surname === "") {
        surnameError.textContent = "Surname is required.";
        surnameError.style.display = "block";
        isValid = false;
    }
    if (location === "") {
        locationError.textContent = "Location is required.";
        locationError.style.display = "block";
        isValid = false;
    }
    if (gender === "") {
        genderError.textContent = "Gender is required.";
        genderError.style.display = "block";
        isValid = false;
    }
    if (avgWage === "" || isNaN(avgWage)) {
        avgWageError.textContent = "Average Wage must be a valid number.";
        avgWageError.style.display = "block";
        isValid = false;
    }
    if (schedule === "") {
        scheduleError.textContent = "Schedule is required.";
        scheduleError.style.display = "block";
        isValid = false;
    }

    // Validate account details
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    }
    if (username === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
    }
    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
