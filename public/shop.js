console.log("this is the shop touch");

aboutMe = $("#about-notif");
// aboutMe.hide();

$("#about-me").on("click", function () {});

// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});

$("#about-x").on("click", function () {
  aboutMe.hide();
  $("#hero-title").show();
});
