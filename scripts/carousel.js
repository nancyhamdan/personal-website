let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(slideNum) {
    let slides = document.getElementsByClassName('slide');

    if (slideNum > slides.length) {
        slideIndex = 1;
    } else if (slideNum < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}