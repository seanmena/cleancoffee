console.log("this is the shop touch");

shopNo = $("#shop-notif");

shopPage = $(".shop-page");

shopPage.hide();
// aboutMe.hide();

$("#shop-notif").on("click", function () {});

// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});

$("#shop-x").on("click", function () {
  shopNo.hide();
  $("#hero-title").show();
  shopPage.show();
});
