document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const titleEl = document.getElementById("product-title");
    const priceEl = document.getElementById("product-price");
    const iconEl = document.getElementById("product-icon");

    if (productId && titleEl) {
        if (productId === "1") {
            titleEl.innerText = "Wireless Headphones";
            priceEl.innerText = "$49.99";
            iconEl.innerText = "🎧";
        } else if (productId === "2") {
            titleEl.innerText = "Smart Watch Pro";
            priceEl.innerText = "$89.99";
            iconEl.innerText = "⌚";
        } else if (productId === "3") {
            titleEl.innerText = "Running Shoes";
            priceEl.innerText = "$59.99";
            iconEl.innerText = "👟";
        }
    }
});
