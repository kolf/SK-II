var APP_KEY = "shopping01";

$(document).ready(function () {
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
  PRODUCTS.categorys.forEach(function (c) {
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
  PRODUCTS.list.forEach(function (l) {
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
      '" style="background-image: url(../../graphics/img/FTE_image.jpg)"><div class="my-auto"><div class="row"><div class="col-7 offset-5"><div class="bg-white p-lg-5 h-100"><div class="text-center mb-5"><h2 class="text-warning">'+l.title+'</h2><h3>'+l.subTitle+'</h3></div>' +
      l.content +
      "</div></div></div></div></div>"
    );

    productsHtml.push(
      '<div class="col"><div class="card mb-4 box-shadow"><img class="card-img-top" src="../../graphics/img/skin_reset essence.png"><div class="card-body"><h5 class="card-title product-title">SKIN RESET ESSENCE</h5><p class="card-text">Pre-Serum 15,000円 30mL</p><div class=""><button type="button" class="btn btn-sm btn-secondary">BUY</button><button type="button" class="btn btn-sm btn-secondary js-scroll-trigger" data-href="#Bestsellers">DETAIL</button></div></div></div></div>'
    );
  });

  sectionHtml.push(
    '<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column js-page-block" id="onlineShop"><div class="_my-auto"><div class="row text-center">' +
    productsHtml.join('') +
    "</div></div></div>"
  );

  sectionHtml.unshift(
    '<div class="page-section h-100 mx-auto p-3 p-lg-5 flex-column js-page-block" id="' +
    APP_KEY +
    PRODUCTS.id +
    '"><div class="my-auto row text-center"><div class="col-sm-8"><div class="row">' +
    categoryHtml.join('') +
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
    navHtml.join('') +
    '<li class="nav-item nav-divider"></li><li class="nav-item"><a class="nav-link js-scroll-trigger" href="#myCart"> REVIEW SHOPPING CART<p><i class="fa fa-shopping-cart icon-x2"></i></p></a></li></ul></div></nav><div class="container-fluid p-0">' +
    sectionHtml.join('') +
    '<div class="page-section p-3 p-lg-5 h-100 mx-auto flex-column bg-white js-page-block" id="myCart"><div class="my-auto"><div class="pb-3"><h3><i class="fa fa-shopping-cart icon-x2"></i> MY CART (2)</h3></div><div class="table-responsive"><table class="table table-hover"><thead><tr><th>#</th><th>PRODUCT</th><th>ITEM</th><th>PRCE</th><th>QUANTITY</th></tr></thead><tbody><tr><td>1</td><td class="text-center"><img src="../../graphics/img/category1.png" alt="" width="160" class="img-full"></td><td>FIRST TIME ESSENCE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td><td>$140</td><td><input type="number" value="1" class="form-control textt-center"></td></tr><tr><td>1</td><td class="text-center"><img src="../../graphics/img/category1.png" alt="" width="160" class="img-full"></td><td>FIRST TIME ESSENCExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td><td>$140</td><td><input type="number" value="1" class="form-control textt-center"></td></tr><tr><td>1</td><td class="text-center"><img src="../../graphics/img/category1.png" alt="" width="160" class="img-full"></td><td>FIRST TIME ESSENCE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td><td>$140</td><td><input type="number" value="1" class="form-control textt-center"></td></tr><tr><td>1</td><td class="text-center"><img src="../../graphics/img/category1.png" alt="" width="160" class="img-full"></td><td>FIRST TIME ESSENCExxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td><td>$140</td><td><input type="number" value="1" class="form-control textt-center"></td></tr></tbody></table></div><div class="text-right"><span class="display-4">$290</span><div><button class="btn btn-primary">CHECKOUT</button></div></div></div></div></div><link href="../../graphics/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"><link href="../../graphics/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet"><link href="../../graphics/css/app.css" rel="stylesheet"><script src="../../graphics/vendor/bootstrap/js/bootstrap.bundle.min.js"></script><script src="../../graphics/vendor/jquery-easing/jquery.easing.min.js"></script><script src="../../graphics/js/app.js"></script>';

  if (page.length > 0) {
    $("link").each(function () {
      $(this).remove();
    });

    $("body").html(bodyHtml);
  }
});