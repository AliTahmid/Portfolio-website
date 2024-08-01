// Get the modal
var modal = document.getElementById("modal");

// Get the modal image and caption text
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Function to open the modal and display the clicked image
function openModal(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to redirect to the main page
function goToMainPage(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'index.html#introduction';
}

// Attach event listeners to the About Me button for redirection
document.querySelectorAll('a[href="index.html#introduction"]').forEach(function(link) {
    link.addEventListener('click', goToMainPage);
});

// Attach event listeners to screenshots for modal functionality
document.addEventListener('DOMContentLoaded', function () {
    var screenshots = document.querySelectorAll('.screenshot');
    screenshots.forEach(function (screenshot) {
        screenshot.addEventListener('click', function () {
            openModal(this);
        });
    });
});
