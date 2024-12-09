$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        event.preventDefault(); 
        
        const username = $("#loginUsername").val().trim();
        const password = $("#loginPassword").val().trim();
        
        const usernameError = $("#usernameError");
        const passwordError = $("#passwordError");

        usernameError.hide();
        passwordError.hide();

        let isValid = true;

        if (username === "") {
            usernameError.text("Username is required.").show();
            isValid = false;
        }

        if (password === "") {
            passwordError.text("Password is required.").show();
            isValid = false;
        } else if (password.length < 6) {
            passwordError.text("Password must be at least 6 characters.").show();
            isValid = false;
        }
        if (isValid) {
            $("#loginForm").submit(); 
        }
    });
});