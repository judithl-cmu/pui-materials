$(document).ready(function() {

    // modify options on Product Detail page

    $(".dropdown-content p").on("click", function () {
        var chosenColor = $(this).text();
        $("#product-color").text(chosenColor);
    });

    $(".dropdown-content-right p").on("click", function () {
        var chosenSize = $(this).text();
        $("#product-size").text(chosenSize);
    });

    // update image
    $("#color-blackberry").on("click", function () {
        $("#detail-img-yellowCB").attr("src", "PUI-HW6-sources/CB-BLK.png");
    });

    $("#color-crazy-berry").on("click", function () {
        $("#detail-img-yellowCB").attr("src", "PUI-HW6-sources/CB-CRZBRY.png");
    });

    $("#color-fire-orange").on("click", function () {
        $("#detail-img-yellowCB").attr("src", "PUI-HW6-sources/CB-1.jpg");
    });

    $("#color-strawberry").on("click", function () {
        $("#detail-img-yellowCB").attr("src", "PUI-HW6-sources/CB-STR.png");
    });

    // grabbing information from
    var productImgURL = $(".product-detail-img img").attr("src");
    var productTitle = $(".product-detail-title").text();
    var productPrice = $(".product-detail-price");

    // shopping cart save
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // add to cart
    var cart = [];
    var Item = function(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    function addToCart(name, price, quantity) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                return;
            }
        }

        var item = new Item(productTitle, productPrice, quantity);
        cart.push(item);
        saveCart();
    }

    // remove from cart
    function removeFromCart() {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count --;
                if (cart[i].count == 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // clear the cart
    function clearCart() {
        cart = [];
        saveCart();
    }

    // count cart
    function countCart() {
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }
    }

});
//     var newItem = JSON.parse(localStorage.getItem("itemInCart"));
//     var count = 0;
//
//     if (newItem !== null) {
//         localStorage.setItem("itemInCart", JSON.stringify(newItem));
//         count += 1;
//     }
//
//
// });
