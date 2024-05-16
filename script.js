const dots = document.getElementsByClassName('dots-item'),
      dotsArea = document.getElementsByClassName('dots-block')[0],
      slides = document.getElementsByClassName('partners-card'),
      prevBtn = document.getElementsByClassName('left-button')[0],
      nextBtn = document.getElementsByClassName('right-button')[0];
let slideIndex = 1;



showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.addEventListener('click', () => {
    plusSlides(-1);
});

nextBtn.addEventListener('click', () => {
    plusSlides(1);
});