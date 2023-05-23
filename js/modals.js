// creating the modal database

// images data base


const modalData = [
	{
		description: function Person(material, color, size, shape, price) {
			this.material = material;
			this.color = color;
			this.size = size;
			this.shape = shape;
			this.price = price;
		  }
	}
]

// vars
var images = $("div.card")
var relatedImages = document.querySelectorAll("#related-img")
var modal = $("#myModal")
var closeBtn = $(".close")
var estimateBtn = $("#btn-estimate")
var estimateBtn = $("#btn-estimate")
var productMessage = $(".product-added")
var infomationPrice = document.querySelector("#price")
var infomationMaterial = document.querySelector("#material")
var infomationColor = document.querySelector("#color")
var infomationSize = document.querySelector("#size")
var infomationShape = document.querySelector("#shape")
var infomationName = document.querySelector(".information-name")






var minVal = 6,	maxVal = 200; // Set Max and Min values
// Increase product quantity on cart page
$(".increaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value < maxVal) {
			value++;
		}
		$parentElm.find(".qtyValue").val(value);
});
// Decrease product quantity on cart page
$(".decreaseQty").on('click', function(){
		var $parentElm = $(this).parents(".qtySelector");
		$(this).addClass("clicked");
		setTimeout(function(){
			$(".clicked").removeClass("clicked");
		},100);
		var value = $parentElm.find(".qtyValue").val();
		if (value > minVal) {
			value--;
		}
		$parentElm.find(".qtyValue").val(value);
	});
	

$(document).ready(function() {
	// whe	each	picture	is	clicked
    $(".card").click(function() {
		var	productMaterial	=	$(this).children().data('material')
		var	productPrice	=	$(this).children().data('price')
		var	productShape	=	$(this).children().data('shape')
		var	productColor	=	$(this).children().data('color')
		var	productSize		=	$(this).children().data('size')
		var	productName		=	$(this).children().data('description')
		$(infomationPrice).text(productPrice)
		$(infomationShape).text(productShape)
		$(infomationColor).text(productColor)
		$(infomationSize).text(productSize)
		$(infomationMaterial).text(productMaterial)
		$(infomationName).text(productName)
		console.log(infomationPrice)
 
		var modalImgSrc = this.childNodes[1].src
		document.getElementById("modal-img").src = modalImgSrc;

		var filterValue = $(this).children().data('value');

		$(this).closest('body').find('.description1 p').each(function () {
		   if ($(this).data('value')	===	filterValue) {
		   var	text=	$(this).text()
		   $('#description-text').text(text)
			   console.log(text)
		   }else{
		   }
	   }); 

	

	var category = $(this).children().attr("class");   // get category of clicked image
	if ($(this).is(":visible")) {
    	$(".related-img-container img").hide(); // hide all images
    	$(".related-img-container img." + category).show(); // show images with matching category
		$(modal).css("display","block")

          // if image is already showing
	} else {        
    $("#image-gallery img").show(); // show all images
    
	}
	});

	
	// when inquire button is clicked, this is the function that loads
	$("#pro-info-card	.btn").click(function () {
			var category = $(this).attr("class")[0];   // get category of clicked image
			console.log(category)
			var filterValue = $(this).data('value'); 
			var	filterImages	=	$(this).closest('body').find('.card	img').filter('[data-filter="'	+	filterValue	+	'"]');
			// when inquire button is clicked, it	loads	filterTEXT	in	description
			 $(this).closest('body').find('.description1 p').each(function () {
				if ($(this).data('value')	===	filterValue) {
				var	text=	$(this).text()
				$('#description-text').text(text)
					console.log(text)
				}
			});

			// when inquire button is clicked, it	loads	filter	modal	images	in	description
			filterImages.each(function () {
				var	imgSrc	=$(this).attr('src')
				console.log(imgSrc)
				document.getElementById("modal-img").src = imgSrc;
			})
			// when inquire button is clicked, it	loads	filter	related	images	in	description

			if ($(this).is(":visible")) {
				$(".related-img-container img").hide(); // hide all images
				$(".related-img-container img." + category).show(); // show images with matching category

				$(modal).css("display",	"block")
		
				  // if image is already showing
			} else {        
			$("#image-gallery img").show(); // show all images
			
			}
		


	})
});


 for (let i = 0; i < relatedImages.length; i++) {
    relatedImages[i].addEventListener("click",	function(){
        var modalImgSrc = this.src
        document.getElementById("modal-img").src = modalImgSrc;	
		var	productMaterial	=	$(this).attr('data-material')
		var	productPrice	=	$(this).attr('data-price')
		var	productShape	=	$(this).attr('data-shape')
		var	productColor	=	$(this).attr('data-color')
		var	productSize		=	$(this).attr('data-size')
		var	productLength		=$(this).attr('data-legh')
		$(infomationPrice).text(productPrice)
		$(infomationShape).text(productShape)
		$(infomationColor).text(productColor)
		$(infomationSize).text(productSize)
		$(infomationMaterial).text(productMaterial)
		console.log(infomationPrice)
	})
 }


 closeBtn.click(function(){
    closeModals() 
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModals() 
    }
  }

  function closeModals() {
    $(modal).css("display","none")
}
  
estimateBtn.click(function() {
 })

// Add	to	cart	funtionality

$('#btn-estimate').click(function() {
	alert("your	product	has	been added to cart")
	location.reload()
	var	productquaty	=	$(this).closest('body').find('.qtySelector .qtyValue').val()
	var	productQuantityNum =parseInt(productquaty)
	console.log(infomationSize.innerText)
	var	productName	=	infomationName
	var	productPrice	=	infomationPrice
	var	cartTotalPrice	=	document.getElementsByClassName('cart-value')
	var	productId	=	document.getElementById("modal-img").src;
	var	cartImgSrc	=	document.getElementById("modal-img").src;	
	var cart = JSON.parse(localStorage.getItem('cart')) || [];
	var existingItem = cart.find(function(item) {
		  return item.id === productId;
		});
		if (existingItem) {
		  existingItem.quantity*=2;
		  console.log(existingItem.quantity)
		} else {
		  var newItem = {
			id: productId,
			name: productName.textContent,
			price: productPrice.innerText,
			size:infomationSize.innerText,
			imgSrc: cartImgSrc,
			color:	infomationColor.textContent,
			quantity: productQuantityNum,
			cartTotal: cartTotalPrice
		  };
		  cart.push(newItem);
		}
		localStorage.setItem('cart', JSON.stringify(cart));
  
	console.log(item.id)
})

