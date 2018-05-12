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

  init();
  // 执行添加到购物车
  (function () {
    var btn = $(".js-buyBtn");
    btn.on('click', function (e) {
      var id = $(this).data("id");
      var target = e.target;
      if (/btn/.test(target.className)) {
        if (target.innerText === 'BUY') {
          buy(id, "+1");
        } else if (target.innerText === 'DETAIL') {
          detail(id)
        }
      }
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

    $('.js-emptyCart').on('click', function () {
      productList.forEach(function (item) {
        buy(item.id, 0)
      })

      if (/js\-submit/.test(this.className)) {
        SSI_SubmitMe()
      }

      return false;
    })

    list.find('input').on('input', function(e){
      console.log(e)
    })

    //js-removeAll
  })();

  function init() {
    go(location.hash)

    var scrollBtns = $(".js-scroll-trigger");
    scrollBtns.click(function () {
      if(/disabled/.test(this.className)){
        return false;
      }
      var btn = $(this);
      var target = $(this).attr("href") || $(this).attr("data-href");

      go(target);
      return false;
    });

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
        buyHtml.push('<tr data-id="' + item.id + '"><td>' + productIndex + '</td><td class="text-center"><img src="' + item.imgUrl + '" alt="' + item.title + '" width="160" class="img-full"></td><td><div>' + item.title + '</div><p>' + item.size + '</p><p><button type="button" class="btn btn-sm btn-danger js-detele-btn">DETELE</button></p></td><td>$' + item.price + '</td><td><input min="1" max="100" type="number" value="' + item.buyNum + '" class="form-control text-center js-cartNumInput" /></td></tr>');
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

    inputBindEvent()
  }

  function inputBindEvent(){
    $('.js-cartNumInput').on('input', function(e){
      var value = e.target.value;
      var id = $(this).parents('tr').data('id');
      buy(id, value)
    })
  }

  function detail(id) {
    var target = '#' + APP_KEY + "_section" + id;
    Tracker(id);
    go(target)
  }

  function newDetail(id){
    $('.js-nextShopping').removeClass('disabled')
    detail(id)
  }

  function go(target) {
    console.log(target)
    if (!target || !/section/.test(target)) {
      target = $('.js-page-block')[0];
    };

    location.hash = target;
    $(".js-page-block").removeClass("d-flex");
    $(target).addClass("d-flex");
  }

  window.Tracker = function (id) {
    var input = $('input[name=' + APP_KEY + '_item' + id + 'Click]');
    var value = input.val() || 0;
    value++;
    input.val(value);
  }

  window.NewDetail = newDetail;
})();