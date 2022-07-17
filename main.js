$(document).ready(function () {
  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr("src", $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // document ready
});

// Nav Bar
var prev = 0;
var $window = $(window);
var nav = $(".nav");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop < prev);
  prev = scrollTop;
});

// Scroll top
window.scroll({ top: 0, behavior: "smooth" });
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
