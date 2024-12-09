// Validate Name
function validateName(name) {
    if (name === "") {
        return "Name is required.";
    }
    return null;
}

// Validate Surname
function validateSurname(surname) {
    if (surname === "") {
        return "Surname is required.";
    }
    return null;
}

// Validate Location
function validateLocation(location) {
    if (location === "") {
        return "Location is required.";
    }
    return null;
}

// Validate Gender
function validateGender(gender) {
    if (gender === "") {
        return "Gender is required.";
    }
    return null;
}

// Validate Number of Kids
function validateNumKids(numKids) {
    if (numKids === "" || isNaN(numKids) || numKids < 0) {
        return "Number of kids must be a valid number (0 or more).";
    }
    return null;
}

// Validate Email
function validateEmail(email) {
    if (email === "") {
        return "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        return "Enter a valid email.";
    }
    return null;
}

// Validate Username
function validateUsername(username) {
    if (username === "") {
        return "Username is required.";
    }
    return null;
}

// Validate Password
function validatePassword(password) {
    if (password === "") {
        return "Password is required.";
    } else if (password.length < 6) {
        return "Password must be at least 6 characters.";
    }
    return null;
}

document.getElementById("signUpParentForm").addEventListener("submit", function (event) {
    // Get all input fields
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const location = document.getElementById("location").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const numKids = document.getElementById("numKids").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const surnameError = document.getElementById("surnameError");
    const locationError = document.getElementById("locationError");
    const genderError = document.getElementById("genderError");
    const numKidsError = document.getElementById("numKidsError");
    const emailError = document.getElementById("emailError");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    [nameError, surnameError, locationError, genderError, numKidsError, emailError, usernameError, passwordError].forEach(err => {
        err.textContent = "";
        err.style.display = "none";
    });

    let isValid = true;

    // Validate personal details
    const nameErrorMsg = validateName(name);
    if (nameErrorMsg) {
        nameError.textContent = nameErrorMsg;
        nameError.style.display = "block";
        isValid = false;
    }

    const surnameErrorMsg = validateSurname(surname);
    if (surnameErrorMsg) {
        surnameError.textContent = surnameErrorMsg;
        surnameError.style.display = "block";
        isValid = false;
    }

    const locationErrorMsg = validateLocation(location);
    if (locationErrorMsg) {
        locationError.textContent = locationErrorMsg;
        locationError.style.display = "block";
        isValid = false;
    }

    const genderErrorMsg = validateGender(gender);
    if (genderErrorMsg) {
        genderError.textContent = genderErrorMsg;
        genderError.style.display = "block";
        isValid = false;
    }

    const numKidsErrorMsg = validateNumKids(numKids);
    if (numKidsErrorMsg) {
        numKidsError.textContent = numKidsErrorMsg;
        numKidsError.style.display = "block";
        isValid = false;
    }

    // Validate account details
    const emailErrorMsg = validateEmail(email);
    if (emailErrorMsg) {
        emailError.textContent = emailErrorMsg;
        emailError.style.display = "block";
        isValid = false;
    }

    const usernameErrorMsg = validateUsername(username);
    if (usernameErrorMsg) {
        usernameError.textContent = usernameErrorMsg;
        usernameError.style.display = "block";
        isValid = false;
    }

    const passwordErrorMsg = validatePassword(password);
    if (passwordErrorMsg) {
        passwordError.textContent = passwordErrorMsg;
        passwordError.style.display = "block";
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});

