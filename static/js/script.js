document.addEventListener('DOMContentLoaded', function () {
    // JavaScript for adding products to the cart
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product ' + productId + ' added to cart!');
    }

    // JavaScript for displaying cart items
    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        let cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(productId => {
                cartItemsContainer.innerHTML += `<div class="product">Product ${productId}</div>`;
            });
        }
    }

    // JavaScript for switching between main content and cart
    function showMainContent() {
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('cart').style.display = 'none';
    }

    function showCart() {
        displayCartItems();
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('cart').style.display = 'block';
    }

    // Add event listeners to the buttons
    document.getElementById('main-content').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            addToCart(Number(event.target.dataset.productId));
        }
    });

    document.getElementById('back-to-main').addEventListener('click', function () {
        showMainContent();
    });
});
