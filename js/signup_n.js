$(document).ready(function() {
    $("form").on("submit", function(event) {

        event.preventDefault();

        const name = $('input[placeholder="Name"]');
        const surname = $('input[placeholder="Surname"]');
        const location = $('input[placeholder="Location"]');
        const gender = $('input[placeholder="Gender"]');
        const avgWage = $('input[placeholder="Avg Wage"]');
        const schedule = $('input[placeholder="Schedule"]');
        const email = $('input[placeholder="Email"]');
        const username = $('input[placeholder="Username"]');
        const password = $('input[placeholder="Password"]');

        let errors = [];
        

        if (!/^[A-Za-z]+$/.test(name.val())) {
            errors.push("Name must contain only letters.");
        }
  
        if (!/^[A-Za-z]+$/.test(surname.val())) {
            errors.push("Surname must contain only letters.");
        }
        

        if (!location.val().trim()) {
            errors.push("Location is required.");
        }

        if (!/^[A-Za-z]+$/.test(gender.val())) {
            errors.push("Gender must contain only letters.");
        }

    
        if (!/^\d+(\.\d{1,2})?$/.test(avgWage.val()) || avgWage.val() <= 0) {
            errors.push("Avg Wage must be a positive number.");
        }

        if (!schedule.val().trim()) {
            errors.push("Schedule is required.");
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.val())) {
            errors.push("Invalid email format.");
        }

        if (!username.val().trim()) {
            errors.push("Username is required.");
        }

        if (!password.val().trim()) {
            errors.push("Password is required.");
        }
        
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
    
            window.location.href = "home.html";
        }
    });
});