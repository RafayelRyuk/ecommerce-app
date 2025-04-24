const cart = {};

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price, quantity: 1 };
  }
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const totalContainer = document.getElementById('total');

  cartItemsContainer.innerHTML = '';
  let total = 0;

  for (const [name, item] of Object.entries(cart)) {
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.textContent = `${name} (${item.quantity})`;
    cartItemsContainer.appendChild(div);
  }

  totalContainer.textContent = total;
}
