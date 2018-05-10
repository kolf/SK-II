(function () {
  var $buyList = $("#buyList"),
    $total = $("#total"),
    $totalPrice = $("#totalPrice"),
    $cartTotal = $("#cart-num");
  var productList = PRODUCTS
    .list
    .map(function (item) {
      return {
        buyNum: 0,
        id: item.id,
        title: item.title,
        price: item.price,
        size: item.size,
        imgUrl: item.imgUrl,
        added: 0,
        click: 0,
      };
    });

  init(function () {
    // 执行滚动方法
    (function () {
      var pageBlocks = $(".js-page-block");
      var scrollBtns = $(".js-scroll-trigger");
      scrollBtns.click(function () {
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
    })();

    // 执行添加到购物车
    (function () {
      var btn = $(".js-buy-btn");
      btn.on('click', function () {
        var id = $(this).data("id");
        buy(id, "+1");
      });
    })();

    // 移除购物车
    (function () {
      var list = $("#buyList");
      list.on('click', function (e) {
        var target = e.target;
        if (/js\-detele\-btn/.test(target.className)) {
          var id = $(target).parents('tr').data('id');
          buy(id, 0)
        }
      });
    })();

    (function () {
      $("#checkout")
        .click(function () {
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
    var product = productList.find(function (item) {
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

    var added = product.buyNum > 0 ? 1 : 0;
    $('input[name=' + APP_KEY + '_item' + id + 'Added]').val(added);
    $('input[name=' + APP_KEY + '_item' + id + 'Buy]').val(product.buyNum);

    var productIndex = 0,
      totalPrice = 0,
      total = 0;
    productList.forEach(function (item) {
      if (item.buyNum > 0) {
        total += item.buyNum;
        productIndex++;
        totalPrice += item.buyNum * item.price;
        buyHtml.push('<tr data-id="' + item.id + '"><td>' + productIndex + '</td><td class="text-center"><img src="' + item.imgUrl + '" alt="' + item.title + '" width="160" class="img-full"></td><td><div>' + item.title + '</div><p>' + item.size + '</p><p><button type="button" class="btn btn-sm btn-danger js-detele-btn">DETELE</button></p></td><td>$' + item.price + '</td><td><input type="number" value="' + item.buyNum + '" class="form-control text-center"></td></tr>');
      }
    });

    if (total > 0) {
      $buyList.html(buyHtml.join(""));
    } else {
      $buyList.html('<tr><td class="text-center" colspan="5">Your Shopping Cart is Empty...</td></tr>');
    }
    $totalPrice.text("$" + totalPrice);
    $total.text(total);
    $cartTotal.text(total);
  }

  window.Tracker = function (id) {
    var input = $('input[name=' + APP_KEY + '_item' + id + 'Click]');
    var value = input.val() || 0;
    input.val(value++);
  }
})();