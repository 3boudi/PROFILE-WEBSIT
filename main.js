// JavaScript for Popup
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("navbar");
const popup = document.getElementById('popup');
const contactButton = document.getElementById('contactButton');
const closeButton = document.getElementById('closeButton');

// Show Popup
contactButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    popup.classList.add('active');
});

// Hide Popup
closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Hide Popup when clicking outside
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("show");
    });