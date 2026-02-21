// Add submit event listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    // Call all validations
    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;

    if (isValid) {
        alert("Form Submitted Successfully!");
        document.getElementById("myForm").reset();
    }
});


// Validate Name
function validateName() {
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");

    if (name.length < 5) {
        nameError.innerText = "Name must be at least 5 characters";
        return false;
    }

    nameError.innerText = "";
    return true;
}


// Validate Email
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");

    if (!email.includes("@")) {
        emailError.innerText = "Enter correct email";
        return false;
    }

    emailError.innerText = "";
    return true;
}


// Validate Phone
function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let phoneError = document.getElementById("phoneError");

    // Check 10 digits
    if (phone.length !== 10 || isNaN(phone) || phone === "1234567890") {
        phoneError.innerText = "Enter valid 10-digit phone number";
        return false;
    }

    phoneError.innerText = "";
    return true;
}


// Validate Password
function validatePassword() {
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value.toLowerCase();
    let passwordError = document.getElementById("passwordError");

    if (password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters";
        return false;
    }

    if (password.toLowerCase() === "password") {
        passwordError.innerText = "Password cannot be 'password'";
        return false;
    }

    if (password.toLowerCase() === name) {
        passwordError.innerText = "Password cannot be your name";
        return false;
    }

    passwordError.innerText = "";
    return true;
}


// Validate Confirm Password
function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match";
        return false;
    }

    confirmPasswordError.innerText = "";
    return true;
}