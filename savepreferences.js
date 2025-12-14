
let universityPreferences = JSON.parse(localStorage.getItem("universityPreferences")) || [];


function savePreference(universityName) {
    const messageElement = document.getElementById("message");

    if (!universityPreferences.includes(universityName)) {
        universityPreferences.push(universityName);
        localStorage.setItem("universityPreferences", JSON.stringify(universityPreferences));

        messageElement.style.display = "block";
        messageElement.textContent = `${universityName} added to your preferences!`;


        setTimeout(() => {
            messageElement.style.display = "none";
        }, 3000);

        console.log(`Saved: ${universityName}`);
    } else {
        messageElement.style.display = "block";
        messageElement.textContent = `You already saved ${universityName}.`;

        setTimeout(() => {
            messageElement.style.display = "none";
        }, 3000);

        console.log(`Already saved: ${universityName}`);
    }
}



