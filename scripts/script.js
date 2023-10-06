document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulate sending data to a server (in a real system, this would be an AJAX request)
        setTimeout(() => {
            confirmationMessage.textContent = `Thank you for subscribing with email: ${emailInput.value}`;
            emailInput.value = ""; // Clear the email input
        }, 1000);
    });
});

// Poping box message
document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const closeButton = document.getElementById("close-popup");

    // Show the pop-up when the page loads
    popupContainer.style.display = "block";

    // Close the pop-up when the "Close" button is clicked
    closeButton.addEventListener("click", function () {
        popupContainer.style.display = "none";
    });
});
