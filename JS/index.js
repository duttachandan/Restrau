// Intializing AOS
AOS.init();


// Swiper Js Code
new Swiper(".spcl-dish-sm", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
  },
});

// JQuery Code
$("document").ready(() => {
  $(".nav-btn").click(() => {
    $(".navbar-collapse").slideToggle();
  });
});

// document.addEventListener("mousemove", (event) => {
//   console.log(event.pageX, event.pageY);
// });
