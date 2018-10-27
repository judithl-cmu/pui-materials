$(document).ready(function() {
    // update quantity in cart every time the detail page loads so it sticks
    var updatedCart = JSON.parse(localStorage.getItem("item"));
    var totalQty = 4;

    for (var l = 0; l < updatedCart.length; l++) {
        totalQty += updatedCart[l]["quantity"];
    }

    $("#cart-count-text").html(totalQty);
    // calculate subtotal
    var subtotal = 0;

    var addedProduct = JSON.parse(localStorage.getItem("item"));
    var cartLen = addedProduct.length;

    for (var i = 0; i < cartLen; i++) {
        var addedPImgURL = addedProduct[i].image;
        var addedPName = addedProduct[i].name;
        var addedPPrice = addedProduct[i].price;
        var addedPColor = addedProduct[i].color;
        var addedPSize = addedProduct[i].size;
        var addedPQty = addedProduct[i].quantity;

        var pPriceLen = addedPPrice.length;
        var totalPPrice = "$" + addedPPrice.slice(1, pPriceLen) * addedPQty;

        $("#cart-table tr:last").after("<tr><td class='cart-img-thumbnail'><img class='cart-img' src='" + addedPImgURL +"'/></td><td class='cart-img-details'><div class='product-list-item'><div class='name'><a class='product-link'>" + addedPName + "</a><p><span class='label'> " + addedPSize + "</span><span class='value'>" + addedPColor + "</span></p></div></div></td><td class='cart-price'><div class='price'><span class='price'>" + addedPPrice + "</span></div></td><td class='cart-quantity'>" + addedPQty + "</td><td class='cart-remove'><button class='btn-remove' id>remove</button></td><td class='cart-price-narrow'><span class='price-narrow'>" + totalPPrice + "</span><div></td></tr>");
    }

    $(".btn-remove").on("click", function() {
        $(this).parent().parent().hide();

        var newArr = JSON.parse(localStorage.getItem("item"));
        for (var j = 0; j < newArr.length; j++) {
            newArr[j].id = j;
        }

        // update array and local storage
        var spliceIdx = $(this).attr("id");
        newArr.splice(spliceIdx, 1);

        localStorage.setItem("item", JSON.stringify(newArr));

        // update subtotal with remove
        var qtySib = $(this).parent().next().children().text();
        var arrToParse = qtySib.split("");
        var priceSpliceIdx = arrToParse.indexOf("$");
        arrToParse.splice(priceSpliceIdx, 1);
        var priceToSubstract = parseFloat(arrToParse.join(""));

        subtotal -= priceToSubstract;

        if (subtotal <= 0.00) {
            subtotal = 0.00;
        }

        // $("p:first").replaceWith("Hello world!");


        // update quantity in cart icon
        var qtyToRemove = parseInt($(this).parent().prev().text());
        //
        console.log(typeof qtyToRemove);
        totalQty -= qtyToRemove;

        $("#cart-count-text").html(totalQty);

        $("#subtotal").html(subtotal.toFixed(2));


    });

    // calculate cart subtotal after having all the rows
    $("#cart-table").find(".cart-price-narrow").each(function(){
        var splitStrToArr = $(this).text().split("");
        var spliceIdx = splitStrToArr.indexOf("$");
        splitStrToArr.splice(spliceIdx, 1);
        var newStr = splitStrToArr.join("");
        var priceInCurrentTable = parseFloat(newStr);

        subtotal += priceInCurrentTable;
        return subtotal;
    });

    $("#subtotal").append(subtotal.toFixed(2));



});