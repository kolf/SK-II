var APP_KEY = "shopping01";

$(document).ready(function() {
  var page = $("#page");
  var path = "[%GraphicsPath()%]";
  var navHtml = [],
    categoryHtml = [],
    sectionHtml = [],
    productHtml = [],
    productsHtml = [];

  navHtml.push(
    '<li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#' +
      APP_KEY +
      PRODUCTS.id +
      '">' +
      PRODUCTS.name +
      "</a></li>"
  );
  navHtml.push('<li class="nav-item nav-divider"></li>');
  PRODUCTS.categorys.forEach(function(c) {
    navHtml.push(
      '<li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#' +
        APP_KEY +
        c.id +
        '">' +
        c.name +
        "</a></li>"
    );

    categoryHtml.push(
      '<div class="col-lg-4 col-md-6 mb-4"><div class="card pt-3 js-scroll-trigger" data-href="#' +
        APP_KEY +
        c.id +
        '"><div class="card-body"><h4 class="card-title">' +
        c.title +
        '</h4><p class="card-text">' +
        c.subTitle +
        '</p></div><img class="card-img-top" src="' +
        c.imgUrl +
        '"></div></div>'
    );

    sectionHtml.push(
      '<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column bg-white js-page-block" id="' +
        APP_KEY +
        c.id +
        '"><div class="my-auto"><div class="row"><div class="col-8"><div class="p-3 p-lg-5"><div class="text-center mb-5"><h2 class="text-warning">' +
        c.title +
        "</h2><h3>" +
        c.subTitle +
        "</h3></div>" +
        c.content +
        '</div></div><div class="col-4"><img src="' +
        c.imgUrl +
        '" class="img-fluid" alt=""></div></div></div></div>'
    );
  });
  navHtml.push(
    '<li class="nav-item nav-divider"></li><li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#onlineShop">Online-Shop</a></li><li class="nav-item nav-divider"></li>'
  );
  PRODUCTS.list.forEach(function(l) {
    navHtml.push(
      '<li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#' +
        APP_KEY +
        l.id +
        '">' +
        l.name +
        "</a></li>"
    );

    sectionHtml.push(
      '<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id="' +
        APP_KEY +
        l.id +
        '" style="background-image: url(../../graphics/img/FTE_image.jpg)"><div class="my-auto"><div class="row"><div class="col-7 offset-5"><div class="bg-white p-lg-5 h-100"><div class="text-center mb-5"><h2 class="text-warning">' +
        l.title +
        "</h2><h3>" +
        l.subTitle +
        "</h3></div>" +
        l.content +
        "</div></div></div></div></div>"
    );

    productsHtml.push(
      '<div class="col"><div class="card mb-4 box-shadow"><img class="card-img-top" src="' +
        l.imgUrl +
        '"><div class="card-body"><h5 class="card-title product-title">' +
        l.title +
        '</h5><p class="card-text">' +
        l.size +
        '</p><div class="btns"><button type="button" class="btn btn-sm btn-secondary js-buy-btn" data-id="' +
        l.id +
        '">BUY</button><button type="button" class="btn btn-sm btn-secondary js-scroll-trigger" data-href="#' +
        APP_KEY +
        l.id +
        '">DETAIL</button></div></div></div></div>'
    );
  });

  sectionHtml.push(
    '<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id="onlineShop"><div class="_my-auto"><div class="row text-center">' +
      productsHtml.join("") +
      '</div></div><div class="text-right"><div class="footer-checkout d-inline-block"><div class="text-center footer-checkout-icon"><i class="fa fa-shopping-cart"></i><span id="cart-num">0</span></div><button class="btn btn-primary js-scroll-trigger" href="#myCart">MY CART</button></div></div></div>'
  );

  sectionHtml.unshift(
    '<div class="page-section h-100 mx-auto p-3 p-lg-5 flex-column js-page-block" id="' +
      APP_KEY +
      PRODUCTS.id +
      '"><div class="my-auto row text-center"><div class="col-sm-8"><div class="row">' +
      categoryHtml.join("") +
      '</div></div><div class="col-sm-4"><div class="my-auto"><h3 class="p-3">' +
      PRODUCTS.title +
      "</h3>" +
      PRODUCTS.content +
      "</div></div></div></div>"
  );

  var bodyHtml =
    '<nav class="navbar navbar-expand-lg _bg-white navbar-dark bg-dark _bg-primary fixed-top" id="sideNav"><a class="navbar-brand js-scroll-trigger" href="#page-top"><span class="d-block d-lg-none">' +
    PRODUCTS.name +
    '</span></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#home"><i class="fa fa-home icon-x2" style="position: relative;top:4px"></i> HOME</a></li><li class="nav-item nav-divider"></li>' +
    navHtml.join("") +
    '<li class="nav-item nav-divider"></li><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#myCart"> REVIEW SHOPPING CART<p><i class="fa fa-shopping-cart icon-x2"></i></p></a></li></ul></div></nav><div class="container-fluid p-0">' +
    sectionHtml.join("") +
    '<div class="page-section p-3 p-lg-5 flex-column bg-white js-page-block" id="myCart"><div class="pb-3"><h3><i class="fa fa-shopping-cart icon-x2"></i> MY CART (<span id="total">0</span>)</h3></div><div class="table-responsive"><table class="table table-hover"><thead><tr><th>#</th><th>PRODUCT</th><th>ITEM</th><th>PRCE</th><th>QUANTITY</th></tr></thead><tbody id="buyList"><tr><td class="text-center" colspan="5">您的购物车还没有产品...</td></tr></tbody></table></div><div class="text-right"><span class="display-4" id="totalPrice">$0</span><div><button class="btn btn-primary" id="next_button">CHECKOUT</button></div></div></div></div><script src="../../graphics/vendor/bootstrap/js/bootstrap.bundle.min.js"></script><script src="../../graphics/vendor/jquery-easing/jquery.easing.min.js"></script><script src="../../graphics/js/app.js"></script>';

  if (page.length > 0) {
    $("link").each(function() {
      if (!$(this).data("af")) {
        $(this).remove();
      }
    });

    $("#test_mode_bar").remove();
    $("#mobile_display").remove();
    $("#test_options_dialog").remove();
    $("#overlay").remove();
    $("#submit_overlay").remove();
    $("#page")
      .before(bodyHtml)
      .hide();
  }
});
