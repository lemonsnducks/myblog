// JavaScript to toggle content based on dropdown selection
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.getElementById("dropdown1");
    const sections = {
        "games": document.getElementById("dropdown-games"),
        "reading": document.getElementById("dropdown-reading"),
        "skills": document.getElementById("dropdown-skills")
    };

    // Hide all sections initially
    Object.values(sections).forEach(section => section.style.display = "none");

    // Show the selected section
    dropdown.addEventListener("change", () => {
        Object.values(sections).forEach(section => section.style.display = "none");
        const selectedValue = dropdown.value;
        if (sections[selectedValue]) {
            sections[selectedValue].style.display = "block";
        }
    });

    // Set default selection to "games" and trigger change event
    dropdown.value = "games";
    dropdown.dispatchEvent(new Event("change"));
});