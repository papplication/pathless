var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    if (slideIndex > 0) {
		slideIndex = 0;
    }
    var slide = document.getElementById("mobilec");
    slide.style.backgroundImage = "url('images/mobile"+slideIndex+".png')";
    slideIndex++;
    setTimeout(showSlides, 2000);
}