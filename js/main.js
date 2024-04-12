$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        autoWidth: false,
        navText: ["<img src='img/arrow-prev.svg'>", "<img src='img/arrow-next.svg'>"],
        margin: 10,
        responsive: {
            1000: {
                items: 3,
                loop: false,
                center: false,
                autoWidth: false
            },
            360: {
              items: 1,
              center: true,
              autoWidth: true,
              loop: true
            }
          }
    });
});

$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('open-menu');
    $(".navbar-brand").toggleClass("opacity-0");
    $(".btn-partner").toggleClass("opacity-0");
    $(".header").toggleClass("bg-menu");
    $(".nav-link").toggleClass("text-white");
    $(".btn-login").toggleClass("text-white");
  });