// Animation for the Home Page

ScrollReveal({
    reset: false,
    distance: "50px",
    duration: 2500,
  });

  ScrollReveal().reveal(".abb", { delay: 0, origin: "left"});
  ScrollReveal().reveal(".abb2", { delay: 0, origin: "top"});
  ScrollReveal().reveal(".anni", { delay: 0, origin: "right" });
  ScrollReveal().reveal(".anni2", { delay: 0, origin: "bottom" });


  // Gallery
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  