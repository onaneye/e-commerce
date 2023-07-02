$(document).ready(function(){

const bars = document.querySelector(".fa-bars");
var container = document.querySelector("div.nav-col-item");

bars.addEventListener("click", function() {
    container.classList.toggle("toogle")
})

    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the duration between slides (in milliseconds)
      fade: false,
      speed: 700, // Transition speed in milliseconds
      arrows: false,
      dots: false,
      pauseOnHover: false
    });


var slideCount = $('.slider-item').length;
      var currentIndex = 0;

      function showSlide(index) {
        $('.slider-item').removeClass('active');
        $('.slider-item').eq(index).addClass('active');
      }

      function nextSlide() {
        currentIndex++;
        if (currentIndex >= slideCount) {
          currentIndex = 0;
        }
        showSlide(currentIndex);
      }

      setInterval(nextSlide, 2000); // Adjust the duration between slides (in milliseconds)


    });

