function validate() {
    let name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        pass = document.getElementById("pass").value,
        nameErr = document.getElementById("nameErr"),
        emailErr = document.getElementById("emailErr"),
        passErr = document.getElementById("passErr"),
        submit = document.getElementById("submit");

    nameErr.textContent = name ? "" : "Name must not be empty";
    emailErr.textContent = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ? "" : "Invalid email";
    passErr.textContent = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass) ? "" : "Password: 8+ chars, 1 uppercase, 1 number";

    submit.disabled = !name || !emailErr.textContent === "" || !passErr.textContent === "";
}
