// Move Scroll Element To Top And FadeOut
$(document).ready(
    $(window).scroll(function () {
        const scroll_top = $(window).scrollTop();
        if (scroll_top > 200) {
          $(".scroll").fadeIn();
        } else {
          $(".scroll").fadeOut();
        }
          })
)



// Change BG-NavBar On Scroll
$(window).scroll(function () {
  const scroll_top = $(window).scrollTop();
  if (scroll_top > 10) {
    $(".head").addClass("head2");
  } else {
    $(".head").removeClass("head2");
  }
});