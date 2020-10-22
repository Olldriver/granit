//SELECTORS

let slides = document.querySelectorAll(".services__card"); //object of cards
let leftButton = document.querySelector(".services__leftbutton")
let rightButton = document.querySelector(".services__rightbutton")
let dots = document.querySelector(".services__dots")
let currentSlide = 0;

//FUNCTIONS

function createDot() {
    for (let i = 0; i < slides.length; i++) {
        dots.insertAdjacentHTML('beforeend', `<i class="services__dot" data-dot=${i}></i>`)
    }
}
createDot()

function checkdot(e) {
    if (e.target.classList.value != 'services__dot') return
    deleteActiveDots()
    e.target.classList.add('services__dot__active')
    deleteActiveClassInSlides()
    slides[e.target.dataset.dot].classList.add("services__active");
    currentSlide = e.target.dataset.dot
}

function deleteActiveDots() {
    for (let index = 3; index < slides.length + 3; index++) {
        dots.childNodes[index].classList.remove('services__dot__active')
    }
}

function deleteActiveClassInSlides() {
    slides[currentSlide].classList.remove("services__active");
}

function addClassToprevSlide() {
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    slides[currentSlide].classList.add("services__active");
    dots.childNodes[currentSlide + 3].classList.add('services__dot__active')
}

function addClassTonextSlide() {
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides[currentSlide].classList.add("services__active");
    dots.childNodes[currentSlide + 3].classList.add('services__dot__active')
}

function prevSlide() {
    deleteActiveClassInSlides()
    deleteActiveDots()
    addClassToprevSlide()
}

function nextSlide() {
    deleteActiveClassInSlides()
    deleteActiveDots()
    addClassTonextSlide()
}

//LISTENERS

leftButton.addEventListener("click", prevSlide)
rightButton.addEventListener("click", nextSlide)
dots.addEventListener("click", checkdot)