$(document).ready(function() {

    // update quantity in cart every time the detail page loads so it sticks
    var updatedCart = JSON.parse(localStorage.getItem("item"));
    var totalQty = 4;

    for (var l = 0; l < updatedCart.length; l++) {
        totalQty += updatedCart[l]["quantity"];
    }

    $("#cart-count-text").html(totalQty);

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
        if (quantity <= 20) {
            quantity += 1;
        }

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

    // add to cart and update cart quantity
    $("#add-to-cart").on("click", function() {
        // define constructor keys
        var productImgURL = $(".product-detail-img img").attr("src");
        var productName = $(".product-detail-title").text();
        var productPrice = $(".product-detail-price").text();
        var productColor = $("#product-color").text();
        var productSize = $("#product-size").text();
        var productQty = parseInt($("#yellowCB-quantity-content").text());

        var product = new Product(productImgURL, productName, productPrice, productColor, productSize, productQty);

        // check if size and color have been selected
        // if one is not selected, alert messages
        if ($("#product-color").text() == "Color" && $("#product-size").text() != "Size") {
            $(".popup-over, .popup-content").addClass("active");
            $("#popup-message").html("Pick a color for your pal!");

            // close the pop-up
            $("#btn-ok").on("click", function() {
                $(".popup-overlay, .popup-content").removeClass("active");
            });
        }

        else if ($("#product-size").text() == "Size" && $("#product-color").text() != "Color") {
            $(".popup-over, .popup-content").addClass("active");
            $("#popup-message").html("Select the correct size so your pal stays comfy!");

            // close the pop-up
            $("#btn-ok").on("click", function() {
                $(".popup-overlay, .popup-content").removeClass("active");
            });
        }

        else if ($("#product-color").text() == "Color" && $("#product-size").text() == "Size") {
            $(".popup-over, .popup-content").addClass("active");
            $("#popup-message").html("Remember to choose a size and color for your pal! :)");

            // close the pop-up
            $("#btn-ok").on("click", function() {
                $(".popup-overlay, .popup-content").removeClass("active");
            });
        }

        // if both have been selected, initialize cart
        else {
            var tempCart = [];

            var cart = JSON.parse(localStorage.getItem("item"));

            if (cart == null) {

                tempCart.push(product);
                localStorage.setItem("item", JSON.stringify(tempCart));
            }

            else {
                var hasSize = cart.some(function (object) {
                    return (object["size"] === productSize);
                });

                var hasColor = cart.some(function (product) {
                    return product["color"] === productColor;
                });

                if (hasSize && hasColor) {
                    console.log(productQty);

                    // locate existing item with same size and color
                    for (var k = 0; k < cart.length; k++) {
                        if (cart[k]["size"] == productSize && cart[k]["color"] == productColor) {
                            cart[k]["quantity"] += productQty;
                            console.log("testing successful");
                        }
                    }
                }

                else {
                    cart.push(product);
                }

                localStorage.setItem("item", JSON.stringify(cart));

                // update quantity in cart icon
                var updatedQty = parseInt($("#cart-count-text").text()) + productQty;
                $("#cart-count-text").html(updatedQty);
            }
        }
    });

    // function for slider

    var carouselWidget = $("#carousel-widget");
    var carousel = $("#carousel-container");
    var rightArrow = $("#right-arrow");
    var leftArrow = $("#left-arrow");


    const buildCarousel = (response) => {

        const products = response.asins;

        let displayProducts = "";
        let i;

        displayProducts += "<ul class='products'>";

        products.forEach( (product) => {

            displayProducts += `

    <li class='product_cell' data-link='${product.detailPageUrl}'>
      <div class='product_image'> <img class='asin_image' src='${product.imageHires}'/> </div>
        
      <div class='product_details'>  

        <div class='product_title'>${product.title.substring(0, 20)}...</div>
        <div class='asin_details'>
          <div class='product_price'>${product.price}</div>
        </div>

      </div>

    </li>`;

        });

        displayProducts += "</ul>";

        $carousel.innerHTML = displayProducts;

        const product_links = document.querySelectorAll(".product_cell");
        let j;
        for (j = 0; j < product_links.length; j++) {
            product_links[j].addEventListener('click', function() {
                let linkOut = this.getAttribute('data-link');
                window.open("http://amazon.com" + linkOut );
            });
        }
        //REMOVE LOADER TO DISPLAY RESULTS
        setTimeout(() => { $loader.classList.add("fade-out"); }, 250);

    }
// LEFT AND RIGHT ARROWS
    $leftArrow.addEventListener('click', () => {
        $carouselWidget.scrollBy({ top: 0, left: -1 * $carouselWidget.offsetWidth, behavior: 'smooth' });
    });
    $rightArrow.addEventListener('click', () => {
        $carouselWidget.scrollBy({ top: 0, left: $carouselWidget.offsetWidth, behavior: 'smooth' });
    });

    init();
});
