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
    const locationRegex = /^[a-zA-Z\s]+,\s*[a-zA-Z]{2}$/g;  // Example format: "New York, NY"

    // Check if the location is empty
    if (location === "") {
        locationError.textContent = "Location is required.";
        locationError.style.display = "block";
        isValid = false;
    }
    // Validate location format using regular expression
    else if (!locationRegex.test(location)) {
        locationError.textContent = "Location should be in 'City, State' format.";
        locationError.style.display = "block";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
    if (gender === "") {
        genderError.textContent = "Gender is required.";
        genderError.style.display = "block";
        isValid = false;
    }
    if (avgWage === "" || !/^\d+(\.\d{1,2})?$/.test(avgWage)) {
        avgWageError.textContent = "Average Wage must be a valid number (positive number, optional decimal).";
        avgWageError.style.display = "block";
        isValid = false;
    }
    if (schedule === "") {
        scheduleError.textContent = "Schedule is required.";
        scheduleError.style.display = "block";
        isValid = false;
    }
    if (username === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
    }

    // Validate account details
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;
    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters and contain letters and numbers.";
        passwordError.style.display = "block";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
