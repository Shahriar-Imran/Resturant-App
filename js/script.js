document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".navbar-mobile-menu-items");
    const toggleMenu = document.querySelector(".navbar-mobile-menu-toggle");

    toggleMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});

// Navbar scrolling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-area");

    if (window.scrollY > 108) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});

const foodCards = document.querySelectorAll(".popular-item-card");

const previousButton = document.querySelector(".popular-foods-prev");
const nextButton = document.querySelector(".popular-foods-next");

let currentFoodIndex = 0;

// Display the selected food card
function showFoodCard(index) {
    foodCards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
    });
}

// Previous button
previousButton.addEventListener("click", () => {
    currentFoodIndex--;

    if (currentFoodIndex < 0) {
        currentFoodIndex = foodCards.length - 1;
    }

    showFoodCard(currentFoodIndex);
});

// Next button
nextButton.addEventListener("click", () => {
    currentFoodIndex++;

    if (currentFoodIndex >= foodCards.length) {
        currentFoodIndex = 0;
    }

    showFoodCard(currentFoodIndex);
});

// Initial card
showFoodCard(currentFoodIndex);
