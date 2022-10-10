// const { application } = require("express");

console.log("this is touching");

aboutMe = $("#about-notif");
aboutMe.hide();

$("#about-me").on("click", function () {});

// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});

$(".shop-btn").click(function () {
  // console.log("btn-works");
  location.href = "./shop.html";
});

// dont need this
// $("#about-x").on("click", function () {
//   aboutMe.hide();
//   $("#hero-title").show();
// });
