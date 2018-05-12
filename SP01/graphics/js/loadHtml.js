$(document)
  .ready(function () {
    window.APP_KEY = $('input[name*=hid_q_]').val();
    var page = $("#page");
    var navHtml = [],
      newProductHtml = [],
      productsHtml = [],
      sectionHtml = [],
      hiddenInputs = [];

    navHtml.push('<li class="nav-item nav-title"><a class="nav-link">' + PRODUCTS.name + '</a></li>');
    navHtml.push('<li class="nav-item nav-divider"></li>');

    PRODUCTS.newList.forEach(function (item) {
      navHtml.push('<li class="nav-item nav-title"><a class="nav-link">' + item.name + '</a></li>');

      newProductHtml.push('<div class="col-lg-4 col-md-6 mb-4"><div class="card pt-3" data-id="' + item.id + '" onclick="NewDetail('+item.id+')"><div class="card-body"><h4 class="card-title">' + item.title + '</h4><p class="card-text">' + item.subTitle + '</p></div><img class="card-img-top" src="' + item.imgUrl + '"></div></div>');

      sectionHtml.push('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column bg-white js-page-block" id="' + APP_KEY + '_section' + item.id + '"><div class="my-auto"><div class="row"><div class="col-8"><div class="p-3 p-lg-5"><div class="text-center mb-5"><h2 class="text-warning">' + item.title + "</h2><h3>" + item.subTitle + "</h3></div>" + item.content + '</div></div><div class="col-4"><img src="' + item.imgUrl + '" class="img-fluid" alt=""></div></div></div><div><button class="btn btn-primary angle-btn js-scroll-trigger" type="button" data-href="#' + APP_KEY + "_section" + PRODUCTS.id + '"><i class="fa fa-angle-left fa-4x"></i></button></div></div>');

      hiddenInputs.push('<input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Click" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Buy" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Added" value="0" />')
    });

    navHtml.push('<li class="nav-item nav-divider"></li><li class="nav-item nav-title"><a class="nav-link">Online-Shop</a></li><li class="nav-item nav-divider"></li>')

    PRODUCTS
      .list
      .forEach(function (item, index) {
        navHtml.push('<li class="nav-item nav-title"><a class="nav-link">' + item.name + '</a></li>');

        sectionHtml.push('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" style="background-image: url(' + item.bgUrl + ')" id=' + APP_KEY + "_section" + item.id + '><div class="my-auto"><div class="row"><div class="col-7 offset-5"><div class="bg-white p-l g-5 p-5 h-100"><div class="text-center mb-5"><h2 class="text-warning">' + item.title + '</h2><h3>' + item.subTitle + '</h3></div>' + item.content + '</div></div></div></div><div><button class="btn btn-primary angle-btn js-scroll-trigger" type="button" data-href="#shopping_section"><i class="fa fa-angle-left fa-4x"></i></button></div></div>');

        if (index % 5 === 0) {
          productsHtml.push('<div class="w-100"></div>')
        }
        productsHtml.push('<div class="col"><div class="card mb-4 box-shadow"><img class="card-img-top" src="' + item.imgUrl + '"><div class="card-body"><h5 class="card-title product-title">' + item.title + '</h5><p class="card-text product-subtitle">' + item.size + '</p><div class="btns js-buyBtn" data-id="' + item.id + '"><button type="button" class="btn btn-sm btn-secondary">BUY</button><button type="button" class="btn btn-sm btn-secondary">DETAIL</button></div></div></div></div>');

        hiddenInputs.push('<input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Click" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Buy" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Added" value="0" />')
      });

    sectionHtml.push('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id="shopping_section"><div class="_my-auto"><div class="row text-center">' + productsHtml.join("") + '</div></div><div class="text-right"><div class="footer-checkout d-inline-block">' +
      '<div class="text-center footer-checkout-icon"><i class="fa fa-shopping-cart"></i' +
      '><span id="cart-num">0</span></div><div class="btns"><button class="btn' +
      ' js-emptyCart">Empty cart</button><button class="btn btn-primary js-scroll-trigger" data-href="#cart_section">MY CART</button></div></div></div><div><button class="btn btn-primary angle-btn js-scroll-trigger" type="button" data-href="#' + APP_KEY + "_section" + PRODUCTS.id + '"><i class="fa fa-angle-left fa-4x"></i></button></div></div>');

    sectionHtml.unshift('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id="' + APP_KEY + "_section" + PRODUCTS.id + '"><div class="my-auto row text-center"><div class="col-sm-8"><div class="row">' + newProductHtml.join("") + '</div></div><div class="col-sm-4"><div class="my-auto"><h3 class="p-3">' + PRODUCTS.title + '</h3>' + PRODUCTS.content + '</div></div></div><div class="text-right"><button class="btn btn-primary angle-btn js-scroll-trigger disabled js-nextShopping" type="button" data-href="#shopping_section"><i class="fa fa-angle-right fa-4x"></i></button></div></div>');

    var bodyHtml = '<nav class="navbar navbar-expand-lg _bg-white navbar-dark bg-dark _bg-primary fixed-top" id="sideNav"><a class="navbar-brand js-scroll-trigger" href="#page-top"><span class="d-block d-lg-none">' + PRODUCTS.name + '</span></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item nav-title"><a class="nav-link js-scroll-trigger"><i class="fa fa-home icon-x2" style="position: relative;top:4px"></i> HOME</a></li><li class="nav-item nav-divider"></li>' + navHtml.join("") + '<li class="nav-item nav-divider"></li><li class="nav-item"><a class="nav-link"> REVIEW SHOPPING CART<p><i class="fa fa-shopping-cart icon-x2"></i></p></a></li></ul></div></nav><div class="container-fluid p-0">' + sectionHtml.join("") + '<div class="page-section p-3 p-lg-5 flex-column bg-white js-page-block" id="cart_section"><div class="pb-3"><h3><i class="fa fa-shopping-cart icon-x2"></i> MY CART (<span id="total">0</span>)</h3></div><div class="table-responsive"><table class="table table-hover"><thead><tr><th>#</th><th>PRODUCT</th><th>ITEM</th><th>PRCE</th><th>QUANTITY</th></tr></thead><tbody id="buyList"><tr><td class="text-center" colspan="5">Your Shopping Cart is Empty...</td></tr></tbody></table></div><div class="text-right"><span class="display-4" id="totalPrice">$0</span><div class="btns"><button class="btn js-emptyCart js-submit">Empty cart</button><button class="btn btn-primary" id="next_button">NEXT</button></div></div><div><button class="btn btn-primary angle-btn js-scroll-trigger" type="button" data-href="#shopping_section"><i class="fa fa-angle-left fa-4x"></i></button></div></div></div>' + hiddenInputs.join('') + '<script src="' + PATH + 'vendor/bootstrap/js/bootstrap.bundle.min.js"></script><script src="' + PATH + 'js/app.js"></script>';

    if (page.length > 0) {
      $("link")
        .each(function () {
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