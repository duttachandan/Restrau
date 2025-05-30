// Intializing AOS

AOS.init();

// JQuery Code

$("document").ready(() => {
  $(".nav-btn").click(() => {
    $(".navbar-collapse").slideToggle();
  });
});
