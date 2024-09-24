let currentSlide = 0;
function showSlide(index) {
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index + totalSlides) % totalSlides;
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
let autoSlide = setInterval(nextSlide,4000);

document.getElementById('slider').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
});

document.getElementById('slider').addEventListener('mouseout', () => {
    autoSlide = setInterval(nextSlide, 4000);
});
showSlide(currentSlide);
