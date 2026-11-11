
// QUESTION FIVE: JAVASCRIPT VARIABLES

let studentName = "John Mwangi";
let registrationNumber = "COM/B/01-001";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);


// QUESTION FIVE: CALCULATE GRADE FUNCTION

function calculateGrade(score) {

    if (score >= 70 && score <= 100) {
        return "A";
    }
    else if (score >= 60) {
        return "B";
    }
    else if (score >= 50) {
        return "C";
    }
    else if (score >= 40) {
        return "D";
    }
    else {
        return "E";
    }
}

// Call function with score of 75
let grade = calculateGrade(75);

alert("Student Grade: " + grade);


// QUESTION SIX AND SEVEN:
// DOM MANIPULATION AND FORM VALIDATION

// Retrieve the registration form
const form = document.getElementById("registrationForm");

// Retrieve output elements
const result = document.getElementById("result");
const successMessage =
    document.getElementById("successMessage");

// Add event listener to the form
form.addEventListener("submit", function(event) {

    // Prevent default form submission
    event.preventDefault();

    // Retrieve student information
    const name =
        document.getElementById("fullname").value.trim();

    const regNo =
        document.getElementById("regno").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const programme =
        document.getElementById("programme").value;

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    // QUESTION SEVEN: VALIDATE EMPTY FIELDS

    if (name === "" || regNo === "") {
        alert("Please enter your full name and registration number.");
        return;
    }

    // Validate email format
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check gender selection
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Check academic programme
    if (programme === "") {
        alert("Please select an academic programme.");
        return;
    }

    // QUESTION SIX: DISPLAY STUDENT DETAILS

    result.innerHTML = `
        <h3>Registered Student Details</h3>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Registration Number:</strong> ${regNo}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Programme:</strong> ${programme}</p>
    `;

    // Display success message
    successMessage.textContent =
        "Student registration completed successfully!";

});

// Clear messages when the form is reset
form.addEventListener("reset", function() {
    result.innerHTML = "";
    successMessage.textContent = "";
});
