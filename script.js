

//SELECTORS

let slides = document.querySelectorAll(".services__card"); //object of cards
console.log(slides);
let leftButton = document.querySelector(".services__leftbutton")
let rightButton = document.querySelector(".services__rightbutton")



let currentSlide = 0;

//FUNCTIONS

function deleteActiveClassInSlides() {


    // console.log(item)
    // console.log(slides[item])
    slides[currentSlide].classList.remove("services__active");



}

function addClassToprevSlide() {
    if (currentSlide == 0) {
        currentSlide = 2;
    } else {
        currentSlide--;
    }
    slides[currentSlide].classList.add("services__active");
}

function addClassTonextSlide() {
    if (currentSlide == 2) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides[currentSlide].classList.add("services__active");
}

function prevSlide() {
    deleteActiveClassInSlides()
    addClassToprevSlide()
}

function nextSlide() {
    deleteActiveClassInSlides()
    addClassTonextSlide()
}

//LISTENERS

leftButton.addEventListener("click", prevSlide)
rightButton.addEventListener("click", nextSlide)