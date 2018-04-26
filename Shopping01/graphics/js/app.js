init(function(){
  var pageBlocks = $(".js-page-block");
  var scrollBtns = $(".js-scroll-trigger");
  scrollBtns.click(function() {
    var btn = $(this);
    var target = $(this).attr("href") || $(this).attr("data-href");
    console.log(target);
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
});

function init(callback) {
  var target = location.hash;
  $(target).addClass("d-flex");

  callback();
}