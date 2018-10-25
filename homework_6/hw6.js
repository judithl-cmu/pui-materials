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

    // add or remove quantity
    var quantity = 1;

    $("#yellowCB-quantity-content").text(quantity);

    $("#yellowCB-quantity-remove").on("click", function() {
        if (quantity >= 1) {
            quantity -= 1;
        }
        $("#yellowCB-quantity-content").text(quantity);
    });

    $("#yellowCB-quantity-add").on("click", function() {
        quantity += 1;
        $("#yellowCB-quantity-content").text(quantity);
    });

    function Product(image, name, price, color, size, quantity) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
    }


    $("#add-to-cart").on("click", function() {
        // define constructor keys
        var productImgURL = $(".product-detail-img img").attr("src");
        var productName = $(".product-detail-title").text();
        var productPrice = $(".product-detail-price").text();
        var productColor = $("#product-color").text();
        var productSize = $("#product-size").text();
        var productQty = $("#yellowCB-quantity-content").text();

        var product = new Product(productImgURL, productName, productPrice, productColor, productSize, productQty);

        // initialize cart
        var tempCart = [];

        var cart = JSON.parse(localStorage.getItem("item"));

        if (cart == null) {
            tempCart.push(product);
            localStorage.setItem("item", JSON.stringify(tempCart));
        }

        else {
            cart.push(product);
            localStorage.setItem("item", JSON.stringify(cart));
        }

        // sticking info into cart
    });



    // grabbing information from html














    // shopping cart save
    // function saveCart() {
    //      localStorage.setItem("cart", JSON.stringify(cart));
    // }
    //
    // // add to cart
    // var cart = [];
    // var Item = function(name, price, quantity) {
    //     this.name = name;
    //     this.price = price;
    //     this.quantity = quantity;
    // }
    // //
    // function addToCart(name, price, quantity) {
    //     for (var i in cart) {
    //        if (cart[i].name === name) {
    //            cart[i].count += count;
    //            return;
    //        }
    //    }
    //
    //     var item = new Item(productTitle, productPrice, quantity);
    //     cart.push(item);
    //     saveCart();
    // }
    // // remove from cart
    // function removeFromCart() {
    //     for (var i in cart) {
    //         if (cart[i].name === name) {
    //             cart[i].count --;
    //             if (cart[i].count == 0) {
    //                 cart.splice(i, 1);
    //             }
    //             break;
    //         }
    //     }
    //     saveCart();
    // }
    //
    // // clear the cart
    // function clearCart() {
    //     cart = [];
    //     saveCart();
    // }
    //
    // // count cart
    // function countCart() {
    //     var totalCount = 0;
    //     for (var i in cart) {
    //         totalCount += cart[i].count;
    //     }
    // }
    //
    // // test if adding works on the same page
    // $("#test-cart").on("click", function() {
    //     $("#cart-table tr:last").after("<tr><td>hello we are testing!</td></tr>");
    //     console.log("test is successful");
    // });

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
