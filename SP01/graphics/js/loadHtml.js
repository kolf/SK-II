$(document)
  .ready(function () {
    window.APP_KEY = $('input[name*=hid_q_]').val();
    var page = $("#page");
    var path = "[%GraphicsPath()%]";
    var navHtml = [],
      top3Html = [],
      productsHtml = [],
      sectionHtml = [],
      hiddenInputs = [];

    navHtml.push('<li class="nav-item nav-title"><a class="nav-link">' + PRODUCTS.name + '</a></li>');
    navHtml.push('<li class="nav-item nav-divider"></li>');

    PRODUCTS
      .list
      .forEach(function (item, index) {
        if (index < 3) {
          navHtml.push('<li class="nav-item nav-title"><a class="nav-link js-scroll-trigger" href="#' + APP_KEY + '_section' + item.id + '">' + item.name + '</a></li>');
          top3Html.push('<div class="col-4 mb-4" onclick="Tracker(' + item.id + ')"><div data-href="#' + APP_KEY + '_section' + item.id + '" class="card pt-3 js-scroll-trigger"><div class="card-body"><h4 class="card-tit' +
              'le">' + item.title + '</h4><p class="card-text">' + item.subTitle + '</p></div><img class="card-img-top" src="' + item.imgUrl + '"></div></div>')
        }

        sectionHtml.push('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" sty' +
            'le="background-image: url(../../graphics/img/FTE_image.jpg)" id=' + APP_KEY + "_section" + item.id + '><div class="my-auto"><div class="row"><div class="col-7 offset-5"><div class="b' +
            'g-white p-l g-5 p-5 h-100"><div class="text-center mb-5"><h2 class="text-warning' +
            '">' + item.title + '</h2><h3>' + item.subTitle + '</h3></div>' + item.content + '</div></div></div></div></div>');

        productsHtml.push('<div class="col" id="item_' + item.id + '"><div class="card mb-4 box-shadow"><img class="card-img-top" src="' + item.imgUrl + '"><div class="card-body"><h5 class="card-title product-title">' + item.title + '</h5><p class="card-text">' + item.size + '</p><div class="btns"><button type="button" class="btn btn-sm btn-secondary js-b' +
            'uy-btn" data-id="' + item.id + '">BUY</button><button type="button" onclick="Tracker(' + item.id + ')"  class="btn btn-sm btn-secondary js-scroll-trigger" data-href="#' + APP_KEY + '_section' + item.id + '">DETAIL</button></div></div></div></div>');

        hiddenInputs.push('<input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Click" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Buy" value="0" /><input type="hidden" name="' + APP_KEY + '_item' + item.id + 'Added" value="0" />')
      });

    navHtml.push('<li class="nav-item nav-divider"></li><li class="nav-item nav-title js-scroll-tr' +
        'igger" href="#onlineShop"><a class="nav-link">Online-Shop</a></li>')

    sectionHtml.push('<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id=' +
        '"onlineShop"><div class="_my-auto"><div class="row text-center">' + productsHtml.join("") + '</div></div><div class="text-right"><div class="footer-checkout d-inline-block">' +
        '<div class="text-center footer-checkout-icon"><i class="fa fa-shopping-cart"></i' +
        '><span id="cart-num">0</span></div><div class="btns"><button class="btn btn-link' +
        ' js-emptyCart">empty cart</button><button class="btn btn-primary js-scroll-trigg' +
        'er" href="#myCart">MY CART</button></div></div></div></div>');

    sectionHtml.unshift('<div class="page-section h-100 mx-auto p-3 p-lg-5 flex-column js-page-block" id=' + APP_KEY + "_section" + PRODUCTS.id + '"><div class="my-auto row text-center"><div class="col-sm-8"><div class="row">' + top3Html.join("") + '</div></div><div class="col-sm-4"><div class="my-auto"><h3 class="p-3">' + PRODUCTS.title + "</h3>" + PRODUCTS.content + "</div></div></div></div>");

    var bodyHtml = '<nav class="navbar navbar-expand-lg _bg-white navbar-dark bg-dark _bg-primary fi' +
        'xed-top" id="sideNav"><a class="navbar-brand js-scroll-trigger" href="#page-top"' +
        '><span class="d-block d-lg-none">' + PRODUCTS.name + '</span></a><button class="navbar-toggler" type="button" data-toggle="collapse" d' +
        'ata-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria' +
        '-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-ico' +
        'n"></span></button><div class="collapse navbar-collapse" id="navbarSupportedCont' +
        'ent"><ul class="navbar-nav"><li class="nav-item nav-title"><a class="nav-link js' +
        '-scroll-trigger" href="#home"><i class="fa fa-home icon-x2" style="position: rel' +
        'ative;top:4px"></i> HOME</a></li><li class="nav-item nav-divider"></li>' + navHtml.join("") + '<li class="nav-item nav-divider"></li><li class="nav-item"><a class="nav-link js' +
        '-scroll-trigger" href="#myCart"> REVIEW SHOPPING CART<p><i class="fa fa-shopping' +
        '-cart icon-x2"></i></p></a></li></ul></div></nav><div class="container-fluid p-0' +
        '">' + sectionHtml.join("") + '<div class="page-section p-3 p-lg-5 flex-column bg-white js-page-block" id="myCa' +
        'rt"><div class="pb-3"><h3><i class="fa fa-shopping-cart icon-x2"></i> MY CART (<' +
        'span id="total">0</span>)</h3></div><div class="table-responsive"><table class="' +
        'table table-hover"><thead><tr><th>#</th><th>PRODUCT</th><th>ITEM</th><th>PRCE</t' +
        'h><th>QUANTITY</th></tr></thead><tbody id="buyList"><tr><td class="text-center" ' +
        'colspan="5">Your Shopping Cart is Empty...</td></tr></tbody></table></div><div c' +
        'lass="text-right"><span class="display-4" id="totalPrice">$0</span><div class="b' +
        'tns"><button class="btn btn-link js-removeAll">Remove all items</button><button ' +
        'class="btn btn-primary" id="next_button">NEXT</button></div></div></div></div>' + hiddenInputs.join('') + '<script src="../../graphics/vendor/bootstrap/js/bootstrap.bundle.min.js"></scrip' +
        't><script src="../../graphics/js/app.js"></script>';

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