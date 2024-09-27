// script.js

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let index = 0;
const slideWidth = slides[0].clientWidth;


nextBtn.addEventListener('click', () => {
 
    slidesContainer.style.transition = "all 0.3s ease-in-out";
    index++;
    if (index > slides.length - 1) {
        index = 0; // Reset to the first slide
    }
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
});

prevBtn.addEventListener('click', () => {
    slidesContainer.style.transition = "all 0.3s ease-in-out";
    index--;
    if (index < 0) {
        index = slides.length - 1; // Move to the last slide
    }
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
});
