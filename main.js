$(document).ready(function () {
  // ICheck buttons

  $("input").iCheck({
    checkboxClass: "icheckbox_flat-red",
    radioClass: "iradio_flat-red",
  });

  $("#red-clr").iCheck({
    checkboxClass: "icheckbox_square-red",
    radioClass: "iradio_square-red",
  });

  $("#green-clr").iCheck({
    checkboxClass: "icheckbox_square-green",
    radioClass: "iradio_square-green",
  });

  $("#blue-clr").iCheck({
    checkboxClass: "icheckbox_square-blue",
    radioClass: "iradio_square-blue",
  });

  $("#yellow-clr").iCheck({
    checkboxClass: "icheckbox_square-yellow",
    radioClass: "iradio_square-yellow",
  });

  // Carousel

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    smartSpeed: 1000,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  floatShape();
  floatColor();
  smoothScroll();
});

// Float shape

function floatShape() {
  $(".float-shape").on("ifChecked", function (e) {
    let shape = e.target.id;
    let arrow = document.querySelector("#arrow");

    if (shape === "shape-1") {
      $("#color-item-img").attr("src", "./images/1/shape1_red.png");
    } else if (shape === "shape-2") {
      $("#color-item-img").attr("src", "./images/2/shape2_red.png");
    } else if (shape === "shape-3") {
      $("#color-item-img").attr("src", "./images/3/shape3_red.png");
    } else if (shape === "shape-4") {
      $("#color-item-img").attr("src", "./images/4/shape4_red.png");
    } else if (shape === "shape-5") {
      $("#color-item-img").attr("src", "./images/5/shape5_red.png");
    }
  });
}

//Color switch function
function floatColor() {
  $(".float-color").on("ifChecked", function (e) {
    let color = e.target.id;
    let shape1 = document.querySelector("#shape-1").checked;
    let shape2 = document.querySelector("#shape-2").checked;
    let shape3 = document.querySelector("#shape-3").checked;
    let shape4 = document.querySelector("#shape-4").checked;
    let shape5 = document.querySelector("#shape-5").checked;

    if (color === "red-clr" && shape1) {
      $("#color-item-img").attr("src", "./images/1/shape1_red.png");
    } else if (color === "green-clr" && shape1) {
      $("#color-item-img").attr("src", "./images/1/shape1_green.png");
    } else if (color === "blue-clr" && shape1) {
      $("#color-item-img").attr("src", "./images/1/shape1_blue.png");
    } else if (color === "yellow-clr" && shape1) {
      $("#color-item-img").attr("src", "./images/1/shape1_yellow.png");
    } else if (color === "red-clr" && shape2) {
      $("#color-item-img").attr("src", "./images/2/shape2_red.png");
    } else if (color === "green-clr" && shape2) {
      $("#color-item-img").attr("src", "./images/2/shape2_green.png");
    } else if (color === "blue-clr" && shape2) {
      $("#color-item-img").attr("src", "./images/2/shape2_blue.png");
    } else if (color === "yellow-clr" && shape2) {
      $("#color-item-img").attr("src", "./images/2/shape2_yellow.png");
    } else if (color === "red-clr" && shape3) {
      $("#color-item-img").attr("src", "./images/3/shape3_red.png");
    } else if (color === "green-clr" && shape3) {
      $("#color-item-img").attr("src", "./images/3/shape3_green.png");
    } else if (color === "blue-clr" && shape3) {
      $("#color-item-img").attr("src", "./images/3/shape3_blue.png");
    } else if (color === "yellow-clr" && shape3) {
      $("#color-item-img").attr("src", "./images/3/shape3_yellow.png");
    } else if (color === "red-clr" && shape4) {
      $("#color-item-img").attr("src", "./images/4/shape4_red.png");
    } else if (color === "green-clr" && shape4) {
      $("#color-item-img").attr("src", "./images/4/shape4_green.png");
    } else if (color === "blue-clr" && shape4) {
      $("#color-item-img").attr("src", "./images/4/shape4_blue.png");
    } else if (color === "yellow-clr" && shape4) {
      $("#color-item-img").attr("src", "./images/4/shape4_yellow.png");
    } else if (color === "red-clr" && shape5) {
      $("#color-item-img").attr("src", "./images/5/shape5_red.png");
    } else if (color === "green-clr" && shape5) {
      $("#color-item-img").attr("src", "./images/5/shape5_green.png");
    } else if (color === "blue-clr" && shape5) {
      $("#color-item-img").attr("src", "./images/5/shape5_blue.png");
    } else if (color === "yellow-clr" && shape5) {
      $("#color-item-img").attr("src", "./images/5/shape5_yellow.png");
    }
  });
}

function smoothScroll() {
  // Add smooth scrolling to all links
  $(".option-btn").on("click", function (event) {
    if (this.id === "wholesale-btn") {
      $(".wholesale-section").prop("hidden", false);
      $(".retail-section").prop("hidden", true);
    } else {
      $(".retail-section").prop("hidden", false);
      $(".wholesale-section").prop("hidden", true);
    }
    document
      .querySelector(".options-title")
      .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  });
}
