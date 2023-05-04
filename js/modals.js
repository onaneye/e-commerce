// creati the modal
var images = document.querySelectorAll("div.card")
var relatedImages = document.querySelectorAll("#related-img")
var modal = document.querySelector("#myModal")
var closeBtn = document.querySelector(".close")
var estimateBtn = document.querySelector("#btn-estimate")
var estimateBtn = document.querySelector("#btn-estimate")
var productMessage = document.querySelector(".product-added")
var qtyMinus = document.querySelector("#qty-minus")
var qtyPlus = document.querySelector("#qty-plus")

qty = 12





function up() {
    qty++; 
    document.querySelector("#qty-value").value = qty

}

// button for reducing quantity
qtyPlus.addEventListener("click",function() {
    up()
 })


 //button for increasing quantity
 qtyMinus.addEventListener("click",function() {
    down(min)
 })


function down(min) {
    document.querySelector("#qty-value").value = qty    
    qty--; 

}

// // LOOPING THROUGHT THE IMAGES
 for (let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
        modal.style.display="block"
        var modalImgSrc = this.childNodes[1].src
        document.getElementById("modal-img").src = modalImgSrc
     });
 }

 for (let i = 0; i < relatedImages.length; i++) {
    relatedImages[i].addEventListener("click", function(){
        var modalImgSrc = this.src
        document.getElementById("modal-img").src = modalImgSrc
    })
    
 }


 closeBtn.addEventListener("click", function(){
    closeModals() 
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModals() 
    }
  }

  function closeModals() {
    modal.style.display = "none";
    location.reload()
}

  
estimateBtn.addEventListener("click",function() {
    productMessage.style.display="block"
    location.reload()
 })
