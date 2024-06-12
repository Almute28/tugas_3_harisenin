// script.js

let currentSlide = 0;

function updateSlidePosition() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateSlidePosition();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlidePosition();
}
