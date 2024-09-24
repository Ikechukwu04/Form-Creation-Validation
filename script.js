// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Retrieve user inputs and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and error messages
        let isValid = true;
        let messages = [];

        // Username validation: must be at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: must include "@" and "."
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation: must be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";  // Show the feedback div

        if (isValid) {
            // If all validations pass, show success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";  // Green color for success
        } else {
            // If validation fails, show error messages
            feedbackDiv.innerHTML = messages.join('<br>');  // Display messages with line breaks
            feedbackDiv.style.color = "#dc3545";  // Red color for errors
        }
    });
});
