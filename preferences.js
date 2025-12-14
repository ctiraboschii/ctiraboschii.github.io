document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("preferencesGrid");

    // Retrieve saved universities from localStorage
    let savedPreferences = JSON.parse(localStorage.getItem("universityPreferences")) || [];

    if (!grid) return;

    if (savedPreferences.length === 0) {
        grid.innerHTML = "<p style='text-align:center; width:100%; grid-column:1/-1;'>You haven't saved any universities yet.</p>";
        return;
    }

    // Function to update the grid
    function renderPreferences() {
        grid.innerHTML = "";
        if (savedPreferences.length === 0) {
            grid.innerHTML = "<p style='text-align:center; width:100%; grid-column:1/-1;'>You haven't saved any universities yet.</p>";
            return;
        }

        savedPreferences.forEach((universityName, index) => {
            const card = document.createElement("div");
            card.className = "dept-card";
            card.style.position = "relative"; 

            // name-univeristy
            const span = document.createElement("span");
            span.textContent = universityName;
            card.appendChild(span);

            // remove
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "×";
            removeBtn.style.position = "absolute";
            removeBtn.style.top = "5px";
            removeBtn.style.right = "10px";
            removeBtn.style.border = "none";
            removeBtn.style.background = "transparent";
            removeBtn.style.fontSize = "18px";
            removeBtn.style.cursor = "pointer";
            removeBtn.style.color = "#0d1b4c";
            removeBtn.onclick = () => {
                savedPreferences.splice(index, 1);
                localStorage.setItem("universityPreferences", JSON.stringify(savedPreferences));
                renderPreferences();
            };

            card.appendChild(removeBtn);
            grid.appendChild(card);
        });
    }

    renderPreferences();
});








