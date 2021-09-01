// function init() {
//   // eslint-disable-next-line no-undef
//   const slider = new Swiper('.swiper-container', {
//     loop: true,
//     navigation: {
//       nextEl: document.querySelector('[data-next]'),
//       prevEl: document.querySelector('[data-prev]'),
//     },
//     preloadImages: false,
//     lazy: true,
//     speed: 400,
//     watchSlidesVisibility: true,
//     on: {
//       init: (e) => {
//         document.querySelector('[data-total]').innerHTML = document.querySelectorAll('.slide').length - 2;
//         document.querySelector('[data-current]').innerHTML = e.activeIndex + 1;
//       },
//     },
//   });

//   slider.on('activeIndexChange', (obj) => {
//     document.querySelector('[data-current]').innerHTML = obj.realIndex + 1;
//   });
// }

// document.addEventListener('DOMContentLoaded', init);

$(document).ready(function () {
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation").fadeOut("slow");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".pageup").css('opacity', '1');
    } else {
      $(".pageup").css('opacity', '0');
    }
  });

  $(".pageup").on("click", function () {
    var el = $(this);
    var dest = el.attr("href");
    if (dest !== undefined && dest !== '') {
      $("html").animate({
        scrollTop: $(dest).offset().top - 100
      }, 1000
      );
    }
    return false;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const placeHolder = document.querySelector(".place-holder"),
    input = document.querySelector(".input-tel"),
    placeHolderFooter = document.querySelector(".place-holder-footer"),
    inputFooter = document.querySelector(".input-tel-footer"),
    placeHolderModal = document.querySelector(".place-holder-modal"),
    inputModal = document.querySelector(".input-tel-modal");

  placeHolder.addEventListener("click", function () {
    placeHolder.style.display = "none";
    input.focus();
  });
  placeHolderFooter.addEventListener("click", function () {
    placeHolderFooter.style.display = "none";
    inputFooter.focus();
  });
  placeHolderModal.addEventListener("click", function () {
    placeHolderModal.style.display = "none";
    inputModal.focus();
  });
});