var slideIndex = 1;
var slides = document.getElementsByClassName("slideshow");
var dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    console.log(n);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";



}

//    ScrollTop
let btnScrollTop = document.querySelector(".scrollTop");
let imgAbout = document.querySelector('.img-about');
let contentAbout = document.querySelector('.content-about');
window.onscroll = () => {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        btnScrollTop.style.display = "block";

    } else {
        btnScrollTop.style.display = "none";
    }
}

//  Nav Menu
let menuItems = document.getElementsByClassName('nav-menu')

Array.from(menuItems).forEach((item, index) => {
        item.onclick = (e) => {
            let currMenu = document.querySelector('.nav-menu.active')
            currMenu.classList.remove('active')
            item.classList.add('active')
        }
    })
    // Menu Category

let foodMenuList = document.querySelector('.food-category__item');

let foodCategory = document.querySelector('.food-category');

let categories = foodCategory.querySelectorAll('button');

Array.from(categories).forEach((item) => {
    item.onclick = (e) => {
        let currCat = document.querySelector('.food-category button.active');
        currCat.classList.remove('active');
        e.target.classList.add('active');
        foodMenuList.classList = 'food-category__item ' + e.target.getAttribute('data-food-type');
    }
})