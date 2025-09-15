// js/carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const showcasesContainer = document.querySelector('.showcases-container');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    const scrollAmount = 300; // Adjust this value to control how much the slider moves

    nextArrow.addEventListener('click', () => {
        showcasesContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    prevArrow.addEventListener('click', () => {
        showcasesContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});