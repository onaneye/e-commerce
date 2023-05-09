// creating the modal database

// images data base

var	img	=["../images/buffets images/Picture3.png","../images/buffets images/Picture2.jpg","../images/buffets images/Picture4.jpg"]
var data = [
	{
		id: 1,		
		img2:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	["../images/buffets images/Picture3.jpg","../images/buffets images/Picture2.jpg","../images/buffets images/Picture3.jpg"]
		},
		description:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	"../images/buffets images/Picture2.jpg"
		},
		content: {
			price:	5,
			item:	6
		}

	},
	{
		id: 1,		
		img2:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	["../images/buffets images/Picture1.jpg",	"../images/buffets images/Picture2.jpg","../images/buffets images/Picture3.jpg"]
		},
		description:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	"../images/buffets images/Picture2.jpg"
		},
		content: {
			price:	5,
			item:	6
		}

	},
	{
		id: 1,		
		img2:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	["../images/buffets images/Picture1.jpg",	"../images/buffets images/Picture2.jpg","../images/buffets images/Picture3.jpg"]
		},
		description:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	"../images/buffets images/Picture2.jpg"
		},
		content: {
			price:	5,
			item:	6
		}

	},	
	
	{
		id: 1,		
		img2:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	["../images/buffets images/Picture1.jpg",	"../images/buffets images/Picture2.jpg","../images/buffets images/Picture3.png"]
		},
		description:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	"../images/buffets images/Picture2.jpg"
		},
		content: {
			price:	5,
			item:	6
		}

	},

	{
		id: 2,		
		img2:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	["../images/buffets images/Picture4.jpg",	"../images/buffets images/Picture5.jpg","../images/buffets images/Picture6.jpg"]
		},
		description:{
			material:"Stainless steel",
			color:	"Gold",
			size:	"6l",
			shape:	"Round",
			src:	"../images/buffets images/Picture2.jpg"
		},
		content: {
			price:	5,
			item:	6
		}

	},


]


const modalData = [
	{
		id: 1,
		picture: "",
		description: function Person(material, color, size, shape, price) {
			this.material = material;
			this.color = color;
			this.size = size;
			this.shape = shape;
			this.price = price;
		  }
	}
]

// creati the modal
var images = $("div.card")
var relatedImages = document.querySelectorAll("#related-img")
var modal = $("#myModal")
var closeBtn = $(".close")
var estimateBtn = $("#btn-estimate")
var estimateBtn = $("#btn-estimate")
var productMessage = $(".product-added")





var minVal = 1,	maxVal = 200; // Set Max and Min values
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
		if (value > 6) {
			value--;
		}
		$parentElm.find(".qtyValue").val(value);
	});
	

$(document).ready(function() {
    $(".card").click(function() {
		var modalImgSrc = this.childNodes[1].src
		document.getElementById("modal-img").src = modalImgSrc;

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

	$("#pro-info-card	.btn").click(function () {
			var category = $(this).attr("class")[0];   // get category of clicked image
			document.getElementById("modal-img").src = category;


			console.log(category[0])

			if ($(this).is(":visible")) {
				$(".related-img-container img").hide(); // hide all images
				$(".related-img-container img." + category).show(); // show images with matching category

				$(modal).css("display","block")
		
				  // if image is already showing
			} else {        
			$("#image-gallery img").show(); // show all images
			
			}
		


	})
});



 for (let i = 0; i < relatedImages.length; i++) {
    relatedImages[i].addEventListener("click",	function(){
        var modalImgSrc = this.src
        document.getElementById("modal-img").src = modalImgSrc
		

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
    location.reload()
}

  
estimateBtn.click(function() {
    $(productMessage).css("display","block")
    location.reload()
 })
