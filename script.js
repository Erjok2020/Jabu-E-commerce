// cart items
const cartItems = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  { name: "Product 3", price: 30 }
];

// Function to calculate total and update UI
function updateCartTotal() {
  const totalAmountElement = document.getElementById('totalAmount');
  let totalAmount = 0;
  cartItems.forEach(item => {
      totalAmount += item.price;
  });
  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

// Function to display cart items
function displayCartItems() {
  const cartItemsElement = document.querySelector('.cart-items');
  cartItemsElement.innerHTML = ''; // Clear existing items
  cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.name}: $${item.price.toFixed(2)}`;
      cartItemsElement.appendChild(itemElement);
  });
}

// Initialize cart
function initializeCart() {
  displayCartItems();
  updateCartTotal();
}

// Call the  initializeCart function when the page loads
window.onload = initializeCart;

 // Select all the social media links
    const socialMediaLinks = document.querySelectorAll('.list-inline-item a');

    // Add an event listener to each link
    socialMediaLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Prevent the link from being followed
            event.preventDefault();

            // Log a message to the console
            console.log('A social media link was clicked!');
        });
    });



    // Sample cart items (you can replace this with your own cart items)
const cartItems = [
    { name: "Bags", price: 80 },
    { name: "Bags", price: 80 },
    { name: "Bags", price: 80 }
];

// Function to calculate total and update UI
function updateCartTotal() {
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;
    cartItems.forEach(item => {
        totalAmount += item.subtotal;
    });
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

// Function to calculate subtotal for each item
function calculateSubtotal(item) {
    return item.price * item.quantity;
}

// Function to display cart items
function displayCartItems() {
    const cartItemsElement = document.querySelector('#cart-table tbody');
    cartItemsElement.innerHTML = ''; // Clear existing items
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const subtotal = calculateSubtotal(item);
        item.subtotal = subtotal; // Store subtotal in the item object
        row.innerHTML = `
            <td>
                <div class="product-info">
                    <img src="images/bag2.jpg" title="Bag Image">
                    <div>
                        <p>${item.name}</p>
                        <small>
                            <span>$</span>${item.price.toFixed(2)}
                        </small>
                        <br>
                        <a class="remove-btn" href="#">Remove</a>
                    </div>
                </div>
            </td>
            <td>
                <input type="number" value="${item.quantity}" aria-label="Quantity">
                <a class="edit-btn">Edit</a>
            </td>
            <td>
                <span>$</span>
                <span class="subtotal">${subtotal.toFixed(2)}</span>
            </td>
        `;
        cartItemsElement.appendChild(row);
    });
}

// Initialize cart
function initializeCart() {
    displayCartItems();
    updateCartTotal();
}

// Call initializeCart function when the page loads
window.onload = initializeCart;

<scrip>
  $(document).ready(function(){
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });
</script>


$(document).ready(function() {
    $('#checkout-form').submit(function(event) {
        event.preventDefault();

        // Get form values
        var fullName = $('#fullName').val();
        var email = $('#email').val();
        var address = $('#address').val();
        var phone = $('#phone').val();

        // Example: sending form data to server
        // $.post('checkout.php', { fullName: fullName, email: email, address: address, phone: phone }, function(response) {
        //     // Process server response
        //     console.log(response);
        // });

        // Example: redirecting to thank you page
        // window.location.href = 'thankyou.html';
    });
});


// js for the checkout 

document.addEventListener('DOMContentLoaded', function() {
  const checkoutForm = document.getElementById('checkout-form');

  checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Simulate order processing and payment verification
    setTimeout(function() {
      // Simulate order fulfillment
      setTimeout(function() {
        // Simulate order tracking
        alert('Your order has been successfully placed!\n\nOrder Details:\nFull Name: ' + fullName + '\nEmail: ' + email + '\nAddress: ' + address + '\nPhone: ' + phone);
      }, 2000);
    }, 2000);
  });
});



// js for the cart
$(document).ready(function(){
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });

    // Add to Cart functionality
    $(".add-to-cart").click(function() {
      var productName = $(this).closest("tr").find(".product-info p").text();
      var productPrice = parseFloat($(this).closest("tr").find(".product-price").text());
      var quantity = parseInt($(this).closest("tr").find(".quantity").val());
      var subtotal = productPrice * quantity;
      var cartItem = "<div class='cart-item'>" + productName + " - $" + productPrice.toFixed(2) + " x " + quantity + " = $" + subtotal.toFixed(2) + "</div>";
      
      $(".cart-items").append(cartItem);
      
      var currentTotal = parseFloat($("#totalAmount").text().replace("$", ""));
      var newTotal = currentTotal + subtotal;
      $("#totalAmount").text("$" + newTotal.toFixed(2));
    });

    // Checkout functionality
    $(".checkout-btn").click(function() {
      // Your checkout logic here
      alert("Checkout functionality is not implemented yet.");
    });

    // Get the Checkout button element
    const checkoutButton = document.querySelector('.checkout-btn');

    // Add click event listener to the Checkout button
    checkoutButton.addEventListener('click', function() {
      console.log('Checkout button clicked');
      // Redirect users to the checkout.html page
      window.location.href = 'checkout.html';
    });
});
  // End of the script.js file
