// Toogle Show hide
function toggleText() {
    var points          = document.getElementById("points");
    var showMoreText    = document.getElementById("moreText");
    var buttonText      = document.getElementById("textButton");
    if (points.style.display === "none") {
        showMoreText.style.display = "none";
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    }else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
        buttonText.style.display= "inline"
    }
}

function toggleText2() {
    var points2          = document.getElementById("points2");
    var showMoreText2    = document.getElementById("moreText2");
    var buttonText2      = document.getElementById("textButton2");
    if (points2.style.display === "none") {
        showMoreText2.style.display = "none";
        points2.style.display = "inline";
        buttonText2.innerHTML = "Show More";
    }else {
        showMoreText2.style.display = "inline";
        points2.style.display = "none";
        buttonText2.innerHTML = "Show Less";
        buttonText2.style.display= "inline"
    }
}

// Slider Js
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides  = document.getElementsByClassName("mySlides");
    var dots    = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
