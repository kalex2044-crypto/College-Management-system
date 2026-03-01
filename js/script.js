function calculateAttendance(){
    let total = document.getElementById("totalClasses").value;
    let attended = document.getElementById("attendedClasses").value;

    let percentage = (attended / total) * 100;
    document.getElementById("attendanceResult").innerText =
        "Attendance: " + percentage.toFixed(2) + "%";
}

// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    if(email === "student@gmail.com" && password === "1234"){
        window.location.href = "dashboard.html";
    } else {
        error.innerText = "Invalid Email or Password!";
    }
});

// Show / Hide Password
function togglePassword(){
    let password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}