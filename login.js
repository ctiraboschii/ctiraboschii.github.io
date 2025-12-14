function checkLogin() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    const correctEmail = "user@example.com";
    const correctPassword = "1234";

    if (email === correctEmail && password === correctPassword) {

        localStorage.setItem("logged", "true");

        window.location.href = "preferences.html";
        return false;

    } else {
        document.getElementById("error").textContent = "Email or password incorrect.";
        return false; 
    }
}
