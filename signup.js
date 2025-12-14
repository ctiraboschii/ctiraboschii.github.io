function signUp() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        document.getElementById("error").textContent = "Please fill out all fields.";
        return false;
    }

    localStorage.setItem("user_name", name);
    localStorage.setItem("user_email", email);
    localStorage.setItem("user_password", password);

    alert("Account created successfully!");
    window.location.href = "login.html";

    return false;
}
