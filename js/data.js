$(document).ready(function() {
    $(".card").click(function() {
var category = $(this).children('img').attr('class');   // get category of clicked image
if ($(this).is(":visible")) {
    $(".related-img-container img").hide(); // hide all images
    $(".related-img-container img." + category).show(); // show images with matching category
    $('.m').css("display",  "block")

          // if image is already showing
} else {        
    $("#image-gallery img").show(); // show all images
    
}
});
});
