$('.add-to-cart').on('click', function() {
	var producti = $(this).closest('.cart').find('.products li.active');
	var productIdi = producti.data('id');
	var productNamei = producti.data('name');
	var productPricei = producti.data('price');
	var carti = JSON.parse(localStorage.getItem('cartx')) || [];
	var existingItemi = carti.find(function(item) {
	  return item.id === productIdi;
	});
	if (existingItemi) {
	  existingItemi.quantity++;
	} else {
	  var newItem = {
		id: productIdi,
		name: productNamei,
		price: productPricei,
		quantity: 1
	  };
	  carti.push(newItem);
	}
	localStorage.setItem('cartx', JSON.stringify(carti));
  });

  var carti = JSON.parse(localStorage.getItem('cartx')) || [];
var itemsHtml = '';
var total = 0;
carti.forEach(function(item) {
  itemsHtml += '<li data-id="' + item.id + '"	class="remove">' + item.name + ' - $' + item.price + ' x ' + item.quantity + '</li>';
  total += item.price * item.quantity;
});
$('.cartx .items').html(itemsHtml);
$('.cartx .total').text('Total: $' + total.toFixed(2));


  
  $('.cartx .items').on('click', 'li .remove', function() {
	var itemId = $(this).closest('li').data('id');
	var carti = JSON.parse(localStorage.getItem('cartx')) || [];
	carti = carti.filter(function(item) {
	  return item.id !== itemId;
	});
	localStorage.setItem('cartx', JSON.stringify(carti));
	updateCartUI();
  });
  