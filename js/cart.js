
function updateCartUI() {
   var cart = JSON.parse(localStorage.getItem('cart')) || [];
   var itemsHtml = '';
   var total = 0;
   cart.forEach(function(item) {
   //   itemsHtml += '<li data-id="' + item.id + '">' + item.name + ' - $' + item.price + ' x ' + item.quantity + '</li>';
   itemsHtml += `
   <div class="card rounded-3 mb-4" id=" ${item.id}">
     <div class="card-body p-4" >
     <div class="row d-flex justify-content-between align-items-center ">
        <div class="col-md-2 col-lg-2 col-xl-2">
         <img
           src="${item.id}"
           class="img-fluid rounded-3" alt="Cotton T-shirt">
       </div>
       <div class="col-md-3 col-lg-4 col-xl-6">
         <p class="lead fw-normal mb-2">${item.name}</p>
         <h6 class="mb-0  mt-0">$${item.price}.00</h6>
         <p><span class=" text-success">Size: </span>  ${item.size}  <span class="text-success">Color: </span>${item.color} </p>
       </div>
       <div class="col-md-3 col-lg-4 col-xl-2 d-flex">
       <h6 class="font-weight-bold p-2">Quantity: </h6>
       <div class="d-flex  qtyselector-cart text-center">
       <button class="btn btn-dark px-6   decreaseQty rounded-0 "
         onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
         <i class="fas fa-minus"></i>
       </button>
   
       <input id="form1" min="6" name="quantity" value="${item.quantity}" type="number"
         class="form-control form-control-sm text-align-center qtyValue rounded-0" />
   
       <button class="btn btn-dark  px-6  rounded-0"
         onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
         <i class="fas fa-plus"></i>
       </button>
       </div>   
     </div>  
   
       <div class="col-md-1 col-lg-3 col-xl-2 text-end">
         <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
       </div>
     </div>
   </div>
   </div>
   </div>
     
   `;
   
     total += item.price * item.quantity;
     console.log(parseInt(item.price));
     console.log(total)
   });
   $('.carts   .cart-body').html(itemsHtml);
   $('#total-text-price').text('$' + total.toFixed(2));
   $('.cart-value').text("$"+total)
   localStorage.setItem("total",  total)
   if (cart.length>1) {
    $('.cart-items').text(cart.length + " " +"items")

   }else{
    $('.cart-items').text(cart.length+ "  " +"item")

   }
 
      
}

function checkoutForm(){
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var itemsHtml = `
  <thead>
  <tr class="bg-dark  text-white">
    <th scope="col">Product</th>
    <th scope="col">Price</th>
    <th scope="col">Size</th>
    <th scope="col">Color</th>
    <th scope="col">Quatity</th>
    <th scope="col">Delete</th>
  </tr>
</thead>`

  var total = 0;
  cart.forEach(function(item) {
    itemsHtml+=`
  <tbody>
    <tr id=" ${item.id}">
      <td>${item.name}</td>
      <td class="text-success">$${item.price}.00</td>
      <td>${item.size} </td>
      <td>${item.color} </td>
      <td><input id="form1" min="6" name="quantity" value="${item.quantity}" type="number" class="text-center" style="width:30px;"></td>
      <td> <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a> </td>
    </tr>

    `
    $('.checkout-carts  .table-carts').html(itemsHtml);

  })

}
checkoutForm()
updateCartUI()



 function checkForCarts() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    console.log('hello')
    $('.summary').css("display","none")
    $(' .container .shop-h').text('No Added Cart')
    updateCartUI()

  }else{
    console.log('hlo')
    $('.summary').css("display","block")
    updateCartUI()
  }
  

 } 
 checkForCarts()

$('.carts .cart-body').on('click', '.card .fa-trash', function(event) {
  
  event.stopPropagation();
  var itemId = $(this).closest('.card').find('img').attr('src');  
  console.log('Item ID:', itemId);
  
   // Retrieve the cart data from LocalStorage
   var cart = JSON.parse(localStorage.getItem('cart')) || [];
   // Find the index of the item you want to remove
  const indexToRemove = cart.findIndex(function(item) {
    return  item.id===itemId
  } );
  if (indexToRemove!==-1) {
    cart.splice(indexToRemove, 1);
  }

  if (cart.length === 0) {
    console.log('hello')
    $('.summary').css("display","none")

  }else{
    console.log('hlo')
    $('.summary').css("display","block")

  }
  // Convert the updated array back to a string and store it in LocalStorage
	localStorage.setItem('cart', JSON.stringify(cart));
	updateCartUI()
});

$('.checkout-carts .table-carts').on('click', 'table .fa-trash', function(event) {
  alert("error")
  event.stopPropagation();
  var itemId = $(this).closest('.table').find('tr').attr('id');  
  console.log('Item ID:', itemId);
  
   // Retrieve the cart data from LocalStorage
   var cart = JSON.parse(localStorage.getItem('cart')) || [];
   // Find the index of the item you want to remove
  const indexToRemove = cart.findIndex(function(item) {
    return  item.id===itemId
  } );
  if (indexToRemove!==-1) {
    cart.splice(indexToRemove, 1);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
	updateCartUI()
        
})
  
// fuctio for check out

$('#checkout-btn').on("click", function(event) {
  event.stopPropagation()
  $('.z').css('display','block')
})

