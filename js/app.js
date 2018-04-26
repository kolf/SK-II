(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  var pageBlocks = $(".js-page-block");
  var scrollBtns = $(".js-scroll-trigger");
  scrollBtns.click(function() {
    var btn = $(this);
    var target = $(this).attr("href") || $(this).attr("data-href");

    if (target && $(target).length) {
      if (location.hash != target) {
        location.hash = target;
      }
      scrollBtns.removeClass("active");
      btn.addClass("active");
      pageBlocks.removeClass("d-flex");
      $(target).addClass("d-flex");
    }
    return false;
  });

  initPage();
  function initPage() {
    var target = location.hash;
    $(target).addClass("d-flex");
  }
})(jQuery); // End of use strict
