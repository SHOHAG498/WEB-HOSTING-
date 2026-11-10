document.addEventListener("DOMContentLoaded", () => {
    const arButton = document.getElementById("ar-btn");

    arButton.addEventListener("click", () => {
        // Apadoto button click korle ei alert ba custom action hobe
        alert("AR Camera initialization sequence requested. Please allow camera permissions when prompted.");
    });
});
