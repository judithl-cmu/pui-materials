/*$(document).ready(function(){
    $("#add-item").click(function() { 
        var list = $("#grocery-list");
        var itemInput = $("#new-list-item"); 
        list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>") 
    });
    
    
    $(".delete-item").click(function() {
        $(this).parent().remove();
        console.log("test");
    });
});*/

$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});

$(document).on("click", ".complete-item", function() {
    if ($(this).checked) {
        console.log("hi");
        $(this).parent().css("text-decoration", "line-through");
    }
    else {
        $(this).parent().css("text-decoration", "none");
    }
});


/*function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}*/
