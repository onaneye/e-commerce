// Select the cart table body and total span
const cartBody = document.querySelector('tbody');
const totalSpan = document.querySelector('#total');

// Set the initial cart total to 0
let cartTotal = 0;

// Define the function to add a product to the cart
function addToCart(product) {
   // Create a table row for the product
   const row = document.createElement('tr');
   row.innerHTML = `
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>
         <input type="number" min="1" max="100" value="1" data-product="${product.id}">
      </td>
      <td>$${product.price.toFixed(2)}</td>
      <td>
         <button class="remove" data-product="${product.id}">Remove</button>
      </td>
   `;
   
   // Add the row to the cart table body
   cartBody.appendChild(row);
   
   // Add the product price to the cart total
   cartTotal += product.price;
   totalSpan.innerText = cartTotal.toFixed(2);
   
   // Add event listener for quantity change
   const quantityInput = row.querySelector('input[type="number"]');
   quantityInput.addEventListener('change', updateCart);
   
   // Add event listener for remove button
   const removeButton = row.querySelector('.remove');
   removeButton.addEventListener('click', removeFromCart);
}

// Define the function to update the cart when the quantity changes
function updateCart(event) {
   const input = event.target;
   const quantity = parseInt(input.value);
   const product = input.dataset.product;
   
   // Update the subtotal for the product
   const row = input.parentElement.parentElement;
   const price = parseFloat(row.querySelector('td:nth-child(2)').innerText.slice(1));
   const subtotal = quantity * price;
   row.querySelector('td:nth-child(4)').innerText = `$${subtotal.toFixed(2)}`;
   
   // Update the cart total
   cartTotal += subtotal - (quantity * parseFloat(input.dataset.price));
   totalSpan.innerText = cartTotal.toFixed(2);
   
   // Update the quantity in the cart
   input.dataset.quantity = quantity;
}

// Define the function to remove a product from the cart
