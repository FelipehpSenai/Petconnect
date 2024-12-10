let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Troca de slides a cada 3 segundos
setInterval(changeSlide, 5000);

