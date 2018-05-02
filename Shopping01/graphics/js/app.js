(function() {
  var $buyList = $("#buyList");
  var productList = PRODUCTS.list.map(function(item) {
    return {
      buyNum: 0,
      id: item.id,
      title: item.title,
      price: item.price,
      size: item.size,
      imgUrl: item.imgUrl
    };
  });

  init(function() {
    // 执行滚动方法
    (function() {
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
    })();

    // 执行添加到购物车
    (function() {
      var btn = $(".js-buy-btn");
      btn.click(function() {
        var id = $(this).data("id");
        buy(id, "+1");
      });
    })();

    (function() {
      $("#checkout").click(function() {
        console.log(this);
      });
    })();
  });

  function init(callback) {
    var target = location.hash;

    if (target) {
      $(target).addClass("d-flex");
    } else {
      $(".js-page-block")
        .eq(0)
        .addClass("d-flex");
    }

    callback();
  }

  function buy(id, num) {
    var product = productList.find(function(item) {
      return item.id == id;
    });

    var buyHtml = [];

    if (num === "+1") {
      product.buyNum++;
    } else if (num === "-1") {
      product.buyNum--;
    } else {
      product.buyNum = num;
    }

    var productIndex = 0;
    productList.forEach(function(item) {
      if (item.buyNum > 0) {
        productIndex++;
        buyHtml.push(
          "<tr><td>" +
            productIndex +
            '</td><td class="text-center"><img src="' +
            item.imgUrl +
            '" alt="' +
            item.title +
            '" width="160" class="img-full"></td><td><p>' +
            item.title +
            "</p><p>" +
            item.size +
            "</p></td><td>" +
            item.price +
            '</td><td><input type="number" value="' +
            item.buyNum +
            '" class="form-control text-center"></td></tr>'
        );
      }
    });

    if (buyHtml.length > 0) {
      $buyList.html(buyHtml.join(""));
    } else {
      $buyList.html(
        '<tr><td class="text-center" colspan="5">您的购物车还没有产品...</td></tr>'
      );
    }
  }
})();
